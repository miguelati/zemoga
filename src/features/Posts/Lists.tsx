import React, {useEffect} from 'react';
import {Text, VStack} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {ZNavButton, IconNamesEnum, ZSegmented} from '~components';

const Lists = () => {
  const {setOptions} = useNavigation();

  const onTabChange = (index: number) => {
    console.log('onTabChange', index);
  };

  const onRefreshPress = () => {
    console.log('onRefreshPress');
  };

  useEffect(() => {
    setOptions({
      headerRight: () => (
        <ZNavButton icon={IconNamesEnum.refresh} onPress={onRefreshPress} />
      ),
    });
  }, [setOptions]);

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
