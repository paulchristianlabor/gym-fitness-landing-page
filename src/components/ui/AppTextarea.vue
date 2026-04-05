<template>
  <textarea
    :placeholder="placeholder"
    :maxlength="maxlength"
    :rows="rows"
    :value="modelValue"
    :class="[
      'rounded-none bg-card border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary px-4 py-3 text-white placeholder:text-muted-foreground w-full resize-none transition-colors min-h-37.5',
      $attrs.class,
    ]"
    v-bind="{ ...$attrs, class: undefined }"
    @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
  />
</template>

<script setup lang="ts">
defineOptions({ inheritAttrs: false })

withDefaults(
  defineProps<{
    modelValue?: string
    placeholder?: string
    rows?: number
    maxlength?: number
  }>(),
  { rows: 5 },
)

defineEmits<{ 'update:modelValue': [value: string] }>()
</script>
