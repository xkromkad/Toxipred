<template>
  <div class="q-mx-lg">
    <h2 class="title2 non-selectable text-white q-mb-md">Tím</h2>
    <div class="row">
      <div class="col-12">
        <h3 class="text-center text-h3 text-white text non-selectable q-mb-sm">
          Členovia nášho tímu
        </h3>
        <div class="text-center text-body1 text-white q-mb-lg">
          Tím číslo 13
        </div>
      </div>
      <q-item
        v-for="member in members"
        :key="member.id"
        class="col-xs-12 col-sm-6 q-pa-lg team-member"
      >
        <q-item-section avatar>
          <q-avatar size="140px">
            <img :src="member.image" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label
            class="text-weight-bold text-white name text-center non-selectable"
            >{{ member.name }}</q-item-label
          >
          <q-item-label class="info text-white text-center non-selectable">{{
            member.info
          }}</q-item-label>
        </q-item-section>
      </q-item>
      <div class="col-12">
        <h3 class="text-center text-h3 text-white text non-selectable q-mb-md">
          Kontakt
        </h3>
      </div>
      <div class="row fit justify-center">
        <div class="col-sm-6 col-12">
          <q-item
            clickable
            href="mailto:team13tp2023@googlegroups.com"
            class="text-body1 text-white justify-center items-center mail"
            style="overflow-wrap: anywhere;"
            >team13tp2023@googlegroups.com</q-item
          >
        </div>
      </div>
    </div>

    <div class="col-12">
      <h3 class="text-center text-h3 text-white text non-selectable q-mb-md">
        O nás
      </h3>
    </div>
    <div class="row fit justify-center">
      <div class="col-sm-8 col-xs-12">
        <div class="text-body1 text-center text-white">
          Sme tím siedmich študentov pokračujúcich v našom štúdiu na FIIT po
          úspešnom ukončení bakalárskeho štúdia. Máme skúsenosti so spracovaním
          a analýzov dát a ich prípravou na tvorbu modelov strojového učenia. V
          rámci školských projektov sme si vyskúšali rôzne úlohy, ako
          klasifikácia, regresia či klastrovanie. Medzi naše skúsenosti zo
          školských projektov, bakalárskej práce a zamestnania patrí analýza,
          návrh, implementácia a nasadenie webových a desktopových aplikácií.
          Ako tím sme schopní navrhnúť a implementovať kvalitné používateľské
          rozhranie, ktoré zabezpečuje optimálnu použiteľnosť, efektívnosť a
          uspokojenie používateľských požiadaviek.
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useMembersStore } from 'src/stores/membersStore';

export default defineComponent({
  name: 'TeamComponent',
  setup() {
    const membersStore = useMembersStore();
    const members = membersStore.members;
    return { members };
  },
});
</script>

<style scoped>
.name {
  font-size: 30px;
}

.info {
  font-size: 20px;
}
</style>
