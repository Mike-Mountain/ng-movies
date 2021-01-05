import {apiKey, ombdApiKey, youtubeApiKey} from './token.const';

export const environment = {
  production: false,
  apiUrl: 'https://api.themoviedb.org/3',
  key: apiKey,
  omdbApiUrl: 'https://www.omdbapi.com/',
  omdbKey: ombdApiKey,
  ytKey: youtubeApiKey
};
