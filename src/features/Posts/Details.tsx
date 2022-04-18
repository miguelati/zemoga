import React, {useEffect, useState} from 'react';
import {Box, VStack} from 'native-base';
import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';
import {usePost} from '~api/posts/queries';
import {useUser} from '~api/users/queries';
import {useComments} from '~api/comments/queries';
import {ZDescription, ZUserData, ZCommentList, ZFavButton} from './components';
import {ZQueryLoading} from '~components';
import {PostsStackParamList} from './navigation.type';
type ScreenRouteProp = RouteProp<PostsStackParamList, 'Details'>;

const Details = () => {
  const [isFav, setIsFav] = useState(false);
  const {setOptions} = useNavigation();
  const {
    params: {id, userId},
  } = useRoute<ScreenRouteProp>();
  const postRequest = usePost(id);
  const userRequest = useUser(userId);
  const commentsRequest = useComments(id);

  const onFavPress = (selected: boolean) => {
    setIsFav(selected);
    console.log('onFavPress', selected);
  };

  useEffect(() => {
    setOptions({
      headerRight: () => <ZFavButton selected={isFav} onPress={onFavPress} />,
    });
  }, [setOptions, isFav]);
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
