// src/components/ProductDetails.test.tsx
import React from 'react';
import {render} from '~__test__/testUtil';
import {ZDescription} from './ZDescription';

describe('<ZDescription />', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Renders without crashing', () => {
    render(<ZDescription content="Testing" />);
  });
});
