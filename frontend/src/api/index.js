import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();
const url = (process.env.NODE_ENV !== 'production')
  ? 'http://localhost:5000'
  : 'https://rlu-react17-ecommerce.herokuapp.com';
export const API = axios.create({ baseURL: url });
