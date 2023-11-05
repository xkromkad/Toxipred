<template>
  <div class="q-mx-lg">
    <h1
      class="row justify-center text-h1 title non-selectable"
      :style="{ fontSize: fontSize + 'rem' }"
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
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  name: 'HomeComponent',
  setup() {
    const fontSize = ref(11);
    const updateFontSize = () => {
      if (window.innerWidth <= 1200) {
        fontSize.value = 11;
      }
      if (window.innerWidth <= 1000) {
        fontSize.value = 8;
      }
      if (window.innerWidth <= 600) {
        fontSize.value = 6;
      } if (window.innerWidth <= 400) {
        fontSize.value = 4;
      }
    };

    onMounted(() => {
      updateFontSize();
      window.addEventListener('resize', updateFontSize);
    });

    return { fontSize };
  },
});
</script>

<style scoped>
.title {
  font-family: 'Bai Jamjuree', sans-serif;
  letter-spacing: 2px;
  color: white;
}
</style>
