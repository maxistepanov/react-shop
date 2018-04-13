const API_DEV_URI = "http://lara.local/api";
const API_PROD_URI = "https://api.url.prod/1.0";

export const env = {
  DEBUG: process.env.NODE_ENV !== 'production',
  API_URI: process.env.NODE_ENV === 'production' ? API_PROD_URI : API_DEV_URI,
};