import { randomString } from 'utils/generate';
export default {
  expense : [
    {
      id : randomString(7),
      name : 'Site',
      row : [
        {
          id : randomString(7),
          name_field : 'Room and hall fees',
          estimated : 500,
          actual : 300,
        },
        {
          id : randomString(7),
          name_field : 'Site staff',
          estimated : 500,
          actual : 300,
        },
        {
          id : randomString(7),
          name_field : 'Equipment',
          estimated : 500,
          actual : 300,
        },
        {
          id : randomString(7),
          name_field : 'Table and chairs',
          estimated : 500,
          actual : 300,
        },
      ],
      totalEstimated : 500,
      totalActual : 300,
    },
    {
      id : randomString(7),
      name : 'Decorations',
      row : [
        {
          id : randomString(7),
          name_field : 'Flowers',
          estimated : 200,
          actual : 300,
        },
        {
          id : randomString(7),
          name_field : 'Candles',
          estimated : 200,
          actual : 300,
        },
        {
          id : randomString(7),
          name_field : 'Lighting',
          estimated : 200,
          actual : 300,
        },
        {
          id : randomString(7),
          name_field : 'Balloons',
          estimated : 200,
          actual : 300,
        },
        {
          id : randomString(7),
          name_field : 'Paper supplies',
          estimated : 200,
          actual : 300,
        },
      ],
      totalEstimated : 200,
      totalActual : 500,
    },
    {
      id : randomString(7),
      name : 'Publicity',
      row : [
        {
          id : randomString(7),
          name_field : 'Graphics work',
          estimated : 500,
          actual : 800,
        },
        {
          id : randomString(7),
          name_field : 'Photocopying/Printing',
          estimated : 500,
          actual : 800,
        },
        {
          id : randomString(7),
          name_field : 'Postage',
          estimated : 500,
          actual : 800,
        },
      ],
      totalEstimated : 500,
      totalActual : 800,
    },
    {
      id : randomString(7),
      name : 'Miscellaneous',
      row : [
        {
          id : randomString(7),
          name_field : 'Telephone',
          estimated : 500,
          actual : 600,
        },
        {
          id : randomString(7),
          name_field : 'Transportation',
          estimated : 500,
          actual : 600,
        },
        {
          id : randomString(7),
          name_field : 'Stationery supplies',
          estimated : 500,
          actual : 600,
        },
        {
          id : randomString(7),
          name_field : 'Fax services',
          estimated : 500,
          actual : 600,
        },
      ],
      totalEstimated : 500,
      totalActual : 600,
    },
    {
      id : randomString(7),
      name : 'Refreshments',
      row : [
        {
          id : randomString(7),
          name_field : 'Food',
          estimated : 600,
          actual : 800,
        },
        {
          id : randomString(7),
          name_field : 'Drinks',
          estimated : 600,
          actual : 800,
        },
        {
          id : randomString(7),
          name_field : 'Linens',
          estimated : 600,
          actual : 800,
        },
        {
          id : randomString(7),
          name_field : 'Staff and gratuities',
          estimated : 600,
          actual : 800,
        },
      ],
      totalEstimated : 600,
      totalActual : 800,
    },
    {
      id : randomString(7),
      name : 'Program',
      row : [
        {
          id : randomString(7),
          name_field : 'Performers',
          estimated : 300,
          actual : 500,
        },
        {
          id : randomString(7),
          name_field : 'Speakers',
          estimated : 300,
          actual : 500,
        },
        {
          id : randomString(7),
          name_field : 'Travel',
          estimated : 300,
          actual : 500,
        },
        {
          id : randomString(7),
          name_field : 'Hotel',
          estimated : 300,
          actual : 500,
        },
        {
          id : randomString(7),
          name_field : 'Other',
          estimated : 300,
          actual : 500,
        },
      ],
      totalEstimated : 300,
      totalActual : 500,
    },
    {
      id : randomString(7),
      name : 'Prizes',
      row : [
        {
          id : randomString(7),
          name_field : 'Ribbons/Plaques/Trophies',
          estimated : 200,
          actual : 300,
        },
        {
          id : randomString(7),
          name_field : 'Gifts',
          estimated : 200,
          actual : 300,
        },
      ],
      totalEstimated : 200,
      totalActual : 300,
    }
  ],
  income : [
    {
      id : randomString(7),
      name : 'Admissions',
      row : [
        {
          id : randomString(7),
          name_field : 'Adults',
          estimated : 300,
          actual : 100,
          price : 5,
        },
        {
          id : randomString(7),
          name_field : 'Children',
          estimated : 200,
          actual : 50,
          price : 2,
        },
        {
          id : randomString(7),
          name_field : 'Other',
          estimated : 100,
          actual : 50,
          price : 1,
        },
      ],
      totalEstimated : 2000,
      totalActual : 650,
    },
    {
      id : randomString(7),
      name : 'Ads in program',
      row : [
        {
          id : randomString(7),
          name_field : 'Covers',
          estimated : 300,
          actual : 100,
          price : 20,
        },
        {
          id : randomString(7),
          name_field : 'Half-pages',
          estimated : 200,
          actual : 50,
          price : 10,
        },
        {
          id : randomString(7),
          name_field : 'Quarter-pages',
          estimated : 100,
          actual : 50,
          price : 5,
        },
      ],
      totalEstimated : 8500,
      totalActual : 2750,
    },
    {
      id : randomString(7),
      name : 'Exhibitors/vendors',
      row : [
        {
          id : randomString(7),
          name_field : 'Large booths',
          estimated : 100,
          actual : 50,
          price : 20,
        },
        {
          id : randomString(7),
          name_field : 'Med. booths',
          estimated : 100,
          actual : 10,
          price : 50,
        },
        {
          id : randomString(7),
          name_field : 'Small booths',
          estimated : 50,
          actual : 10,
          price : 5,
        },
      ],
      totalEstimated : 7250,
      totalActual : 1510,
    },
    {
      id : randomString(7),
      name : 'Sale of items',
      row : [
        {
          id : randomString(7),
          name_field : 'Items 1',
          estimated : 400,
          actual : 300,
          price : 20,
        },
        {
          id : randomString(7),
          name_field : 'Items 2',
          estimated : 300,
          actual : 200,
          price : 15,
        },
        {
          id : randomString(7),
          name_field : 'Items 3',
          estimated : 200,
          actual : 100,
          price : 10,
        },
        {
          id : randomString(7),
          name_field : 'Items 4',
          estimated : 100,
          actual : 0,
          price : 5,
        },
      ],
      totalEstimated : 15000,
      totalActual : 10000,
    },
  ],
  totalExpenses : {
    estimated : 2800,
    actual : 3800
  },
  totalIncome : {
    estimated : 32750,
    actual : 14910
  }
};