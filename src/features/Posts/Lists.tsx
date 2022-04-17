import React, {useEffect} from 'react';
import {VStack, Box} from 'native-base';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {ZNavButton, ZSegmented, ZRemoveButton} from '~components';
import i18n from '~i18n';
import {IconNamesEnum} from '~ts/enums';
import {ZPostList} from './components/ZPostsList/ZPostList';
import {PostsStackParamList} from './navigation.type';

const Lists = () => {
  const {setOptions, navigate} =
    useNavigation<StackNavigationProp<PostsStackParamList>>();

  const onTabChange = (index: number) => {
    console.log('onTabChange', index);
  };

  const onRefreshPress = () => {
    console.log('onRefreshPress');
  };

  const onDeleteAllPress = () => {
    console.log('onDeleteAllPress');
  };

  const onPostListItemPress = (id: number) => {
    console.log('onPostListItemPress', id);
    navigate('Details', {id});
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
          onPress={onPostListItemPress}
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
        <ZRemoveButton
          text={i18n.t('POSTS.LISTS.BUTTONS.DELETE_ALL')}
          onPress={onDeleteAllPress}
        />
      </VStack>
    </Box>
  );
};

export {Lists};
