import client from '../client';

interface CommentParams {
  id: string;
}

export const getComments = async (params: CommentParams) => {
  const onSuccess = (response: any) => {
    const {data} = response;
    return data;
  };
  const onError = (error: Error) => {
    return Promise.reject(error);
  };
  return client
    .get(`/posts/${params.id}/comments`)
    .then(onSuccess)
    .catch(onError);
};
