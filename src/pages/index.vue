<template>
    <div bg-opacity-40 bg-black text-white class="w-4/5 h-9/11">
        <div class="w-full h-full" p-5>
            <h1 text-3xl class="w-full h1/8">推荐</h1>
            <p text-2xl class="w-full h1/10">Hi,今日为你推荐</p>
            <div class="w-full h-400px" flex flex-row flex-wrap gap-x-7 gap-y-10 overflow-auto>
                <div
                    @click="goSongList(item.id)"
                    mt-1
                    class="w-125px h-125px"
                    v-for="item in store.personAlizedList"
                >
                    <img class="-hover:mt-1" h-full :src="item.picUrl" alt="推荐" />
                    <p w-125px truncate>{{ item.name }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
import { useRouter } from 'vue-router';
import { useStore } from '~/pinia'

const store = useStore()
const router = useRouter()
function goSongList(id: number) {
    router.push({
        path: '/playList',
        query: {
            id
        }
    })

}

</script>
    
<style>
</style>