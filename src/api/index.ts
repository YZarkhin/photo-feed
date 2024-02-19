import axios from 'axios';

const queryClient = axios.create({
  baseURL: 'https://api.pexels.com/v1',
  headers: {
    Authorization: 'f7RfOCdEX3mlEAjbX93hhgTnE3snRNkLSzPSELRig1n7mvkBj4PqwV9o',
  },
});
type GetPhotosProps = {page: number; perPage?: number};

const getPhotos = ({page, perPage = 15}: GetPhotosProps) =>
  queryClient.get('/curated', {params: {page, per_page: perPage}});
