import * as React from 'react';
import { useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FeedScreen from './screens/FeedScreen';
import { type RootStackParamList, Routes } from './routes';
import DetailsScreen from './screens/DetailsScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

function AppNavigation(): React.JSX.Element {
  const { colors } = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{ headerStyle: { backgroundColor: colors.background } }}
    >
      <Stack.Screen name={Routes.Feed} component={FeedScreen} />
      <Stack.Screen name={Routes.Details} component={DetailsScreen} />
    </Stack.Navigator>
  );
}

export default AppNavigation;
