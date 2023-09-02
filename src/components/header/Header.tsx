import React from 'react';
import "./header.scss"
import { Link, Element } from 'react-scroll'; 
export default function Header() {
  return (
    <nav className='header'>
        <div className='header__logo'>ba.</div>
        <ul className='nav'>
            <li><Link to="section1" smooth={true} duration={1000}>Обо мне</Link></li>
            <li><Link to="section2" smooth={true} duration={1000}>Школа</Link></li>
            <li><Link to="section3" smooth={true} duration={1000}>Универ</Link></li>
            <li><Link to="section4" smooth={true} duration={1000}>Работа</Link></li>
            <li><Link to="section5" smooth={true} duration={1000}>Контакты</Link></li>
        </ul>

    </nav>
  );
}

 