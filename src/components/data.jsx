// data.jsx
import { assam, blackTea, dragonWell, englishBreakfast, ginger, goldenNeedle, gunpowderGreen, japaneseSencha, jasmineOolong, journalEntry_1, journalEntry_2, lemongrass, milkOolong, peppermint, rooibos, strainer, teacup, teapot, yellowGold, yunnanGold } from "../assets/images";

const collections = [
  {
    id: 0,
    path: 'all',
    title: 'Shop All',
    description: 'Explore the full range of our premium loose leaf teas. From bold and robust black teas to delicate and calming greens',
  },
  {
    id: 1,
    path: 'black-tea',
    title: 'Black Tea',
    description: 'Discover the richness and depth of our black tea collection. Known for its robust flavors and malty undertones, black tea is perfect for those who enjoy a strong, energizing cup.',
  },
  {
    id: 2,
    path: 'green-tea',
    title: 'Green Tea',
    description: 'Immerse yourself in the soothing and rejuvenating world of green tea. With its light, vegetal notes and numerous health benefits, green tea is a perfect companion for moments of calm and clarity.',
  },
  {
    id: 3,
    path: 'oolong',
    title: 'Oolong Tea',
    description: 'Indulge in the complexity and elegance of oolong tea, a collection for those who seek something unique, bridging the gap between green and black teas.',
  },
  {
    id: 4,
    path: 'herbal',
    title: 'Herbal',
    description: 'Experience the calming and revitalizing benefits of our herbal tea collection. Naturally caffeine-free and infused with a variety of flowers, herbs, and spices.',
  },
  {
    id: 5,
    path: 'teaware',
    title: 'Teaware',
    description: 'Elevate your tea experience with our artisanal teaware collection. From elegant teapots to precision infusers and beautifully crafted cups, our teaware is designed to enhance every moment of tea preparation and enjoyment.',
  },
  {
    id: 99,
    path: 'bestsellers',
    title: 'Bestsellers',
    description: 'Explore our bestsellers collection, where customer favorites come together to showcase the finest of what we offer.'
  }

];

const products = [
  {
    id: 1,
    collection: 'Black Tea',
    title: 'Classic Black Tea', 
    path: 'Classic-Black-Tea',
    image: blackTea,
    description: 'A bold and traditional black tea, known for its full-bodied flavor and rich, malty notes. Perfect for those who enjoy a robust cup with or without milk.',
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
    description: 'This organic Assam tea is grown in the lush valleys of India, offering a malty, brisk flavor with a hint of natural sweetness. Ideal for a strong morning brew.',
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
    description: 'Hand-picked golden buds from Yunnan province, this tea offers a smooth, honeyed sweetness with subtle earthy undertones. A luxurious black tea experience.',
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
    description: 'A premium black tea with golden tips, known for its sweet, mellow taste and light notes of cocoa. A delicate yet flavorful tea with a soft finish.',
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
    description: 'A classic blend of robust black teas, perfect for a hearty start to your day. Rich and full-bodied, it pairs perfectly with milk and sugar.',
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
    description: 'A fragrant blend of oolong tea infused with fresh jasmine blossoms. This tea offers a balanced, floral aroma with a smooth and slightly sweet taste.',
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
    description: 'Known for its creamy, buttery texture, Milk Oolong delivers a smooth, mellow flavor with a naturally sweet finish. Perfect for a rich and comforting cup.',
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
    description: 'A rare yellow tea with a smooth, delicate flavor and light floral notes. Its unique processing brings out a rich, golden infusion with a hint of sweetness.',
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
    description: 'A classic green tea from Japan, offering a fresh, grassy flavor with a slight astringency. Ideal for those seeking a clean and refreshing cup.',
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
    description: 'Named for its tightly rolled leaves, Gunpowder Green offers a bold, slightly smoky flavor with a crisp, clean finish. Great for a strong green tea experience.',
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
    description: 'A renowned Chinese green tea with a smooth, chestnut-like flavor and a slightly sweet finish. Dragon Well is known for its flat leaves and refreshing taste.',
    price: {
      '50g': '£5.95',
      '100g': '£10.95',
      '250g': '£24.95'
    },
    collectionId: 2
  },
  {
    id: 12,
    collection: 'Herbal', 
    title: 'Rooibos Tea', 
    path: 'Rooibos-Tea',
    image: rooibos,
    description: 'A naturally caffeine-free herbal tea from South Africa, Rooibos boasts a rich, earthy flavor with hints of honey and vanilla. Known for its vibrant red color and soothing taste, it’s a perfect choice for any time of day.',
    price: {
      '50g': '£3.90',
      '100g': '£6.90',
      '250g': '£14.05'
    },
    collectionId: 4
  },
  {
    id: 13,
    collection: 'Herbal', 
    title: 'Peppermint Tea', 
    path: 'Peppermint-Tea',
    image: peppermint,
    description: 'A refreshing herbal infusion made from pure peppermint leaves, this tea delivers a cool, crisp flavor with natural sweetness and a soothing aroma. Perfect as a caffeine-free pick-me-up or after-meal digestive.',
    price: {
      '50g': '£3.60',
      '100g': '£6.60',
      '250g': '£12.50'
    },
    collectionId: 4
  },
  {
    id: 14,
    collection: 'Herbal', 
    title: 'Lemongrass', 
    path: 'Lemongrass',
    image: lemongrass,
    description: 'A fragrant herbal tea with bright citrus notes and a subtle hint of sweetness, Lemongrass offers a refreshing and invigorating flavor. Naturally caffeine-free, its a calming choice for any time of day.',
    price: {
      '50g': '£3.25',
      '100g': '£5.65',
      '250g': '£11.25'
    },
    collectionId: 4
  },
  {
    id: 14,
    collection: 'Herbal', 
    title: 'Ginger Root', 
    path: 'Ginger-Root',
    image: ginger,
    description: 'A warming herbal tea with a bold, zesty flavor, Ginger Root is known for its invigorating and soothing qualities. Naturally caffeine-free, it’s a perfect choice for a refreshing boost or calming comfort.',
    price: {
      '50g': '£3.60',
      '100g': '£6.25',
      '250g': '£12.50'
    },
    collectionId: 4
  },
  {
    id: 15,
    collection: 'Teaware', 
    title: 'Glass Tea Pot', 
    path: 'tea-pot',
    image: teapot,
    description: 'Our Glass Teapot features a sleek, modern design paired with a coil filter for effortless brewing. Perfect for loose leaf tea, this elegant teapot ensures a smooth pour and a refined tea experience.',
    price: '£15.99',
    collectionId: 5
  },
  {
    id: 16,
    collection: 'Teaware', 
    title: 'Loose Leaf Strainer', 
    path: 'strainer',
    image: strainer,
    description: 'Our Loose Leaf Strainer offers an easy and mess-free way to steep your favorite teas. Crafted for durability and precision, it ensures a perfect brew every time.',
    price: '£5.99',
    collectionId: 5
  },
  {
    id: 17,
    collection: 'Teaware', 
    title: 'Ceramic Teacup', 
    path: 'teacup',
    image: teacup,
    description: 'An elegantly crafted Ceramic Teacup. Designed for comfort and style, its smooth finish and heat-retaining properties make it perfect for savoring every sip.',
    price: '£12.99',
    collectionId: 5
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
    path: 'the-ritual-of-tea',
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
    path: 'the-journey-of-a-tea-leaf',
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