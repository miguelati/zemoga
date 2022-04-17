import React, {FC} from 'react';
import {Platform} from 'react-native';
import {Button, Fab} from 'native-base';
import {IconNamesEnum} from '~ts/enums';
import {ZIcon} from '../ZIcon/ZIcon';

export interface ZIconButtonProps {
  text: string;
  onPress: () => void;
}

const ZRemoveButton: FC<ZIconButtonProps> = ({text, onPress}) => {
  const isAndroid = Platform.OS === 'android';
  return !isAndroid ? (
    <Fab
      renderInPortal={false}
      shadow={2}
      size="sm"
      colorScheme="red"
      icon={<ZIcon icon={IconNamesEnum.trashCan} />}
      onPress={onPress}
    />
  ) : (
    <Button
      borderRadius={0}
      h="50px"
      colorScheme="red"
      size="full"
      onPress={onPress}>
      {text}
    </Button>
  );
};

export {ZRemoveButton};
