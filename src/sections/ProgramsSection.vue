<template>
  <section id="programs" class="py-32 bg-background relative z-10">
    <div class="container mx-auto px-6 md:px-12">
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div
          v-motion
          :initial="{ opacity: 0, x: -30 }"
          :visible-once="{ opacity: 1, x: 0, transition: { duration: 600 } }"
          class="max-w-2xl"
        >
          <h2 class="font-display text-5xl md:text-7xl uppercase tracking-tighter text-white mb-4">
            Our <span class="text-primary">Programs</span>
          </h2>
          <p class="text-lg text-muted-foreground">
            We don't do gimmicks. We do proven methods that deliver results. Choose your path and put in the work.
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(program, i) in programs"
          :key="program.id"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: i * 200 } }"
          class="group relative h-125 overflow-hidden bg-card cursor-pointer border border-white/5 hover:border-primary/50 transition-colors"
          :data-testid="`program-card-${program.id}`"
        >
          <div class="absolute inset-0">
            <img
              :src="program.image"
              :alt="program.title"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40 grayscale group-hover:grayscale-0"
            />
            <div class="absolute inset-0 bg-linear-to-t from-background via-background/50 to-transparent opacity-80" />
          </div>

          <div class="absolute inset-0 p-8 flex flex-col justify-end">
            <h3 class="font-display text-4xl uppercase tracking-tight text-white mb-2 transform transition-transform duration-500 group-hover:-translate-y-4">
              {{ program.title }}
            </h3>
            <p class="text-muted-foreground mb-6 transform translate-y-8 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              {{ program.desc }}
            </p>
            <div class="flex items-center text-primary font-bold uppercase tracking-widest text-sm transform translate-y-8 opacity-0 transition-all duration-500 delay-100 group-hover:translate-y-0 group-hover:opacity-100">
              Learn More
              <font-awesome-icon :icon="['fas', 'arrow-right']" class="ml-2" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">


const programs = [
  {
    id: 'strength',
    title: 'Strength Training',
    desc: 'Build raw power and muscle mass with heavy compound movements.',
    image: '/program-strength.png',
  },
  {
    id: 'fatloss',
    title: 'Fat Loss',
    desc: 'Shred body fat while maintaining muscle through intense conditioning.',
    image: '/program-fatloss.png',
  },
  {
    id: 'hiit',
    title: 'HIIT',
    desc: 'Push your cardiovascular limits with high-intensity interval training.',
    image: '/program-hiit.png',
  },
]
</script>
