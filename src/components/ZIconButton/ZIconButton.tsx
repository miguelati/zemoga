import React, {FC} from 'react';
import {IconButton} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {SizesEnum} from '~ts/enums';
import {IconButtonVariantsEnum, IconNamesEnum} from './ZIconButton.types';

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
      icon={<Icon name={icon} size={24} color="#FFF" />}
      onPress={onPress}
    />
  );
};

export {ZIconButton};
