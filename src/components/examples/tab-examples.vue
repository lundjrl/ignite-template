<script setup lang="ts">
import { Heading } from 'components/typography/heading'
import { Paragraph } from 'components/typography/paragraph'
import { Tabs, TabsContent, TabsList, TabsTrigger } from 'components/ui/tabs'
</script>

<template>
  <div class="flex flex-col">
    <Heading as="h2">
      Tabs
    </Heading>
    <div class="border p-4 gap-5 flex">
      <Tabs default-value="firstValue" class="w-[400px]">
        <TabsList class="grid w-full grid-cols-2">
          <TabsTrigger value="firstValue">
            Tab 1
          </TabsTrigger>
          <TabsTrigger value="secondValue">
            Tab 2
          </TabsTrigger>
        </TabsList>
        <TabsContent value="firstValue">
          <Paragraph>Content of Tab 1</Paragraph>
        </TabsContent>
        <TabsContent value="secondValue">
          <Paragraph>Content of Tab 2</Paragraph>
        </TabsContent>
      </Tabs>
    </div>
  </div>
</template>
