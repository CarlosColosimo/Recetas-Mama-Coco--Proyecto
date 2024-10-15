import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <section className="recetas">
      <h1>Iniciar Sesión</h1>
      <div className="container">
        <form id="loginForm">
          <hr />
          <br />
          <div className="input-container">
            <label htmlFor="username">Usuario</label>
            <div className="input-wrapper">
              <i className="fa-solid fa-user"></i>
              <input type="text" id="username" placeholder="Usuario" name="username" required />
            </div>
          </div>
          <div className="input-container">
            <label htmlFor="password">Contraseña</label>
            <div className="input-wrapper">
              <i className="fa-solid fa-lock"></i>
              <input type="password" id="password" placeholder="Contraseña" name="password" required />
            </div>
          </div>
          <div className="box-visible">
            <label htmlFor="visible">Mostrar Contraseña <input type="checkbox" id="visible" /></label>
          </div>
          <div className="button-container">
            <button type="submit" id="submit" className="boton01">Iniciar Sesión</button>
            <button type="button" onClick={() => window.location.href='/registrar'} className="boton01">Registrarse</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
