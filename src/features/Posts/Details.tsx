import React from 'react';
import {Box, VStack} from 'native-base';
import {ZDescription} from './components/ZDescription/ZDescription';
import {ZUserData} from './components/ZUserData/ZUserData';
import {ZCommentList} from './components/ZCommentList/ZCommentList';
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
