import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Packages from '../../pages/Packages';
import Reviews from '../../pages/Reviews';

const MainStack = createStackNavigator();

const MainStackRoutes: React.FC = () => (
  <MainStack.Navigator>
    <MainStack.Screen name="Packages" component={Packages} />
    <MainStack.Screen name="Reviews" component={Reviews} />
  </MainStack.Navigator>
);

export default MainStackRoutes;
