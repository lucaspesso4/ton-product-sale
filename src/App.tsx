import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {StatusBar, useColorScheme} from 'react-native';

export function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NativeBaseProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
    </NativeBaseProvider>
  );
}
