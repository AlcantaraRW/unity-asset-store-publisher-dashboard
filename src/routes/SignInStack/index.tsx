import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../../pages/SignIn';

const SignInStack = createStackNavigator();

const SignInStackRoutes: React.FC = () => (
  <SignInStack.Navigator headerMode="none">
    <SignInStack.Screen name="SignIn" component={SignIn} />
  </SignInStack.Navigator>
);

export default SignInStackRoutes;
