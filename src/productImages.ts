import handheldHeroWithFruits from './assets/images/handheld_fruit_press_hero_1788084431344.jpg';
import handheldPressingOrange from './assets/images/handheld_pressing_orange_1788084451391.jpg';
import handheldPressingLemon from './assets/images/handheld_pressing_lemon_1788084466193.jpg';
import handheldPressingWatermelon from './assets/images/handheld_pressing_watermelon_1788084479798.jpg';

export const PRODUCT_IMAGES = {
  hero: handheldHeroWithFruits,
  photo1: handheldHeroWithFruits,
  photo2: handheldPressingOrange,
  pressingOrange: handheldPressingOrange,
  pressingWatermelon: handheldPressingWatermelon,
  pressingLemon: handheldPressingLemon,
  gallery: [
    {
      url: handheldHeroWithFruits,
      actionUrl: handheldPressingOrange,
      title: 'Handheld Manual Fruit Press with Fresh Fruits',
      subtitle: 'Heavy-duty handheld metal squeezer surrounded by fresh oranges, lemons, limes, and watermelons ready to press.',
      tag: 'Handheld Squeezer'
    },
    {
      url: handheldPressingOrange,
      actionUrl: handheldPressingOrange,
      title: 'Handheld Squeeze: Sweet Oranges & Citrus',
      subtitle: 'Customer holding and squeezing the ergonomic handles with pure golden juice pouring directly into the glass.',
      tag: 'Orange Squeeze'
    },
    {
      url: handheldPressingLemon,
      actionUrl: handheldPressingLemon,
      title: 'Handheld Squeeze: Lemons & Limes (Seed-Free)',
      subtitle: 'Effortlessly extracts maximum seedless juice without bitter peel oil, mess, or hand fatigue.',
      tag: 'Lemon & Lime Squeeze'
    },
    {
      url: handheldPressingWatermelon,
      actionUrl: handheldPressingWatermelon,
      title: 'Handheld Squeeze: Watermelon & Soft Fruits',
      subtitle: 'Easily press watermelon chunks, grapes, and soft fruits by hand for instant refreshing natural drinks.',
      tag: 'Watermelon Squeeze'
    }
  ]
};
