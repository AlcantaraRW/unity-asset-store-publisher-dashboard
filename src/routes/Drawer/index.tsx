import React, { useContext } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ThemeContext } from 'styled-components';
import MainStackRoutes from '../MainStack';
import Sidebar from '../../components/Sidebar';
import Sales from '../../pages/Sales';

const Drawer = createDrawerNavigator();

const DrawerRoutes: React.FC = () => {
  const { colors, text } = useContext(ThemeContext);

  return (
    <Drawer.Navigator
      drawerContent={props => <Sidebar {...props} />}
      drawerStyle={{
        backgroundColor: colors.primaryLight,
      }}
      drawerContentOptions={{
        labelStyle: {
          fontSize: 16,
          marginHorizontal: -20,
        },
        activeBackgroundColor: colors.primary,
        activeTintColor: text.primary,
        inactiveTintColor: text.primary,
      }}
    >
      <Drawer.Screen
        name="Sales"
        component={Sales}
        options={{
          drawerIcon: () => <Icon name="coin" size={25} color={text.primary} />,
        }}
      />

      <Drawer.Screen
        name="Packages"
        component={MainStackRoutes}
        options={{
          title: 'Published packages',
          drawerIcon: () => (
            <Icon name="cube-outline" size={25} color={text.primary} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerRoutes;
