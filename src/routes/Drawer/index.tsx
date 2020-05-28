import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MainStackRoutes from '../MainStack';
import Colors from '../../utils/colors';
import Sidebar from '../../components/Sidebar';
import Sales from '../../pages/Sales';

const Drawer = createDrawerNavigator();

const DrawerRoutes: React.FC = () => (
  <Drawer.Navigator
    drawerContent={props => <Sidebar {...props} />}
    drawerContentOptions={{
      labelStyle: {
        fontSize: 16,
        marginHorizontal: -20,
      },
      activeBackgroundColor: Colors.LIGHT_GRAY,
      activeTintColor: Colors.VERY_DARK_GRAY,
      inactiveTintColor: Colors.VERY_DARK_GRAY,
    }}
  >
    <Drawer.Screen
      name="Sales"
      component={Sales}
      options={{
        drawerIcon: () => (
          <Icon name="coin" size={25} color={Colors.VERY_DARK_GRAY} />
        ),
      }}
    />

    <Drawer.Screen
      name="Packages"
      component={MainStackRoutes}
      options={{
        title: 'Published packages',
        drawerIcon: () => (
          <Icon name="cube-outline" size={25} color={Colors.VERY_DARK_GRAY} />
        ),
      }}
    />
  </Drawer.Navigator>
);

export default DrawerRoutes;
