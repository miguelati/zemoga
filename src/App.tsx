import React from 'react';
import {NativeBaseProvider} from 'native-base';
import Config from 'react-native-config';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from 'react-query';
import {RouterStack} from '~configs/Router';
import {configureClient} from '~api/client';

configureClient({
  baseURL: Config.API_URL,
});

const queryClient = new QueryClient();

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
