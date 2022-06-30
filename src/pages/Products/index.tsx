import React, {useMemo} from 'react';
import {SafeAreaView} from 'react-native';
import {Spinner, ScrollView, Center, Text} from 'native-base';
import {Product} from '@components/Product';
import {useQuery} from 'react-query';
import {ProductsService} from 'services/core';
import {containerStyle} from './style';
import {IProduct} from 'types/Product';

export function ProductsPage() {
  const {isLoading, isError, data} = useQuery(
    'products',
    ProductsService.getProducts,
  );

  const products = useMemo(() => data?.data?.products, [data]);
  const hasProducts = products?.length > 0;

  function renderCentralizedText(text: string) {
    return (
      <Center>
        <Text fontSize="xl">{text}</Text>
      </Center>
    );
  }

  return (
    <SafeAreaView>
      {isLoading && (
        <Center mt={100}>
          <Spinner size={80} color="green.500" />
        </Center>
      )}
      {isError && renderCentralizedText('Ocorreu um erro')}
      {!isLoading && !isError && (
        <ScrollView _contentContainerStyle={containerStyle}>
          {hasProducts
            ? products?.map((product: IProduct) => (
                <Product key={product.id} product={product} />
              ))
            : renderCentralizedText('Nenhum produto encontrado')}
        </ScrollView>
      )}
    </SafeAreaView>
  );
}
