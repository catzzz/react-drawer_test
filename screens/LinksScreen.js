

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

type Props = {};
export default class LinksScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.LinksScreen}>
        <Text>LinksScreen!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  LinksScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
