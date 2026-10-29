<script setup>
import { rodape } from '../data/rodape.js'
import Overline from './ui/Overline.vue'
</script>

<template>
  <footer class="rodape">
    <div class="shell">
      <div class="rodape__topo">
        <p class="rodape__marca">{{ rodape.marca }}</p>
        <p class="rodape__tagline">{{ rodape.tagline }}</p>
      </div>

      <div class="rodape__grade">
        <div v-for="coluna in rodape.colunas" :key="coluna.titulo" class="rodape__col">
          <Overline :texto="coluna.titulo" />

          <address v-if="coluna.tipo === 'endereco'"><template v-for="(linha, indice) in coluna.linhas" :key="linha"><br v-if="indice > 0">{{ linha }}</template></address>

          <template v-else-if="coluna.tipo === 'links'">
            <p v-for="link in coluna.links" :key="link.href">
              <a
                :href="link.href"
                :target="link.externo ? '_blank' : null"
                :rel="link.externo ? 'noopener noreferrer' : null"
              >{{ link.label }}</a>
            </p>
          </template>

          <p v-else>{{ coluna.texto }}</p>
        </div>
      </div>

      <div class="rodape__base">
        <p v-for="linha in rodape.base" :key="linha">{{ linha }}</p>
      </div>
    </div>
  </footer>
</template>
