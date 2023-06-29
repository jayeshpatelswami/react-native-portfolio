import React, {useState} from 'react';
import {Button, StatusBar, View, StyleSheet} from 'react-native';

export const StatusBar_Editing = () => {
  const [hide, sethide] = useState(false);
  const [content, setcontent] = useState('default');
  return (
    <View style={style.main}>
      <StatusBar hidden={hide} barStyle={content} />
      <Button title="Hide Or Show" onPress={() => sethide(!hide)} />
      <Button
        title="Mode(Light or Dark)"
        onPress={() =>
          setcontent(
            content === 'light-content' ? 'dark-content' : 'light-content',
          )
        }
      />
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
