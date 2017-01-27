import moment from 'moment';
export const entries = [
  {
    id: 0,
    meta: {
      author: {
        name: 'Finn',
        age: '12'
      },
      updatedAt: moment().subtract(10, 'days')
        .calendar(),
      createdAt: moment().subtract(10, 'days')
        .calendar(),
    },
    image: {
      src: 'http://cdn-static.sidereel.com/tv_shows/' +
        '4657/giant_2x/14582706_AdventureTime_SC1.jpg',
      width: 100,
      height: 100,
      alt: 'Finn and Jake'
    },
    text: 'Time for adventure!',
    likes: 60
  },
  {
    id: 1,
    meta: {
      author: {
        name: 'Finn',
        age: '12'
      },
      updatedAt: moment().subtract(10, 'days')
        .calendar(),
      createdAt: moment().subtract(10, 'days')
        .calendar()
    },

    image: {
      src: 'http://cdn-static.sidereel.com/tv_shows' +
        '/4657/giant_2x/14582706_AdventureTime_SC1.jpg',
      width: 100,
      height: 100,
      alt: 'Finn and Jake'
    },
    text: 'Explore the dungeon!',
    likes: 45
  },
  {
    id: 2,
    meta: {
      author: {
        name: 'Finn',
        age: '12'
      },
      updatedAt: moment().subtract(10, 'days')
        .calendar(),
      createdAt: moment().subtract(10, 'days')
        .calendar()
    },

    image: {
      src: 'http://cdn-static.sidereel.com/tv_shows' +
        '/4657/giant_2x/14582706_AdventureTime_SC1.jpg',
      width: 100,
      height: 100,
      alt: 'Finn and Jake'
    },
    text: 'Save princesses',
    likes: 30
  },
];
