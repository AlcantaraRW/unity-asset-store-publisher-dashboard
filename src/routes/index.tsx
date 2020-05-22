import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Packages from '../pages/Packages';
import Reviews from '../pages/Reviews';
import Sales from '../pages/Sales';
import Sidebar from '../components/Sidebar';
import Colors from '../utils/colors';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const StackRoutes: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen name="Packages" component={Packages} />
    <Stack.Screen name="Reviews" component={Reviews} />
  </Stack.Navigator>
);

const DefaultRoutes: React.FC = () => (
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
      component={StackRoutes}
      options={{
        title: 'Published packages',
        drawerIcon: () => (
          <Icon name="cube-outline" size={25} color={Colors.VERY_DARK_GRAY} />
        ),
      }}
    />
  </Drawer.Navigator>
);

export default DefaultRoutes;
