import axios from 'axios';

axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.get['Content-Type'] ='application/json;charset=utf-8';

const api = axios.create ({
  baseURL: 'http://127.0.0.1:8081',
});

export default api;
