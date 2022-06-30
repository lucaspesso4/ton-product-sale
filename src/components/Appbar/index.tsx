import React from 'react';
import {
  Badge,
  Box,
  Button,
  VStack,
  Row,
  ArrowBackIcon,
  SmallCloseIcon,
} from 'native-base';

import CartIcon from '@assets/icons/shopping-cart.svg';
import {useCartContext} from 'contexts/cart/hooks';
import {useNavigation} from '@react-navigation/native';

export function Appbar() {
  const navigation = useNavigation();
  const canGoBack = navigation.canGoBack();
  const {cartProductsCount} = useCartContext();

  function openCart() {
    navigation.navigate('cart' as never);
  }

  function goBack() {
    navigation.goBack();
  }

  return (
    <Row
      testID="appbar-container"
      justifyContent="flex-end"
      background="green.500"
      padding={2}
      pr={6}>
      <Box
        flexDirection="row"
        alignItems="center"
        flex="1"
        justifyContent={canGoBack ? 'space-between' : 'flex-end'}>
        {canGoBack && <ArrowBackIcon onPress={goBack} size="5" color="white" />}
        <VStack alignSelf="flex-end">
          <Badge
            testID="appbar-badge"
            bg="red.400"
            colorScheme="danger"
            rounded="full"
            mb={-4}
            mr={-4}
            zIndex={1}
            variant="solid"
            alignSelf="flex-end">
            {cartProductsCount}
          </Badge>
          <Button variant="ghost" p="2" onPress={openCart}>
            <CartIcon width={20} height={20} fill="#fff" />
          </Button>
        </VStack>
      </Box>
    </Row>
  );
}
