import axios from 'axios';

const BASE_URL = 'http://localhost:4000';

const get = path => axios.get(BASE_URL + path);

export default {
  get,
}