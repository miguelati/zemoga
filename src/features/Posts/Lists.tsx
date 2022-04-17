import React, {useEffect} from 'react';
import {Text, VStack} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {
  ZIconButton,
  IconButtonVariantsEnum,
  IconNamesEnum,
  ZSegmented,
} from '~components';
import {SizesEnum} from '~ts/enums';

const Lists = () => {
  const {setOptions} = useNavigation();
  useEffect(() => {
    setOptions({
      headerRight: () => (
        <ZIconButton
          size={SizesEnum.sm}
          variant={IconButtonVariantsEnum.ghost}
          icon={IconNamesEnum.refresh}
        />
      ),
    });
  }, [setOptions]);

  const onTabChange = (index: number) => {
    console.log('onTabChange', index);
  };

  return (
    <VStack flex={1}>
      <ZSegmented options={['All', 'Favorites']} onChange={onTabChange} />
      <Text fontSize="xl" bold>
        Lists
      </Text>
    </VStack>
  );
};

export {Lists};
