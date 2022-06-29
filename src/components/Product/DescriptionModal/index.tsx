import React from 'react';
import {Modal, Button, Image, Text, Center, ScrollView} from 'native-base';
import {IProduct} from '@components/Product';

interface ProductDescriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: IProduct;
}

export function ProductDescriptionModal({
  isOpen,
  onClose,
  product,
}: ProductDescriptionModalProps) {
  if (!isOpen) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Content>
        <Modal.Header>
          <Text fontSize="lg" bold>
            Descrição do produto
          </Text>
        </Modal.Header>
        <Modal.Body>
          <ScrollView>
            <Center>
              <Image
                source={{uri: product.uriImage}}
                alt={`${product.name} image`}
                size="xl"
              />
            </Center>
            <Text mt="4" bold>
              {product.name}
            </Text>
            <Text mt="4">{product.description}</Text>
          </ScrollView>
        </Modal.Body>
        <Modal.Footer>
          <Button onPress={onClose} bgColor="red.500" width="full">
            Fechar
          </Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
}
