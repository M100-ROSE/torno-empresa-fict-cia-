<script setup>
import Overline from '../ui/Overline.vue'
import FiguraArte from '../ui/FiguraArte.vue'
import { atelier } from '../../data/atelier.js'
</script>

<template>
  <section class="secao" id="atelier" aria-labelledby="atelier-titulo">
    <div class="shell atelier">
      <FiguraArte variante="atelier" :legenda="atelier.legenda" />

      <div class="atelier__texto">
        <Overline :num="atelier.num" :texto="atelier.overline" />
        <h2 id="atelier-titulo">{{ atelier.titulo }}</h2>
        <p v-for="paragrafo in atelier.paragrafos" :key="paragrafo">{{ paragrafo }}</p>
        <p class="assinatura">{{ atelier.assinatura }}</p>
      </div>
    </div>
  </section>
</template>
