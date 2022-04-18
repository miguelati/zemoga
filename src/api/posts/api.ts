import client from '../client';

interface PostParams {
  id: string;
}

export const getPosts = async () => {
  const onSuccess = (response: any) => {
    const {data} = response;
    return data;
  };
  const onError = (error: Error) => {
    return Promise.reject(error);
  };
  return client.get('/posts').then(onSuccess).catch(onError);
};

export const getPost = async (params: PostParams) => {
  const onSuccess = (response: any) => {
    const {data} = response;
    return data;
  };
  const onError = (error: Error) => {
    return Promise.reject(error);
  };
  return client.get(`/posts/${params.id}`).then(onSuccess).catch(onError);
};
