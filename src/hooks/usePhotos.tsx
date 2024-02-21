import { useEffect, useState } from 'react';
import { Photo } from '../api/types';
import { useGetPhotosQuery } from '../api';

const usePhotos = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [photos, setPhotos] = useState<Photo[]>([]);

  const { data, isFetching, refetch } = useGetPhotosQuery({
    page: currentPage,
    perPage: 10,
  });

  useEffect(() => {
    if (data?.photos && !isFetching) {
      setPhotos((previousData) => [...previousData, ...data.photos]);
    }
  }, [data, isFetching]);

  const refresh = async () => {
    setPhotos([]);

    if (currentPage === 1) {
      await refetch();
    }

    setCurrentPage(1);
  };

  const loadMore = () => {
    setCurrentPage((previousValue) => previousValue + 1);
  };

  return { photos, loadMore, refresh, isFetching };
};

export default usePhotos;
