

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

type Props = {};
export default class MenuButton extends Component<Props> {
	render(){
		return (
			<Icon
				name ="md-menu"
				color ="#000000"
				size ={32}
				style = {styles.menuIcon}
				onPress ={()=>this.props.navigation.toggleDrawer()}

			/>

		)
	}
}

const styles = StyleSheet.create({
  	menuIcon:{
		zIndex:9,
		position :'absolute',
		top:40,
		left:20,
	}
});
