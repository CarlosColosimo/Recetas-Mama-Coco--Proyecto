import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Asegúrate de que esto esté importado
import axios from 'axios';
import './Login.css'; // Asegúrate de que el CSS se aplique aquí

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate(); // Inicializa useNavigate

    const handleRegister = async (e) => {
        e.preventDefault();

        // Verificar que las contraseñas coincidan
        if (password !== confirmPassword) {
            setErrorMessage('Las contraseñas no coinciden.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:3001/api/register', {
                username,
                email,
                password,
            });

            if (response.data.success) {
                setSuccessMessage('Registro exitoso. Puedes iniciar sesión.');
                setErrorMessage('');
            } else {
                setErrorMessage(response.data.message);
                setSuccessMessage('');
            }
        } catch (error) {
            setErrorMessage('Error al registrarse. Inténtalo de nuevo.');
            setSuccessMessage('');
        }
    };

    return (
        <section className="recetas">
            <h1>Registro</h1>
            <div className="container">
                <form id="registerForm" onSubmit={handleRegister}>
                    <hr />
                    <br />
                    <div className="input-container">
                        <label htmlFor="username">Nombre de Usuario</label>
                        <div className="input-wrapper">
                            <i className="fa-solid fa-user"></i>
                            <input
                                type="text"
                                id="username"
                                placeholder="Nombre de Usuario"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="input-container">
                        <label htmlFor="email">Correo Electrónico</label>
                        <div className="input-wrapper">
                            <i className="fa-solid fa-envelope"></i>
                            <input
                                type="email"
                                id="email"
                                placeholder="Correo Electrónico"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="input-field" // Asegúrate de que tenga la clase adecuada si es necesario
                            />
                        </div>
                    </div>
                    <div className="input-container">
                        <label htmlFor="password">Contraseña</label>
                        <div className="input-wrapper">
                            <i className="fa-solid fa-lock"></i>
                            <input
                                type="password"
                                id="password"
                                placeholder="Contraseña"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="input-container">
                        <label htmlFor="confirmPassword">Confirmar Contraseña</label>
                        <div className="input-wrapper">
                            <i className="fa-solid fa-lock"></i>
                            <input
                                type="password"
                                id="confirmPassword"
                                placeholder="Confirmar Contraseña"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    {successMessage && (
                        <p className="success-message">
                            {successMessage}
                            <button
                                type="button"
                                onClick={() => navigate('/')} // Navegar a Login
                                className="boton01" // Asegúrate de que el estilo del botón sea el mismo
                                style={{ marginLeft: '10px' }} // Espacio entre mensajes y botón
                            >
                                Volver a Iniciar Sesión
                            </button>
                        </p>
                    )}
                    <div className="button-container">
                        <button type="submit" id="submit" className="boton01">
                            Registrarse
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Register;
