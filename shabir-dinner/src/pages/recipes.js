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
    ];

    return (
        <>
        <Navigation />
        <div className="bg-gray-100 py-8 sm:py-16 px-4 sm:px-6 md:px-8">
            <h1 className="text-4xl font-extrabold mb-6 text-center text-gray-800">Delicious Recipes</h1>
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {recipeExamples.map((recipe, index) => (
                    <li key={index} className="bg-white shadow-lg p-4 rounded-lg hover:shadow-xl transition duration-300">
                        <div className="w-full h-60 mb-4 overflow-hidden">
                            <img src={recipe.imageUrl} alt={recipe.title} className="w-full h-full object-cover rounded-lg" />
                        </div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">{recipe.title}</h2>
                        <ul className="text-lg text-gray-700 list-disc pl-6 mb-4">
                            {recipe.keyPoints.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                        <p className="text-base text-gray-600">{recipe.description}</p>
                    </li>
                ))}
            </ul>
            <div className="text-center">
                <button className="mt-8 bg-indigo-600 text-white text-lg font-semibold py-2 px-4 rounded-full hover:bg-indigo-800 hover:text-white transition duration-300">
                    Get Cooking
                </button>
            </div>
            </div>
        <FooterLinks />
        </>
    );
}

export default Recipes;




