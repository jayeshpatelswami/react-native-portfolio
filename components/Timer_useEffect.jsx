import React, {useEffect, useState} from 'react';
import {Button, Text, View} from 'react-native';

export const Timer_useEffect = () => {
  const [show, setshow] = useState(false);

  //   useEffect(() => {
  //     // return () => {
  //     //   clearTimeout(timer);
  //     // };
  //     console.warn('heloo');
  //   }, []);

  return (
    <View>
      <Text>ooo</Text>
      <Button title="Toggal" onPress={() => setshow(!show)} />
      {show ? <Testing /> : null}
    </View>
  );
};

const Testing = () => {
  const [data, setdata] = useState(40);
  let timer = setInterval(() => {
    setdata(data + 1);
  }, 2000);
  useEffect(() => {
    console.warn('Componentdidmount or Updated');
    return () => {
      clearTimeout(timer);
      console.warn('unmount');
    };
  }, [data, timer]);
  return (
    <View style={{backgroundColor: 'violet'}}>
      <Text style={{fontSize: 40}}>Hello {data} </Text>
    </View>
  );
};
