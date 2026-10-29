<script setup>
import Overline from '../ui/Overline.vue'
import BotaoLink from '../ui/BotaoLink.vue'
import LinkEditorial from '../ui/LinkEditorial.vue'
import FiguraArte from '../ui/FiguraArte.vue'
</script>

<template>
  <section class="hero" id="topo" aria-labelledby="hero-titulo">
    <div class="shell hero__grade">
      <div class="hero__texto">
        <Overline texto="Joalheria autoral · São Paulo" />
        <h1 id="hero-titulo">Uma joia começa<br>antes do metal.</h1>
        <p class="lead">Peças únicas em ouro 18k reciclado e pedras de origem certificada. Feitas à mão, uma a uma, no atelier da Vila Madalena.</p>
        <div class="hero__acoes">
          <BotaoLink href="#contato" label="Agendar uma visita" />
          <LinkEditorial href="#pecas" label="Ver as peças" />
        </div>
      </div>

      <FiguraArte variante="hero" legenda="Anel Série Terra · ouro 18k e granada · 2026" />
    </div>
  </section>
</template>
