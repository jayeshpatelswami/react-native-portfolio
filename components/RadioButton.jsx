import React, {useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

export const RadioButton = () => {
  const [checked, setCheked] = useState(1);
  const Skills = [
    {
      id: 1,
      name: 'html',
    },
    {
      id: 2,
      name: 'css',
    },
    {
      id: 3,
      name: 'java',
    },
  ];
  return (
    <View style={style.main}>
      {Skills.map(itme => (
        <TouchableOpacity
          onPress={() => setCheked(itme.id)}
          style={style.whole}>
          <View style={style.radioWraper}>
            <View style={style.radioOuter}>
              {checked === itme.id ? <View style={style.radio} /> : null}
            </View>
            <Text style={style.radioText}>{itme.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const style = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioWraper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  radioOuter: {
    height: 38,
    width: 38,
    borderRadius: 24,
    borderColor: 'green',
    borderWidth: 2,
  },
  radio: {
    margin: 2,
    height: 30,
    width: 30,
    backgroundColor: 'green',
    borderRadius: 20,
  },
  whole: {
    marginTop: 10,
  },
  radioText: {
    fontSize: 20,
    color: 'green',
  },
});
