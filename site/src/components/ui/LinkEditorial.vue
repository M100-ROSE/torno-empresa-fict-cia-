<script setup>
defineProps({
  href: { type: String, required: true },
  label: { type: String, required: true },
})
</script>

<template>
  <a class="link-editorial" :href="href">{{ label }}</a>
</template>
