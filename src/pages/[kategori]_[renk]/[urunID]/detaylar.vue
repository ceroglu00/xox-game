<template>
  <h3>{{route.params.kategori}}</h3>
  <p>BEN {{route.params.urunID}} IDli ürünüm</p>

  <p>RENK: {{route.params.renk}}</p>
  <p>STOK: {{route.query.stok}}</p>
  <p>EBAT: {{route.query.en}}</p>
</template>



<script setup>

import {useRoute} from "vue-router";

const route = useRoute();

</script>


<style scoped>

</style>
