import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import Bottom from '../components/Bottom';
import Headers from "../components/Headers";


class MainScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Headers />
      </View>
    )
  }
}

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor:'black',
    borderWidth:2,
  }
})