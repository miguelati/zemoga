import React, {useEffect} from 'react';
import {Text, VStack} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {ZNavButton, IconNamesEnum, ZSegmented} from '~components';
import i18n from '~i18n';

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
      <ZSegmented
        options={[
          i18n.t('POSTS.LISTS.OPTIONS.ALL'),
          i18n.t('POSTS.LISTS.OPTIONS.FAVORITES'),
        ]}
        onChange={onTabChange}
      />
      <Text fontSize="xl" bold>
        Lists
      </Text>
    </VStack>
  );
};

export {Lists};
