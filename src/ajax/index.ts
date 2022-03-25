import axios from 'axios'

const musicApi = axios.create({
    baseURL: 'https://netease-cloud-music-api-cyan-zeta.vercel.app'
})

export const getPersonAlized = () => musicApi.get('/personalized')
