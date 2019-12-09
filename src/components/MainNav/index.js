import React, { Component } from 'react';
import { FaAccusoft } from 'react-icons/fa';
import { MdShoppingCart, MdFavoriteBorder } from 'react-icons/md';
import { AiOutlineUser } from 'react-icons/Ai'
import { GoSearch } from 'react-icons/go'
import { Link } from 'react-router-dom'
import Tiles from '../Tiles/index';
import carts from '../../cart'


class MainNav extends Component {
  render() {
    return (
      <div className='nnn'>
        <div className = 'header'>
          <h2>naija-made.com<FaAccusoft style={{fontSize:'50px'}}/></h2>
          <div className='search'>
            <input className='searchTerm' type='search'placeholder='  what are you looking for?'/>
            <button type="submit" className="searchButton"><GoSearch /></button>
          </div>
          <nav>
            <div className='icon'>
              <AiOutlineUser/>
            </div>
            <Link to='/login'>Login</Link>
            <div className='icon'>
              <MdFavoriteBorder/>
            </div>
            <Link to='/'>Favourite</Link>
            <div className='icon'>
              <Tiles chart ={carts}/>
              <MdShoppingCart />
            </div>
            <Link to= '/carts'>Carts</Link>
          </nav>
        </div>
        <hr/>
      </div>
    )
  }
}

export default MainNav;
