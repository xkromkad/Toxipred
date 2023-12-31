<template>
  <q-header class="header" id="header">
    <q-toolbar>
      <div style="width: 100px" class="q-mr-sm">
        <q-toolbar-title shrink class="title non-selectable">
          TP
        </q-toolbar-title>
      </div>

      <q-space />
      <div v-if="$q.screen.gt.sm" class="q-py-xs">
        <q-btn
          class="q-mx-md btn"
          flat
          v-for="navTtab in tabs"
          no-caps
          size="lg"
          :key="navTtab.id"
          :style="{
            backgroundColor: tab === navTtab.tab ? 'rgb(201, 163, 57)' : '',
          }"
          :label="navTtab.caption"
          @click="setTab(navTtab.tab)"
        />
      </div>
      <q-space />
      <img :src="fiitLogo" alt="fiit_logo" class="header-photo q-mr-sm" />
      <q-btn
        v-if="$q.screen.lt.md"
        flat
        dense
        round
        icon="menu"
        aria-label="Menu"
        @click="toggleRightDrawer"
        class="q-mr-sm"
      />
    </q-toolbar>
  </q-header>
  <q-drawer
    dark
    background="blue"
    class="drawer"
    v-model="rightDrawerOpen"
    bordered
    elevated
    behavior="default"
    side="right"
  >
    <q-list>
      <q-item-label header class="text-white"> Menu </q-item-label>

      <EssentialLink
        v-for="navTab in tabs"
        :key="navTab.id"
        v-bind="navTab"
        :setTab="setTab"
        :currentTab="tab"
      />
    </q-list>
  </q-drawer>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from 'vue';
import { useMenuStore } from 'src/stores/menuStore';
import EssentialLink from 'components/EssentialLink.vue';
import fiitLogo from 'src/assets/icons/stu_fiit_logo.svg';

export default defineComponent({
  name: 'HeaderComponent',
  components: { EssentialLink },
  setup() {
    const rightDrawerOpen = ref(false);
    const menu = useMenuStore();
    const tabs = menu.tabs;
    const tab = ref('');

    const setTab = async (tabValue: string) => {
      if (rightDrawerOpen.value) {
        rightDrawerOpen.value = false;
      }
      const isValidTab = tabs.some((tab) => tab.tab === tabValue);
      const newTabValue = isValidTab ? tabValue : 'domov';

      if (newTabValue) {
        const { nextTick } = await import('vue');
        await nextTick();
        scrollToElement(newTabValue);
      }
    };

    const scrollToElement = (tabValue: string) => {
      if (tabValue === 'domov') {
        tab.value = 'domov';
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
        return;
      }

      const target = document.getElementById(tabValue);
      const headerHeight = document.querySelector('header')?.offsetHeight || 0;

      if (target) {
        const offsetPosition =
          target.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    };

    function handleScroll() {
      const sections = ['domov', 'projekt', 'tim', 'dokumentacia'];

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section == null) {
          continue;
        }
        const rect = section.getBoundingClientRect();

        if (rect.top <= 200 && rect.bottom >= 200) {
          // Check if the middle of the section is visible in the viewport
          var currentPath = window.location.pathname;
          if (currentPath.endsWith('/')) {
            currentPath = currentPath.slice(0, -1);
          }
          tab.value = sectionId;
          const newUrl = `${currentPath}/#${sectionId}`;
          window.history.replaceState({}, '', newUrl);
          break;
        }
      }
    }

    onMounted(() => {
      const tabValue = window.location.hash.slice(1); // Extract tabValue from URL
      setTab(tabValue); // Set the tabValue in your component's state
      window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      tabs,
      rightDrawerOpen,
      tab,
      fiitLogo,
      setTab,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },
});
</script>

<style>
.title {
  font-family: 'Bai Jamjuree', sans-serif;
  letter-spacing: 2px;
  font-size: 40px;
  overflow: visible;
}

.btn {
  font-family: 'Bai Jamjuree', sans-serif;
}
.drawer {
  background: linear-gradient(
    90deg,
    rgba(49, 76, 232, 1) 63%,
    rgba(15, 72, 195, 1) 100%
  );
}

/* Additional style for the image */
.header-photo {
  width: 100px; /* Adjust the width as needed */
  height: auto; /* Maintain aspect ratio */
}
</style>
