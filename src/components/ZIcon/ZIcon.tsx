import React, {FC} from 'react';
import {useTheme} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {SizesNumberEnum, IconNamesEnum} from '~ts/enums';

export interface ZIconButtonProps {
  iconSize?: SizesNumberEnum;
  iconColor?: string;
  icon: IconNamesEnum;
}

const ZIcon: FC<ZIconButtonProps> = ({iconSize, iconColor, icon}) => {
  const {colors} = useTheme();
  const setIconColor = iconColor || colors.white;
  const setIconSize = iconSize || SizesNumberEnum.sm;
  return <Icon size={setIconSize} color={setIconColor} name={icon} />;
};

export {ZIcon};
