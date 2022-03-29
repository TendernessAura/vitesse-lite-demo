<template>
    <div bg-black bg-opacity-40 class="w-4/5 h-9/11" overflow-auto>
        <div h-200px w-full py-4 px-10>
            <img rounded-lg w-170px h-170px :src="store.playList.coverImgUrl" alt="playList logo" />
            <h1 mx-5 text-4xl text-white w-490px h-40px truncate>{{ store.playList.name }}</h1>
            <img
                ml-5
                my-3
                w-25px
                h-25px
                rounded-full
                :src="store.playList.creator.avatarUrl"
                alt="user logo"
            />
            <p text-white w100px my-3 ml-2>{{ store.playList.creator.nickname }}</p>
            <ul text-white my-3 ml-2>
                <li mx-2 v-for="tag in store.playList.tags">#{{ tag }}</li>
            </ul>
            <p text-white w-490px h-25px mx-5 truncate>{{ store.playList.description }}</p>

            <div
                @click="playAll"
                hover:bg-green-500
                bg-gray-100
                bg-opacity-20
                text-white
                text-sm
                w-100px
                h-30px
                py1
                mx-5
                my-5
                rounded-2xl
                px-3
            >
                <div i-ph:play></div>
                <p>播放全部</p>
            </div>

            <div
                hover:bg-green-500
                text-white
                text-sm
                w-100px
                h-30px
                py1
                bg-gray-100
                bg-opacity-20
                mx-5
                my-5
                rounded-2xl
                px-6
            >
                <div i-ph:heart></div>
                <p>收藏</p>
            </div>
        </div>
        <table wfull class="table-fixed">
            <thead wfull text-left pl-10 text-gray>
                <tr wfull>
                    <th class="w1/2">歌曲</th>
                    <th class="w1/6">歌手</th>
                    <th class="w1/6">专辑</th>
                    <th class="w1/6">时长</th>
                </tr>
            </thead>
            <tbody wfull text-white>
                <tr
                    @dblclick="play(index)"
                    wfull
                    text-left
                    pl-10
                    v-for="(song, index) in store.songInfo"
                    :key="index"
                >
                    <td class="w1/2" truncate>{{ song.name }}</td>
                    <td class="w1/6" truncate>{{ song.ar[0].name }}</td>
                    <td class="w1/6" truncate>{{ song.al.name }}</td>
                    <td class="w1/6">{{ formaTime(song.dt) }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
    
<script setup lang='ts'>
import { useStore } from '~/pinia'

const route = useRoute()
const store = useStore()

function formaTime(mstime: number): string {
    let time = Math.floor(mstime / 1000)
    let minute = Math.floor(time / 60)
    let second = time % 60
    return `${minute}:${second}`
}

store.setPlayList(route.query.id as unknown as number)

function play(index: number) {
    store.playerList.push({
        name: store.songInfo[index].name,
        songer: store.songInfo[index].ar[0].name,
        url: store.songUrlList[index],
        imgUrl: store.songInfo[index].al.picUrl
    })
    store.songIndex = store.playerList.length - 1
}
function playAll() {
    store.playerList = []
    store.songInfo.forEach((item, index) => {
        store.playerList.push({
            name: item.name,
            songer: item.ar[0].name,
            url: store.songUrlList[index],
            imgUrl: store.songInfo[index].al.picUrl
        })
    })
    store.songIndex = 0

}

</script>
