/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import {
  NavigationProp,
  useNavigation,
  useTheme,
} from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import { useGetPhotosQuery } from '../api';
import { Photo } from '../api/types';
import { RootStackParamList, Routes } from '../routes';
import usePhotos from '../hooks/usePhotos';

const FeedItem = ({ item, onPress }: { item: Photo; onPress: () => void }) => (
  <TouchableOpacity onPress={onPress} style={[styles.cell]}>
    <Image source={{ uri: item.src.medium }} style={styles.image} />
    <Text style={styles.photographer}>{item.photographer}</Text>
  </TouchableOpacity>
);

const FeedScreen = () => {
  const { navigate } =
    useNavigation<NavigationProp<RootStackParamList, Routes.Feed>>();
  const { colors } = useTheme();
  const { photos, loadMore, refresh, isFetching } = usePhotos();

  const backgroundStyle = {
    backgroundColor: colors.background,
  };

  return (
    <FlatList
      data={photos}
      renderItem={({ item }) => (
        <FeedItem
          item={item}
          onPress={() =>
            navigate(Routes.Details, { photoUrl: item.src.portrait })
          }
        />
      )}
      keyExtractor={(item, index) =>
        `${item.id}_${item.photographer_id}_${index}`
      }
      maxToRenderPerBatch={5}
      contentInsetAdjustmentBehavior="automatic"
      style={[styles.flatList, backgroundStyle]}
      contentContainerStyle={styles.flatListContainer}
      onEndReached={loadMore}
      onRefresh={refresh}
      refreshing={isFetching}
    />
  );
};

const styles = StyleSheet.create({
  headerText: {
    paddingHorizontal: 24,
    fontSize: 24,
    fontWeight: '600',
  },
  flatList: {
    flex: 1,
    padding: 16,
  },
  flatListContainer: {
    gap: 40,
  },
  cell: {
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: 'white',
    padding: 16,
    gap: 16,
  },
  image: {
    height: 250,
    width: '100%',
    borderRadius: 16,
  },
  photographer: {
    fontSize: 15,
  },
});

export default FeedScreen;
