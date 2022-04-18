import React, {useEffect, useCallback, useState} from 'react';
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
import {IconNamesEnum, PostStateEnum} from '~ts/enums';
import {Post} from '~ts/interfaces';
import {usePosts} from '~api/posts/queries';
import {storage} from '~utils';
import {ZPostList} from './components';
import {PostsStackParamList} from './navigation.type';

const Lists = () => {
  const [data, setData] = useState<Post[]>([]);
  const [indexTab, setIndexTab] = useState(0);
  const {setOptions, navigate} =
    useNavigation<StackNavigationProp<PostsStackParamList>>();

  const onTabChange = (index: number) => {
    setIndexTab(index);
    postsRequest.refetch();
  };

  const postsRequest = usePosts({
    onSuccess: async (requestData: Post[]) => {
      if (indexTab === 0) {
        setData(requestData);
      } else {
        const favs = await storage.getState(PostStateEnum.favorite);
        setData(requestData.filter(d => favs.includes(d.id)));
      }
    },
  });

  const onRefreshPress = useCallback(() => {
    postsRequest.refetch();
  }, [postsRequest]);

  const onDeleteAllPress = async () => {
    await storage.removeAllState(PostStateEnum.favorite);
    await storage.removeAllState(PostStateEnum.read);
    postsRequest.refetch();
  };

  const onPostListItemPress = (id: string, userId: string) =>
    navigate('Details', {id, userId});

  useEffect(() => {
    setOptions({
      headerRight: () => (
        <ZNavButton icon={IconNamesEnum.refresh} onPress={onRefreshPress} />
      ),
    });
  }, [setOptions, onRefreshPress]);

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
        <ZQueryLoading flex={1} big request={postsRequest}>
          <ZPostList onPress={onPostListItemPress} data={data || []} />
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
