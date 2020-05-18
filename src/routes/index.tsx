import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Main from '../pages/Main';

const Default = createStackNavigator();

const DefaultRoutes: React.FC = () => (
  <Default.Navigator>
    <Default.Screen name="Main" component={Main} />
  </Default.Navigator>
);

export default DefaultRoutes;
