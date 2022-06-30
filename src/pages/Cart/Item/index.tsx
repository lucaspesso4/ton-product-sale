import React from 'react';
import {
  Row,
  Image,
  Box,
  Text,
  Pressable,
  SmallCloseIcon,
  useToast,
} from 'native-base';
import {IProduct} from 'types/Product';
import {useCartContext} from 'contexts/cart/hooks';

interface CartItemProps {
  product: IProduct;
}

export function CartItem({product}: CartItemProps) {
  const toast = useToast();
  const {removeFromCart} = useCartContext();

  function handleRemoveFromCart() {
    toast.show({description: 'Produto removido do carrinho'});
    removeFromCart(product);
  }

  return (
    <Row
      key={product.id}
      alignItems="center"
      justifyContent="space-between"
      mb="4">
      <Row alignItems="center" maxW="60%">
        <Image
          source={{uri: product.uriImage}}
          alt={`${product.name} image`}
          size="sm"
          mr="6"
        />
        <Text isTruncated>{product.name}</Text>
      </Row>
      <Box borderRadius="full" borderColor="red.500" borderWidth="2">
        <Pressable onPress={handleRemoveFromCart}>
          <SmallCloseIcon size="5" color="red.500" />
        </Pressable>
      </Box>
    </Row>
  );
}
