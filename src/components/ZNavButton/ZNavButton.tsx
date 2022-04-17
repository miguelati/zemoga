import React, {FC} from 'react';
import {SizesEnum} from '~ts/enums';
import {ZIconButton} from '../ZIconButton/ZIconButton';
import {
  IconNamesEnum,
  IconButtonVariantsEnum,
} from '../ZIconButton/ZIconButton.types';

export interface ZNavButtonProps {
  icon: IconNamesEnum;
  onPress: () => void;
}

const ZNavButton: FC<ZNavButtonProps> = ({icon, onPress}) => {
  return (
    <ZIconButton
      size={SizesEnum.sm}
      variant={IconButtonVariantsEnum.ghost}
      icon={icon}
      onPress={onPress}
    />
  );
};

export {ZNavButton};
