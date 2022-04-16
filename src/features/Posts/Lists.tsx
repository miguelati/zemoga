import React, {useEffect} from 'react';
import {Text, VStack} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {ZIconButton, IconButtonVariantsEnum, IconNamesEnum} from '~components';
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

  return (
    <VStack m="auto" width={350} space={3}>
      <Text fontSize="xl" bold>
        Lists
      </Text>
    </VStack>
  );
};

export {Lists};
