type Period = {
  year: string;
  event: string;
};

export type Content = Period[];

const data = [
  {
    theme: 'Музыка',
    period: [1989, 1994],
    content: [
      {
        year: '1989',
        event:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra erat sit amet gravida egestas. Integer sit amet leo at dolor tempor ornare. Duis sed erat sapien. Nullam pharetra urna lacinia, fermentum tellus id, dictum odio.',
      },
      {
        year: '1990',
        event:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra erat sit amet gravida egestas. Integer sit amet leo at dolor tempor ornare. Duis sed erat sapien. Nullam pharetra urna lacinia, fermentum tellus id, dictum odio.',
      },
      {
        year: '1991',
        event:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra erat sit amet gravida egestas. Integer sit amet leo at dolor tempor ornare. Duis sed erat sapien. Nullam pharetra urna lacinia, fermentum tellus id, dictum odio.',
      },
      {
        year: '1992',
        event:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra erat sit amet gravida egestas. Integer sit amet leo at dolor tempor ornare. Duis sed erat sapien. Nullam pharetra urna lacinia, fermentum tellus id, dictum odio.',
      },
      {
        year: '1993',
        event:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra erat sit amet gravida egestas. Integer sit amet leo at dolor tempor ornare. Duis sed erat sapien. Nullam pharetra urna lacinia, fermentum tellus id, dictum odio.',
      },
      {
        year: '1994',
        event:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra erat sit amet gravida egestas. Integer sit amet leo at dolor tempor ornare. Duis sed erat sapien. Nullam pharetra urna lacinia, fermentum tellus id, dictum odio.',
      },
    ],
  },
  {
    theme: 'Кино',
    period: [1995, 2000],
    content: [
      {
        year: '1995',
        event:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra erat sit amet gravida egestas. Integer sit amet leo at dolor tempor ornare. Duis sed erat sapien. Nullam pharetra urna lacinia, fermentum tellus id, dictum odio.',
      },
      {
        year: '1996',
        event:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra erat sit amet gravida egestas. Integer sit amet leo at dolor tempor ornare. Duis sed erat sapien. Nullam pharetra urna lacinia, fermentum tellus id, dictum odio.',
      },
      {
        year: '1997',
        event:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra erat sit amet gravida egestas. Integer sit amet leo at dolor tempor ornare. Duis sed erat sapien. Nullam pharetra urna lacinia, fermentum tellus id, dictum odio.',
      },
      {
        year: '1998',
        event:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra erat sit amet gravida egestas. Integer sit amet leo at dolor tempor ornare. Duis sed erat sapien. Nullam pharetra urna lacinia, fermentum tellus id, dictum odio.',
      },
      {
        year: '1999',
        event:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra erat sit amet gravida egestas. Integer sit amet leo at dolor tempor ornare. Duis sed erat sapien. Nullam pharetra urna lacinia, fermentum tellus id, dictum odio.',
      },
      {
        year: '2000',
        event:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra erat sit amet gravida egestas. Integer sit amet leo at dolor tempor ornare. Duis sed erat sapien. Nullam pharetra urna lacinia, fermentum tellus id, dictum odio.',
      },
    ],
  },
  {
    theme: 'Спорт',
    period: [2001, 2006],
    content: [
      {
        year: '2001',
        event:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra erat sit amet gravida egestas. Integer sit amet leo at dolor tempor ornare. Duis sed erat sapien. Nullam pharetra urna lacinia, fermentum tellus id, dictum odio.',
      },
      {
        year: '2002',
        event:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra erat sit amet gravida egestas. Integer sit amet leo at dolor tempor ornare. Duis sed erat sapien. Nullam pharetra urna lacinia, fermentum tellus id, dictum odio.',
      },
      {
        year: '2003',
        event:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra erat sit amet gravida egestas. Integer sit amet leo at dolor tempor ornare. Duis sed erat sapien. Nullam pharetra urna lacinia, fermentum tellus id, dictum odio.',
      },
      {
        year: '2004',
        event:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra erat sit amet gravida egestas. Integer sit amet leo at dolor tempor ornare. Duis sed erat sapien. Nullam pharetra urna lacinia, fermentum tellus id, dictum odio.',
      },
      {
        year: '2005',
        event:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra erat sit amet gravida egestas. Integer sit amet leo at dolor tempor ornare. Duis sed erat sapien. Nullam pharetra urna lacinia, fermentum tellus id, dictum odio.',
      },
      {
        year: '2006',
        event:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra erat sit amet gravida egestas. Integer sit amet leo at dolor tempor ornare. Duis sed erat sapien. Nullam pharetra urna lacinia, fermentum tellus id, dictum odio.',
      },
    ],
  },
  {
    theme: 'Литература',
    period: [2007, 2012],
    content: [
      {
        year: '2007',
        event:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra erat sit amet gravida egestas. Integer sit amet leo at dolor tempor ornare. Duis sed erat sapien. Nullam pharetra urna lacinia, fermentum tellus id, dictum odio.',
      },
      {
        year: '2008',
        event:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra erat sit amet gravida egestas. Integer sit amet leo at dolor tempor ornare. Duis sed erat sapien. Nullam pharetra urna lacinia, fermentum tellus id, dictum odio.',
      },
      {
        year: '2009',
        event:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra erat sit amet gravida egestas. Integer sit amet leo at dolor tempor ornare. Duis sed erat sapien. Nullam pharetra urna lacinia, fermentum tellus id, dictum odio.',
      },
      {
        year: '2010',
        event:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra erat sit amet gravida egestas. Integer sit amet leo at dolor tempor ornare. Duis sed erat sapien. Nullam pharetra urna lacinia, fermentum tellus id, dictum odio.',
      },
      {
        year: '2011',
        event:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra erat sit amet gravida egestas. Integer sit amet leo at dolor tempor ornare. Duis sed erat sapien. Nullam pharetra urna lacinia, fermentum tellus id, dictum odio.',
      },
      {
        year: '2012',
        event:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra erat sit amet gravida egestas. Integer sit amet leo at dolor tempor ornare. Duis sed erat sapien. Nullam pharetra urna lacinia, fermentum tellus id, dictum odio.',
      },
    ],
  },
  {
    theme: 'Искусство',
    period: [2013, 2018],
    content: [
      {
        year: '2013',
        event:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra erat sit amet gravida egestas. Integer sit amet leo at dolor tempor ornare. Duis sed erat sapien. Nullam pharetra urna lacinia, fermentum tellus id, dictum odio.',
      },
      {
        year: '2014',
        event:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra erat sit amet gravida egestas. Integer sit amet leo at dolor tempor ornare. Duis sed erat sapien. Nullam pharetra urna lacinia, fermentum tellus id, dictum odio.',
      },
      {
        year: '2015',
        event:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra erat sit amet gravida egestas. Integer sit amet leo at dolor tempor ornare. Duis sed erat sapien. Nullam pharetra urna lacinia, fermentum tellus id, dictum odio.',
      },
      {
        year: '2016',
        event:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra erat sit amet gravida egestas. Integer sit amet leo at dolor tempor ornare. Duis sed erat sapien. Nullam pharetra urna lacinia, fermentum tellus id, dictum odio.',
      },
      {
        year: '2017',
        event:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra erat sit amet gravida egestas. Integer sit amet leo at dolor tempor ornare. Duis sed erat sapien. Nullam pharetra urna lacinia, fermentum tellus id, dictum odio.',
      },
      {
        year: '2018',
        event:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra erat sit amet gravida egestas. Integer sit amet leo at dolor tempor ornare. Duis sed erat sapien. Nullam pharetra urna lacinia, fermentum tellus id, dictum odio.',
      },
    ],
  },
  {
    theme: 'Наука',
    period: [2019, 2024],
    content: [
      {
        year: '2019',
        event:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra erat sit amet gravida egestas. Integer sit amet leo at dolor tempor ornare. Duis sed erat sapien. Nullam pharetra urna lacinia, fermentum tellus id, dictum odio.',
      },
      {
        year: '2020',
        event:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra erat sit amet gravida egestas. Integer sit amet leo at dolor tempor ornare. Duis sed erat sapien. Nullam pharetra urna lacinia, fermentum tellus id, dictum odio.',
      },
      {
        year: '2021',
        event:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra erat sit amet gravida egestas. Integer sit amet leo at dolor tempor ornare. Duis sed erat sapien. Nullam pharetra urna lacinia, fermentum tellus id, dictum odio.',
      },
      {
        year: '2022',
        event:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra erat sit amet gravida egestas. Integer sit amet leo at dolor tempor ornare. Duis sed erat sapien. Nullam pharetra urna lacinia, fermentum tellus id, dictum odio.',
      },
      {
        year: '2023',
        event:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra erat sit amet gravida egestas. Integer sit amet leo at dolor tempor ornare. Duis sed erat sapien. Nullam pharetra urna lacinia, fermentum tellus id, dictum odio.',
      },

      {
        year: '2024',
        event:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra erat sit amet gravida egestas. Integer sit amet leo at dolor tempor ornare. Duis sed erat sapien. Nullam pharetra urna lacinia, fermentum tellus id, dictum odio.',
      },
    ],
  },
];

export default data;
