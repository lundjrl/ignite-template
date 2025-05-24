<script setup lang="ts">
import { Heading } from 'components/typography/heading'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from 'components/ui/command'
</script>

<template>
  <div class="flex flex-col">
    <Heading as="h2">
      Command Bars
    </Heading>
    <div class="p-4">
      <Command>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem value="calendar">
              Calendar
            </CommandItem>
            <CommandItem value="search-emoji">
              Search Emoji
            </CommandItem>
            <CommandItem value="calculator">
              Calculator
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem value="profile">
              Profile
            </CommandItem>
            <CommandItem value="billing">
              Billing
            </CommandItem>
            <CommandItem value="settings">
              Settings
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  </div>
</template>
