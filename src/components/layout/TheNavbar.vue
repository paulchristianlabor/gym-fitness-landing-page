<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled
        ? 'bg-background/95 backdrop-blur-md border-b border-white/10 py-4'
        : 'bg-transparent py-6',
    ]"
  >
    <div class="container mx-auto px-6 md:px-12 flex items-center justify-between">
      <a
        href="/"
        class="flex items-center gap-2 z-50"
        aria-label="GymFitness Home"
      >
        <span class="font-display text-2xl md:text-3xl uppercase tracking-wider text-white">
          GYM<span class="text-primary">FITNESS</span>
        </span>
      </a>

      <!-- Desktop Nav -->
      <nav aria-label="Main navigation" class="hidden md:flex items-center gap-8">
        <a
          v-for="link in navLinks"
          :key="link.name"
          :href="link.href"
          class="text-sm font-medium uppercase tracking-widest text-muted-foreground hover:text-white transition-colors"
          :data-testid="`nav-link-${link.name.toLowerCase()}`"
        >
          {{ link.name }}
        </a>
        <a
          href="#pricing"
          class="rounded-none bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-widest px-8 py-2 transition-colors inline-block"
          data-testid="nav-cta-join"
        >
          Join Now
        </a>
      </nav>

      <!-- Mobile Toggle -->
      <button
        class="md:hidden z-50 text-white"
        :aria-expanded="isMobileMenuOpen"
        aria-controls="mobile-menu"
        aria-label="Toggle navigation menu"
        data-testid="nav-mobile-toggle"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
      >
        <XIcon v-if="isMobileMenuOpen" :size="28" />
        <MenuIcon v-else :size="28" />
      </button>
    </div>

    <!-- Mobile Nav Overlay -->
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
      :class="[
        'fixed inset-0 bg-background/98 backdrop-blur-xl z-40 flex flex-col items-center justify-center transition-all duration-500',
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none',
      ]"
    >
      <nav class="flex flex-col items-center gap-8">
        <a
          v-for="link in navLinks"
          :key="link.name"
          :href="link.href"
          class="font-display text-4xl uppercase tracking-widest text-white hover:text-primary transition-colors"
          :data-testid="`nav-mobile-link-${link.name.toLowerCase()}`"
          @click="isMobileMenuOpen = false"
        >
          {{ link.name }}
        </a>
        <a
          href="#pricing"
          class="mt-8 rounded-none bg-primary text-primary-foreground font-bold uppercase tracking-widest text-xl px-12 py-6 hover:bg-primary/90 transition-colors inline-block"
          data-testid="nav-mobile-cta-join"
          @click="isMobileMenuOpen = false"
        >
          Join Now
        </a>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Menu as MenuIcon, X as XIcon } from 'lucide-vue-next'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const navLinks = [
  { name: 'Programs', href: '#programs' },
  { name: 'Trainers', href: '#trainers' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
]

function handleScroll(): void {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
