import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {QueryClientProvider} from 'react-query';
import {queryClient} from 'services/queryClient';

import {Routes} from 'routes';

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider>{Routes}</NativeBaseProvider>
    </QueryClientProvider>
  );
}
