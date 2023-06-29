import React from 'react';
import {Text} from 'react-native';
import Form from './components/Form';
import Flatelist_array from './components/Flatelist_array';
import {Dynamic_grid} from './components/Dynamic_grid';
import {Section_list} from './components/Section_list';
import {Timer_useEffect} from './components/Timer_useEffect';
import {Flexb_box} from './components/Flexb_box';
import {StylishButton} from './components/StylishButton';
import {RadioButton} from './components/RadioButton';
import {Loadar} from './components/Loadar';
import {Modal_box} from './components/Modal_box';
import {StatusBar_Editing} from './components/StatusBar_Editing';
import {OpenWebsite} from './components/OpenWebsite';

function App() {
  return (
    <>
      {/* <Text>Text From Home</Text> */}
      <OpenWebsite />
      {/* <StatusBar_Editing /> */}
      {/* <Modal_box /> */}
      {/* <Loadar /> */}
      {/* <RadioButton /> */}
      {/* <StylishButton /> */}
      {/* <Flexb_box /> */}
      {/* <Timer_useEffect /> */}
      {/* <Section_list /> When we have Array inside another arry thean use this  */}
      {/* <Dynamic_grid /> added dynamic grid that help when data have more it order when width is full the new element in new line  */}
      {/* <Flatelist_array /> Fetch data by flatelist just like data.map */}
      {/* <Form /> For Form INput And Display */}
    </>
  );
}

export default App;
