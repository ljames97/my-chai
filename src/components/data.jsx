// data.jsx
import { blackTea } from "../assets/images";

const products = [
  {
    id: 1,
    title: 'Black Loose Leaf Tea', 
    image: blackTea,
    description: 'Discover the pure, rich taste of our Classic Black Tea. Carefully selected from the finest tea leaves, this bold and full-bodied blend offers a smooth, satisfying flavor with subtle notes of malt and a hint of natural sweetness. Perfect for any time of day, enjoy it plain or with a splash of milk for a timeless tea experience.',
    price: '£9.99',
    reviews: [
      {
        name: 'Grace',
        rating: 5,
        title: 'Excellent tea',
        description: 'Great tea! One of the best I have found'
      },
      {
        name: 'John',
        rating: 4,
        title: 'Very good',
        description: 'Really good flavor, but I wish it was a bit stronger.'
      },
      {
        name: 'Alice',
        rating: 5,
        title: 'My favorite!',
        description: 'This tea has become my daily go-to. Highly recommend!'
      },
      {
        name: 'Alan',
        rating: 3.5,
        title: 'Nice tea',
        description: 'Pleasant green tea, good quality, will buy again.'
      }
    ]
  }
];

export default products;