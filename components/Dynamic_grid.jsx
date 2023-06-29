import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

export const Dynamic_grid = () => {
  const user = [
    {
      id: 13,
      name: 'jayesh',
    },
    {
      id: 23,
      name: 'mohit',
    },
    {
      id: 41,
      name: 'okok',
    },
    {
      id: 83,
      name: 'port',
    },
    {
      id: 165,
      name: 'jayesh',
    },
    {
      id: 26,
      name: 'mohit',
    },
    {
      id: 48,
      name: 'okok',
    },
    {
      id: 89,
      name: 'port',
    },
    {
      id: 16,
      name: 'jayesh',
    },
    {
      id: 28,
      name: 'mohit',
    },
    {
      id: 49,
      name: 'okok',
    },
    {
      id: 80,
      name: 'port',
    },
  ];

  return (
    <View>
      <ScrollView>
        <Text style={{fontSize: 40}}> Your Value Are:</Text>
        <View style={style.box}>
          {user.map(item => (
            <Othercomponent item={item} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const Othercomponent = props => {
  const item = props.item;
  return (
    <Text key={item.id} style={style.item}>
      {item.name}
    </Text>
  );
};

const style = StyleSheet.create({
  item: {
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: '#ff00ff',
    margin: 5,
    fontSize: 40,
    height: 125,
    width: 125,
  },
  box: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
