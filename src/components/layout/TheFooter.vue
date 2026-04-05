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
            <svg viewBox="0 0 24 24" class="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
          </a>
          <a
            href="#"
            aria-label="X (Twitter)"
            class="text-muted-foreground hover:text-primary transition-colors"
            data-testid="social-twitter"
            rel="noopener noreferrer"
          >
            <!-- X / Twitter icon -->
            <svg viewBox="0 0 24 24" class="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a
            href="#"
            aria-label="Facebook"
            class="text-muted-foreground hover:text-primary transition-colors"
            data-testid="social-facebook"
            rel="noopener noreferrer"
          >
            <!-- Facebook icon -->
            <svg viewBox="0 0 24 24" class="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>
