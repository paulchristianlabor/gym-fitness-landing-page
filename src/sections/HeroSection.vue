<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Background Image & Overlay -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-linear-to-b from-background/80 via-background/60 to-background z-10" />
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-transparent via-background/80 to-background z-10" />
      <img
        src="/hero.png"
        alt="Gym Fitness Gym"
        class="w-full h-full object-cover object-center scale-105"
      />
    </div>

    <div class="container relative z-20 mx-auto px-6 md:px-12 flex flex-col items-center text-center pt-32 pb-20">
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 800, ease: [0.16, 1, 0.3, 1] } }"
        class="max-w-4xl"
      >
        <h1 class="font-display text-6xl md:text-8xl lg:text-[10rem] leading-[0.85] uppercase tracking-tighter text-white mb-6 drop-shadow-2xl">
          Build Strength. <br />
          <span class="text-transparent bg-clip-text bg-linear-to-r from-primary to-destructive">
            Gain Confidence.
          </span>
        </h1>

        <p
          v-motion
          :initial="{ opacity: 0 }"
          :enter="{ opacity: 1, transition: { duration: 1000, delay: 400 } }"
          class="text-xl md:text-2xl text-muted-foreground font-medium mb-12 max-w-2xl mx-auto"
        >
          Your journey to a stronger, healthier body starts here. Elite facility. Uncompromising results.
        </p>

        <div
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 600 } }"
          class="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="#pricing"
            class="rounded-none bg-primary hover:bg-primary/90 text-primary-foreground font-display text-2xl uppercase tracking-widest px-12 py-8 w-full sm:w-auto transition-transform hover:scale-105 inline-flex items-center justify-center"
            data-testid="hero-cta-join"
          >
            Start Training
          </a>
          <a
            href="#programs"
            class="rounded-none border-2 border-white text-white hover:bg-white hover:text-black font-display text-xl uppercase tracking-widest px-12 py-8 w-full sm:w-auto transition-colors inline-flex items-center justify-center"
            data-testid="hero-cta-programs"
          >
            View Programs
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// v-motion directive is globally registered via MotionPlugin in main.ts
</script>
