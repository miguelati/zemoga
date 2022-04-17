import React, {useEffect} from 'react';
import {Text, VStack, Box} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {ZNavButton, ZSegmented} from '~components';
import i18n from '~i18n';
import {IconNamesEnum} from '~ts/enums';
import {ZPostList} from './components/ZPostsList/ZPostList';

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
    <Box flex={1} safeAreaBottom>
      <VStack flex={1}>
        <ZSegmented
          options={[
            i18n.t('POSTS.LISTS.OPTIONS.ALL'),
            i18n.t('POSTS.LISTS.OPTIONS.FAVORITES'),
          ]}
          onChange={onTabChange}
        />
        <ZPostList
          data={[
            {
              userId: 1,
              id: 1,
              title:
                'ea molestias quasi exercitationem repellat qui ipsa sit aut',
              body: 'Esto es para una tema de',
            },
            {
              userId: 2,
              id: 2,
              title: 'dolorem eum magni eos aperiam quia',
              body: 'Esto es para una tema de descripcion',
            },
          ]}
        />
        <Text fontSize="xl" bold>
          Lists
        </Text>
      </VStack>
    </Box>
  );
};

export {Lists};
