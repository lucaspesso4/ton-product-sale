import {Box, Button, Text, Image} from 'native-base';
import React from 'react';

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
  return (
    <Box maxWidth="40%" m="4">
      <Image
        source={{uri: product.uriImage}}
        alt={`${product.name} image`}
        size="xl"
      />
      <Text isTruncated>{product.name}</Text>
      <Button mt="2" size="sm" colorScheme="success">
        Add
      </Button>
    </Box>
  );
}
