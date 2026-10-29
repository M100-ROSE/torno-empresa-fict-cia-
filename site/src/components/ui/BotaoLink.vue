<script setup>
defineProps({
  href: { type: String, required: true },
  label: { type: String, required: true },
})
</script>

<template>
  <a class="botao" :href="href">{{ label }}</a>
</template>
