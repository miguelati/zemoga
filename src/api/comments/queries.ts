import {useQuery} from 'react-query';
import {getComments} from './api';

export enum CommentFetchEnum {
  comment = 'fetchComments',
}

export const useComments = (id: string, config?: object) =>
  useQuery(
    [CommentFetchEnum.comment],
    async () => await getComments({id}),
    config,
  );
