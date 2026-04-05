<template>
  <section class="bg-card py-20 border-y border-white/5 relative z-10">
    <div class="container mx-auto px-6 md:px-12">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
        <div
          v-for="(stat, i) in stats"
          :key="stat.label"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: i * 100 } }"
          class="flex flex-col items-center text-center pt-8 md:pt-0"
          :data-testid="`stat-${i}`"
        >
          <span class="font-display text-5xl md:text-6xl xl:text-7xl text-white mb-2 tracking-tighter">
            {{ stat.value }}
          </span>
          <span class="text-sm md:text-base font-bold uppercase tracking-widest text-primary">
            {{ stat.label }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stats = [
  { value: '5,000+', label: 'Members Strong' },
  { value: '50+', label: 'Expert Trainers' },
  { value: '10+', label: 'Years Experience' },
  { value: '98%', label: 'Member Satisfaction' },
]
</script>
