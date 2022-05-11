import { NavigationContainer as ReactNavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { HomePage } from './HomePage';

const Stack = createNativeStackNavigator();

export const NavigationContainer = () => {
  return (
    <ReactNavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </ReactNavigationContainer>
  );
};
