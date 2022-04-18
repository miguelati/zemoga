import {useQuery} from 'react-query';
import {getComments} from './api';

export const useComments = (id: string, config?: object) =>
  useQuery(['fetchComments'], async () => await getComments({id}), config);
