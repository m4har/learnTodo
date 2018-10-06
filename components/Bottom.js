import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';


export default class bottom extends Component {
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.InputBox}>
        <TextInput
        placeholder="Type Here..."
        />
      </View>
      <View>
        <Button
        style={styles.SendButton}
        onPress={()=>alert("Show")}
        title="Send"
        color="#841584"/>
      </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  InputBox:{
    flex:2,
  },
  SendButton:{
    
  },
  container:{
    flex:1,
    flexDirection:'row',
    backgroundColor:'white',
  }
})