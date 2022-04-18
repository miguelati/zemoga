import React, {useEffect, useState, useCallback} from 'react';
import {Box, VStack} from 'native-base';
import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';
import {useQueryClient} from 'react-query';
import {usePost, PostFetchEnum} from '~api/posts/queries';
import {useUser} from '~api/users/queries';
import {useComments} from '~api/comments/queries';
import {ZDescription, ZUserData, ZCommentList, ZFavButton} from './components';
import {ZQueryLoading} from '~components';
import {PostsStackParamList} from './navigation.type';
import {storage} from '~utils';
import {PostStateEnum} from '~ts/enums';
type ScreenRouteProp = RouteProp<PostsStackParamList, 'Details'>;

const Details = () => {
  const [isFav, setIsFav] = useState(false);
  const {setOptions} = useNavigation();
  const {
    params: {id, userId},
  } = useRoute<ScreenRouteProp>();
  const query = useQueryClient();
  const postRequest = usePost(id);
  const userRequest = useUser(userId);
  const commentsRequest = useComments(id);

  const onFavPress = useCallback(
    (selected: boolean) => {
      setIsFav(selected);
      if (selected) {
        storage.saveState(PostStateEnum.favorite, id);
      } else {
        storage.removeState(PostStateEnum.favorite, id);
      }
      query.invalidateQueries(PostFetchEnum.listPosts);
    },
    [id, query],
  );

  useEffect(() => {
    const cb = async () => {
      setIsFav(await storage.checkState(PostStateEnum.favorite, id));
      const isRead = await storage.checkState(PostStateEnum.read, id);
      if (!isRead) {
        query.invalidateQueries(PostFetchEnum.listPosts);
        storage.saveState(PostStateEnum.read, id);
      }
    };
    cb();
    setOptions({
      headerRight: () => <ZFavButton selected={isFav} onPress={onFavPress} />,
    });
  }, [setOptions, isFav, onFavPress, id, query]);

  return (
    <Box flex={1} safeAreaBottom>
      <VStack space={2} flex={1}>
        <ZQueryLoading flex={1} request={postRequest}>
          <ZDescription content={postRequest.data?.body} />
        </ZQueryLoading>
        <ZQueryLoading flex={1} request={userRequest}>
          <ZUserData user={userRequest.data} />
        </ZQueryLoading>
      </VStack>
      <ZQueryLoading request={commentsRequest}>
        <ZCommentList data={commentsRequest.data} />
      </ZQueryLoading>
    </Box>
  );
};

export {Details};
