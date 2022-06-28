import 'react-native';
import React from 'react';
import {IProduct, Product} from '.';

import {renderWrapper, screen} from 'test-utils';

const productMock: IProduct = {
  id: 0,
  name: 'Logitech',
  description: 'Some description',
  uriImage: 'https://logitech.api/image/200x200.png',
};

describe('<Product />', () => {
  it('should render Product', () => {
    renderWrapper(<Product product={productMock} />);
    const {getByRole, getByText} = screen;

    const name = getByText(/logitech/i);
    const buttonTitle = getByText('Add');
    const addButton = getByRole('button');

    expect(name).toBeTruthy();
    expect(addButton).toBeTruthy();
    expect(buttonTitle.props.children).toEqual('Add');
  });
});
