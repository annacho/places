/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button
} from 'react-native';

class PlaceInput extends Component {
  state = {
    placeName: "",
    places: []
  };

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  }

  placeAddedHandler = () => {
    if (this.state.placeName.trim() === ""){
      return;
    }

    this.props.onPlaceAdded(this.state.placeName);
  };

  render() {
    return (
      <View style={styles.inputContainer}
        <TextInput
          placeholder="An awesome place"
          value={this.state.placeName}
          onChangeText={this.placeNameChangedHandler}
          style={styles.placeInput}
          />
          <Button
            title="Add"
            style={styles.placeButton}
            onPress={this.placeSubmitHandler}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    width: "100%",
    marginBottom: 5,
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center"
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  },
});
