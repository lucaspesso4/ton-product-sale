import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Appbar} from '@components/Appbar';

import {CartPage} from '@pages/Cart';
import {ProductsPage} from '@pages/Products';

const Stack = createNativeStackNavigator();

export const Routes = (
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
);
