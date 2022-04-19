// src/components/ProductDetails.test.tsx
import React from 'react';
import {render} from '~__test__/testUtil';
import {ZIcon} from './ZIcon';
import {IconNamesEnum} from '~ts/enums';

describe('<ZIcon />', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Renders without crashing', () => {
    render(<ZIcon icon={IconNamesEnum.refresh} />);
  });
});
