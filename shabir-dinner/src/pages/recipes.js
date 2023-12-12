import React from 'react';
import FooterLinks from '../../components/footer/FooterLinks';
import Navigation from '../../components/header';
import { GoCheckbox } from 'react-icons/go';

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
            imageUrl: '/images/Mango.jpg',
            keyPoints: ['Preparation Time: 10 mins', 'Blend Time: 5 mins', 'Servings: 2'],
        },
        {
            title: 'Classic Margherita Pizza',
            description: 'A classic Italian pizza with tomato sauce, mozzarella, and fresh basil.',
            imageUrl: '/images/pizza.jpg',
            keyPoints: ['Preparation Time: 15 mins', 'Baking Time: 15 mins', 'Servings: 2'],
        },
        {
            title: 'Classic Margherita Pizza',
            description: 'A classic Italian pizza with tomato sauce, mozzarella, and fresh basil.',
            imageUrl: '/images/pizza.jpg',
            keyPoints: ['Preparation Time: 15 mins', 'Baking Time: 15 mins', 'Servings: 2'],
        },
        {
            title: 'Classic Margherita Pizza',
            description: 'A classic Italian pizza with tomato sauce, mozzarella, and fresh basil.',
            imageUrl: '/images/pizza.jpg',
            keyPoints: ['Preparation Time: 15 mins', 'Baking Time: 15 mins', 'Servings: 2'],
        },
        {
            title: 'Classic Spaghetti Bolognese',
            description: 'A timeless Italian favorite with rich tomato sauce and savory ground beef.',
            imageUrl: '/images/pilau.jpg',
            keyPoints: ['Preparation Time: 30 mins', 'Cooking Time: 1 hour', 'Servings: 4'],
        },
        {
            title: 'Classic Spaghetti Bolognese',
            description: 'A timeless Italian favorite with rich tomato sauce and savory ground beef.',
            imageUrl: '/images/pilau.jpg',
            keyPoints: ['Preparation Time: 30 mins', 'Cooking Time: 1 hour', 'Servings: 4'],
        },
    ];

    return (
        <div className="bg-white">
            <Navigation />
            <div className="container mx-auto py-8">
            <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Recipes</h1>
            <p className="text-gray-600 text-2xl text-center mb-6">
            Discover loads of delicious African recipes!
            </p>
            </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {recipeExamples.map((recipe, index) => (
                        <div key={index} className="bg-white shadow-lg">
                            <img src={recipe.imageUrl} alt={recipe.title} className="w-full h-48 object-cover rounded-t-lg" />
                            <div className="p-4">
                                <h2 className="text-xl font-semibold text-gray-800">{recipe.title}</h2>
                                <p className="text-gray-600 mb-3">{recipe.description}</p>
                                <ul className="mt-2 p-2">
                                    {recipe.keyPoints.map((point, pointIndex) => (
                                        <li key={pointIndex} className="text-gray-600 text-sm flex items-center">
                                        <GoCheckbox className="mr-2 text-yellow-500" />
                                        {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <button className="block w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-b-lg">
                                View Recipe
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <FooterLinks />
        </div>
    );
};

export default Recipes;
