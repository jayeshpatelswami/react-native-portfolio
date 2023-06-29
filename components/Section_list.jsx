import React from 'react';
import {SectionList, Text, View} from 'react-native';

export const Section_list = () => {
  const user = [
    {
      id: 1,
      name: 'jayesh',
      data: ['Css', 'Java', 'Python'],
    },
    {
      id: 2,
      name: 'mohit',
      data: ['Css', 'Java', 'Python'],
    },
    {
      id: 4,
      name: 'okok',
      data: ['Css', 'Java', 'Python'],
    },
    {
      id: 8,
      name: 'port',
      data: ['Css', 'Java', 'Python'],
    },
  ];
  return (
    <View>
      <Text style={{fontSize: 50}}> Section List </Text>
      <SectionList
        sections={user}
        renderItem={({item}) => (
          <Text style={{fontSize: 25, marginLeft: 30}}>{item}</Text>
        )}
        renderSectionHeader={({section: {name}}) => (
          <Text style={{fontSize: 35, color: 'black'}}>{name}</Text>
        )}
      />
    </View>
  );
};
