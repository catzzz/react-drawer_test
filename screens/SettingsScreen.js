

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

type Props = {};
export default class SettingsScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.SettingsScreen}>
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
