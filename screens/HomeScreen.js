
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import MenuButton from '../components/MenuButton.js'


type Props = {};
export default class HomeScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.HomeScreen}>
        <MenuButton navigation={this.props.navigation}/>
        <Text>HomeScreen!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  HomeScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
