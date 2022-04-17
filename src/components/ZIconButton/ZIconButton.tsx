import React, {FC} from 'react';
import {IconButton} from 'native-base';
import {SizesEnum, IconNamesEnum} from '~ts/enums';
import {IconButtonVariantsEnum} from './ZIconButton.types';
import {ZIcon} from '../ZIcon/ZIcon';

export interface ZIconButtonProps {
  size: SizesEnum;
  variant: IconButtonVariantsEnum;
  icon: IconNamesEnum;
  onPress: () => void;
}

const ZIconButton: FC<ZIconButtonProps> = ({size, variant, icon, onPress}) => {
  return (
    <IconButton
      size={size}
      variant={variant}
      icon={<ZIcon icon={icon} />}
      onPress={onPress}
    />
  );
};

export {ZIconButton};
