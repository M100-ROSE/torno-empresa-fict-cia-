<script setup>
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
import HeroSection from './components/sections/HeroSection.vue'
import PecasSection from './components/sections/PecasSection.vue'
import AtelierSection from './components/sections/AtelierSection.vue'
import ContatoSection from './components/sections/ContatoSection.vue'
</script>

<template>
  <a class="skip" href="#conteudo">Ir para o conteúdo</a>

  <SiteHeader />

  <main id="conteudo">
    <HeroSection />
    <PecasSection />
    <AtelierSection />
    <ContatoSection />
  </main>

  <SiteFooter />
</template>
