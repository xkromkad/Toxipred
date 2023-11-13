<template>
  <div class="q-mx-lg">
    <h1
      class="row justify-center text-h1 title non-selectable"
    >
      ToxiPred
    </h1>
    <p
      class="row text-center justify-center text-body1 text-uppercase text-white non-selectable"
    >
      Predikčný model na odhaľovanie toxicity látok
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeComponent',
});
</script>

<style scoped>
.title {
  font-family: 'Bai Jamjuree', sans-serif;
  letter-spacing: 2px;
  color: white;
  font-size:calc(50px + 8vw);
}


</style>
