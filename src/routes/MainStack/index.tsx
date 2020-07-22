import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeContext } from 'styled-components';

import Packages from '../../pages/Packages';
import Reviews from '../../pages/Reviews';

const MainStack = createStackNavigator();

const MainStackRoutes: React.FC = () => {
  const { colors, text } = useContext(ThemeContext);

  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Packages"
        component={Packages}
        options={{
          headerShown: false,
        }}
      />
      <MainStack.Screen
        name="Reviews"
        component={Reviews}
        options={{
          headerStyle: {
            backgroundColor: colors.primaryDark,
          },
          headerTintColor: text.primary,
        }}
      />
    </MainStack.Navigator>
  );
};

export default MainStackRoutes;
