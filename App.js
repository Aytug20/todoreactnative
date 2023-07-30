import LoginScreen from './screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from './screens/SignUpScreen';
import ToDo from './screens/ToDo';
import NewPasswordScreen from './screens/NewPasswordScreen';


const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="NewPassword"
          component={NewPasswordScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ToDo"
          component={ToDo}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>

    </NavigationContainer>


  );
}



