/**
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { AppRegistry } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClientProvider } from 'react-query';

import { name as appName } from './app.json';
import AppNavigation from './src/AppNavigation';
import { queryClient } from './src/api/queryClient';

const AppProviders = () => {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <AppNavigation />
        </NavigationContainer>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
};

AppRegistry.registerComponent(appName, () => AppProviders);
