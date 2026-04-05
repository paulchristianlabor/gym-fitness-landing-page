<template>
  <div class="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
    <TheNavbar />
    <main>
      <HeroSection />
      <StatsSection />
      <ProgramsSection />
      <TrainersSection />
      <PricingSection />
      <TestimonialsSection />
      <CtaSection />
      <ContactSection />
    </main>
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import TheNavbar from '@/components/layout/TheNavbar.vue'
import TheFooter from '@/components/layout/TheFooter.vue'
import HeroSection from '@/sections/HeroSection.vue'
import StatsSection from '@/sections/StatsSection.vue'
import ProgramsSection from '@/sections/ProgramsSection.vue'
import TrainersSection from '@/sections/TrainersSection.vue'
import TestimonialsSection from '@/sections/TestimonialsSection.vue'
import PricingSection from '@/sections/PricingSection.vue'
import CtaSection from '@/sections/CtaSection.vue'
import ContactSection from '@/sections/ContactSection.vue'
</script>
