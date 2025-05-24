<script setup lang="ts">
import { Heading } from 'components/typography/heading'

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
import { ref } from 'vue'
import { cn } from '@/lib/utils'

const jobs = [
  { value: '25-343434', label: 'Amway' },
  { value: '25-343435', label: 'Stellas' },
  { value: '25-343436', label: 'Two Beards' },
  { value: '25-343437', label: 'Pyramid Scheme' },
  { value: '25-343438', label: 'Start Garden' },
  { value: '25-343438', label: 'The Factory' },
  { value: '25-343439', label: 'Founders' },
  { value: '25-343440', label: 'Parsley' },
  { value: '25-343441', label: 'Brick & Porter' },
  { value: '25-343442', label: 'San Chez' },
  { value: '25-343443', label: 'Char' },
  { value: '25-343444', label: 'Pind' },
  { value: '25-343445', label: 'Bistro Bella Vita' },
  { value: '25-343446', label: 'Barrio' },
]

const open = ref(false)
const value = ref('')
</script>

<template>
  <div class="flex flex-col">
    <Heading as="h2">
      Comboboxes
    </Heading>
    <div class="p-4">
      <Popover v-model:open="open">
        <PopoverTrigger as-child>
          <Button
            variant="outline"
            role="combobox"
            :aria-expanded="open"
            class="w-[200px] justify-between"
          >
            {{ value ? jobs.find((job) => job.value === value)?.label : 'Select job...' }}

            <ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent class="w-[200px] p-0">
          <Command v-model="value">
            <CommandInput placeholder="Search jobs..." />
            <CommandEmpty>No job found.</CommandEmpty>
            <CommandList>
              <CommandGroup>
                <CommandItem
                  v-for="job in jobs"
                  :key="job.value"
                  :value="job.value"
                  @select="open = false"
                >
                  <Check
                    :class="cn(
                      'mr-2 h-4 w-4',
                      value === job.value ? 'opacity-100' : 'opacity-0',
                    )"
                  />
                  {{ job.label }}
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  </div>
</template>
