import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link para navegar
import './Style.css';

const Home = () => {
  const recetas = {
    general: [
      {
        nombre: 'milanesas',
        img: './img/mila.jpg',
        descripcion: 'Descripción breve de la receta.',
      },
      {
        nombre: 'hamburgesas',
        img: './img/burguer.jpg',
        descripcion: 'Descripción breve de la receta.',
      },
      {
        nombre: 'fideos',
        img: './img/fideos.jpg',
        descripcion: 'Descripción breve de la receta.',
      },
      {
        nombre: 'empanadas',
        img: './img/empanadas.jpg',
        descripcion: 'Descripción breve de la receta.',
      },
      {
        nombre: 'pizza',
        img: './img/pizza.jpg',
        descripcion: 'Descripción breve de la receta.',
      },
    ],
    celiaco: [
      {
        nombre: 'pizza-sin-gluten',
        img: './img/pizza-sin-gluten.jpg',
        descripcion: 'Descripción breve de la receta de Pizza sin gluten.',
      },
    ],
    vegano: [
      {
        nombre: 'ensalada-vegan',
        img: './img/ensalada-vegan.jpg',
        descripcion: 'Descripción breve de la receta de Ensalada Vegana.',
      },
      {
        nombre: 'tacos-veganos',
        img: './img/tacos-veganos.jpg',
        descripcion: 'Descripción breve de la receta de Tacos Veganos.',
      },
    ],
    vegetariano: [
      {
        nombre: 'pasta-primavera',
        img: './img/pasta-primavera.jpg',
        descripcion: 'Descripción breve de la receta de Pasta Primavera.',
      },
    ],
    diabetico: [
      {
        nombre: 'ensalada-quinoa',
        img: './img/ensalada-quinoa.jpg',
        descripcion: 'Descripción breve de la receta de Ensalada de Quinoa.',
      },
    ],
  };

  return (
    <section className="recetas">
      <h1>Bienvenidos a Recetas Mama Coco</h1>

      {Object.keys(recetas).map((categoria) => (
        <div key={categoria}>
          <h2 className='cat'>{categoria.charAt(0).toUpperCase() + categoria.slice(1)}</h2>
          <div className="recetas-flex"> {/* Contenedor Flex */}
            {recetas[categoria].map((receta, index) => (
              <div className="receta" key={index}>
                <Link to={`/receta/${receta.nombre}`}>
                  <img src={receta.img} alt={receta.nombre} />
                  <h3>{receta.nombre}</h3>
                  <p>{receta.descripcion}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Home;
