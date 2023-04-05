import axios from 'axios';
import { LOCAL_HOST, API_URL } from '@env';

const URL = process.env.NODE_ENV === 'development' ? LOCAL_HOST : API_URL;

const TechTalkApi = axios.create({
  baseURL: URL,
});
export default TechTalkApi;