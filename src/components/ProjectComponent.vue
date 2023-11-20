<template>
  <div class="q-mx-lg">
    <h2 class="title2 non-selectable text-white q-mb-md">Projekt</h2>
    <div class="row justify-center">
      <div class="col-12">
        <h3 class="text-center text-h3 text-white text non-selectable q-mb-md">
          Cieľ projektu
        </h3>
      </div>
      <div class="col-sm-8 col-xs-12">
        <div class="text-body1 text-white text-center">
          Cieľom projektu je vytvorenie digitálneho dvojčaťa k in vivo a in
          vitro experimentom. Pomocou metód strojového učenia vytvoriť predikčný
          model na odhalenie toxicity nových látok.
        </div>
      </div>
      <div class="col-12">
        <h3 class="text-center text-h3 text-white text non-selectable q-mb-md">
          Vedúca projektu
        </h3>
      </div>
      <div class="text-body1 text-white text-center">
        Ing. Marta Prnová, PhD
      </div>
      <div class="col-12">
        <h3 class="text-center text-h3 text-white text non-selectable q-mb-md">
          Akademický partner
        </h3>
      </div>
      <q-item
        class="text-body1 text-white text-center items-center link"
        v-ripple
        clickable
        href="https://cem.sav.sk"
        target="_blank"
      >
        Centrum experimentálnej medicíny SAV
      </q-item>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProjectComponent',
});
</script>
