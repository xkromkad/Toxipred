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
          docPath: 'TD-11.10. 2023 8_15-181123-152753.pdf',
        },
        {
          date: new Date('2023-10-25'),
          title: '2. zápisnica',
          note: 'V skratke opis zápisnice.',
          docPath: 'TD-25.10. 2023 20_00-181123-152559.pdf',
        },
        {
          date: new Date('2023-11-8'),
          title: '3. zápisnica',
          note: 'V skratke opis zápisnice.',
          docPath: 'TD-08.11.2023 8_30-181123-152445.pdf',
        },
        {
          date: new Date('2023-11-25'),
          title: '4. zápisnica',
          note: 'V skratke opis zápisnice.',
          docPath: 'TD-15.11. 2023 8_20-181123-152304.pdf',
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
