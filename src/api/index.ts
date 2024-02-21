import { useQuery } from 'react-query';
import { type Photo, type GetPhotosProps } from './types';
import { getPhotos } from './apiClient';

export const useGetPhotosQuery = ({ page, perPage }: GetPhotosProps) =>
  useQuery<{ photos: Photo[] }>(['getPhotos', { page, perPage }], getPhotos);
