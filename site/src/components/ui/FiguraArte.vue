<script setup>
import { computed } from 'vue'

const props = defineProps({
  variante: {
    type: String,
    required: true,
    validator: (valor) =>
      ['hero', 'anel', 'brinco', 'colar', 'atelier'].includes(valor),
  },
  legenda: { type: String, default: '' },
})

const formas = {
  hero: 'aro',
  anel: 'anel',
  brinco: 'brinco',
  colar: 'colar',
  atelier: 'bancada',
}

const classeArte = computed(() => `arte arte--${props.variante}`)
const classeForma = computed(() => `forma forma--${formas[props.variante]}`)
const classeFigura = computed(() => `${props.variante}__figura`)
</script>

<template>
  <figure v-if="legenda" :class="classeFigura">
    <div :class="classeArte" aria-hidden="true"><span :class="classeForma"></span></div>
    <figcaption>{{ legenda }}</figcaption>
  </figure>
  <div v-else :class="classeArte" aria-hidden="true"><span :class="classeForma"></span></div>
</template>
