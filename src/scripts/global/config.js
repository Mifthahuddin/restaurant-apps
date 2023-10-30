const CONFIG = {
  BASE_URL: 'https://restaurant-api.dicoding.dev',
  LIST_URL: 'https://restaurant-api.dicoding.dev/list',
  IMAGE: 'https://restaurant-api.dicoding.dev/images/large/<pictureId>',
  DETAIL: 'https://restaurant-api.dicoding.dev/detail/:id',
  SEARCH: 'https://restaurant-api.dicoding.dev/search?q=<query>',
  CACHE_NAME: new Date().toISOString(),
  DEFAULT_LANGUAGE: 'en-us',
  DATABASE_NAME: 'restaurant-database',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'restaurant',
};

export default CONFIG;
