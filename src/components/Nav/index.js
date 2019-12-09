import React, { Component } from 'react';
// import faker from 'faker';
import { FaAccusoft } from 'react-icons/fa';
import { MdShoppingCart, MdFavoriteBorder } from 'react-icons/md';
import { AiOutlineUser } from 'react-icons/Ai'
import { GoSearch } from 'react-icons/go'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import './index.scss'
import { Link } from 'react-router-dom'
import Tiles from '../Tiles/index';
import NavButton from '../NavSec/index.jsx';


class Nav extends Component {
  render() {
    return (
      <div className='nnn' style={{background: 'orange'}}>
        <div className = 'header' style={{backgroundColor: 'orange'}}>
          <h2>naija-made.com<FaAccusoft style={{fontSize:'50px'}}/></h2>
          <div className='search' style={{backgroundColor: 'orange'}}>
            <input className='searchTerm' type='search'placeholder='  what are you looking for?'/>
            <button type="submit" className="searchButton"><GoSearch /></button>
          </div>
          <nav>
            <div className='icon'>
              <AiOutlineUser/>
            </div>
            <Link to='/login'>Login</Link>
            {/* <a>Sign-up</a> */}
            <div className='icon'>
              <MdFavoriteBorder/>
            </div>
            <a href='/i'>Favourite</a>
            <div className='icon'>
              <Tiles chart = {[]}/>
              <MdShoppingCart />
            </div>
            <a>Carts</a>
          </nav>
        </div>
        <hr/>
        <NavButton />
      </div>
    )
  }
}

export default Nav;
