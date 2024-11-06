import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Asegúrate de que esto esté importado
import axios from 'axios';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Inicializa useNavigate aquí

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/api/login', {
        username,
        password,
      });

      if (response.data.success) {
        window.location.href = '/dashboard'; // Redirige al usuario a la página deseada
      } else {
        setErrorMessage(response.data.message);
      }
    } catch (error) {
      setErrorMessage('Error al iniciar sesión. Inténtalo de nuevo.');
    }
  };

  return (
    <section className="recetas">
      <h1>Iniciar Sesión</h1>
      <div className="container">
        <form id="loginForm" onSubmit={handleLogin}>
          <hr />
          <br />
          <div className="input-container">
            <label htmlFor="username">Usuario</label>
            <div className="input-wrapper">
              <i className="fa-solid fa-user"></i>
              <input
                type="text"
                id="username"
                placeholder="Usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="input-container">
            <label htmlFor="password">Contraseña</label>
            <div className="input-wrapper">
              <i className="fa-solid fa-lock"></i>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="box-visible">
            <label htmlFor="visible">
              Mostrar Contraseña
              <input
                type="checkbox"
                id="visible"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
              />
            </label>
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <div className="button-container">
            <button type="submit" id="submit" className="boton01">
              Iniciar Sesión
            </button>
            <button
              type="button"
              onClick={() => navigate('/registrar')} // Uso correcto de navigate
              className="boton01"
            >
              Registrarse
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
