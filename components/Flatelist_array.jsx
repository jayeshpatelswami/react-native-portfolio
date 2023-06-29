import React from 'react';
import {FlatList, Text, View} from 'react-native';

export const Flatelist_array = () => {
  const user = [
    {
      id: 1,
      name: 'jayesh',
    },
    {
      id: 2,
      name: 'mohit',
    },
    {
      id: 4,
      name: 'okok',
    },
    {
      id: 8,
      name: 'port',
    },
  ];
  return (
    <View>
      <Text>Hello Guys</Text>
      <FlatList
        data={user}
        // renderItem={({itme}) => <Text>{itme.id}</Text>} other name like itme is not working
        renderItem={({item}) => <Text>{item.name}</Text>} //the "itme" is only works in flate list
        keyExtractor={itmme => itmme.id}
      />
    </View>
  );
};
export default Flatelist_array;
