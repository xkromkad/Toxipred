<template>
  <q-item
    clickable
    :style="{
      backgroundColor: currentTab === tab ? 'rgb(201, 163, 57)' : '',
    }"
    tag="a"
    target="_blank"
    @click="setTab(tab)"
  >
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EssentialLink',
  props: {
    id: {
      type: Number,
      required: true,
    },

    caption: {
      type: String,
      required: true,
    },

    tab: {
      type: String,
      required: true,
    },

    link: {
      type: String,
      default: '#',
    },

    icon: {
      type: String,
      default: '',
    },
    setTab: {
      type: Function,
      required: true,
    },
    currentTab: {
      type: String,
      required: true,
    },
  },
});
</script>
