import { defineStore } from 'pinia'
import { Result, Playlist, Song, playerList } from './type'
import { getPersonAlized, getPlayList, getSongInfo } from '~/ajax'

export const useStore = defineStore({
    id: 'musicStore',
    state: () => ({
        personAlizedList: <Result[]>[],
        playList: <Playlist>{},
        songInfo: <Song[]>[],
        trackIds: <number[]>[],
        songUrlList: <string[]>[],
        songIndex: 0,
        playerList: <playerList[]>[],
        currentTime: '',
        endTime: ''
    }),
    actions: {
        async setPersonAlizedList() {
            let result = await getPersonAlized()
            this.personAlizedList = result.data.result
        },
        async setPlayList(id: number) {
            let result = await getPlayList(id)
            console.log(result, 'setPlayList')
            this.playList = result.data.playlist
            this.trackIds = []
            this.songUrlList = []
            this.playList.trackIds.forEach((item) => {
                this.trackIds.push(item.id)
            })
            this.playList.trackIds.forEach((item) => {
                this.songUrlList.push(
                    `https://music.163.com/song/media/outer/url?id=${item.id}.mp3`
                )
            })
            this.setSongInfo()
        },
        async setSongInfo() {
            let result = await getSongInfo(this.trackIds.toString())
            console.log(result, 'setSongInfo')
            this.songInfo = result.data.songs
        }
    },
    getters: {}
})
