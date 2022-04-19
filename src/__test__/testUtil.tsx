import React from 'react';
import {render} from '@testing-library/react-native';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

interface AllTheProvidersProps {
  children: JSX.Element;
}

const AllTheProviders = ({children}: AllTheProvidersProps) => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <QueryClientProvider client={queryClient} contextSharing>
          {children}
        </QueryClientProvider>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

const customRender = (ui: any, options?: object) =>
  render(ui, {wrapper: AllTheProviders, ...options});

// re-export everything
export * from '@testing-library/react-native';

// override render method
export {customRender as render};
