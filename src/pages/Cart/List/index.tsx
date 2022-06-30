import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text, Box, Button, useToast} from 'native-base';
import {useCartContext} from 'contexts/cart/hooks';
import {IProduct} from 'types/Product';
import {CartItem} from '../Item';

export function CartList() {
  const toast = useToast();
  const {cartProductsCount, cartProducts, clearCart} = useCartContext();

  const hasProductsInCart = cartProductsCount > 0;

  function handleClearCart() {
    toast.show({description: 'Seu carrinho agora está limpo'});
    clearCart();
  }

  return (
    <SafeAreaView>
      <Box m="6">
        {!hasProductsInCart ? (
          <Text fontSize="xl">Seu carrinho está vazio!</Text>
        ) : (
          <>
            <Text fontSize="xl">{`${cartProductsCount} produtos adicionados:`}</Text>
            {cartProducts.map((product: IProduct) => {
              return <CartItem key={product.id} product={product} />;
            })}
            <Button variant="ghost" colorScheme="red" onPress={handleClearCart}>
              Esvaziar carrinho
            </Button>
          </>
        )}
      </Box>
    </SafeAreaView>
  );
}
