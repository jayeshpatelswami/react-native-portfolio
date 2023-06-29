import React, {useState} from 'react';
import {View, Button, TextInput, StyleSheet, Text} from 'react-native';

function Form() {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [pass, setpass] = useState('');
  const [display, setDisplay] = useState(false);
  const handalShow = () => {
    display ? setDisplay(false) : setDisplay(true);
  };
  return (
    <>
      <View style={{backgroundcolor: 'black', padding: 20}}>
        <Text style={{fontSize: 25}}> Enter your Name Hear:</Text>
        <TextInput
          style={style.textbox}
          value={name}
          onChangeText={text => setname(text)}
          placeholder="enter name"
        />

        <Text style={{fontSize: 25}}> Enter your Email:</Text>
        <TextInput
          style={style.textbox}
          value={email}
          onChangeText={text => setemail(text)}
          placeholder="enter name"
        />

        <Text style={{fontSize: 25}}> Enter your Password Hear:</Text>
        <TextInput
          style={style.textbox}
          value={pass}
          secureTextEntry={true}
          onChangeText={text => setpass(text)}
          placeholder="enter name"
        />

        <Button title="Show Data" onPress={handalShow} />
        <Text></Text>
        <Button
          title="Cler Data"
          onPress={() => {
            setemail('');
            setname('');
            setpass('');
          }}
        />
        {display ? (
          <View>
            <Text style={{fontSize: 20, color: 'red'}}>{name}</Text>
            <Text style={{fontSize: 20, color: 'red'}}>{email}</Text>
            <Text style={{fontSize: 20, color: 'red'}}>{pass}</Text>
          </View>
        ) : null}
      </View>
    </>
  );
}

const style = StyleSheet.create({
  textbox: {
    margin: 20,
    borderWidth: 3,
    borderColor: 'black',
    color: 'black',
    fontSize: 30,
  },
});
export default Form;
