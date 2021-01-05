import {apiKey, ombdApiKey, youtubeApiKey} from './token.const';

export const environment = {
  production: true,
  apiUrl: 'https://api.themoviedb.org',
  key: apiKey,
  omdbApiUrl: 'https://www.omdbapi.com/',
  omdbKey: ombdApiKey,
  ytKey: youtubeApiKey
};
