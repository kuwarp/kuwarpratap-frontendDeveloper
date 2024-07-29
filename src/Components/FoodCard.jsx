
import React, { useState, useEffect } from "react";
import Card from "./Card";
import star from "../assets/star.png";
const FoodCard = ({ area, sortOrder }) => {
  const [foodItems, setFoodItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const mealsPerPage = 10;
  useEffect(() => {
    const areaQuery = area ? `filter.php?a=${area}` : "filter.php?a=Indian";
    fetch(`https://www.themealdb.com/api/json/v1/1/${areaQuery}`)
      .then((response) => response.json())
      .then((data) => {
        setFoodItems(data.meals);
        console.log(data);
      });
  }, [area]);

  const handleMealClick = (meal) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`)
      .then(response => response.json())
      .then(data => {
        setSelectedItem(data.meals[0]);
        setShowModal(true);
      });
  };

  useEffect(() => {
    if (sortOrder) {
      const sortedItems = [...foodItems].sort((a, b) => {
        const nameA = a.strMeal.toUpperCase();
        const nameB = b.strMeal.toUpperCase();
        if (sortOrder === "asc") return nameA > nameB ? 1 : -1;
        if (sortOrder === "desc") return nameA < nameB ? 1 : -1;
        return 0;
      });
      setFoodItems(sortedItems);
    }
  }, [sortOrder]);

  const indexOfLastMeal = currentPage * mealsPerPage;
  const indexOfFirstMeal = indexOfLastMeal - mealsPerPage;
  const currentMeals = foodItems.slice(indexOfFirstMeal, indexOfLastMeal);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="grid grid-cols-1 p-4 m-4 sm:grid-cols-2 md:grid-cols-4 lg:w-11/12 mb-4">
        {currentMeals.map(item => (
          <div
            key={item.idMeal}
            className="max-w-sm ml-12 lg:-ml-4 overflow-hidden mt-4 cursor-pointer"
            onClick={() => handleMealClick(item)}
          >
            <div className="relative flex items-center  rounded">
              <img src={item.strMealThumb} alt={item.strMeal} className="w-56 h-42 opacity-95 rounded-2xl" />
              <div className="absolute bottom-1 left-0 right-auto font-semibold text-lg text-white   text-opacity-92 capitalize p-2">
                <h2 className="text-xl bg-black w-52 bg-opacity-15">{item.strMeal.slice(0, 15)}...</h2>
              </div>
            </div>
            <div className="mx-4">
              <h2 className="mt-2 text-xl">{item.strMeal.slice(0, 15)}...</h2>
              <p className="flex gap-2 mt-1">
                <img className="h-5" src={star} alt="rating" /> Rating: {(Math.random().toFixed(1) * 8) + 1} &bull; <span className="text-green-400"> 30-35 mins</span>
              </p>
              <p>{item.strTags}</p>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        mealsPerPage={mealsPerPage}
        totalMeals={foodItems.length}
        paginate={paginate}
        currentPage={currentPage}
      />
      {showModal && selectedItem && (
        <Card item={selectedItem} close={() => setShowModal(false)} />
      )}
    </>
  );
};

const Pagination = ({ mealsPerPage, totalMeals, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalMeals / mealsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="mt-4">
      <ul className="flex justify-end p-4">
        {pageNumbers.map(number => (
          <li key={number} className={`px-3 py-1 mx-1 border rounded-lg ${currentPage === number ? 'bg-orange-500 text-white' : 'bg-white text-black'}`}>
            <button onClick={() => paginate(number)}  className="cursor-pointer">
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FoodCard;


 