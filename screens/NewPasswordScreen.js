import { TextInput, Text, View, ImageBackground, Button, KeyboardAvoidingView, Platform } from 'react-native';
import AppStyles from '../styles/AppStyles';
import React from 'react';
import InlineTextButton from '../components/InlineTextButton';
import {auth} from "../firebase";
import { sendPasswordResetEmail } from 'firebase/auth';


export default function NewPasswordScreen({navigation }) {
  const localImage = require("../assets/nunny.jpg");
  
  let [email, setEmail] = React.useState("");
  let [errorMessage, setErrorMessage] = React.useState("");
  let resetPassword = () =>{
    sendPasswordResetEmail(auth, email)
  .then(() => {
    navigation.popToTop();
  })
  .catch((error) => {
    setErrorMessage(error.message)
  });
  }
  return (
    <ImageBackground style={AppStyles.imageContainer} source={localImage}>
      <KeyboardAvoidingView style={AppStyles.backgroundCover} 
      behavior={Platform.OS === "android" ? "padding" : null}
      keyboardVerticalOffset={20}
      >
        <Text style={[AppStyles.lightText, AppStyles.header]} >Reset Password</Text>
        <Text style={AppStyles.errorText}>{errorMessage}</Text>
        <TextInput
          style={[AppStyles.textInput, AppStyles.lightTextInput, AppStyles.head]}
          placeholder='Email'
          placeholderTextColor="#DEDEDE"
          value={email}
          onChangeText={setEmail}

        ></TextInput>

        <View style={[AppStyles.rowContainer,AppStyles.topMargin]}>
          <Text style={AppStyles.lightText}>  Don't have an account? </Text>
          <InlineTextButton text="Sign Up" onPress={() => navigation.navigate("SignUp")} />


        </View>

        <Button title="Reset Password" onPress={resetPassword} color="#00BFB2" ></Button>

        
      </KeyboardAvoidingView>


    </ImageBackground>
  );
}



