import { defineStore } from 'pinia'
import { ref } from 'vue'

function store() {
  const count = ref<number>(0)

  return { count }
}

export const useGlobalStore = defineStore('global', store)
