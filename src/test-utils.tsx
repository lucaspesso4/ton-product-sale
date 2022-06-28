import React, {ReactNode} from 'react';
import {NativeBaseProvider} from 'native-base';
import {render} from '@testing-library/react-native';

export function renderWrapper(children: ReactNode) {
  const inset = {
    frame: {x: 0, y: 0, width: 0, height: 0},
    insets: {top: 0, left: 0, right: 0, bottom: 0},
  };

  return render(
    <NativeBaseProvider initialWindowMetrics={inset}>
      {children}
    </NativeBaseProvider>,
  );
}

export * from '@testing-library/react-native';
