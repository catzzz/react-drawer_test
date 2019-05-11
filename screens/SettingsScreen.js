

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import MenuButton from '../components/MenuButton.js'

type Props = {};
export default class SettingsScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.SettingsScreen}>
        <MenuButton navigation={this.props.navigation}/>
        <Text>SettingsScreen!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  SettingsScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
