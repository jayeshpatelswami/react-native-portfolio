import React, {useState} from 'react';
import {View, Text, StyleSheet, Modal, Button} from 'react-native';

export const Modal_box = () => {
  const [show, setshow] = useState(true);
  return (
    <View style={style.main}>
      <View>
        <Modal visible={show} transparent={true} animationType="slide">
          <View style={style.modal}>
            <View style={style.inner}>
              <Text> Hello From Modal</Text>
              <View style={style.innerButton}>
                <Button title="Close" onPress={() => setshow(false)} />
              </View>
            </View>
          </View>
        </Modal>
      </View>
      <View style={style.button}>
        <Button
          title="Open Modal"
          onPress={() => setshow(true)}
          color={'green'}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  main: {
    flex: 1,
  },
  button: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inner: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: 'black',
    elevation: 30,
  },
  innerButton: {
    marginTop: 10,
  },
});
