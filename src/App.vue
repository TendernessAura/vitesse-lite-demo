<template>
  <main w-1006px h-676px bg-green-500>
    <Nav />
    <Search />
    <router-view></router-view>
    <Player v-if="store.playerList[0]" />
  </main>
</template>
<script setup lang="ts">
import { useStore } from './pinia'

const store = useStore()
store.setPersonAlizedList()


</script>