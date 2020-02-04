import React from 'react';
import { Root } from "native-base";
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import BottomTabScreen1 from './screens/BottomTabScreen1'
import BottomTabScreen2 from './screens/BottomTabScreen2'
import BottomTabScreen3 from './screens/BottomTabScreen3'
import HomeScreen from './screens/HomeScreen'
import DrawerScreen1 from './screens/DrawerScreen1'
import DrawerScreen2 from './screens/DrawerScreen2'
import DrawerScreen3 from './screens/DrawerScreen3'
import SideBar from "./sidebar";

const Tabs = createMaterialBottomTabNavigator({
  BottomTabScreen1: BottomTabScreen1,
  BottomTabScreen2: BottomTabScreen2,
}, {
  tabBarOptions: {
    activeTintColor: '#000000',
    inactiveTintColor: 'gray',
    indicatorStyle: {
      backgroundColor: '#000000',
    },
  },
  barStyle: { backgroundColor: '#BE81F7' },
});

const Drawer = createDrawerNavigator(
  {
    HomeScreen: { screen: HomeScreen },
    DrawerScreen0 : {screen: Tabs}, //with the three tabs
    DrawerScreen1: { screen: DrawerScreen1 },
    DrawerScreen2: { screen: DrawerScreen2 },
    DrawerScreen3: { screen: DrawerScreen3 },
  },
  {
    initialRouteName: "HomeScreen",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} /> //design of the sidebar, name of tabs
  }
);


const AppNavigator = createStackNavigator(
  {
    Drawer: { screen: Drawer },
  },
  {
    initialRouteName: "Drawer",
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default () =>
  <Root>
    <AppContainer />
  </Root>;
