import axios from 'axios'

const musicApi = axios.create({
    baseURL: 'https://netease-cloud-music-api-cyan-zeta.vercel.app'
})

//获取推荐歌单
export const getPersonAlized = () => musicApi.get('/personalized')

//获取歌单详情
export const getPlayList = (id: number) =>
    musicApi({
        method: 'get',
        url: '/playlist/detail',
        params: {
            id,
            s: 0
        }
    })
//获取歌曲详情
export const getSongInfo = (ids: string) =>
    musicApi({
        method: 'get',
        url: '/song/detail',
        params: {
            ids
        }
    })
