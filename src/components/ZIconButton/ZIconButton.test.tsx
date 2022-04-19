// src/components/ProductDetails.test.tsx
import React from 'react';
import {render} from '~__test__/testUtil';
import {ZIconButton} from './ZIconButton';
import {IconNamesEnum, SizesEnum} from '~ts/enums';
import {IconButtonVariantsEnum} from './ZIconButton.types';

describe('<ZIconButton />', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Renders without crashing', () => {
    render(
      <ZIconButton
        size={SizesEnum.md}
        variant={IconButtonVariantsEnum.ghost}
        icon={IconNamesEnum.circle}
        onPress={() => {}}
      />,
    );
  });
});
