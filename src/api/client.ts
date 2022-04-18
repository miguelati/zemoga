import axios, {AxiosInstance} from 'axios';

const client: AxiosInstance = axios.create();

interface ConfigurationOptions {
  baseURL: string;
}

export const configureClient: (p: ConfigurationOptions) => void = ({
  baseURL,
}) => {
  client.interceptors.request.use(async config => {
    // sets baseURL on every request
    config.baseURL = baseURL;
    config.headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    return config;
  });
};

export default client;
