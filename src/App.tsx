import React from 'react';
import {NativeBaseProvider} from 'native-base';
import Config from 'react-native-config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from 'react-query';
import {persistQueryClient} from 'react-query/persistQueryClient-experimental';
import {createAsyncStoragePersistor} from 'react-query/createAsyncStoragePersistor-experimental';
import {RouterStack} from '~configs/Router';
import {configureClient} from '~api/client';

configureClient({
  baseURL: Config.API_URL,
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 60 * 48,
    },
  },
});

const asyncStoragePersistor = createAsyncStoragePersistor({
  key: '@react-query-persist',
  storage: AsyncStorage,
});

persistQueryClient({
  queryClient,
  persistor: asyncStoragePersistor,
});

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <QueryClientProvider client={queryClient} contextSharing>
          <RouterStack />
        </QueryClientProvider>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};
export default App;
