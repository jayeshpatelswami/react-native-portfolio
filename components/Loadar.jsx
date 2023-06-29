import React, {useState} from 'react';
import {View, StyleSheet, Button, ActivityIndicator} from 'react-native';

export const Loadar = () => {
  const [show, setshow] = useState(false);

  const handalPress = () => {
    setshow(true);
    setTimeout(() => {
      setshow(false);
    }, 1000);
  };
  return (
    <View style={style.main}>
      {/* Loading Components to show loading */}
      <ActivityIndicator size={50} animating={show} />
      <Button title="Load data" onPress={handalPress} />
    </View>
  );
};

const style = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
