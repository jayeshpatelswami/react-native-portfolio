import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export const Flexb_box = () => {
  return (
    <View style={style.main}>
      <Text style={style.text}> Main Text </Text>
      <View style={style.box}>
        <Text style={style.text}> 1st View Text </Text>
        <View style={style.innerbox}>
          <Text style={style.text}> 1st inner Text </Text>
        </View>
        <View style={style.innerbox}>
          <Text style={style.text}> 2nd inner Text </Text>
        </View>
        <View style={style.innerbox}>
          <Text style={style.text}> 3rd inner Text </Text>
        </View>
      </View>
      <View style={style.box}>
        <Text style={style.text}> 2nd View Text </Text>
      </View>
      <View style={style.box}>
        <Text style={style.text}> 3rd View Text </Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  main: {
    backgroundColor: 'black',
    flex: 1,
  },
  text: {
    fontSize: 20,
    color: 'red',
  },
  box: {
    backgroundColor: 'white',
    flex: 1,
    margin: 20,
  },
  innerbox: {
    backgroundColor: 'blue',
    flex: 1,
    margin: 5,
  },
});
