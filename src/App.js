import './App.css';
import Nav from './Components/Nav';
import Filter from './Components/Filter';
import FoodCard from './Components/FoodCard';
import Footer from './Components/Footer';
import { useState } from 'react';
function App() {
  const [area,setArea]=useState('')
  const [sortOrder, setSortOrder] = useState('');

  return (
    <div className="">
      <Nav />
      <main className="flex flex-col  lg:ml-44 ">
        <Filter setArea={setArea}  setSortOrder={setSortOrder}/>
        <FoodCard area={area} sortOrder={sortOrder} />
      </main>
      <div className="max-h-full ">
      <Footer  />
      </div>
    </div>
  );
}

export default App;
