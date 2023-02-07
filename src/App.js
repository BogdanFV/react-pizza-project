import React from "react";

import './scss/app.scss';

import Header from './components/Header.jsx'
import Home from "./pages/Home.jsx";
import Cart from "./pages/Cart.jsx"
import NotFound from "./pages/NotFound.jsx";

import './scss/app.scss'
import { Route, Routes } from "react-router-dom";

const App = () => {
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <div className="wrapper">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home searchValue={searchValue} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;