<template>
  <section id="pricing" class="py-32 bg-background relative z-10 border-t border-white/5">
    <div class="container mx-auto px-6 md:px-12">
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="text-center mb-20 max-w-3xl mx-auto"
      >
        <h2 class="font-display text-5xl md:text-7xl uppercase tracking-tighter text-white mb-6">
          Membership <span class="text-primary">Tiers</span>
        </h2>
        <p class="text-lg text-muted-foreground">
          Invest in yourself. Choose a plan and commit to the process.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div
          v-for="(tier, i) in tiers"
          :key="tier.name"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: i * 100 } }"
          :class="[
            'relative p-8 border flex flex-col h-full',
            tier.highlighted
              ? 'bg-card border-primary shadow-[0_0_30px_rgba(255,0,0,0.15)] transform md:-translate-y-4'
              : 'bg-background border-white/10',
          ]"
          :data-testid="`pricing-card-${tier.name.toLowerCase().replace(' ', '-')}`"
        >
          <div
            v-if="tier.highlighted"
            class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white font-bold uppercase tracking-widest text-xs px-4 py-1"
          >
            Most Popular
          </div>

          <div class="mb-8">
            <h3 class="font-display text-3xl uppercase tracking-tight text-white mb-2">{{ tier.name }}</h3>
            <p class="text-sm text-muted-foreground mb-6 h-10">{{ tier.desc }}</p>
            <div class="flex items-baseline gap-1">
              <span class="font-display text-5xl md:text-6xl text-white">{{ tier.price }}</span>
              <span class="text-muted-foreground font-bold">{{ tier.period }}</span>
            </div>
          </div>

          <ul class="space-y-4 mb-8 flex-1">
            <li
              v-for="feature in tier.features"
              :key="feature"
              class="flex items-start gap-3"
            >
              <font-awesome-icon
                :icon="['fas', 'check']"
                :class="['mt-0.5 shrink-0', tier.highlighted ? 'text-primary' : 'text-white/50']"
                aria-hidden="true"
              />
              <span class="text-gray-300">{{ feature }}</span>
            </li>
          </ul>

          <a
            href="#contact"
            :class="[
              'w-full rounded-none font-bold uppercase tracking-widest h-14 inline-flex items-center justify-center transition-colors',
              tier.highlighted
                ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                : 'bg-white/5 text-white hover:bg-white hover:text-black border border-white/10 hover:border-white',
            ]"
            :data-testid="`pricing-cta-${tier.name.toLowerCase().replace(' ', '-')}`"
          >
            Select Plan
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">


const tiers = [
  {
    name: 'Basic Iron',
    price: '$79',
    period: '/month',
    desc: 'Full access to the gym floor. No frills, just iron.',
    features: ['24/7 Gym Access', 'Free Weights & Machines', 'Locker Room Access', '1 Free Assessment'],
    highlighted: false,
  },
  {
    name: 'Standard Core',
    price: '$129',
    period: '/month',
    desc: 'The perfect balance of independent training and classes.',
    features: ['Everything in Basic', 'Unlimited Group Classes', 'HIIT Track Access', 'Monthly Body Composition'],
    highlighted: true,
  },
  {
    name: 'Elite Performance',
    price: '$249',
    period: '/month',
    desc: 'For those who demand the absolute maximum from themselves.',
    features: ['Everything in Standard', '4 Personal Training Sessions', 'Nutrition Coaching', 'Recovery Zone Access'],
    highlighted: false,
  },
]
</script>
