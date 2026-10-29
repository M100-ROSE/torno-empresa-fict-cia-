<script setup>
import Overline from '../ui/Overline.vue'
import BotaoLink from '../ui/BotaoLink.vue'
import LinkEditorial from '../ui/LinkEditorial.vue'
import DadosContato from './DadosContato.vue'
import { contato } from '../../data/contato.js'
</script>

<template>
  <section class="secao" id="contato" aria-labelledby="contato-titulo">
    <div class="shell contato">
      <div class="contato__intro">
        <Overline :num="contato.num" :texto="contato.overline" />
        <h2 id="contato-titulo">{{ contato.titulo }}</h2>
        <p class="contato__lead">{{ contato.lead }}</p>
        <div class="contato__acoes">
          <template v-for="acao in contato.acoes" :key="acao.href">
            <BotaoLink v-if="acao.tipo === 'botao'" :href="acao.href" :label="acao.label" />
            <LinkEditorial v-else :href="acao.href" :label="acao.label" />
          </template>
        </div>
        <p class="contato__nota">{{ contato.nota }}</p>
      </div>

      <DadosContato :itens="contato.dados" />
    </div>
  </section>
</template>
