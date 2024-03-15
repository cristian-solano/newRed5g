import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Login from './Components/Login';
import Home from './Components/Home';
import { createStackNavigator } from "@react-navigation/stack";
import Prestamos from './Components/Prestamos';
export default function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const Stack = createStackNavigator();
  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="login"
          component={Login}
      />
      <Stack.Screen
          name="Home"
          component={Home}
      />
      <Stack.Screen
          name="Prestamos"
          component={Prestamos}
      />
      </Stack.Navigator>      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    
  }
});
