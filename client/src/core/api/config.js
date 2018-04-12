import { ajax } from 'rxjs/observable/dom/ajax';

const DOMAIN = window.location.host || 'localhost';
const BASE_URL = `http://${DOMAIN}:4000/api`;

const get = path => ajax.getJSON(BASE_URL + path);
const post = (path, body) => ajax.post(BASE_URL + path, body);
const remove = (path) => ajax.delete(BASE_URL + path);
const put = (path, body) => ajax.put(BASE_URL + path, body);

export default {
  get,
  post,
  remove,
}