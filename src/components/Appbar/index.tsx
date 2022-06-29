import React from 'react';
import {Badge, Box, Button, VStack, Row} from 'native-base';

import CartIcon from '@assets/icons/shopping-cart.svg';
import BackIcon from '@assets/icons/back-arrow.svg';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';

export function Appbar({navigation, back}: NativeStackHeaderProps) {
  function openCart() {
    navigation.navigate('cart');
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
        justifyContent={back ? 'space-between' : 'flex-end'}>
        {back && (
          <BackIcon onPress={goBack} width={20} height={20} fill="#fff" />
        )}
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
            0
          </Badge>
          <Button variant="ghost" p="2" onPress={openCart}>
            <CartIcon width={20} height={20} fill="#fff" />
          </Button>
        </VStack>
      </Box>
    </Row>
  );
}
