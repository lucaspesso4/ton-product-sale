import 'react-native';
import React from 'react';
import {ProductsPage} from '.';

import {renderWrapper} from 'test-utils';

describe('<ProductsPage />', () => {
  it('should render products page', async () => {
    renderWrapper(<ProductsPage />);
  });
});
