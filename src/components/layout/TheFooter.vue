<template>
  <footer class="bg-background border-t border-white/10 pt-20 pb-10">
    <div class="container mx-auto px-6 md:px-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div class="col-span-1 md:col-span-2">
          <a href="/" aria-label="GymFitness Home" class="inline-block mb-6">
            <span class="font-display text-4xl uppercase tracking-wider text-white">
              GYM<span class="text-primary">FITNESS</span>
            </span>
          </a>
          <p class="text-muted-foreground max-w-sm">
            An elite training facility for those who demand results. No excuses, just iron and grit.
          </p>
        </div>

        <div>
          <h4 class="text-white font-bold uppercase tracking-widest mb-6">Quick Links</h4>
          <ul class="space-y-4">
            <li><a href="#programs" class="text-muted-foreground hover:text-white transition-colors">Programs</a></li>
            <li><a href="#trainers" class="text-muted-foreground hover:text-white transition-colors">Trainers</a></li>
            <li><a href="#pricing" class="text-muted-foreground hover:text-white transition-colors">Pricing</a></li>
            <li><a href="#testimonials" class="text-muted-foreground hover:text-white transition-colors">Testimonials</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-white font-bold uppercase tracking-widest mb-6">Legal</h4>
          <ul class="space-y-4">
            <li><a href="#" class="text-muted-foreground hover:text-white transition-colors" rel="noopener noreferrer">Terms of Service</a></li>
            <li><a href="#" class="text-muted-foreground hover:text-white transition-colors" rel="noopener noreferrer">Privacy Policy</a></li>
            <li><a href="#" class="text-muted-foreground hover:text-white transition-colors" rel="noopener noreferrer">Gym Rules</a></li>
          </ul>
        </div>
      </div>

      <div class="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div class="flex flex-col gap-1 text-center md:text-left">
          <p class="text-muted-foreground text-sm">
            &copy; {{ currentYear }} Gym Fitness. All rights reserved.
          </p>
          <p class="text-muted-foreground/60 text-xs">
            Design and Built by Paul Christian Labor
          </p>
        </div>
        <div class="flex gap-5">
          <a
            href="#"
            aria-label="Instagram"
            class="text-muted-foreground hover:text-primary transition-colors"
            data-testid="social-instagram"
            rel="noopener noreferrer"
          >
            <!-- Instagram icon -->
            <font-awesome-icon :icon="['fab', 'instagram']" class="w-5 h-5" aria-hidden="true" />
          </a>
          <a
            href="#"
            aria-label="X (Twitter)"
            class="text-muted-foreground hover:text-primary transition-colors"
            data-testid="social-twitter"
            rel="noopener noreferrer"
          >
            <!-- X / Twitter icon -->
            <font-awesome-icon :icon="['fab', 'x-twitter']" class="w-5 h-5" aria-hidden="true" />
          </a>
          <a
            href="#"
            aria-label="Facebook"
            class="text-muted-foreground hover:text-primary transition-colors"
            data-testid="social-facebook"
            rel="noopener noreferrer"
          >
            <!-- Facebook icon -->
            <font-awesome-icon :icon="['fab', 'facebook']" class="w-5 h-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>
