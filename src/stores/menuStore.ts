import { Tab } from 'src/components/models';
import { defineStore } from 'pinia';

export const useMenuStore = defineStore('menu', {
  state: (): { tabs: Tab[] } => {
    return {
      tabs: [
        { id: 1, tab: 'domov', caption: 'Domov', link: '/#domov', icon: 'home' },
        { id: 2, tab: 'projekt', caption: 'Projekt', link: '/#projekt', icon: 'code' },
        { id: 3, tab: 'tim', caption: 'Tím', link: '/#tim', icon: 'diversity_3' },
        {
          id: 4, tab: 'dokumentacia',
          caption: 'Dokumentácia',
          link: '/#dokumentacia',
          icon: 'description',
        },
      ],
    };
  },
});
