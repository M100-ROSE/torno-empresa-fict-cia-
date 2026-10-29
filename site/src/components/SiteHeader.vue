<script setup>
import { itensMenu } from '../data/navegacao.js'
</script>

<template>
  <header class="topo">
    <div class="shell topo__interno">
      <a class="marca" href="#topo" aria-label="TORNO — início">Torno</a>
      <nav class="nav" aria-label="Principal">
        <ul class="nav__lista">
          <li v-for="item in itensMenu" :key="item.href"><a :href="item.href">{{ item.label }}</a></li>
        </ul>
      </nav>
      <a class="nav__cta" href="#contato">Agendar visita</a>
    </div>
  </header>
</template>
