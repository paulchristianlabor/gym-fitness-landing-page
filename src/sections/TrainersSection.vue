<template>
  <section id="trainers" class="py-32 bg-card relative z-10 border-t border-white/5">
    <div class="container mx-auto px-6 md:px-12">
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="text-center mb-20 max-w-3xl mx-auto"
      >
        <h2 class="font-display text-5xl md:text-7xl uppercase tracking-tighter text-white mb-6">
          Elite <span class="text-primary">Coaches</span>
        </h2>
        <p class="text-lg text-muted-foreground">
          You don't get results with cheerleaders. You get results with experts who demand your absolute best.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div
          v-for="(trainer, i) in trainers"
          :key="trainer.id"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: i * 200 } }"
          class="group"
          :data-testid="`trainer-card-${trainer.id}`"
        >
          <div class="relative h-150 mb-6 overflow-hidden bg-background border border-white/10">
            <img
              :src="trainer.image"
              :alt="trainer.name"
              class="w-full h-full object-cover object-top filter grayscale contrast-125 transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent opacity-80" />
            <div class="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-background via-background/80 to-transparent">
              <h3 class="font-display text-3xl uppercase tracking-tight text-white mb-1">
                {{ trainer.name }}
              </h3>
              <p class="text-primary font-bold uppercase tracking-widest text-sm">
                {{ trainer.specialty }}
              </p>
            </div>
          </div>
          <p class="text-muted-foreground px-2 border-l-2 border-primary">
            {{ trainer.bio }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const trainers = [
  {
    id: 'marcus',
    name: 'Marcus Vance',
    specialty: 'Powerlifting / Strength',
    bio: "Former competitive powerlifter. Marcus doesn't care about your excuses, only your deadlift PR.",
    image: '/trainer-1.png',
  },
  {
    id: 'sarah',
    name: 'Sarah Jenkins',
    specialty: 'HIIT / Conditioning',
    bio: 'Elite conditioning coach. Her classes will break you down and build you back stronger.',
    image: '/trainer-2.png',
  },
  {
    id: 'david',
    name: "David 'The Anvil' Cole",
    specialty: 'Boxing / Athletics',
    bio: '15 years in the ring. David brings fighter-level intensity to every single session.',
    image: '/trainer-3.png',
  },
]
</script>
