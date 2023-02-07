import React from 'react'

import { Link } from 'react-router-dom';
import Search from './Search';
import logoSvg from '../img/pizza-logo.svg';
import cartIcon from '../img/cart-icon.svg';


const Header = ({searchValue, setSearchValue}) => {
  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img width="60" src={logoSvg} alt="Pizza logo"></img>
            <div>
              <h1>Proto Pizza</h1>
              <p>You wouldn't find better😉</p>
            </div>
          </div>
        </Link>
        <Search searchValue={searchValue} setSearchValue={setSearchValue}/>
        <div className="header__cart">
          <Link to="/cart" className="button button--cart">
            <span>10250 ₽</span>
            <div className="button__delimiter"></div>
            <img width="20" src={cartIcon} alt="Cart icon"></img>
            <span>3</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header;