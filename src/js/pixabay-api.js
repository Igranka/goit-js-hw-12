import axios from 'axios';

export async function http(term, page) {
  const axiosInstance = axios.create({
    baseURL: 'https://pixabay.com/api/',
    params: {
      key: '43250686-c1e1dda9f99928fc2eb99e4d5',
      q: term,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: page,
      per_page: 15,
    },
  });

  const response = await axiosInstance.get('');
  return response.data;
}