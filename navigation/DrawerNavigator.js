

import React, {Component} from 'react';
import {Platform, StyleSheet, Dimensions} from 'react-native';
import {createDrawerNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from '../screens/HomeScreen.js';
import LinksScreen from '../screens/LinksScreen.js';
import SettingsScreen from '../screens/SettingsScreen.js';

const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
  drawerWidth : WIDTH*0.83,

}

const DrawerNavigator = createDrawerNavigator(
  
  {
    Home:{
      screen: HomeScreen
    },

    Links:{
      screen: LinksScreen
    },

    Settings:{
      screen: SettingsScreen
    }

  },
  DrawerConfig


);

export default createAppContainer(DrawerNavigator);


