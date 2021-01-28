import React, { Component } from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';

export default class Settings extends Component {
render(){
return(
<View style = {styles.set}>
<Text style = {styles.set1}>Settings</Text>

</View>
)
}
}

const styles = StyleSheet.create({
set:{
borderWidth:2,
width:500,
height:40,
marginLeft:700,
marginTop:30,
borderRadius:10,
borderColor:'pink'
},

set1:{
fontSize:20,
fontWeight:'bold',
justifyContent:'center',
alignItems:'center',
marginLeft:200
}
})