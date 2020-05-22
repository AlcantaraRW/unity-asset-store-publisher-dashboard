import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Packages from '../pages/Packages';
import Reviews from '../pages/Reviews';
import Sales from '../pages/Sales';

const Default = createStackNavigator();

const DefaultRoutes: React.FC = () => (
  <Default.Navigator initialRouteName="Packages">
    {/* <Default.Screen name="Packages" component={Packages} />
    <Default.Screen name="Reviews" component={Reviews} /> */}
    <Default.Screen name="Sales" component={Sales} />
  </Default.Navigator>
);

export default DefaultRoutes;
