<template>
  <v-container fluid class="pa-2">
    <v-row>
      <v-col class="v-col-4 pa-0" v-for="(cell,index) in 9"

      >
        <div class="
        d-flex
      bg-blue
      justify-center
      align-center
      border-solid
      cell
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

var board = ref([])

var moveCount = 0;

function checkCell(index) {
  if (moveCount % 2 == 0) {
    board.value[index] = "X"
  } else {
    board.value[index] = "O"
  }
  moveCount++;
}

</script>

<style scoped>
.cell {
  aspect-ratio: 1/1;
}
</style>
