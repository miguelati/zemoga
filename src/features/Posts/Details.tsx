import React, {useEffect, useState} from 'react';
import {Box, VStack} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {ZDescription, ZUserData, ZCommentList, ZFavButton} from './components';
import {User, Comment} from '~ts/interfaces';

const Details = () => {
  const user: Partial<User> = {
    id: 1,
    name: 'John',
    email: 'john@gmail.com',
    phone: '123-456-3322',
    website: 'www.john.com',
  };
  const description =
    'et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut';
  const comments: Partial<Comment>[] = [
    {
      id: 1,
      body: 'et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut',
    },
    {
      id: 2,
      body: 'et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut',
    },
    {
      id: 3,
      body: 'et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut',
    },
  ];
  const [isFav, setIsFav] = useState(false);
  const {setOptions} = useNavigation();

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
      <VStack space={2}>
        <ZDescription content={description} />
        <ZUserData user={user} />
      </VStack>
      <ZCommentList data={comments} />
    </Box>
  );
};

export {Details};
