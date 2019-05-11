/*
import Rect from 'react';
import {
	Platform,
	Dimensions,
	StyleSheet,
} from 'react-native'

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


export default class MenuDrawer extends React.Component{
	render(){
		return(
			<View style ={styles.container}>
				<Text>MenuDrawer</Text>
			</View>


		)

	}


}

const styles = StyleSheet.create({
	container : {
		flex:1
		background:'black'
	}
})

*/





import React, {Component} from 'react';
import {Platform, StyleSheet, Dimensions,View,Text} from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

type Props = {};
export default class MenuDrawer extends Component<Props> {
  render() {
    return (
      <View style={styles.MenuDrawer}>
        <Text>MenuDrawer!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MenuDrawer: {
    flex: 1,
    backgroundColor: 'red',
  },
});
