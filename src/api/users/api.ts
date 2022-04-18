import client from '../client';

interface UserParams {
  id: string;
}

export const getUser = async (params: UserParams) => {
  const onSuccess = (response: any) => {
    const {data} = response;
    return data;
  };
  const onError = (error: Error) => {
    return Promise.reject(error);
  };
  return client.get(`/users/${params.id}`).then(onSuccess).catch(onError);
};
