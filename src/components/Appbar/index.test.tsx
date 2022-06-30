import 'react-native';
import React from 'react';
import {Appbar} from '.';

import {renderWrapper, screen} from 'test-utils';

describe('<Appbar />', () => {
  it('should render appbar', () => {
    renderWrapper(<Appbar />);
    const {getByTestId} = screen;

    const appbarBadge = getByTestId('appbar-badge');
    const appbarContainer = getByTestId('appbar-container');

    expect(appbarBadge).not.toBe(null);

    expect(appbarContainer.props.style).toMatchObject({
      flexDirection: 'row',
      backgroundColor: '#22c55e',
      paddingRight: 24,
      paddingLeft: 8,
      paddingTop: 8,
      paddingBottom: 8,
    });
  });
});
