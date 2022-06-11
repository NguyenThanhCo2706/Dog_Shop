import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.jsx"
import DogsPage from './components/Dog/DogsPage';
import Navbar from './Navbar/Navbar';
import Cart from './components/Cart/Cart';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { CartContext } from "./Contexts/CartContext"

function App() {
  const [allDogs, setAllDogs] = useState([]);
  const [myCart, addToCart] = useState([{}]);
  const [total, setTotal] = useState(0)
  useEffect(() => {
    async function getData() {
      const res = await axios.get("http://localhost:3001/dogs")
      return res
    }
    getData().then((res) => {
      setAllDogs(res.data)
    })
  }, [])
  return (
    <CartContext.Provider value={{ myCart, addToCart, total, setTotal }} >
      <Router>
        <Navbar />
        <div className="page-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dogs" element={<DogsPage allDogs={allDogs} />} />
            <Route path="/checkout" element={<Cart />} />

          </Routes>
        </div>
      </Router>
    </CartContext.Provider >
  );
}

export default App;
