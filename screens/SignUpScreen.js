import { TextInput, Text, View, ImageBackground, Button, KeyboardAvoidingView, Platform } from 'react-native';
import AppStyles from '../styles/AppStyles';
import React from 'react';
import InlineTextButton from '../components/InlineTextButton';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { auth } from "../firebase";


export default function SignUpScreen({ navigation }) {
  const localImage = require("../assets/nunny.jpg");
  let [email, setEmail] = React.useState("");
  let [password, setPassword] = React.useState("");
  let [confirmPassword, setConfirmPassword] = React.useState("");
  let [validationMessage, setValidationMessage] = React.useState("");
  let validateAndSet = (value, valueToCompare, setValue) => {
    if (value !== valueToCompare) {
      setValidationMessage("Passwords do not match.");
    } else {
      setValidationMessage("");
    }
    setValue(value);
  }

  let signUp = () => {
    if (password === confirmPassword) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          sendEmailVerification(auth.currentUser)
          navigation.navigate("ToDo", { user: userCredential });

        })
        .catch((error) => {
          setValidationMessage(error.message);
        });
    }
  }
  return (
    <ImageBackground style={AppStyles.container} source={localImage}>
      <KeyboardAvoidingView style={AppStyles.backgroundCover}
        behavior={Platform.OS === "android" ? "padding" : null}
        keyboardVerticalOffset={20}
      >

        <Text style={[AppStyles.lightText, AppStyles.header]} >Sign Up</Text>
        <Text style={[AppStyles.errorText]}>{validationMessage}</Text>
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
          onChangeText={(value) => validateAndSet(value, confirmPassword, setPassword)}
        ></TextInput>

        <TextInput
          style={[AppStyles.textInput, AppStyles.lightTextInput, AppStyles.head]}
          placeholder='Confirm Password'
          placeholderTextColor="#DEDEDE"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={(value) => validateAndSet(value, password, setConfirmPassword)}
        ></TextInput>

        <View style={[AppStyles.rowContainer, AppStyles.topMargin]}>
          <Text style={AppStyles.lightText}>  Already have an account? </Text>
          <InlineTextButton text="Login" onPress={() => navigation.popToTop()} />


        </View>
        <Button title="Sign Up" onPress={signUp} color="#00BFB2" ></Button>


      </KeyboardAvoidingView>


    </ImageBackground>
  );
}



