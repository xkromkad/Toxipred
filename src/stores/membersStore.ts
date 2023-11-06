import { Member } from 'src/components/models';
import { defineStore } from 'pinia';

export const useMembersStore = defineStore('members', {
  state: (): { members: Member[] } => {
    return {
      members: [
        {
          id: 1,
          name: 'Filip Cák',
          info: '',
          image: 'https://cdn.quasar.dev/img/avatar4.jpg',
        },
        {
          id: 2,
          name: 'Lukáš Grejták',
          info: '',
          image: 'https://cdn.quasar.dev/img/avatar4.jpg',
        },
        {
          id: 3,
          name: 'Patrik Kecera',
          info: '',
          image: 'https://cdn.quasar.dev/img/avatar4.jpg',
        },
        {
          id: 4,
          name: 'Dávid Kromka',
          info: '',
          image: 'https://cdn.quasar.dev/img/avatar4.jpg',
        },
        {
          id: 5,
          name: 'Emma macháčová',
          info: '',
          image: 'https://cdn.quasar.dev/img/avatar2.jpg',
        },
        {
          id: 5,
          name: 'Adam Miškove',
          info: '',
          image: 'https://cdn.quasar.dev/img/avatar4.jpg',
        },
        {
          id: 7,
          name: 'Matej Mosnár',
          info: '',
          image: 'https://cdn.quasar.dev/img/avatar4.jpg',
        },
      ],
    };
  },
});
