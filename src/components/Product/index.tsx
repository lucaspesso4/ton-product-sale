import React, {useState} from 'react';
import {Box, Button, Text, Image, Pressable} from 'native-base';
import {ProductDescriptionModal} from './DescriptionModal';
import {useCartContext} from 'contexts/cart/hooks';
import {IProduct} from 'types/Product';

interface ProductProps {
  product: IProduct;
}

export function Product({product}: ProductProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const {cartProducts, addToCart, removeFromCart} = useCartContext();

  const isAnAddedProduct = cartProducts.find(p => p.id === product.id);

  const handleOpenDescription = () => setIsOpen(true);

  const handleCloseDescription = () => setIsOpen(false);

  const handleAddToCart = () => addToCart(product);

  const handleRemoveFromCart = () => removeFromCart(product);

  return (
    <Box maxWidth="40%" m="4">
      <Pressable onPress={handleOpenDescription}>
        <Image
          source={{uri: product.uriImage}}
          alt={`${product.name} image`}
          size="xl"
        />
        <Text isTruncated>{product.name}</Text>
        {isAnAddedProduct && (
          <Button
            mt="2"
            size="sm"
            colorScheme="error"
            onPress={handleRemoveFromCart}>
            Remover
          </Button>
        )}
        {!isAnAddedProduct && (
          <Button
            mt="2"
            size="sm"
            colorScheme="success"
            onPress={handleAddToCart}>
            Adicionar
          </Button>
        )}

        <ProductDescriptionModal
          isOpen={isOpen}
          onClose={handleCloseDescription}
          product={product}
        />
      </Pressable>
    </Box>
  );
}
