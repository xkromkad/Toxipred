<template>
  <q-layout view="lHh LpR lFf" class="page">
    <header-component />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderComponent from 'components/HeaderComponent.vue';

export default defineComponent({
  name: 'MainLayout',

  components: {
    HeaderComponent,
  },

  setup() {
    return {};
  },
});
</script>

<style scoped>
.page {
  background: rgb(23, 179, 227);
  background: linear-gradient(
    90deg,
    rgba(23, 179, 227, 1) 0%,
    rgba(49, 76, 232, 1) 63%,
    rgba(15, 72, 195, 1) 100%
  );
}
</style>
