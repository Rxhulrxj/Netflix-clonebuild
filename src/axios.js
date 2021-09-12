import axios from 'axios'
import {baseUrl} from './constants/constants'

const instance = axios.create({
    baseUrl: baseUrl,
});

export default instance;