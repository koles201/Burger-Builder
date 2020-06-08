import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-2cb7d.firebaseio.com/'
});

export default instance;