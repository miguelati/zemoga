import {useQuery} from 'react-query';
import {getPosts, getPost} from './api';

export const usePosts = (config?: object) =>
  useQuery(['fetchPosts'], async () => await getPosts(), config);

export const usePost = (id: string, config?: object) =>
  useQuery(['fetchPost'], async () => await getPost({id}), config);
