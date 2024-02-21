import { type RouteProp, useRoute } from '@react-navigation/native';
import { Image } from 'react-native';

import { RootStackParamList, Routes } from '../routes';

const DetailsScreen = () => {
  const { params } = useRoute<RouteProp<RootStackParamList, Routes.Details>>();
  return (
    <Image source={{ uri: params.photoUrl }} style={{ flex: 1 }} />
  );
};

export default DetailsScreen;
