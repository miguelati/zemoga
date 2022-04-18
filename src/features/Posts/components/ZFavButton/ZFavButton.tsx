import React, {FC} from 'react';
import {SizesEnum, IconNamesEnum} from '~ts/enums';
import {ZIconButton, IconButtonVariantsEnum} from '~components';

export interface ZFavButtonProps {
  selected: boolean;
  onPress: (selected: boolean) => void;
}

const ZFavButton: FC<ZFavButtonProps> = ({selected, onPress}) => {
  const onIconPress = () => {
    onPress(!selected);
  };

  return (
    <ZIconButton
      size={SizesEnum.sm}
      variant={IconButtonVariantsEnum.ghost}
      icon={selected ? IconNamesEnum.star : IconNamesEnum.starOutline}
      onPress={onIconPress}
    />
  );
};

export {ZFavButton};
