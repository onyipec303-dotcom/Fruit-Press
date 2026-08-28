import heroWithFruits from './assets/images/fruit_press_hero_with_fruits_1787933942598.jpg';
import citrusDisplay from './assets/images/fruit_press_citrus_display_1787933960977.jpg';
import watermelonGrapeDisplay from './assets/images/fruit_press_watermelon_grape_1787933979279.jpg';
import pressingOrangesAction from './assets/images/fruit_press_pressing_oranges_1787934001479.jpg';

export const PRODUCT_IMAGES = {
  hero: heroWithFruits,
  photo1: heroWithFruits,
  photo2: citrusDisplay,
  pressingOrange: pressingOrangesAction,
  pressingWatermelon: watermelonGrapeDisplay,
  pressingLemon: citrusDisplay,
  gallery: [
    {
      url: heroWithFruits,
      actionUrl: pressingOrangesAction,
      title: 'Manual Hand Fruit Press with Fresh Assorted Fruits',
      subtitle: 'Surrounded by fresh pineapples, oranges, watermelons, lemons, and grapes ready for effortless pressing.',
      tag: 'Fresh Fruits Display'
    },
    {
      url: pressingOrangesAction,
      actionUrl: pressingOrangesAction,
      title: 'Pressing Fresh Juicy Oranges into Pure Juice',
      subtitle: 'Downward lever extracts 100% vitamin-packed orange juice directly into your glass.',
      tag: 'Oranges & Citrus'
    },
    {
      url: watermelonGrapeDisplay,
      actionUrl: watermelonGrapeDisplay,
      title: 'Fresh Watermelon Slices, Grapes & Kiwi Extraction',
      subtitle: 'Presses juicy watermelon slices, berries, and soft fruits with zero pulp clogs or seeds.',
      tag: 'Watermelon & Grapes'
    },
    {
      url: citrusDisplay,
      actionUrl: citrusDisplay,
      title: 'Fresh Lemons, Limes & Pineapples Juicing Setup',
      subtitle: 'Strainer bowl holds whole halves of lemons and citrus for maximum yield and zero bitter peel oil.',
      tag: 'Lemons & Limes'
    },
    {
      url: 'https://i.ibb.co/FkMR1xRG/fruit-press-3.jpg',
      actionUrl: pressingOrangesAction,
      title: 'Heavy-Duty Cast Metal Body & Leverage Mechanism',
      subtitle: 'Built from food-grade cast aluminum with heavy mechanical leverage for effortless pressing.',
      tag: 'Cast Metal Specs'
    }
  ]
};
