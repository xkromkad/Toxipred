<template>
  <q-layout view="lHh LpR lfr" class="page">
    <header-component />
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer class="footer">
      <q-toolbar>
        <q-toolbar-title>Tím 13</q-toolbar-title>
        <q-space />
        <q-item
          clickable
          href="mailto:team13tp2023@googlegroups.com"
          class="text-body2"
          >team13tp2023@googlegroups.com</q-item
        >
      </q-toolbar>
    </q-footer>
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

<style>
.page,
.header,
.footer {
  background: rgb(23, 179, 227);
  background: linear-gradient(
    90deg,
    rgba(23, 179, 227, 1) 0%,
    rgba(49, 76, 232, 1) 63%,
    rgba(15, 72, 195, 1) 100%
  );
}

.page {
  min-height: 100%;
}
</style>
