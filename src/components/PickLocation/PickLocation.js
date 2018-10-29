import React, { Component } from 'react';
import { View, Image, Button, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

class PickLocation extends Component {
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.placeholder}>
          <Text>Map</Text>
        </View>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
        >
        <View style={styles.button}>
          <Button title="Locate Me" onPress={() => alert('Pick Location!')}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center"
  },
  placeholder: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#eee",
    width: "80%",
    height: 150
  },
  button: {
    margin: 8
  }
})

export default PickLocation;
