import Axios from 'axios'
import { baseURL } from '../env'
import { logger } from "../utils/Logger.js"

export const api = Axios.create({
  baseURL,
  timeout: 8000
})
// export const skiApi = Axios.create({
//   url: 'ski-resorts-and-conditions.p.rapidapi.com',
//   timeout: 8000,
//   params: { 'X-RapidAPI-Key': '78e7192ec6msh48c15f798e8ac55p11fd37jsne3241c04a79f' }

// })
// export const skiApi = Axios.create({
//   baseURL: 'https://ski-resorts-and-conditions.p.rapidapi.com/v1',
//   timeout: 8000,
//   headers: {
//     'X-RapidAPI-Key': '78e7192ec6msh48c15f798e8ac55p11fd37jsne3241c04a79f', //'9122ea96bdmsh75e5c4d9204e860p1e7a0bjsnbf1057d47686',
//     'X-RapidAPI-Host': 'ski-resorts-and-conditions.p.rapidapi.com'
//   }
// })

api.interceptors.request.use(config => config, handleAxiosError)
api.interceptors.response.use(response => response, handleAxiosError)

function handleAxiosError(error) {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    logger.warn('[📡 AXIOS_ERROR_RESPONSE_DATA]', error.response.data)
  } else if (error.request) {
    // The request was made but no response was received
    logger.warn('[📡 AXIOS_ERROR_NO_RESPONSE]', error.request)
  } else {
    // Something happened in setting up the request that triggered an Error
    logger.warn('[📡 AXIOS_ERROR_INVALID_REQUEST]', error.message)
  }
  return Promise.reject(error)
}
