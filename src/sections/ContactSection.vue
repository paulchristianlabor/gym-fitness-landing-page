<template>
  <section id="contact" class="py-32 bg-card/30 border-t border-white/5">
    <div class="container mx-auto px-6 md:px-12">
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="text-center mb-20 max-w-3xl mx-auto"
      >
        <h2 class="font-display text-5xl md:text-7xl uppercase tracking-tighter text-white mb-6">
          Get In <span class="text-primary">Touch</span>
        </h2>
        <p class="text-lg text-muted-foreground">
          Questions about membership? Ready to visit? We're here.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
        <!-- Contact Info -->
        <div
          v-motion
          :initial="{ opacity: 0, x: -30 }"
          :visible-once="{ opacity: 1, x: 0, transition: { duration: 600 } }"
          class="space-y-10"
        >
          <div>
            <h3 class="font-display text-3xl uppercase tracking-tight text-white mb-8">Find Us Here</h3>
            <p class="text-muted-foreground leading-relaxed mb-8">
              Gym Fitness is more than a gym — it's a community of dedicated athletes pushing each other to be
              better every single day.
            </p>
          </div>

          <div class="space-y-6">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 border border-primary/50 flex items-center justify-center shrink-0">
                <font-awesome-icon :icon="['fas', 'location-dot']" class="w-5 h-5 text-primary" aria-hidden="true" />
              </div>
              <div>
                <p class="font-semibold text-white uppercase tracking-wider text-sm mb-1">Location</p>
                <p class="text-muted-foreground">2800 N. Steel Avenue<br />Chicago, IL 60618</p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div class="w-12 h-12 border border-primary/50 flex items-center justify-center shrink-0">
                <font-awesome-icon :icon="['fas', 'phone']" class="w-5 h-5 text-primary" aria-hidden="true" />
              </div>
              <div>
                <p class="font-semibold text-white uppercase tracking-wider text-sm mb-1">Phone</p>
                <a href="tel:+13125550192" class="text-muted-foreground hover:text-white transition-colors">
                  +1 (312) 555-0192
                </a>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div class="w-12 h-12 border border-primary/50 flex items-center justify-center shrink-0">
                <font-awesome-icon :icon="['fas', 'envelope']" class="w-5 h-5 text-primary" aria-hidden="true" />
              </div>
              <div>
                <p class="font-semibold text-white uppercase tracking-wider text-sm mb-1">Email</p>
                <a
                  href="mailto:info@gymfitness.com"
                  class="text-muted-foreground hover:text-white transition-colors"
                >
                  info@gymfitness.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div
          v-motion
          :initial="{ opacity: 0, x: 30 }"
          :visible-once="{ opacity: 1, x: 0, transition: { duration: 600 } }"
        >
          <!-- Success state -->
          <div
            v-show="submitted"
            class="h-full flex flex-col items-center justify-center text-center px-4 py-12 border border-primary/30 bg-primary/5"
            data-testid="contact-success"
          >
            <font-awesome-icon :icon="['fas', 'circle-check']" class="w-16 h-16 text-primary mb-4" aria-hidden="true" />
            <h3 class="font-display text-2xl uppercase tracking-tight text-white mb-2">Message Received</h3>
            <p class="text-muted-foreground">We'll be in touch within 24 hours.</p>
          </div>

          <!-- Form -->
          <form v-show="!submitted" class="space-y-5" novalidate @submit.prevent="handleSubmit">
            <div>
              <label for="contact-name" class="sr-only">Name</label>
              <input
                id="contact-name"
                v-model="form.name"
                type="text"
                placeholder="Your Name"
                maxlength="100"
                autocomplete="name"
                :aria-invalid="!!errors.name"
                :class="[
                  'w-full bg-white/5 border px-4 py-4 text-white placeholder:text-muted-foreground outline-none transition-colors',
                  errors.name
                    ? 'border-red-500 focus:border-red-400'
                    : 'border-white/10 focus:border-primary',
                ]"
                data-testid="contact-input-name"
              />
              <p v-if="errors.name" class="mt-1 text-xs text-red-400" data-testid="name-error" role="alert">
                {{ errors.name }}
              </p>
            </div>

            <div>
              <label for="contact-email" class="sr-only">Email</label>
              <input
                id="contact-email"
                v-model="form.email"
                type="email"
                placeholder="Email Address"
                maxlength="254"
                autocomplete="email"
                :aria-invalid="!!errors.email"
                :class="[
                  'w-full bg-white/5 border px-4 py-4 text-white placeholder:text-muted-foreground outline-none transition-colors',
                  errors.email
                    ? 'border-red-500 focus:border-red-400'
                    : 'border-white/10 focus:border-primary',
                ]"
                data-testid="contact-input-email"
              />
              <p v-if="errors.email" class="mt-1 text-xs text-red-400" data-testid="email-error" role="alert">
                {{ errors.email }}
              </p>
            </div>

            <div>
              <label for="contact-message" class="sr-only">Message</label>
              <textarea
                id="contact-message"
                v-model="form.message"
                placeholder="Your Message"
                rows="5"
                maxlength="1000"
                :aria-invalid="!!errors.message"
                :class="[
                  'w-full bg-white/5 border px-4 py-4 text-white placeholder:text-muted-foreground outline-none transition-colors resize-none',
                  errors.message
                    ? 'border-red-500 focus:border-red-400'
                    : 'border-white/10 focus:border-primary',
                ]"
                data-testid="contact-input-message"
              />
              <p v-if="errors.message" class="mt-1 text-xs text-red-400" data-testid="message-error" role="alert">
                {{ errors.message }}
              </p>
            </div>

            <button
              type="submit"
              class="w-full rounded-none bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-widest h-14 transition-colors"
              data-testid="contact-submit"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const form = ref({ name: '', email: '', message: '' })
const errors = ref({ name: '', email: '', message: '' })
const submitted = ref(false)

function validate(): boolean {
  errors.value = { name: '', email: '', message: '' }
  let valid = true

  if (!form.value.name.trim()) {
    errors.value.name = 'Name is required.'
    valid = false
  }

  if (!form.value.email.trim()) {
    errors.value.email = 'Email is required.'
    valid = false
  } else if (!emailRegex.test(form.value.email)) {
    errors.value.email = 'Please enter a valid email address.'
    valid = false
  }

  if (!form.value.message.trim()) {
    errors.value.message = 'Message is required.'
    valid = false
  }

  return valid
}

function handleSubmit(): void {
  if (!validate()) return
  submitted.value = true
  form.value = { name: '', email: '', message: '' }
}
</script>
