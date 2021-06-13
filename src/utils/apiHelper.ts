import axios from 'axios';

const apiHelper = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    timeout: 10000
});

export default apiHelper;
