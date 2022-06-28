import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {StatusBar, useColorScheme} from 'react-native';
import {QueryClientProvider} from 'react-query';
import {queryClient} from 'services/queryClient';

export function App() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      </NativeBaseProvider>
    </QueryClientProvider>
  );
}
