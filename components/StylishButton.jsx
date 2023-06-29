import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
export const StylishButton = () => {
  return (
    <View style={style.main}>
      <TouchableHighlight>
        <Text style={style.text}> Red button</Text>
      </TouchableHighlight>

      <TouchableHighlight>
        <Text style={[style.text, {backgroundColor: 'green'}]}>
          Green Button
        </Text>
      </TouchableHighlight>

      <TouchableHighlight>
        <Text style={[style.text, {backgroundColor: 'blue'}]}>Blue Button</Text>
      </TouchableHighlight>
    </View>
  );
};
const style = StyleSheet.create({
  text: {
    height: 80,
    textAlign: 'center',
    width: 200,
    textAlignVertical: 'center',
    fontSize: 30,
    backgroundColor: 'red',
    margin: 10,
    borderRadius: 10,
  },
  main: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
});
