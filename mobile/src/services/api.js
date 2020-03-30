import axios from 'axios';

const api = axios.create({
     //baseURL: 'http://192.168.1.6:19000:3333'//exp://192.168.1.6:19000
     baseURL: 'http://localhost:3333/'
});


export default api;