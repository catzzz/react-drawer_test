

import React, {Component} from 'react';
import {Platform, StyleSheet, Dimensions} from 'react-native';
import {createDrawerNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from '../screens/HomeScreen.js';

const WIDTH = Dimensions.get('window').width;


const DrawerNavigator = createDrawerNavigator({
  Home:{
    screen: HomeScreen
  }


});

export default createAppContainer(DrawerNavigator);


