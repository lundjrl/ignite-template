<template>
  <h1>Home</h1>
  <Button label="Submit" />

  <!-- Example TW style -->
  <div class="h-4 w-4 bg-amber-600"></div>

  <Card>
    <template #title>Simple Card</template>
    <template #content>
      <p class="font-bold">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed
        consequuntur error repudiandae numquam deserunt quisquam repellat libero
        asperiores earum nam nobis, culpa ratione quam perferendis esse,
        cupiditate neque quas!
      </p>
    </template>
  </Card>
</template>

<script setup lang="ts">
import Button from "primevue/button";
import Card from "primevue/card";
</script>
