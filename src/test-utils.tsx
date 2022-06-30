import React, {ReactNode} from 'react';
import {NativeBaseProvider} from 'native-base';
import {render} from '@testing-library/react-native';
import {QueryClient, QueryClientProvider} from 'react-query';
import {NavigationContainer} from '@react-navigation/native';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

export function renderWrapper(children: ReactNode) {
  const inset = {
    frame: {x: 0, y: 0, width: 0, height: 0},
    insets: {top: 0, left: 0, right: 0, bottom: 0},
  };

  return render(
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider initialWindowMetrics={inset}>
        <NavigationContainer>{children}</NavigationContainer>
      </NativeBaseProvider>
    </QueryClientProvider>,
  );
}

export * from '@testing-library/react-native';
