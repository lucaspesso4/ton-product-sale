import React from 'react';
import {SafeAreaView} from 'react-native';
import {
  Image,
  Row,
  Text,
  SmallCloseIcon,
  Box,
  Pressable,
  Button,
} from 'native-base';
import {useCartContext} from 'contexts/cart/hooks';
import {IProduct} from 'types/Product';

export function CartPage() {
  const {cartProductsCount, cartProducts, removeFromCart, clearCart} =
    useCartContext();

  const hasProductsInCart = cartProductsCount > 0;

  function handleRemoveFromCart(product: IProduct) {
    removeFromCart(product);
  }

  return (
    <SafeAreaView>
      <Box m="6">
        {!hasProductsInCart && (
          <Text fontSize="xl">Seu carrinho está vazio!</Text>
        )}

        {hasProductsInCart && (
          <>
            <Text fontSize="xl">{`${cartProductsCount} produtos adicionados:`}</Text>
            {cartProducts.map((product: IProduct) => {
              return (
                <Row alignItems="center" justifyContent="space-between" mb="4">
                  <Row alignItems="center" maxW="60%">
                    <Image
                      source={{uri: product.uriImage}}
                      alt={`${product.name} image`}
                      size="sm"
                      mr="6"
                    />
                    <Text isTruncated>{product.name}</Text>
                  </Row>
                  <Box
                    borderRadius="full"
                    borderColor="red.500"
                    borderWidth="2">
                    <Pressable onPress={() => handleRemoveFromCart(product)}>
                      <SmallCloseIcon size="5" color="red.500" />
                    </Pressable>
                  </Box>
                </Row>
              );
            })}

            <Button variant="ghost" colorScheme="red" onPress={clearCart}>
              Esvaziar carrinho
            </Button>
          </>
        )}
      </Box>
    </SafeAreaView>
  );
}
