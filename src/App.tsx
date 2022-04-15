import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from 'react-query';
import {RouterStack} from '~configs/Router';

const queryClient = new QueryClient();

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <QueryClientProvider client={queryClient}>
          <RouterStack />
        </QueryClientProvider>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};
export default App;
