<script setup lang="ts">
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
    <div class="border p-4 gap-5 flex">
      <Dialog>
        <DialogTrigger>
          Edit Profile
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>

          <DialogFooter>
            Save changes
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  </div>
</template>
