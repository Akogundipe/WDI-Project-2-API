const axios = require('axios')

const TOKEN = process.env.REACT_APP_TOKEN;

const BASE_URL = `http://aviation-edge.com/v2/public/flights?key=${TOKEN}&limit=100`;

const getFlights = async () => {
  const resp = await axios.get(`http://aviation-edge.com/v2/public/flights?key=${TOKEN}`)
  return resp.data
}

const getArrivals = async (code) => {
  const resp = await axios.get(`http://aviation-edge.com/v2/public/timetable?key=${TOKEN}&icaoCode=${code}&type=arrival`)
  return resp.data
}

  const getDepartures = async (code) => {
    const resp = await axios.get(`http://aviation-edge.com/v2/public/timetable?key=${TOKEN}&icaoCode=${code}&type=departure`)
    return resp.data
  }

  const getAirports = async () => {
    const resp = await axios.get(`https://aviation-edge.com/v2/public/airportDatabase?key=${TOKEN}`)
    return resp.data
  }


export { getFlights, getDepartures, getAirports, getArrivals };
