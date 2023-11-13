<template>
  <q-page class="mainPage">
    <home-component class="component" id="domov" />
    <project-component class="component" id="projekt" />
    <team-component class="component" id="tim" />
    <doc-component class="component" id="dokumentacia" />
  </q-page>
</template>

<script lang="ts">
import HomeComponent from 'components/HomeComponent.vue';
import ProjectComponent from 'components/ProjectComponent.vue';
import TeamComponent from 'components/TeamComponent.vue';
import DocComponent from 'components/DocComponent.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  components: { HomeComponent, ProjectComponent, TeamComponent, DocComponent },
});
</script>

<style>
.component {
  min-height: 90vh;
}
.text-body1 {
  font-size: 1.5rem;
}
.mainPage {
  max-width: 1200px;
  margin: 0 auto;
}
.text {
  font-family: 'Bai Jamjuree', sans-serif;
}
.title2 {
  font-family: 'Bai Jamjuree', sans-serif;
  letter-spacing: 2px;
  font-size: calc(35px + 2vw);
  overflow: visible;
}
</style>
