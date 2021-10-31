import axios from 'axios';

export const todos = axios.create({
    baseURL: " http://localhost:3051/todos",
});