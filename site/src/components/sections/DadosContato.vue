<script setup>
defineProps({
  itens: { type: Array, required: true },
})
</script>

<template>
  <dl class="dados">
    <div v-for="item in itens" :key="item.termo" class="dado">
      <dt>{{ item.termo }}</dt>
      <dd><template v-for="(linha, indice) in item.linhas" :key="linha"><br v-if="indice > 0">{{ linha }}</template></dd>
    </div>
  </dl>
</template>
