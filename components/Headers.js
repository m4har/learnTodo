import React, { Component } from 'react';
import { View, Text, StyleSheet,TextInput,Button } from 'react-native';


export default class Headers extends Component {

state = {
  isiText:'',
  isiButton:'',
}
handleIsi =(text)=> {
  this.setState({isiText:text})
}
changeText = () =>{
  isiBaru = this.state.isiText
  this.setState({
    isiButton:isiBaru,
  })
  this.TextInput.clear()
}


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.Text} title="">{this.state.isiButton}</Text>
        </View>
        <View style={styles.bottom}>
              <TextInput
                style={styles.inputText}
                ref={input => {this.TextInput = input}}
                clearButtonMode="always"
                placeholder="Type Here..."
                onChangeText={this.handleIsi} />
              <Button
                style={styles.SendButton}
                onPress={(this.changeText)}
                title="Send"
                color="#841584" />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  header:{
    borderColor: 'black',
    borderWidth: 2,
    flex:8,
  },
  bottom:{
    borderColor: 'black',
    borderWidth: 2,
    flexDirection:'row',
    flex:1,
  },
  inputText:{
    borderColor: 'black',
    borderWidth: 2,
    flex:1,
  },
  SendButton:{
    flex:1,
  },
  Text:{
    color:'black',
    fontSize:20,
    textAlign:'center',
    paddingTop:150,
    
  }
})