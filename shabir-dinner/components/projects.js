import React from 'react';
import { GoCheckbox } from 'react-icons/go';

const pricingData = [
  {
    title: 'Static, brochure Websites and Apps',
    description: 'A simple an eye-catching and cost-effective solution you can use to promote your business or company’s services online',
    price: '$19',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5', 'Feature 6', 'Feature 7', 'Feature 8'],
    button: 'Get Started',
  },
  {
    title: 'Dynamic Websites and Apps',
    description: 'A dynamic application can provide a more customized user experience because it can be designed to respond to user input in real-time.',
    price: '$49',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
    button: 'Get Started',
  },
  {
    title: 'E-commerce Applications',
    description: 'An online marketplace will make it easier to buy or sell goods and services between merchants and customers.',
    price: '$99',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    button: 'Get Started',
  },
];

const PricingCard = ({ title, description, price, features, button }) => {
  return (
    <div className="max-w-sm w-100 h-70 p-4 rounded shadow-lg bg-gradient-to-br from-gray-900 to-gray-700 text-white">
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
    <div className="justify-center items-center p-8" >
      <h1 className="mt-1 text-2xl text-center font-semibold text-black sm:text-slate-900 md:text-2xl dark:sm:text-black">
        Pricing
      </h1>
      {/*<p className="mt-4 text-lg leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
        We offer a variety of pricing options to suit your needs.
        Why use several third parties to provide the various services you need? We can provide all services in one easy to access place!
  </p>*/}
      <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center mt-8 gap-8">
        {pricingData.map((pricing, index) => (
          <PricingCard key={index} {...pricing} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
