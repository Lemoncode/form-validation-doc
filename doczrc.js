require('dotenv').config();

export default {
  typescript: true,
  base: '/fonk-doc/',
  menu: [
    {
      name: '1. General',
      menu: [
        { name: 'Fonk', order: 1 },
        {
          name: 'Getting Started',
          order: 2,
        },
        { name: 'Validation Schema', order: 3 },
        { name: 'Field Validation', order: 4 },
        { name: 'Record Validation', order: 5 },
        { name: 'Form Validation', order: 6 },
      ],
    },
    {
      name: '2. Validators',
      menu: [
        { name: 'Validators', order: 1 },
        { name: 'Built in validators', order: 2 },
        { name: 'Third Party validators', order: 3 },
        { name: 'Custom validators synchronous', order: 4 },
        { name: 'Custom validators asynchronous', order: 5 },
      ],
    },
    {
      name: '3. Messages',
      menu: [
        { name: 'messages', order: 1 },
        { name: 'Internationalization', order: 2 },
      ],
    },
    {
      name: '4. Form Libraries',
      menu: [{ name: 'React Final Form', order: 1 }],
    },
    {
      name: '5. API',
      menu: [{ name: 'API', order: 1 }],
    },
  ],
};
