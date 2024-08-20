// data.jsx
import { blackTea, jasmineOolong } from "../assets/images";

const products = [
  {
    id: 1,
    title: 'Black Loose Leaf tea', 
    image: blackTea,
    description: 'Discover the pure, rich taste of our Classic Black Tea. Carefully selected from the finest tea leaves, this bold and full-bodied blend offers a smooth, satisfying flavor with subtle notes of malt and a hint of natural sweetness. Perfect for any time of day, enjoy it plain or with a splash of milk for a timeless tea experience.',
    price: '£9.99',
    reviews: [
      {
        name: 'Grace',
        rating: 5,
        title: 'Excellent tea',
        description: 'Great tea! One of the best I have found',
        date: '12/08/2024'
      },
      {
        name: 'John',
        rating: 4,
        title: 'Very good',
        description: 'Really good flavor, but I wish it was a bit stronger.',
        date: '09/08/2024'
      },
      {
        name: 'Alice',
        rating: 5,
        title: 'My favorite!',
        description: 'This tea has become my daily go-to. Highly recommend!',
        date: '15/06/2024'
      },
      {
        name: 'Alan',
        rating: 3.5,
        title: 'Nice tea',
        description: 'Pleasant green tea, good quality, will buy again.',
        date: '09/01/2024'
      }
    ]
  },
  {
    id: 2,
    title: 'Jasmine Oolong Loose Leaf Tea', 
    image: jasmineOolong,
    description: 'Discover the pure, rich taste of our Classic Black Tea. Carefully selected from the finest tea leaves, this bold and full-bodied blend offers a smooth, satisfying flavor with subtle notes of malt and a hint of natural sweetness. Perfect for any time of day, enjoy it plain or with a splash of milk for a timeless tea experience.',
    price: '£9.99',
    reviews: [
      {
        name: 'Grace',
        rating: 5,
        title: 'Excellent tea',
        description: 'Great tea! One of the best I have found',
        date: '12/08/2024'
      },
      {
        name: 'John',
        rating: 4,
        title: 'Very good',
        description: 'Really good flavor, but I wish it was a bit stronger.',
        date: '09/08/2024'
      },
    ]
  }


];

export default products;