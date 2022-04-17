import React, {FC} from 'react';
import {SizesEnum, IconNamesEnum} from '~ts/enums';
import {ZIconButton} from '../ZIconButton/ZIconButton';
import {IconButtonVariantsEnum} from '../ZIconButton/ZIconButton.types';

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
