import React, { useState, useEffect } from 'react';
import { HiAdjustmentsHorizontal } from 'react-icons/hi2';

const Filter = ({ setArea, setSortOrder }) => {
  const [areas, setAreas] = useState([]);
  const [selectedArea, setSelectedArea] = useState('India');
const [openBox,setOpenBox]=useState(false)
  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
      .then(response => response.json())
      .then(data => setAreas(data.meals));
  }, []);

  const handleAreaChange = (e) => {
    const area = e.target.value;
    setSelectedArea(area);
    
    
  };
  const handleApply = () => {
    setArea(selectedArea);
    setOpenBox(false);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Restaurants with online food delivery in {selectedArea}</h1>
      <div className="mt-4 flex items-center sm:flex-row lg:justify-start sm:justify-between flex-wrap gap-2">
        <div className="relative z-40  inline-block">
          <button onClick={()=>setOpenBox(!openBox)} className="p-2 border rounded-3xl flex items-center">
           
            Filter
            <HiAdjustmentsHorizontal className="m-2 -p-1" />
          </button>
        {
          openBox &&
          (
            <div className="absolute mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div className="py-1 overflow-y-scroll h-56 ">
              {areas.map(area => (
                <label key={area.strArea} className="block px-4 py-2 text-sm cursor-pointer">
                  <input
                    type="radio"
                    name="area"
                    value={area.strArea}
                    checked={selectedArea === area.strArea}
                    onChange={handleAreaChange}
                    className="mr-2 "
                  />
                  {area.strArea}
                </label>
              ))}
            </div>
            <div className="py-4 mx-4 flex justify-end">
                <button
                  onClick={handleApply}
                  className="rounded-lg  px-4 py-2 text-sm text-center text-white bg-blue-500 hover:bg-blue-700"
                >
                  Apply
                </button>
              </div>
          </div>
          )
        }
        </div>
        <select onChange={(e) => setSortOrder(e.target.value)} className="p-2  border  rounded-3xl">
          <option className='' value="">Sort By</option>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
        <button className="p-2 border rounded-3xl">Fast Delivery</button>
        <button className="p-2 border rounded-3xl">New on Swiggy</button>
        <button className="p-2 border rounded-3xl">Ratings 4.0+</button>
        <button className="p-2 border rounded-3xl">Pure Veg</button>
        <button className="p-2 border rounded-3xl">Offers</button>
        <button className="p-2 border rounded-3xl">Rs. 300-Rs. 600</button>
        <button className="p-2 border rounded-3xl">Less than Rs. 300</button>
      </div>
    </div>
  );
};

export default Filter;
