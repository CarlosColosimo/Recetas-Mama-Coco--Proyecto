import React from 'react';
import './Style.css';

const Header = () => {
  return (
    <header>
      
      <div className="logo">
        <a href="#"><img src="./img/remove.png" alt="Logo" /></a>
      </div>
      <nav className="navbar">
        <ul>
          <li className="boton"><a href="/">Menu</a></li>
          <li className="boton"><a href="/login">Inicio Sesion</a></li>
          <li className="boton"><a href="/manual">Ayuda</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
