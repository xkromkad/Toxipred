<template>
  <div class="q-mx-lg">
    <div class="row justify-center items-center" style="height: 80vh;">
      <div class="col-12">
        <h1 class="text-h1 text-center title non-selectable">ToxiPred</h1>
        <p
          class="text-body1 text-center text-uppercase text-white non-selectable"
        >
          Predikčný model na odhaľovanie toxicity látok
        </p>
      </div>
    </div>
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
  font-size: calc(50px + 8vw);
}
</style>
