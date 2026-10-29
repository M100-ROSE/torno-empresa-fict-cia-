<script setup>
import FiguraArte from '../ui/FiguraArte.vue'

defineProps({
  num: { type: String, required: true },
  nome: { type: String, required: true },
  meta: { type: String, required: true },
  preco: { type: String, required: true },
  variante: { type: String, required: true },
})
</script>

<template>
  <li class="peca">
    <FiguraArte :variante="variante" />
    <p class="peca__num">{{ num }}</p>
    <h3 class="peca__nome">{{ nome }}</h3>
    <p class="peca__meta">{{ meta }}</p>
    <p class="peca__preco">{{ preco }}</p>
  </li>
</template>
