<template>
  <v-container fluid class="pa-2">

    <v-row>
      <v-col class="v-col-4 pa-0" v-for="(cell,index) in 9">
        <div class="
        d-flex
      bg-blue
      justify-center
      align-center
      border-solid
"
             @click="checkCell(index)"
        >
          {{ board[index] }}
        </div>
      </v-col>
    </v-row>

  </v-container>


</template>

<script setup>

import {ref} from "vue";

var board = ref([0, 0, 0, 0, 0, 0, 0, 0, 0])


function checkCell(index) {
  board.value[index] = "X"
}

</script>

<style scoped>

</style>
