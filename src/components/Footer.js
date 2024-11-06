import React from 'react';
import './Style.css';

const Footer = () => {
  return (

    <footer className="infocontacto">
          <div className="separador">
      </div>
      <div className="contacto">
        <div className="logofooter">
          <a href="#"><img src="./img/remove.png" alt="Logo Mamá Coco" /></a>
        </div>
        <div className="informacion">
          <ul>
            <li><i className="fa-solid fa-phone"></i> +54 9 223 66336250</li>
            <li><i className="fa-solid fa-envelope"></i> mamacoco@gmail.com</li>
            <li><i className="fa-solid fa-location-dot"></i> Dirección: Calle Falsa 123, Buenos Aires</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
