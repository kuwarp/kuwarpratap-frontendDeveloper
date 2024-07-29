import React from 'react';

const Card = ({ item, close }) => {

  const ingredients = [];

  for (let i = 0; i <= 20; i++) {
    if (item[`strIngredient${i}`]) {
      ingredients.push({
        ingredient: item[`strIngredient${i}`],
        measure: item[`strMeasure${i}`]
      });
    }
  }
  
  return (
  <div className="fixed    inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
    <div className="bg-white overflow-scroll p-6 rounded-lg max-w-xl max-h-full w-full relative">
      <button onClick={close} className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded">X</button>
      <h2 className="text-2xl mb-4 text-gray-700 font-bold">{item.strMeal}</h2>
      <img src={item.strMealThumb} alt={item.strMeal} className="w-80 lg:ml-24 h-64 object-cover rounded-2xl mb-4" />
      <p className="mb-2"><strong>Category:</strong> {item.strCategory}</p>
      <p className="mb-2"><strong>Area:</strong> {item.strArea}</p>
      <div className="mb-4">
          <p className="text-xl font-semibold mb-2">Ingredients:</p>
          <ul className='list-image-none p-4'>
            {ingredients.map((ingredient, index) => (
              <li key={index} className="mb-1">
                {ingredient.ingredient} - {ingredient.measure}
              </li>
            ))}
          </ul>
        </div>
      <p className="mb-4"><strong>Instructions:</strong> {item.strInstructions}</p>
      
     
      
    </div>
  </div>
);
}

export default Card;
