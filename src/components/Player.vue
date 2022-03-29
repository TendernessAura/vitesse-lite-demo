<template>
    <div bg-black bg-opacity-40 px-10 py-3 class="w-4/5 h-1/11">
        <img w40px h40px :src="store.playerList[store.songIndex].imgUrl" alt="song img" />
        <p
            w250px
            mx-3
            my-1
            text-white
            text-lg
        >{{ store.playerList[store.songIndex].name }}-{{ store.playerList[store.songIndex].songer }}</p>
        <audio
            @timeupdate="timeupdate"
            @canplay="getDuration"
            :src="store.playerList[store.songIndex].url"
            ref="audio"
            id="audio"
        ></audio>
        <div @click="prevPlay" hover:bg-green text-4xl i-ic:baseline-skip-previous text-white></div>
        <div @click="audioPlay" v-show="show" text-4xl text-green i-ic:baseline-play-circle></div>
        <div @click="pause" v-show="!show" text-4xl text-green i-ic:baseline-pause-circle></div>
        <div @click="nextPlay" hover:bg-green text-4xl i-ic:baseline-skip-next text-white></div>
    </div>
</template>
    
<script setup lang='ts'>
import { useStore } from '~/pinia'

const store = useStore()
const audio = ref()


let show = ref(false)

onMounted(() => {
    audio.value.play()
})

function audioPlay() {
    console.log('play');
    show.value = false
    audio.value.play()

}
function pause() {
    show.value = true
    console.log('pause');
    audio.value.pause()

}
function prevPlay() {
    store.songIndex = store.songIndex === 0 ? store.playerList.length - 1 : store.songIndex - 1;
    nextTick(() => {
        audioPlay();
    });
};

function nextPlay() {
    store.songIndex = store.songIndex === store.playerList.length - 1 ? 0 : store.songIndex + 1;
    nextTick(() => {
        audioPlay();
    });
};
function timeupdate(e: any) {
    store.currentTime = e.target.currentTime;
    if (store.currentTime === store.endTime) {
        nextPlay();
    }
}
function getDuration() {
    store.endTime = audio.value.duration;
}

watch(store.playerList, () => {
    console.log(store.playerList);

    if (store.playerList[0]) {
        console.log(store.playerList[store.songIndex].name);
        nextTick(() => {
            audio.value.play()
        })
    }

})

</script>
    
