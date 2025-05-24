<script setup lang="ts">
import AccordionExampleSection from 'components/examples/accordion-examples.vue'
import AlertExampleSection from 'components/examples/alert-examples.vue'
import BadgeExampleSection from 'components/examples/badge-examples.vue'
import ButtonExampleSection from 'components/examples/button-examples.vue'
import CheckboxExampleSection from 'components/examples/checkbox-examples.vue'
import ComboboxExampleSection from 'components/examples/combobox-examples.vue'
import CommandExampleSection from 'components/examples/command-examples.vue'
import DialogExampleSection from 'components/examples/dialog-examples.vue'
import HeadingExampleSection from 'components/examples/heading-examples.vue'
import InputExampleSection from 'components/examples/input-examples.vue'
import LabelExampleSection from 'components/examples/label-examples.vue'
import ParagraphExampleSection from 'components/examples/paragraph-examples.vue'
import PopoverExampleSection from 'components/examples/popover-examples.vue'
import TooltipExampleSection from 'components/examples/tooltip-examples.vue'
import { Heading } from 'components/typography/heading'
</script>

<template>
  <main class="h-screen w-screen flex flex-col gap-4 p-24">
    <div class="flex flex-col">
      <Heading as="h1">
        Typography
      </Heading>
      <div class="border p-4 gap-5 flex flex-col">
        <HeadingExampleSection />
        <ParagraphExampleSection />
        <LabelExampleSection />
      </div>
    </div>
    <div class="flex flex-col">
      <Heading as="h1">
        Primitive Components
      </Heading>
      <div class="border p-4 gap-5 flex flex-col">
        <ButtonExampleSection />
        <AccordionExampleSection />
        <AlertExampleSection />
        <BadgeExampleSection />
        <CheckboxExampleSection />
        <PopoverExampleSection />
        <TooltipExampleSection />
        <InputExampleSection />
      </div>
    </div>
    <div class="flex flex-col">
      <Heading as="h1">
        Complex Components
      </Heading>
      <div class="border p-4 gap-5 flex flex-col">
        <ComboboxExampleSection />
        <CommandExampleSection />
        <DialogExampleSection />
      </div>
    </div>
  </main>
</template>
