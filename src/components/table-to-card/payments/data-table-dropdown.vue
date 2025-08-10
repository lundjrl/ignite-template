<script setup lang="ts">
import type { Payment } from '../dummy-data'
import { MoreHorizontal } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

defineProps<{
  payment: Payment
}>()

defineEmits<{
  (e: 'expand'): void
}>()

const copy = (id: string) => {
  navigator.clipboard.writeText(id)
}
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="ghost" class="w-8 h-8 p-0">
        <span class="sr-only">Open menu</span>
        <MoreHorizontal class="w-4 h-4" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuLabel>Actions</DropdownMenuLabel>

      <DropdownMenuItem>View details</DropdownMenuItem>
      <DropdownMenuItem>Edit</DropdownMenuItem>
      <DropdownMenuItem>Delete</DropdownMenuItem>

      <DropdownMenuSeparator />

      <DropdownMenuItem @click="copy(payment.email)">
        Copy email
      </DropdownMenuItem>
      <DropdownMenuItem @click="copy(payment.phone)">
        Copy phone
      </DropdownMenuItem>
      <DropdownMenuItem @click="$emit('expand')">
        Expand
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
