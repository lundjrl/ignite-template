<script setup lang="ts">
import { useDebounceFn } from '@vueuse/core'
import Paragraph from 'components/typography/paragraph/paragraph.vue'
import { Button } from 'components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from 'components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from 'components/ui/popover'
import { Check, ChevronsUpDown } from 'lucide-vue-next'
import { getProducts, searchProducts } from 'services/models/product-example'
import { noOp } from 'utils/noOp'
import { onBeforeMount, ref, shallowRef, watch } from 'vue'
import {
  VueSpinnerDots,
} from 'vue3-spinners'
import { cn } from '@/lib/utils'

const openRef = shallowRef<boolean>(false)
const inputRef = ref<string>('')
const value = ref(null)
const products = ref<Record<string, string>[]>([])
const loading = ref<boolean>(false)

onBeforeMount(async () => {
  products.value = await getProducts()
})

const debounceSearch = useDebounceFn(async () => {
  loading.value = true
  products.value = await searchProducts(inputRef.value)
  loading.value = false
}, 500, { maxWait: 3000 })

watch(inputRef, () => {
  debounceSearch()
})
</script>

<template>
  <Popover v-model:open="openRef">
    <PopoverTrigger as-child>
      <Button
        variant="outline"
        role="combobox"
        :aria-expanded="openRef"
        class="w-[200px] justify-between overflow-hidden text-ellipsis"
      >
        <Paragraph as="pg-sm" class="text-ellipsis overflow-hidden">
          {{ value ? products.find((item) => item.id === value)?.title : 'Select item...' }}
        </Paragraph>

        <ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
      </Button>
    </PopoverTrigger>
    <PopoverContent class="w-[200px] p-0">
      <Command v-model="value">
        <CommandInput v-model="inputRef" :auto-focus="true" placeholder="Search items..." />
        <CommandEmpty>No items found.</CommandEmpty>
        <CommandList>
          <CommandGroup>
            <CommandItem
              v-for="item in products"
              :key="item.id"
              :value="item.id"
              @select="openRef = false"
            >
              <Check
                :class="cn(
                  'mr-2 h-4 w-4',
                  value === item.id ? 'opacity-100' : 'opacity-0',
                )"
              />
              {{ item.title }}
            </CommandItem>
            <CommandItem v-if="loading" key="loader" :value="null" @select="noOp">
              <div v-if="loading" class="flex p-2 items-center justify-center w-full">
                <VueSpinnerDots size="20" color="#000000" />
              </div>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </PopoverContent>
  </Popover>
</template>
