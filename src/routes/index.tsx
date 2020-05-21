import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Packages from '../pages/Packages';
import Reviews from '../pages/Reviews';

const Default = createStackNavigator();

const DefaultRoutes: React.FC = () => (
  <Default.Navigator initialRouteName="Packages">
    <Default.Screen name="Packages" component={Packages} />
    <Default.Screen name="Reviews" component={Reviews} />
  </Default.Navigator>
);

export default DefaultRoutes;
