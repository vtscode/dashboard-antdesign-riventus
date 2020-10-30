import { randomString } from 'utils/generate';
export default {
  overview : [
    {
      id : randomString(7),
      name_field : 'Balance',
      projected : 1585,
      actual : 1740,
      diff : 155,
    },
    {
      id : randomString(7),
      name_field : 'Expenses',
      projected : 7915,
      actual : 7860,
      diff : 55,
    },
    {
      id : randomString(7),
      name_field : 'Total',
      projected : 9500,
      actual : 9600,
      diff : 100,
    },
  ],
  incomeSum : [
    {
      id : randomString(7),
      name_field : 'Income 1',
      projected : 6000,
      actual : 5800,
      diff : 200,
    },
    {
      id : randomString(7),
      name_field : 'Income 2',
      projected : 1000,
      actual : 2300,
      diff : 1300,
    },
    {
      id : randomString(7),
      name_field : 'Extra Income',
      projected : 2500,
      actual : 1500,
      diff : 1000,
    },
  ],
  detailExpenses : [
    {
      id : randomString(7),
      name_field : 'Children',
      projected : 9500,
      actual : 9600,
      diff : 100,
      row : [
        {
          id : randomString(7),
          name_field : 'Extracurricular Activities',
          projected : 40,
          actual : 40,
          diff : 0,
        },
        {
          id : randomString(7),
          name_field : 'Medical',
          projected : 0,
          actual : 0,
          diff : 0,
        },
        {
          id : randomString(7),
          name_field : 'School Supplies',
          projected : 0,
          actual : 0,
          diff : 0,
        },
        {
          id : randomString(7),
          name_field : 'School Tuition',
          projected : 100,
          actual : 100,
          diff : 0,
        },
      ]
    },
    {
      id : randomString(7),
      name_field : 'Children',
      projected : 9500,
      actual : 9600,
      diff : 100,
      row : [
        {
          id : randomString(7),
          name_field : 'Extracurricular Activities',
          projected : 40,
          actual : 40,
          diff : 0,
        },
        {
          id : randomString(7),
          name_field : 'Medical',
          projected : 0,
          actual : 0,
          diff : 0,
        },
        {
          id : randomString(7),
          name_field : 'School Supplies',
          projected : 0,
          actual : 0,
          diff : 0,
        },
        {
          id : randomString(7),
          name_field : 'School Tuition',
          projected : 100,
          actual : 100,
          diff : 0,
        },
      ]
    }
  ]
};

export {};