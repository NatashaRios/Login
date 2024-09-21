import React, { FC } from 'react';
import { RootNavigation } from '../src/navigation';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '@/redux';
import { Loader } from '@/components';

const queryClient = new QueryClient();

const App: FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <RootNavigation />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
