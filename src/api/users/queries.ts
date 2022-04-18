import {useQuery} from 'react-query';
import {getUser} from './api';

export const useUser = (id: string, config?: object) =>
  useQuery(['fetchUser'], async () => await getUser({id}), config);
