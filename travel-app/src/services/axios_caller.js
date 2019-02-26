const axios = require('axios')

const TOKEN = process.env.REACT_APP_TOKEN;

const BASE_URL = `http://aviation-edge.com/v2/public/flights?key=${TOKEN}&limit=100`;

/*const getPorts = async () => {
  try {
    return await axios.get(`http://aviation-edge.com/v2/public/flights?key=${TOKEN}&limit=5`)
  } catch (error) {
    console.error(error)
  }
}

export  { getPorts };*/

const getPorts = async () => {
  const resp = await axios.get(`http://aviation-edge.com/v2/public/flights?key=${TOKEN}&limit=5`)
  return resp.data
}

export  { getPorts };
