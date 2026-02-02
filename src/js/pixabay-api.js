import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '54481112-a3a8a3fb25008535c9ae0a8c2';

export function getImagesByQuery(query) {
  return axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(res => res.data);
}
