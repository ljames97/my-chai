// data.jsx
import { blackTea, jasmineOolong } from "../assets/images";
import { getProductReviews } from "./global/globalUtils";

const collections = [
  {
    id: 1,
    path: 'black-tea',
    title: 'Black Tea',
    description: 'Experience the rich, bold flavors of our Black Tea Collection.',
    productIds: [1, 2, 3, 4]
  },
  {
    id: 2,
    path: 'oolong',
    title: 'Oolong Tea',
    description: 'Experience the rich, bold flavors of our Oolong Tea Collection',
    productIds: [5, 6, 7]
  }
];

const products = [
  {
    id: 1,
    collection: 'Black Tea',
    title: 'Black Loose Leaf Tea', 
    path: 'Black-Loose-Leaf-Tea',
    image: blackTea,
    description: 'Discover the pure, rich taste of our Classic Black Tea.',
    price: '£9.99',
    reviewIds: [1, 2, 3, 4],
    collectionId: 1
  },
  {
    id: 5,
    collection: 'Oolong Tea', 
    title: 'Jasmine Oolong Loose Leaf Tea', 
    path: 'Jasmine-Oolong-Loose-Leaf-Tea',
    image: jasmineOolong,
    description: 'Discover the rich taste of our Jasmine Oolong Tea.',
    price: '£12.99',
    reviewIds: [5, 6],
    collectionId: 2
  }
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