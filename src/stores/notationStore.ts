import { Notation } from 'src/components/models';
import { defineStore } from 'pinia';
import zapisnica1 from 'src/assets/docs/zapisnica1_20231011.pdf';
import zapisnica2 from 'src/assets/docs/zapisnica2_20231018.pdf';
import zapisnica3 from 'src/assets/docs/zapisnica3_20231025.pdf';
import zapisnica4 from 'src/assets/docs/zapisnica4_20231108.pdf';
import zapisnica5 from 'src/assets/docs/zapisnica5_20231115.pdf';
import zapisnica6 from 'src/assets/docs/zapisnica6_20231122.pdf';

export const useNotationStore = defineStore('notation', {
  state: (): NotationStateInterface => {
    return {
      notations1: [
        {
          date: new Date('2023-10-11'),
          title: '1. zápisnica',
          note: 'Úvodné rozdelenie úloh, ...',
          docPath: zapisnica1,
        },
        {
          date: new Date('2023-10-18'),
          title: '2. zápisnica',
          note: 'V skratke opis zápisnice.',
          docPath: zapisnica2,
        },
        {
          date: new Date('2023-11-25'),
          title: '3. zápisnica',
          note: 'V skratke opis zápisnice.',
          docPath: zapisnica3,
        },
        {
          date: new Date('2023-11-08'),
          title: '4. zápisnica',
          note: 'V skratke opis zápisnice.',
          docPath: zapisnica4,
        },
        {
          date: new Date('2023-11-15'),
          title: '5. zápisnica',
          note: 'V skratke opis zápisnice.',
          docPath: zapisnica5,
        },
        {
          date: new Date('2023-11-22'),
          title: '6. zápisnica',
          note: 'V skratke opis zápisnice.',
          docPath: zapisnica6,
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
