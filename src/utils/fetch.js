import axios from 'axios';
import secureLocalStorage from 'react-secure-storage';
import { LANGUAGE, getLanguage } from './language';

const apiUrl = import.meta.env.VITE_API_URL;
const sessionKeyUser = import.meta.env.VITE_SESSION_KEY_USER;
const sessionKeyToken = import.meta.env.VITE_SESSION_KEY_TOKEN;
const defaultAccept = {
  Accept: 'applicaton/json'
};

const defaultLanguage = {
  'Accept-Language':
    getLanguage() === LANGUAGE.ID ? 'id, en;q=0.7' : 'en, id:q=0.7',
  'Content-Language': 'id'
};

const defaultType = {
  'Content-Type': 'application/json'
};

const defaultHeaders = {
  ...defaultAccept,
  ...defaultLanguage,
  ...defaultType
};

const getBearerToken = () => {
  const token = secureLocalStorage.getItem(sessionKeyToken);
  return token ? `Bearer ${token}` : '';
};

const fetchClient = () => {
  const defaultOptions = {
    baseURL: apiUrl,
    method: 'get',
    headers: defaultHeaders
  };

  // Create instance
  let instance = axios.create(defaultOptions);

  // Set the AUTH token for any request
  instance.interceptors.request.use(function (config) {
    config.headers.Authorization = getBearerToken();
    return config;
  });

  return instance;
};

export {
  fetchClient,
  getBearerToken,
  sessionKeyUser,
  sessionKeyToken,
  apiUrl,
  defaultAccept,
  defaultLanguage,
  defaultType,
  defaultHeaders
};
