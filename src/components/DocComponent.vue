<template>
  <div class="q-mx-lg">
    <h2 class="title2 non-selectable text-white q-mb-md">Dokumentácia</h2>
    <div class="row justify-center">
      <div class="col-12">
        <h3 class="text-center text-h3 text-white text non-selectable q-mb-md">
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
        v-if="
          (tab == 'semester1' && notations1.length == 0) ||
          (tab == 'semester2' && notations2.length == 0)
        "
        class="text-body1 text-white"
      >
        Žiadne záznamy
      </div>
      <div
        v-for="notation in tab == 'semester1' ? notations1 : notations2"
        :key="notation.date.toDateString()"
        v-ripple
        @click="window.open(notation.docPath, '_blank')"
        class="col-sm-6 col-xs-12 text-center cursor-pointer q-hoverable q-pa-md"
      >
        <div class="notation-item q-pa-sm">
          <div class="row text-center">
            <div class="fit">
              <q-icon
                name="description"
                size="md"
                color="white"
                class="q-mb-md q-mr-sm"
              />
              <a href="" class="text-h4 text-white text">{{
                notation.title
              }}</a>
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
      <div class="col-12">
        <h3 class="text-center text-h3 text-white text non-selectable q-mb-md">
          Šprinty
        </h3>
      </div>
      <div
        v-ripple
        @click="window.open('src/assets/docs/sprinty.pdf', '_blank')"
        class="col-sm-6 col-xs-12 text-center cursor-pointer q-hoverable q-pa-md"
      >
        <div class="notation-item q-pa-sm">
          <div class="row text-center">
            <div class="fit">
              <q-icon
                name="description"
                size="md"
                color="white"
                class="q-mb-md q-mr-sm"
              />
              <a href="" class="text-h4 text-white text">1. semester</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <h3 class="text-center text-h3 text-white text non-selectable q-mb-md">
          Dôležité odkazy
        </h3>
      </div>
      <div class="col-sm-6 col-xs-12 q-ma-md">
        <q-list dark separator>
          <q-item
            clickable
            v-ripple
            href="https://github.com/matejmosnar/tp_toxipred"
            target="_blank"
          >
            <q-item-section avatar>
              <q-icon color="white" :name="'img:' + github" />
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-body1">Projekt</q-item-label>
              <q-item-label caption
                >Github repozitár pre trénovacie dáta a modely AI</q-item-label
              >
            </q-item-section>
          </q-item>
          <q-item
            clickable
            v-ripple
            href="https://github.com/xkromkad/Toxipred"
            target="_blank"
          >
            <q-item-section avatar>
              <q-icon color="white" :name="'img:' + github" />
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-body1">Stránka tímu</q-item-label>
              <q-item-label caption
                >Github repozitár webovej stránky nášho tímu</q-item-label
              >
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple :href="zadanie" target="_blank">
            <q-item-section avatar>
              <q-icon color="white" name="task" />
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-body1">Zadanie projektu</q-item-label>
              <q-item-label caption
                >Zadanie témy projektu s opisom</q-item-label
              >
            </q-item-section>
          </q-item>
          <q-item
            clickable
            v-ripple
            href="https://www.figma.com/file/4Dzkmaojw2rLczE2crKvSu/TP_13-team-library?type=design&node-id=0%3A1&mode=design&t=uF0ZIe17CnrHKEp3-1"
            target="_blank"
          >
            <q-item-section avatar>
              <q-icon color="white" :name="'img:' + figma" />
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-body1"
                >Návrh stránky tímového projektu</q-item-label
              >
              <q-item-label caption
                >Návrh používateľského rozhrania webovej stránky tímu v nástroji
                Figma</q-item-label
              >
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple :href="motivacny_list" target="_blank">
            <q-item-section avatar>
              <q-icon color="white" name="description" />
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-body1">Motivačný list</q-item-label>
              <q-item-label caption
                >Motivačný list k vybraným témam pre tímový projekt</q-item-label
              >
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useNotationStore } from 'src/stores/notationStore';
import figma from 'src/assets/icons/figma.svg';
import github from 'src/assets/icons/github.svg';
import zadanie from 'src/assets/docs/Zadanie.pdf';
import motivacny_list from 'src/assets/docs/motivacny_list.pdf'

export default defineComponent({
  name: 'DocComponent',
  setup() {
    const notationStore = useNotationStore();
    const notations1 = notationStore.notations1;
    const notations2 = notationStore.notations2;
    return {
      tab: ref('semester1'),
      notations1,
      notations2,
      window,
      figma,
      github,
      zadanie,
      motivacny_list,
    };
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
