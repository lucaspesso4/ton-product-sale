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
    <Box>
      <Image
        source={{uri: product.uriImage}}
        alt={`${product.name} image`}
        size="xl"
      />
      <Text>{product.name}</Text>
      <Button mt="2" size="sm" colorScheme="success">
        Add
      </Button>
    </Box>
  );
}
