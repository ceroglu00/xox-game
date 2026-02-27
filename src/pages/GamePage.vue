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

    <p style="font-size: 5px">Şuanki Oyuncu: {{ moveCount % 2 == 0 ? '1' : '2' }}</p>

  </v-container>


</template>

<script setup>

import {ref} from "vue";

var board = ref([])

var moveCount = ref(0);

function checkCell(index) {
  if (moveCount.value % 2 == 0) {
    board.value[index] = "X"
  } else {
    board.value[index] = "O"
  }
  moveCount.value++;
}

function DeterineWinner(){

}

function DeterineWinnerV2(){

}

</script>

<style scoped>
.cell {
  aspect-ratio: 1/1;
  cursor: pointer;
  user-select: none;
}

.cell:hover {
  background-color: red !important;
}
</style>
