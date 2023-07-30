import { TextInput, Text, View, ImageBackground, Button, KeyboardAvoidingView, Platform } from 'react-native';
import AppStyles from '../styles/AppStyles';
import React from 'react';
import InlineTextButton from '../components/InlineTextButton';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth,currentUser} from "../firebase";



export default function LoginScreen({ navigation }) {
  const localImage = require("../assets/nunny.jpg");

  if (auth.currentUser) {
    navigation.navigate("ToDo");
  }
  let [errorMessage,setErrorMessage] =React.useState("");
  let [email, setEmail] = React.useState("");
  let [password, setPassword] = React.useState("");

  let login = () => {
    if (email !== "" && password !== "") {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          navigation.navigate("ToDo", {user : userCredential.user});
        })
        .catch((error) => {
          setErrorMessage(error.message)
        });

    } else{
      setErrorMessage("Please enter an email and password");
    }
  }
  return (
    <ImageBackground style={AppStyles.container} source={localImage}>
      <KeyboardAvoidingView style={AppStyles.backgroundCover}
        behavior={Platform.OS === "android" ? "padding" : null}
        keyboardVerticalOffset={20}
      >
        <Text style={[AppStyles.lightText, AppStyles.header]} >Login</Text>
        <Text style={AppStyles.errorText}>{errorMessage}</Text>
        <TextInput
          style={[AppStyles.textInput, AppStyles.lightTextInput, AppStyles.head]}
          placeholder='Email'
          placeholderTextColor="#DEDEDE"
          value={email}
          onChangeText={setEmail}

        ></TextInput>
        <TextInput
          style={[AppStyles.textInput, AppStyles.lightTextInput, AppStyles.head]}
          placeholder='Password'
          placeholderTextColor="#DEDEDE"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        ></TextInput>

        <View style={[AppStyles.rowContainer, AppStyles.topMargin]}>
          <Text style={AppStyles.lightText}>  Don't have an account? </Text>
          <InlineTextButton text="Sign Up" onPress={() => navigation.navigate("SignUp")} />


        </View>

        <View style={[AppStyles.rowContainer, AppStyles.bottomMargin]}>
          <Text style={AppStyles.lightText}>  Forgotten your password? </Text>
          <InlineTextButton text="Reset" onPress={() => navigation.navigate("NewPassword")} />


        </View>
        <Button title="Login" onPress={login} color="#00BFB2" ></Button>


      </KeyboardAvoidingView>


    </ImageBackground>
  );
}



