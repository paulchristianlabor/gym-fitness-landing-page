<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    :type="!href ? (type ?? 'button') : undefined"
    :class="classes"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  href?: string
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
})

const classes = computed(() => {
  const base =
    'inline-flex items-center justify-center font-bold uppercase tracking-widest rounded-none transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'

  const variants: Record<string, string> = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-black',
    ghost: 'bg-white/5 text-white hover:bg-white hover:text-black border border-white/10 hover:border-white',
  }

  const sizes: Record<string, string> = {
    sm: 'px-6 py-2 text-sm h-9',
    md: 'px-8 py-2 text-sm h-10',
    lg: 'px-12 py-8 text-2xl h-auto w-full sm:w-auto',
  }

  return [base, variants[props.variant], sizes[props.size], props.class]
    .filter(Boolean)
    .join(' ')
})
</script>
