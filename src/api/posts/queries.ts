import {useQuery} from 'react-query';
import {getPosts, getPost} from './api';

export enum PostFetchEnum {
  listPosts = 'fetchPosts',
  post = 'fetchPost',
}

export const usePosts = (config?: object) =>
  useQuery([PostFetchEnum.listPosts], async () => await getPosts(), config);

export const usePost = (id: string, config?: object) =>
  useQuery([PostFetchEnum.post], async () => await getPost({id}), config);
