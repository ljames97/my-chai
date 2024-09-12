// data.jsx
import { assam, blackTea, dragonWell, englishBreakfast, goldenNeedle, gunpowderGreen, japaneseSencha, jasmineOolong, journalEntry_1, journalEntry_2, milkOolong, yellowGold, yunnanGold } from "../assets/images";

const collections = [
  {
    id: 0,
    path: 'all',
    title: 'Shop All',
    description: 'Experience the rich, bold flavors of our Black Tea Collection.',
  },
  {
    id: 1,
    path: 'black-tea',
    title: 'Black Tea',
    description: 'Experience the rich, bold flavors of our Black Tea Collection.',
  },
  {
    id: 2,
    path: 'green-tea',
    title: 'Green Tea',
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

const journalEntries = [
  {
    title: 'The Ritual of Tea',
    coverImage: journalEntry_1,
    date: 'September 12, 2024',
    mainText: [
      'In today’s fast-paced world, finding moments of calm can feel like a luxury. At MyChai, we believe that true relaxation is something everyone deserves—and that sometimes, it can be found in something as simple as a cup of tea.',
      'Tea is more than just a drink. For centuries, it has been a symbol of balance, mindfulness, and connection to nature. Whether it’s the soothing warmth of a chai blend or the refreshing taste of a delicate green tea, each cup offers a chance to slow down and reconnect with yourself.',
      'Our mission at MyChai is to create these small moments of peace through our carefully sourced, premium loose leaf teas. We blend tradition with sustainability, ensuring that each sip not only tastes amazing but also reflects our commitment to the planet. From sourcing ingredients ethically to packaging with care, we aim to bring you a product that’s as mindful as the experience itself.',
      'Creating a tea ritual is simple and can transform even the busiest day into something a little more intentional. It’s about more than just brewing tea—it’s about embracing the process, inhaling the aroma of the leaves, feeling the warmth of the cup in your hands, and allowing yourself a pause, even if only for a few minutes. These are the moments that ground us and remind us of the beauty in simplicity.',
      'At MyChai, we’re here to offer more than just tea. We’re offering an invitation to slow down, be present, and enjoy the richness that each moment has to offer. Because sometimes, peace can be as close as your next cup.'
    ]
  },
  {
    title: 'The Journey of a Tea Leaf',
    coverImage: journalEntry_2,
    date: 'September 12, 2024',
    mainText: [
      'At MyChai, every cup of tea tells a story. It’s not just about the flavor—it’s about the journey each tea leaf takes, from the lush, green fields where it’s grown to the carefully crafted blends you enjoy. We believe that understanding the origins of what we consume deepens our connection to it, making every sip more meaningful.',
      'Our commitment to sustainability starts with our relationships with tea farmers. We partner with those who share our values of ethical sourcing and environmentally friendly practices. This means that the tea you enjoy is grown in harmony with nature, without harming the environment or exploiting the hands that nurture it. By choosing sustainable farming methods, we help preserve the ecosystems that support our tea cultivation, ensuring the natural beauty of these regions for generations to come.',
      'But sustainability isn’t just about the environment—it’s also about mindfulness. As tea lovers, we encourage taking a moment to appreciate the time and effort that goes into every blend. Preparing tea can be a simple, calming ritual, a chance to slow down and reconnect with yourself. The warmth of the cup, the aroma of the leaves, and the soothing flavors invite you to be present, reminding you that slowing down can be a powerful form of self-care.',
      'At MyChai, we are proud to be a part of your journey toward more conscious, thoughtful consumption. Together, we can savor the beauty of tea while doing our part to protect the planet. Because at the end of the day, we believe that sustainable living begins with small, intentional choices—and sometimes, all it takes is a cup of tea.'
    ]
  }
];


export { products, reviews, collections, journalEntries };