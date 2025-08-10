<script setup lang="ts">
import { Heading } from 'components/typography/heading'
import Button from 'components/ui/button/Button.vue'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from 'components/ui/dialog'
</script>

<template>
  <div class="flex flex-col">
    <Heading as="h2">
      Dialogs
    </Heading>
    <div class="p-4 gap-5 flex">
      <Dialog>
        <DialogTrigger>
          <Button>Edit Profile</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <Button>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  </div>
</template>
