import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {QueryClientProvider} from 'react-query';
import {queryClient} from 'services/queryClient';
import {ProductsPage} from '@pages/Products';
import {CartPage} from '@pages/Cart';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Appbar} from 'components/Appbar';

const Stack = createNativeStackNavigator();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="home">
            <Stack.Screen
              name="home"
              component={ProductsPage}
              options={{
                header: props => <Appbar {...props} />,
              }}
            />
            <Stack.Screen
              name="cart"
              component={CartPage}
              options={{
                header: props => <Appbar {...props} />,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </QueryClientProvider>
  );
}
