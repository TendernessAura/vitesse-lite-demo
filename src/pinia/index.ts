import { defineStore } from 'pinia'
import { Result } from './type'
import { getPersonAlized } from '~/ajax'

export const useStore = defineStore({
    id: 'musicStore',
    state: () => ({
        personAlizedList: <Result[]>[]
    }),
    actions: {
        async getPersonAlizedlist() {
            const result = await getPersonAlized()
            this.personAlizedList = result.data.result
        }
    },
    getters: {}
})
