import { Member } from 'src/components/models';
import { defineStore } from 'pinia';

export const useMembersStore = defineStore('members', {
  state: (): { members: Member[] } => {
    return {
      members: [
        {
          id: 1,
          name: 'Filip Cák',
          info: 'Data analysis',
          image: '/team/filip.jpeg',
        },
        {
          id: 2,
          name: 'Lukáš Grejták',
          info: 'Data science',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Icon-round-Question_mark.svg/1200px-Icon-round-Question_mark.svg.png',
        },
        {
          id: 3,
          name: 'Patrik Kecera',
          info: 'Web development',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Icon-round-Question_mark.svg/1200px-Icon-round-Question_mark.svg.png',
        },
        {
          id: 4,
          name: 'Dávid Kromka',
          info: 'Web development',
          image: '/team/david.jpg',
        },
        {
          id: 5,
          name: 'Emma Macháčová',
          info: 'Scrum master',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Icon-round-Question_mark.svg/1200px-Icon-round-Question_mark.svg.png',
        },
        {
          id: 5,
          name: 'Adam Miškove',
          info: 'Data science',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Icon-round-Question_mark.svg/1200px-Icon-round-Question_mark.svg.png',
        },
        {
          id: 7,
          name: 'Matej Mosnár',
          info: 'Data science',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Icon-round-Question_mark.svg/1200px-Icon-round-Question_mark.svg.png',
        },
      ],
    };
  },
});
