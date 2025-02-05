import { defineStore } from "pinia"
import { ref } from 'vue'

const store = () => {
    const count = ref<number>(0)

    return { count }
}

export const useGlobalStore = defineStore('global', store)