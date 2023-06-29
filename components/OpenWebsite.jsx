import React from 'react';
import {WebView} from 'react-native-webview';
export const OpenWebsite = () => {
  return (
    <>
      <WebView
        source={{
          uri: 'https://jayeshpatelswami.github.io/Portfoliomay2023/',
        }}
      />
    </>
  );
};
