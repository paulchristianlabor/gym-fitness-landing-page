<template>
  <input
    :type="type"
    :placeholder="placeholder"
    :maxlength="maxlength"
    :value="modelValue"
    :class="[
      'rounded-none bg-card border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary h-12 px-4 text-white placeholder:text-muted-foreground w-full transition-colors',
      $attrs.class,
    ]"
    v-bind="{ ...$attrs, class: undefined }"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  />
</template>

<script setup lang="ts">
defineOptions({ inheritAttrs: false })

withDefaults(
  defineProps<{
    modelValue?: string
    type?: string
    placeholder?: string
    maxlength?: number
  }>(),
  { type: 'text' },
)

defineEmits<{ 'update:modelValue': [value: string] }>()
</script>
