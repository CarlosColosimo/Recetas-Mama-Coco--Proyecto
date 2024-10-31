import React from 'react';
import './Style.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="logofooter">
          <a href="#">
            <img src="./img/remove.png" alt="Logo Mamá Coco" />
          </a>
        </div>
        <div className="informacion">
          <ul>
            <li><i className="fa-solid fa-phone"></i> +54 9 223 66336251</li>
            <li><i className="fa-solid fa-envelope"></i> mamacoco@gmail.com</li>
            <li><i className="fa-solid fa-location-dot"></i> Calle Falsa 123, Buenos Aires</li>
          </ul>
        </div>
      </div>
      <div className="footer-links">
        <ul>
          <li><a href="/privacy-policy">Política de Privacidad</a></li>
          <li><a href="/terms-of-service">Términos de Servicio</a></li>
          <li><a href="/contact">Contacto</a></li>
        </ul>
      </div>
      <div className="social-media">
        <a href="#"><i className="fa-brands fa-facebook"></i></a>
        <a href="#"><i className="fa-brands fa-twitter"></i></a>
        <a href="#"><i className="fa-brands fa-instagram"></i></a>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Mamá Coco. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
