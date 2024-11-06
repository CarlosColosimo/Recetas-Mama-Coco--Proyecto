import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import GuiaUsuario from './components/GuiaUsuario';
import RecetaDetallada from './components/RecetaDetallada'; // Importa el nuevo componente
import '@fortawesome/fontawesome-free/css/all.min.css';
import Register from './components/Register';


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/manual" element={<GuiaUsuario />} />
          <Route path="/receta/:nombre" element={<RecetaDetallada />} /> {/* Nueva ruta para la receta detallada */}
          <Route path="/" element={<Login />} />
        <Route path="/registrar" element={<Register />} />
        <Route path="/dashboard" element={<div>Dashboard</div>} /> {/* Agrega tu componente de Dashboard aquí */}
        </Routes>
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
