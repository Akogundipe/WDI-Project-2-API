const axios = require('axios')

const TOKEN = process.env.REACT_APP_TOKEN;
const BASE_URL = `http://aviation-edge.com/v2/public/flights?key=${TOKEN}&limit=100`;

const getPorts = async () => {
  try {
    return await axios.get(`http://aviation-edge.com/v2/public/flights?key=${TOKEN}&limit=100`)
  } catch (error) {
    console.error(error)
  }
}

export  { getPorts };

/*import axios from 'axios';

const TOKEN = process.env.REACT_APP_TOKEN;
const BASE_URL = 'https://newsapi.org/v2';

const getNews = async() => {
  const resp = await axios(`${BASE_URL}/top-headlines?country=us&apiKey=${TOKEN}`)
  return resp.data.articles
}

export {getNews}*/
