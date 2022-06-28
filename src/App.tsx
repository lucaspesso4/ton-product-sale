import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {QueryClientProvider} from 'react-query';
import {queryClient} from 'services/queryClient';
import {ProductsPage} from '@pages/Products';

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider>
        <ProductsPage />
      </NativeBaseProvider>
    </QueryClientProvider>
  );
}
