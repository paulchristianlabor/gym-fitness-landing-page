<template>
  <section id="cta" class="relative py-40 overflow-hidden">
    <!-- Background image with overlay -->
    <div
      class="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style="background-image: url('/facility.png')"
      aria-hidden="true"
    />
    <div class="absolute inset-0 bg-black/75" aria-hidden="true" />
    <div class="absolute inset-0 bg-linear-to-r from-black/60 via-transparent to-black/60" aria-hidden="true" />

    <div class="relative z-10 container mx-auto px-6 md:px-12 text-center">
      <div
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 700 } }"
      >
        <p class="font-display text-primary uppercase tracking-[0.3em] text-sm md:text-base mb-6">
          Your Moment Starts Now
        </p>
        <h2 class="font-display text-5xl md:text-8xl uppercase tracking-tighter text-white mb-8 leading-none">
          Stop Waiting.
          <br />
          <span class="text-primary">Start Working.</span>
        </h2>
        <p
          v-motion
          :initial="{ opacity: 0 }"
          :visible-once="{ opacity: 1, transition: { duration: 600, delay: 200 } }"
          class="text-xl text-gray-300 max-w-2xl mx-auto mb-12"
        >
          Every elite athlete, every champion, every person who transformed their body started with a single decision.
          Make yours today.
        </p>
        <a
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: 350 } }"
          href="#pricing"
          class="inline-flex items-center justify-center rounded-none bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-widest text-lg px-16 py-6 transition-colors"
          data-testid="cta-final-join"
        >
          Claim Your Spot
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
