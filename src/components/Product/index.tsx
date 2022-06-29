import React, {useState} from 'react';
import {Box, Button, Text, Image, Pressable} from 'native-base';
import {ProductDescriptionModal} from './DescriptionModal';

export interface IProduct {
  id: number;
  name: string;
  description: string;
  uriImage: string;
}

interface ProductProps {
  product: IProduct;
}

export function Product({product}: ProductProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpenDescription = () => setIsOpen(true);

  const handleCloseDescription = () => setIsOpen(false);

  return (
    <Box maxWidth="40%" m="4">
      <Pressable onPress={handleOpenDescription}>
        <Image
          source={{uri: product.uriImage}}
          alt={`${product.name} image`}
          size="xl"
        />
        <Text isTruncated>{product.name}</Text>
        <Button mt="2" size="sm" colorScheme="success">
          Add
        </Button>
        <ProductDescriptionModal
          isOpen={isOpen}
          onClose={handleCloseDescription}
          product={product}
        />
      </Pressable>
    </Box>
  );
}
