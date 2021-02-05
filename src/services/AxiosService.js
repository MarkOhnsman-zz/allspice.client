import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://allspice-api.herokuapp.com/api'
})
