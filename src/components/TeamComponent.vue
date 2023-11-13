<template>
  <div class="q-mx-lg">
    <h2 class="title2 non-selectable text-white">Tím</h2>
    <q-item-label class="text-white member-label" header
      >Členovia nášho tímu</q-item-label
    >
    <div class="row">
      <q-item
        v-for="member in members"
        :key="member.id"
        class="col-xs-12 col-sm-6 q-pa-lg"
      >
        <q-item-section avatar>
          <q-avatar size="100px">
            <img :src="member.image" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-weight-bold text-white name text-center non-selectable">{{
            member.name
          }}</q-item-label>
        </q-item-section>
      </q-item>
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
.member-label {
  font-size: 30px;
}
</style>
