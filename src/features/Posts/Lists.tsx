import React, {useEffect} from 'react';
import {VStack, Box} from 'native-base';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {
  ZNavButton,
  ZSegmented,
  ZRemoveButton,
  ZQueryLoading,
} from '~components';
import i18n from '~i18n';
import {IconNamesEnum} from '~ts/enums';
import {usePosts} from '~api/posts/queries';
import {ZPostList} from './components';
import {PostsStackParamList} from './navigation.type';

const Lists = () => {
  const {setOptions, navigate} =
    useNavigation<StackNavigationProp<PostsStackParamList>>();

  const onTabChange = (index: number) => {
    console.log('onTabChange', index);
  };

  const postsRequest = usePosts();

  const onRefreshPress = () => {
    console.log('onRefreshPress');
  };

  const onDeleteAllPress = () => {
    console.log('onDeleteAllPress');
  };

  const onPostListItemPress = (id: string, userId: string) => {
    console.log('onPostListItemPress', id);
    navigate('Details', {id, userId});
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
        <ZQueryLoading request={postsRequest}>
          <ZPostList
            onPress={onPostListItemPress}
            data={postsRequest.data || []}
          />
        </ZQueryLoading>
        <ZRemoveButton
          text={i18n.t('POSTS.LISTS.BUTTONS.DELETE_ALL')}
          onPress={onDeleteAllPress}
        />
      </VStack>
    </Box>
  );
};

export {Lists};
