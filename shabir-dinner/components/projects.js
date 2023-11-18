import React from 'react';
import { GoCheckbox } from 'react-icons/go';

const pricingData = [
   {
    title: 'Margherita Pizza',
    description: 'Classic tomato, mozzarella, and basil pizza',
    price: 'Ksh 550',
    features: ['Tomato sauce', 'Mozzarella cheese', 'Fresh basil leaves', 'Extra virgin olive oil', 'Fresh garlic', 'Black pepper','Extra virgin olive oil', 'Fresh garlic'],
    button: 'Order Now',
    backgroundImage: '/images/mg.jpg'
  },
  {
    title: 'Pepperoni Pizza',
    description: 'Delicious pizza with pepperoni slices and cheese',
    price: 'Ksh 650',
    features: ['Tomato sauce', 'Mozzarella cheese', 'Pepperoni slices', 'Fresh basil leaves', 'Extra virgin olive oil', 'Fresh garlic', 'Black pepper'],
    button: 'Order Now',
    backgroundImage: '/images/pizza.jpg'
  },
  {
    title: 'Chicken Alfredo Pasta',
    description: 'Creamy pasta with grilled chicken and Alfredo sauce',
    price: 'Ksh 750',
    features: ['Fettuccine pasta', 'Grilled chicken', 'Alfredo sauce', 'Parmesan cheese', 'Black pepper', 'Garlic', 'Parsley'],
    button: 'Order Now',
    backgroundImage: '/images/pasta.jpg'
  },
  {
    title: 'Caesar Salad',
    description: 'Fresh salad with romaine lettuce, croutons, and Caesar dressing',
    price: 'Ksh 350',
    features: ['Romaine lettuce', 'Croutons', 'Caesar dressing', 'Parmesan cheese', 'Black pepper', 'Lemon juice', 'Olive oil'],
    button: 'Order Now',
    backgroundImage: '/images/salad.jpg'
  },
  {
    title: 'Chocolate Brownie',
    description: 'Rich and gooey chocolate brownie with a scoop of vanilla ice cream',
    price: 'Ksh 250',
    features: ['Chocolate brownie', 'Vanilla ice cream', 'Chocolate syrup', 'Whipped cream', 'Cherries', 'Mint leaves', 'Powdered sugar', 'Chocolate chips'],
    button: 'Order Now',
    backgroundImage: '/images/brownie.jpg'
  },
  {
    title: 'Chocolate Brownie',
    description: 'Rich and gooey chocolate brownie with a scoop of vanilla ice cream',
    price: 'Ksh 250',
    features: ['Chocolate brownie', 'Vanilla ice cream', 'Chocolate syrup', 'Whipped cream', 'Cherries', 'Mint leaves', 'Powdered sugar', 'Chocolate chips'],
    button: 'Order Now',
    backgroundImage: '/images/brownie.jpg'
  },
];

const PricingCard = ({ title, description, price, features, button, backgroundImage }) => {
  const cardStyle = {
    backgroundImage: `linear-gradient(rgba(26, 25, 25, 0.8), rgba(21, 21, 21, 0.8)), url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    hover: 'transform hover:scale-110',
  };

  return (
    <div className="max-w-sm w-100 h-70 p-4 rounded shadow-lg bg-white text-black" style={cardStyle} id='pricing'>
      <h1 className="text-center text-2xl font-semibold mt-4 text-yellow-500">{title}</h1>
      <p className="text-center text-sm font-medium text-gray-300 mt-2">{description}</p>
      <p className="text-center text-2xl font-medium text-gray-300">{price}</p>
      <ul className="mt-2 p-2">
        {features.map((feature, index) => (
          <li key={index} className="text-gray-300 text-sm flex items-center">
            <GoCheckbox className="mr-2 text-yellow-500" /> {feature}
          </li>
        ))}
      </ul>
      <button className="hover:bg-yellow-600 text-white border border-yellow-500 font-semibold py-2 px-4 rounded-md w-40 mt-4">
        {button}
      </button>
    </div>
  );
};

const Pricing = () => {
  return (
    <div className="justify-center items-center p-8 bg-yellow-500" >
      <h1 className="mt-1 text-4xl text-center font-semibold text-black sm:text-slate-900 md:text-2xl dark:sm:text-black">
        Competitive Pricing
      </h1>
      <p className="mt-4 text-center lg:text-xl sm:text-xl leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-700">
        We offer a variety of pricing options to suit your needs.<br />
        Why use several third parties to provide the various services you need? We can provide all services in one easy to access place!
      </p>
      <div className="flex flex-wrap sm:flex-row sm:justify-center sm:items-center mt-8 gap-8">
        {pricingData.map((pricing, index) => (
          <PricingCard key={index} {...pricing} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
