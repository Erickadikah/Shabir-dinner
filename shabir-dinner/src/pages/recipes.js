import React from 'react';
import FooterLinks from '../../components/footer/FooterLinks';
import Navigation from '../../components/header';

const Recipes = () => {
    const recipeExamples = [
        {
            title: 'Classic Spaghetti Bolognese',
            description: 'A timeless Italian favorite with rich tomato sauce and savory ground beef.',
            imageUrl: '/images/pilau.jpg',
            keyPoints: ['Preparation Time: 30 mins', 'Cooking Time: 1 hour', 'Servings: 4'],
        },
        {
            title: 'Lemon Herb Roasted Chicken',
            description: 'Juicy roasted chicken infused with zesty lemon and fragrant herbs.',
            imageUrl: '/images/chicken1.jpg',
            keyPoints: ['Preparation Time: 15 mins', 'Roasting Time: 1 hour', 'Servings: 4'],
        },
        {
            title: 'Mango Tango Smoothie',
            description: 'A tropical delight blending ripe mango, yogurt, and a hint of honey.',
            imageUrl: '/images/chef.jpg',
            keyPoints: ['Preparation Time: 10 mins', 'Blend Time: 5 mins', 'Servings: 2'],
        },
        {
            title: 'Classic Margherita Pizza',
            description: 'A classic Italian pizza with tomato sauce, mozzarella, and fresh basil.',
            imageUrl: '/images/pizza.jpg',
            keyPoints: ['Preparation Time: 15 mins', 'Baking Time: 15 mins', 'Servings: 2'],
        },
    ];

    return (
        <>
      <Navigation />
      <div className="bg-gray-100 w-full h-96">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold text-gray-800 mt-20 mb-10">Recipes</h1>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-wrap justify-center gap-10">
            <img src="/images/pizza.jpg" alt="Pizza" className="w-96 h-96 rounded-md shadow-md" />
            <img src="/images/pilau.jpg" alt="Pilau" className="w-96 h-96 rounded-md shadow-md" />
            <img src="/images/chicken1.jpg" alt="Chicken" className="w-96 h-96 rounded-md shadow-md" />
          </div>
        </div>
      </div>
      <FooterLinks />
    </>
    );
}

export default Recipes;




