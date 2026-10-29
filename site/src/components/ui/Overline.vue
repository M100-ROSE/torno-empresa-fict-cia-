<script setup>
defineProps({
  num: { type: String, default: '' },
  texto: { type: String, required: true },
})
</script>

<template>
  <p class="overline"><span v-if="num" class="num">{{ num }}</span>{{ texto }}</p>
</template>
