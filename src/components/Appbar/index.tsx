import React from 'react';
import {Badge, Box, Button, Flex, VStack} from 'native-base';

import CartIcon from '@assets/icons/shopping-cart.svg';

export function Appbar() {
  return (
    <Flex
      testID="appbar-container"
      alignItems="flex-end"
      background="green.500"
      padding={2}
      pr={6}>
      <Box alignItems="center">
        <VStack>
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
          <Button variant="ghost" p="2">
            <CartIcon width={20} height={20} fill="#fff" />
          </Button>
        </VStack>
      </Box>
    </Flex>
  );
}
