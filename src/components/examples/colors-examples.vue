<script setup lang="ts">
import { Heading } from 'components/typography/heading'

// Colors
// --background: oklch(1 0 0);
// --foreground: oklch(0.145 0 0);
// --card: oklch(1 0 0);
// --card-foreground: oklch(0.145 0 0);
// --popover: oklch(1 0 0);
// --popover-foreground: oklch(0.145 0 0);
// --primary: oklch(0.205 0 0);
// --primary-foreground: oklch(0.985 0 0);
// --secondary: oklch(0.97 0 0);
// --secondary-foreground: oklch(0.205 0 0);
// --muted: oklch(0.97 0 0);
// --muted-foreground: oklch(0.556 0 0);
// --accent: oklch(0.97 0 0);
// --accent-foreground: oklch(0.205 0 0);
// --destructive: oklch(0.577 0.245 27.325);
// --destructive-foreground: oklch(0.577 0.245 27.325);
// --border: oklch(0.922 0 0);
// --input: oklch(0.922 0 0);
// --ring: oklch(0.708 0 0);
// --chart-1: oklch(0.646 0.222 41.116);
// --chart-2: oklch(0.6 0.118 184.704);
// --chart-3: oklch(0.398 0.07 227.392);
// --chart-4: oklch(0.828 0.189 84.429);
// --chart-5: oklch(0.769 0.188 70.08);
// --radius: 0.625rem;
// --sidebar: oklch(0.985 0 0);
// --sidebar-foreground: oklch(0.145 0 0);
// --sidebar-primary: oklch(0.205 0 0);
// --sidebar-primary-foreground: oklch(0.985 0 0);
// --sidebar-accent: oklch(0.97 0 0);
// --sidebar-accent-foreground: oklch(0.205 0 0);
// --sidebar-border: oklch(0.922 0 0);
// --sidebar-ring: oklch(0.708 0 0);
</script>

<template>
  <div class="flex flex-col">
    <Heading as="h2">
      Theme Colors
    </Heading>
    <div class="flex flex-wrap flex-row w-full">
      <div class="p-4 flex flex-col ">
        <div class="relative text-xs mb-1 leading-4 font-medium font-inter text-slategray text-left">
          background
        </div>
        <div class="w-60 relative border border-black rounded-lg bg-background h-12" />
      </div>
      <div class="p-4 flex flex-col ">
        <div class="relative text-xs mb-1 leading-4 font-medium font-inter text-slategray text-left">
          foreground
        </div>
        <div class="w-60 relative border border-black rounded-lg bg-foreground h-12" />
      </div>
      <div class="p-4 flex flex-col ">
        <div class="relative text-xs mb-1 leading-4 font-medium font-inter text-slategray text-left">
          muted
        </div>
        <div class="w-60 relative border border-black rounded-lg bg-muted h-12" />
      </div>
      <div class="p-4 flex flex-col ">
        <div class="relative text-xs mb-1 leading-4 font-medium font-inter text-slategray text-left">
          muted-foreground
        </div>
        <div class="w-60 relative border border-black rounded-lg bg-muted-foreground h-12" />
      </div>
      <div class="p-4 flex flex-col ">
        <div class="relative text-xs mb-1 leading-4 font-medium font-inter text-slategray text-left">
          card
        </div>
        <div class="w-60 relative border border-black rounded-lg bg-card h-12" />
      </div>
      <div class="p-4 flex flex-col ">
        <div class="relative text-xs mb-1 leading-4 font-medium font-inter text-slategray text-left">
          card-foreground
        </div>
        <div class="w-60 relative border border-black rounded-lg bg-card-foreground h-12" />
      </div>
      <div class="p-4 flex flex-col ">
        <div class="relative text-xs mb-1 leading-4 font-medium font-inter text-slategray text-left">
          popover
        </div>
        <div class="w-60 relative border border-black rounded-lg bg-popover h-12" />
      </div>
      <div class="p-4 flex flex-col ">
        <div class="relative text-xs mb-1 leading-4 font-medium font-inter text-slategray text-left">
          popover-foreground
        </div>
        <div class="w-60 relative border border-black rounded-lg bg-popover-foreground h-12" />
      </div>
      <div class="p-4 flex flex-col ">
        <div class="relative text-xs mb-1 leading-4 font-medium font-inter text-slategray text-left">
          border
        </div>
        <div class="w-60 relative border border-black rounded-lg bg-border h-12" />
      </div>
      <div class="p-4 flex flex-col ">
        <div class="relative text-xs mb-1 leading-4 font-medium font-inter text-slategray text-left">
          input
        </div>
        <div class="w-60 relative border border-black rounded-lg bg-input h-12" />
      </div>
      <div class="p-4 flex flex-col ">
        <div class="relative text-xs mb-1 leading-4 font-medium font-inter text-slategray text-left">
          primary
        </div>
        <div class="w-60 relative border border-black rounded-lg bg-primary h-12" />
      </div>
      <div class="p-4 flex flex-col ">
        <div class="relative text-xs mb-1 leading-4 font-medium font-inter text-slategray text-left">
          primary-foreground
        </div>
        <div class="w-60 relative border border-black rounded-lg bg-primary-foreground h-12" />
      </div>
      <div class="p-4 flex flex-col ">
        <div class="relative text-xs mb-1 leading-4 font-medium font-inter text-slategray text-left">
          secondary
        </div>
        <div class="w-60 relative border border-black rounded-lg bg-secondary h-12" />
      </div>
      <div class="p-4 flex flex-col ">
        <div class="relative text-xs mb-1 leading-4 font-medium font-inter text-slategray text-left">
          secondary-foreground
        </div>
        <div class="w-60 relative border border-black rounded-lg bg-secondary-foreground h-12" />
      </div>
      <div class="p-4 flex flex-col ">
        <div class="relative text-xs mb-1 leading-4 font-medium font-inter text-slategray text-left">
          accent
        </div>
        <div class="w-60 relative border border-black rounded-lg bg-accent h-12" />
      </div>
      <div class="p-4 flex flex-col ">
        <div class="relative text-xs mb-1 leading-4 font-medium font-inter text-slategray text-left">
          accent-foreground
        </div>
        <div class="w-60 relative border border-black rounded-lg bg-accent-foreground h-12" />
      </div>
      <div class="p-4 flex flex-col ">
        <div class="relative text-xs mb-1 leading-4 font-medium font-inter text-slategray text-left">
          destructive
        </div>
        <div class="w-60 relative border border-black rounded-lg bg-destructive h-12" />
      </div>
      <div class="p-4 flex flex-col ">
        <div class="relative text-xs mb-1 leading-4 font-medium font-inter text-slategray text-left">
          destructive-foreground
        </div>
        <div class="w-60 relative border border-black rounded-lg bg-destructive-foreground h-12" />
      </div>
      <div class="p-4 flex flex-col ">
        <div class="relative text-xs mb-1 leading-4 font-medium font-inter text-slategray text-left">
          ring
        </div>
        <div class="w-60 relative border border-black rounded-lg bg-ring h-12" />
      </div>
      <div class="p-4 flex flex-col ">
        <div class="relative text-xs mb-1 leading-4 font-medium font-inter text-slategray text-left">
          chart-1
        </div>
        <div class="w-60 relative border border-black rounded-lg bg-chart-1 h-12" />
      </div>
      <div class="p-4 flex flex-col ">
        <div class="relative text-xs mb-1 leading-4 font-medium font-inter text-slategray text-left">
          chart-2
        </div>
        <div class="w-60 relative border border-black rounded-lg bg-chart-2 h-12" />
      </div>
      <div class="p-4 flex flex-col ">
        <div class="relative text-xs mb-1 leading-4 font-medium font-inter text-slategray text-left">
          chart-3
        </div>
        <div class="w-60 relative border border-black rounded-lg bg-chart-3 h-12" />
      </div>
      <div class="p-4 flex flex-col ">
        <div class="relative text-xs mb-1 leading-4 font-medium font-inter text-slategray text-left">
          chart-4
        </div>
        <div class="w-60 relative border border-black rounded-lg bg-chart-4 h-12" />
      </div>
      <div class="p-4 flex flex-col ">
        <div class="relative text-xs mb-1 leading-4 font-medium font-inter text-slategray text-left">
          chart-5
        </div>
        <div class="w-60 relative border border-black rounded-lg bg-chart-5 h-12" />
      </div>
      <div class="p-4 flex flex-col ">
        <div class="relative text-xs mb-1 leading-4 font-medium font-inter text-slategray text-left">
          sidebar
        </div>
        <div class="w-60 relative border border-black rounded-lg bg-sidebar h-12" />
      </div>
      <div class="p-4 flex flex-col ">
        <div class="relative text-xs mb-1 leading-4 font-medium font-inter text-slategray text-left">
          sidebar-foreground
        </div>
        <div class="w-60 relative border border-black rounded-lg bg-sidebar-foreground h-12" />
      </div>
      <div class="p-4 flex flex-col ">
        <div class="relative text-xs mb-1 leading-4 font-medium font-inter text-slategray text-left">
          sidebar-primary
        </div>
        <div class="w-60 relative border border-black rounded-lg bg-sidebar-primary h-12" />
      </div>
      <div class="p-4 flex flex-col ">
        <div class="relative text-xs mb-1 leading-4 font-medium font-inter text-slategray text-left">
          sidebar-primary-foreground
        </div>
        <div class="w-60 relative border border-black rounded-lg bg-sidebar-primary-foreground h-12" />
      </div>
      <div class="p-4 flex flex-col ">
        <div class="relative text-xs mb-1 leading-4 font-medium font-inter text-slategray text-left">
          sidebar-accent
        </div>
        <div class="w-60 relative border border-black rounded-lg bg-sidebar-accent h-12" />
      </div>
      <div class="p-4 flex flex-col ">
        <div class="relative text-xs mb-1 leading-4 font-medium font-inter text-slategray text-left">
          sidebar-accent-foreground
        </div>
        <div class="w-60 relative border border-black rounded-lg bg-sidebar-accent-foreground h-12" />
      </div>
      <div class="p-4 flex flex-col ">
        <div class="relative text-xs mb-1 leading-4 font-medium font-inter text-slategray text-left">
          sidebar-border
        </div>
        <div class="w-60 relative border border-black rounded-lg bg-sidebar-border h-12" />
      </div>
      <div class="p-4 flex flex-col ">
        <div class="relative text-xs mb-1 leading-4 font-medium font-inter text-slategray text-left">
          sidebar-ring
        </div>
        <div class="w-60 relative border border-black rounded-lg bg-sidebar-ring h-12" />
      </div>
    </div>
    <div class="p-4" />
  </div>
</template>
