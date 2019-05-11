

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import MenuButton from '../components/MenuButton.js'

type Props = {};
export default class LinksScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.LinksScreen}>
        <MenuButton navigation={this.props.navigation}/>
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
