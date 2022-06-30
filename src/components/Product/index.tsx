import React, {useState, useMemo} from 'react';
import {Box, Button, Text, Image, Pressable, useToast} from 'native-base';
import {ProductDescriptionModal} from './DescriptionModal';
import {useCartContext} from 'contexts/cart/hooks';
import {IProduct} from 'types/Product';

interface ProductProps {
  product: IProduct;
}

export function Product({product}: ProductProps) {
  const toast = useToast();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const {cartProducts, addToCart, removeFromCart} = useCartContext();

  const isAnAddedProduct = cartProducts?.find(p => p.id === product.id);

  const componentHelper = useMemo(() => {
    if (!isAnAddedProduct)
      return {
        colorScheme: 'success',
        button: {
          label: 'Adicionar',
          action: addToCart,
        },
        toast: {description: 'Produto adicionado ao carrinho'},
      };

    return {
      colorScheme: 'error',
      button: {
        label: 'Remover',
        action: removeFromCart,
      },
      toast: {description: 'Produto removido do carrinho'},
    };
  }, [isAnAddedProduct]);

  const handleOpenDescription = () => setIsOpen(true);

  const handleCloseDescription = () => setIsOpen(false);

  function handleClickButton() {
    toast.show({
      description: componentHelper.toast.description,
    });
    componentHelper.button.action(product);
  }

  return (
    <Box maxWidth="40%" m="4">
      <Pressable onPress={handleOpenDescription}>
        <Image
          source={{uri: product.uriImage}}
          alt={`${product.name} image`}
          size="xl"
        />
        <Text isTruncated>{product.name}</Text>

        <Button
          mt="2"
          size="sm"
          colorScheme={componentHelper.colorScheme}
          onPress={handleClickButton}>
          {componentHelper.button.label}
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
