<template>
  <div class="q-mx-lg">
    <h2 class="title2 non-selectable text-white">Dokumentácia</h2>
    <div class="row">
      <div class="col-12">
        <h3 class="text-center text-h3 text-white text non-selectable">
          Zápisnice
        </h3>
      </div>
      <div class="col-12 q-mb-lg">
        <q-tabs v-model="tab" class="text-white q-mb-md" align="justify">
          <q-tab no-caps class="text" name="semester1" label="1. semester" />
          <q-tab no-caps name="semester2" label="2. semester" />
        </q-tabs>
      </div>
      <div
        v-for="(notation, index) in tab == 'semester1'
          ? notations1
          : notations2"
        :key="notation.date.toDateString()"
        :class="
          (index % 2 == 0 ? 'justify-start' : 'justify-end') +
          ' row fit q-mb-md'
        "
      >
        <!--<q-separator
          class="q-mx-md"
          v-if="index % 2 == 1"
          vertical
          inset
          color="white"
          size="3px"
        />-->
        <div
          v-ripple
          class="col-sm-6 col-xs-12 text-center notation-item cursor-pointer q-hoverable q-pa-md"
        >
          <div class="row text-center">
            <div class="fit">
              <a href="" class="text-h4 text-white text">{{
                notation.title
              }}</a>
              <q-icon
                name="description"
                size="md"
                color="white"
                class="q-mb-md q-ml-sm"
              />
            </div>
          </div>
          <p class="text-body2 text-white q-mb-md">
            {{ notation.date.toLocaleDateString() }}
          </p>
          <p class="text-body1 text-white">
            {{ notation.note }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useNotationStore } from 'src/stores/notationStore';

export default defineComponent({
  name: 'DocComponent',
  setup() {
    const notationStore = useNotationStore();
    const notations1 = notationStore.notations1;
    const notations2 = notationStore.notations2;
    return { tab: ref('semester1'), notations1, notations2 };
  },
});
</script>

<style>
.q-tab__label {
  font-size: calc(12px + 1.5vw);
}
.notation-item {
  border: solid white;
  border-radius: 20px;
}
</style>
