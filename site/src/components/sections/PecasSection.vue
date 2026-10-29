<script setup>
import Overline from '../ui/Overline.vue'
import PecaCard from './PecaCard.vue'
import { pecas } from '../../data/pecas.js'
</script>

<template>
  <section class="secao" id="pecas" aria-labelledby="pecas-titulo">
    <div class="shell">
      <header class="secao__cabeca">
        <Overline num="01" texto="Peças selecionadas" />
        <h2 id="pecas-titulo">Cada peça existe uma vez.</h2>
      </header>

      <ul class="pecas">
        <PecaCard v-for="peca in pecas" :key="peca.num" v-bind="peca" />
      </ul>
    </div>
  </section>
</template>
