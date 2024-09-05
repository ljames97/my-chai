// data.jsx
import { assam, blackTea, dragonWell, englishBreakfast, goldenNeedle, gunpowderGreen, japaneseSencha, jasmineOolong, milkOolong, yellowGold, yunnanGold } from "../assets/images";

const collections = [
  {
    id: 1,
    path: 'black-tea',
    title: 'Black Tea',
    description: 'Experience the rich, bold flavors of our Black Tea Collection.',
  },
  {
    id: 2,
    path: 'green-tea',
    title: 'Green',
    description: 'Experience the rich, bold flavors of our Green Tea Collection',
  },
  {
    id: 3,
    path: 'oolong',
    title: 'Oolong Tea',
    description: 'Experience the rich, bold flavors of our Oolong Tea Collection',
  },
  {
    id: 4,
    path: 'herbal',
    title: 'Herbal',
    description: 'Experience the rich, bold flavors of our Herbal Tea Collection',
  },
  {
    id: 5,
    path: 'teaware',
    title: 'Teaware',
    description: 'Experience the rich, bold flavors of our Teaware Collection',
  },
  {
    id: 99,
    path: 'bestsellers',
    title: 'Bestsellers',
    description: 'Discover our range of best selling loose leaf teas'
  }

];

const products = [
  {
    id: 1,
    collection: 'Black Tea',
    title: 'Classic Black Tea', 
    path: 'Classic-Black-Tea',
    image: blackTea,
    description: 'Discover the pure, rich taste of our Classic Black Tea.',
    price: {
      '50g': '£3.95',
      '100g': '£6.95',
      '250g': '£12.05'
    },
    collectionId: 1,
    bestSeller: true
  },
  {
    id: 2,
    collection: 'Black Tea',
    title: 'Assam Organic', 
    path: 'Assam-Organic',
    image: assam,
    description: 'Discover the pure, rich taste of our Classic Black Tea.',
    price: {
      '50g': '£3.95',
      '100g': '£6.95',
      '250g': '£12.05'
    },
    collectionId: 1,
  },
  {
    id: 3,
    collection: 'Black Tea',
    title: 'Yunnan Golden Needle', 
    path: 'Yunnan-Golden-Needle',
    image: goldenNeedle,
    description: 'Discover the pure, rich taste of our Classic Black Tea.',
    price: {
      '50g': '£9.95',
      '100g': '£17.95',
      '250g': '£39.95'
    },
    collectionId: 1,
    bestSeller: true
  },
  {
    id: 4,
    collection: 'Black Tea',
    title: 'Yunnan Gold', 
    path: 'Yunnan-Gold',
    image: yunnanGold,
    description: 'Discover the pure, rich taste of our Classic Black Tea.',
    price: {
      '50g': '£5.95',
      '100g': '£9.95',
      '250g': '£19.95'
    },
    collectionId: 1
  },
  {
    id: 5,
    collection: 'Black Tea',
    title: 'English Breakfast Tea', 
    path: 'English-Breakfast-Tea',
    image: englishBreakfast,
    description: 'Discover the pure, rich taste of our Classic Black Tea.',
    price: {
      '50g': '£3.95',
      '100g': '£6.95',
      '250g': '£12.05'
    },
    collectionId: 1
  },
  {
    id: 6,
    collection: 'Oolong Tea', 
    title: 'Jasmine Oolong Loose Leaf Tea', 
    path: 'Jasmine-Oolong-Loose-Leaf-Tea',
    image: jasmineOolong,
    description: 'Discover the rich taste of our Jasmine Oolong Tea.',
    price: {
      '50g': '£7.95',
      '100g': '£13.95',
      '250g': '£29.95'
    },
    collectionId: 3,
    bestSeller: true
  },
  {
    id: 7,
    collection: 'Oolong Tea', 
    title: 'Milk Oolong', 
    path: 'Milk-Oolong',
    image: milkOolong,
    description: 'Discover the rich taste of our Jasmine Oolong Tea.',
    price: {
      '50g': '£6.95',
      '100g': '£11.95',
      '250g': '£23.95'
    },
    collectionId: 3
  },
  {
    id: 8,
    collection: 'Oolong Tea', 
    title: 'Yellow Gold', 
    path: 'Yellow-Gold',
    image: yellowGold,
    description: 'Discover the rich taste of our Jasmine Oolong Tea.',
    price: {
      '50g': '£4.95',
      '100g': '£8.95',
      '250g': '£17.95'
    },
    collectionId: 3
  },
  {
    id: 9,
    collection: 'Green Tea', 
    title: 'Japanese Sencha', 
    path: 'Japanese-Sencha',
    image: japaneseSencha,
    description: 'Discover the rich taste of our Jasmine Oolong Tea.',
    price: {
      '50g': '£5.95',
      '100g': '£9.95',
      '250g': '£19.95'
    },
    collectionId: 2
  },
  {
    id: 10,
    collection: 'Green Tea', 
    title: 'Gunpowder Green', 
    path: 'Gunpowder-Green',
    image: gunpowderGreen,
    description: 'Discover the rich taste of our Jasmine Oolong Tea.',
    price: {
      '50g': '£3.95',
      '100g': '£6.95',
      '250g': '£12.05'
    },
    collectionId: 2,
    bestSeller: true
  },
  {
    id: 11,
    collection: 'Green Tea', 
    title: 'Dragon Well', 
    path: 'Dragon-well',
    image: dragonWell,
    description: 'Discover the rich taste of our Jasmine Oolong Tea.',
    price: {
      '50g': '£5.95',
      '100g': '£10.95',
      '250g': '£24.95'
    },
    collectionId: 2
  },
];

const reviews = [
  {
    id: 1,
    productId: 1,
    name: 'Grace',
    rating: 5,
    title: 'Excellent tea',
    description: 'Great tea! One of the best I have found',
    date: '12/08/2024'
  },
  {
    id: 2,
    productId: 1,
    name: 'John',
    rating: 4,
    title: 'Very good',
    description: 'Really good flavor, but I wish it was a bit stronger.',
    date: '09/08/2024'
  },
  {
    id: 3,
    productId: 1,
    name: 'Alice',
    rating: 5,
    title: 'My favorite!',
    description: 'This tea has become my daily go-to. Highly recommend!',
    date: '15/06/2024'
  },
  {
    id: 4,
    productId: 1,
    name: 'Alan',
    rating: 3.5,
    title: 'Nice tea',
    description: 'Pleasant green tea, good quality, will buy again.',
    date: '09/01/2024'
  },
  {
    id: 5,
    productId: 2,
    name: 'Grace',
    rating: 5,
    title: 'Excellent tea',
    description: 'Great tea! One of the best I have found',
    date: '12/08/2024'
  },
  {
    id: 6,
    productId: 2,
    name: 'John',
    rating: 4,
    title: 'Very good',
    description: 'Really good flavor, but I wish it was a bit stronger.',
    date: '09/08/2024'
  }
];

export { products, reviews, collections };