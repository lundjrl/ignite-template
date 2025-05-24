<script setup lang="ts">
import { Heading } from 'components/typography/heading'
import { Alert, AlertDescription, AlertTitle } from 'components/ui/alert'
import { Rocket } from 'lucide-vue-next'
</script>

<template>
  <div class="flex flex-col">
    <Heading as="h2">
      Alerts
    </Heading>
    <div class="p-4">
      <Alert>
        <Rocket class="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>
    </div>
    <div class="p-4">
      <Alert variant="destructive">
        <AlertCircle class="w-4 h-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Your session has expired. Please log in again.
        </AlertDescription>
      </Alert>
    </div>
  </div>
</template>
