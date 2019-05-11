

import React, {Component} from 'react';
import {Platform, StyleSheet, Dimensions,View,Text,TouchableOpacity} from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

type Props = {};
export default class MenuDrawer extends Component<Props> {

	navLink(nav, text){
		return (
			<TouchableOpacity style = {{height:50}} onPress = {() => this.props.navigation.navigate(nav)}>
				<Text style= {styles.link}>{text} </Text>
			</TouchableOpacity>

		)
	}

  	render() {
    	return (
      		<View style={styles.MenuDrawer}>
        		<View style ={styles.topLinks}>
        			<Text style ={{paddingTop:40, color:'white'}}>MenuDrawer!</Text>
        		</View>
        		<View style ={styles.bottomlinks}>
        			{this.navLink('Home','Home')}
        			{this.navLink('Links','Links')}
        			{this.navLink('Settings','Settings')}
        		</View>

      			
      		</View>
    	);
  	}
}

const styles = StyleSheet.create({
	MenuDrawer: {
    	flex: 1,
    	backgroundColor: 'gray',
  	},
  	topLinks:{
  		height:160,
  		backgroundColor:'black',
  	},
  	bottomlinks:{
  		flex:1,
  		backgroundColor:'white',
  		paddingTop:10,
  		paddingBottom :450,

  	},

  	link: {
  		flex:1,
  		fontSize:20,
  		padding: 6,
  		paddingLeft:14,
  		margin: 5,
  		textAlign: 'left',

  	}

});

