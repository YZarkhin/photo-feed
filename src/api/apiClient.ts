import axios from 'axios';
import { PEXELS_API_KEY } from '@env';
import { type Photo } from './types';
import { QueryKey } from 'react-query';

type GetPhotosResponseData = {
  page: number;
  per_page: number;
  photos: Photo[];
  next_page: string;
};

type GetPhotosQueryProps = [string, Record<string, unknown>];

const apiClient = axios.create({
  baseURL: 'https://api.pexels.com/v1',
  headers: {
    Authorization: PEXELS_API_KEY,
  },
});

export const getPhotos = ({ queryKey }: { queryKey: QueryKey }) => {
  const [_key, { page, perPage }] = queryKey as GetPhotosQueryProps;

  return apiClient
    .get('/curated', { params: { page, per_page: perPage } })
    .then((res) => res.data as GetPhotosResponseData);
};
