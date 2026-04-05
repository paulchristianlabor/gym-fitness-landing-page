<template>
  <section id="testimonials" class="py-32 bg-card relative z-10 border-t border-white/5 overflow-hidden">
    <!-- Background Graphic -->
    <div class="absolute top-0 right-0 text-[30rem] font-display text-white/5 leading-none select-none pointer-events-none -translate-y-1/4 translate-x-1/4" aria-hidden="true">
      RAW
    </div>

    <div class="container mx-auto px-6 md:px-12 relative z-10">
      <div
        v-motion
        :initial="{ opacity: 0, x: -30 }"
        :visible-once="{ opacity: 1, x: 0, transition: { duration: 600 } }"
        class="mb-16"
      >
        <h2 class="font-display text-5xl md:text-7xl uppercase tracking-tighter text-white">
          The <span class="text-primary">Results</span>
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(testimonial, i) in testimonials"
          :key="testimonial.author"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: i * 200 } }"
          class="bg-background p-8 md:p-10 border border-white/5 relative group"
          :data-testid="`testimonial-${i}`"
        >
          <p class="text-xl md:text-2xl font-medium text-white mb-8 relative z-10">
            {{ testimonial.quote }}
          </p>
          <div>
            <p class="font-display text-xl uppercase tracking-tight text-primary">
              {{ testimonial.author }}
            </p>
            <p class="text-sm text-muted-foreground uppercase tracking-widest font-bold">
              {{ testimonial.role }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const testimonials = [
  {
    quote: 'I thought I knew how to train until I joined Gym Fitness. The atmosphere here forces you to level up.',
    author: 'James T.',
    role: 'Member since 2021',
  },
  {
    quote: 'No mirrors for selfies, no juice bar. Just heavy weights and people putting in genuine work.',
    author: 'Elena R.',
    role: 'Member since 2022',
  },
  {
    quote: 'Lost 40lbs, gained absolute confidence. The coaches here are ruthless in the best possible way.',
    author: 'Michael B.',
    role: 'Member since 2023',
  },
]
</script>
