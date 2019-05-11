

import React, {Component} from 'react';
import {Platform, StyleSheet, Dimensions} from 'react-native';
import {createDrawerNavigator, createAppContainer} from 'react-navigation';
import LinksScreen from '../screens/LinksScreen.js';

const WIDTH = Dimensions.get('window').width;


const DrawerNavigator = createDrawerNavigator({
  Home:{
    screen: LinksScreen
  }


});

export default createAppContainer(DrawerNavigator);


