import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Main from '../pages/Main';
import Packages from '../pages/Packages';

const Default = createStackNavigator();

const DefaultRoutes: React.FC = () => (
  <Default.Navigator>
    <Default.Screen name="Packages" component={Packages} />
  </Default.Navigator>
);

export default DefaultRoutes;
