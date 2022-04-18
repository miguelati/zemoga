import {useQuery} from 'react-query';
import {getUser} from './api';

export enum UserFetchEnum {
  user = 'fetchUser',
}

export const useUser = (id: string, config?: object) =>
  useQuery([UserFetchEnum.user], async () => await getUser({id}), config);
