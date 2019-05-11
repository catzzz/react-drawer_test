

import React, {Component} from 'react';
import {Platform, StyleSheet, Dimensions,View,Text,TouchableOpacity,Image} from 'react-native';

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
        		  <View style ={styles.profile}>

                <View style = {styles.imgView}>
                  <Image style={styles.img} source  = {require('../assets/cat.jpeg')}/>
                  <View style = {styles.profileText}>
                    <Text style = {styles.name}>Hello world</Text>
                  </View>
                </View>
              </View>
        		</View>
        		<View style ={styles.bottomlinks}>
        			{this.navLink('Home','Home')}
        			{this.navLink('Links','Links')}
        			{this.navLink('Settings','Settings')}
        		</View>
            <View style = {styles.footer}>
              <Text style = {styles.description}>menu tutorial</Text>
              <Text style = {styles.version}>V 1.0</Text>
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
    profile:{
      flex:1,
      flexDirection:'row',
      alignItems:'center',
      padding:25,
      borderBottomWidth:1,
      borderBottomColor:'#777777',
    },
    profileText:{
      flex:1,
      flexDirection:'column',
      justifyContent:'center',
    },
    name:{
      fontSize:20,
      paddingBottom: 5,
      color:'white',
      textAlign:'left',

    },

    imgView:{
      flex:1,
      paddingLeft:20,
      paddingRight:20,
    },

    img:{
      height: 70,
      width: 70,
      borderRadius: 50,
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

  	},
    footer:{
      flex:1,
      flexDirection:'row',
      alignItems:'center',
      backgroundColor:'white',
      borderTopWidth:1,
      borderTopColor:'lightgray',

    },
    description:{
      flex:1,
      marginLeft:20,
      fontSize:16,
    },
    version:{
      flex:1,
      textAlign:'right',
      marginRight:20,
    }


});

