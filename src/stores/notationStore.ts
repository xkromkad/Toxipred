import { Notation } from 'src/components/models';
import { defineStore } from 'pinia';

export const useNotationStore = defineStore('notation', {
  state: (): NotationStateInterface => {
    return {
      notations1: [
        {
          date: new Date('2023-10-11'),
          title: '1. zápisnica',
          note: 'Úvodné rozdelenie úloh, ...',
          docPath: '',
        },
        {
          date: new Date('2023-10-18'),
          title: '2. zápisnica',
          note: 'V skratke opis zápisnice.',
          docPath: '',
        },
        {
          date: new Date('2023-11-8'),
          title: '3. zápisnica',
          note: 'V skratke opis zápisnice.',
          docPath: '',
        },
        {
          date: new Date('2023-11-25'),
          title: '4. zápisnica',
          note: 'V skratke opis zápisnice.',
          docPath: '',
        },
      ],
      notations2: [],
    };
  },
});

export interface NotationStateInterface {
  notations1: Notation[];
  notations2: Notation[];
}
