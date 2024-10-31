import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link para navegar
import { Carousel } from 'react-responsive-carousel'; // Importa el carrusel
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Importa los estilos del carrusel
import './Style.css';

const Prueba = () => {
    const recetas = {
        General: [
          {
            nombre: 'Milanesas',
            img: './img/mila.jpg',
            descripcion: 'Milanesa frita con papas.',
          },
          {
            nombre: 'Hamburgesas',
            img: './img/burguer.jpg',
            descripcion: 'Hambuerguesa con papas.',
          },
          {
            nombre: 'Fideos',
            img: './img/fideos.jpg',
            descripcion: 'Fideos.',
          },
          {
            nombre: 'Empanadas',
            img: './img/empanadas.jpg',
            descripcion: 'Empanadas rellenas de carne picada.',
          },
          {
            nombre: 'Pizza',
            img: './img/pizza.jpg',
            descripcion: 'Pizza con cebolla.',
          },
        ],
        Celiaco: [
          {
            nombre: 'Pizza Celiaca',
            img: './img/gluten.jpeg',
            descripcion: 'Pizza celiaca con cebolla.',
          },
          {
          nombre: 'Ensalada de Quinoa',
          img:'./img/ensaladaquinoa.jpeg',
          descripcion:'Ensalada de Quinoa',
          },
          {
            nombre:'Tortilla de maíz',
            img:'./img/maiz.jpeg',
            descripcion:'Tortillas de maíz',
          },
        ],
        Vegano: [
          {
            nombre: 'Vegana de Garbanzos y Palta',
            img: './img/ensaladavegana.jpg',
            descripcion: 'Ensalada Vegana.',
          },
          {
            nombre: 'Tacos con Coliflor y Garbanzos',
            img: './img/tacosveganos.jpg',
            descripcion: 'Tacos veganos.',
          },
          {
          nombre:'Hamburguesa de Lentejas',
          img:'./img/hamburglentejas.jpeg',
          descripcion:'Burguer de lentejas',
          },
        ],
        Vegetariano: [
            {
              nombre: 'Pasta Primavera',
              img: './img/pastaprimavera.jpg',
              descripcion: 'Pasta primavera casera.',
            },
            {
              nombre: 'Risotto de Champiñones',
              img:'./img/risotto.jpeg',
              descripcion: 'Risotto de Champiñones',
            },
            {
              nombre:'Frittata de Verduras',
              img:'./img/frittata.jpeg',
              descripcion:'contiene verduras',
            },
          ],
        Diabetico: [
            {
              nombre: 'Ensalada de Quinoa',
              img: './img/ensaladaquinoa.jpeg',
              descripcion: 'Ensalada de Quinoa.',
            },
            {
             nombre:'Salmón al Horno con Verduras',
             img:'./img/salmon.jpeg',
             descripcion:'Salmón al horno',
            },
            {
             nombre:'Morrones Rellenos de Pollo y Vegetales',
             img:'./img/pollo relleno.jpeg',
             descripcion:'',
            },
          ],
        Postres: [
            {
              nombre:'Flan',
              img: './img/flan.jpeg',
              descripcion:'Flan casero ',
            },
            {
              nombre: 'Budín de Pan',
              img: './img/budinPan.jpeg',
              descripcion: 'Budín de Pan',
            },
            {
              nombre:'Gelatina',
              img:'./img/gelatina.jpeg',
              descripcion:'Gelatina',
            },
            {
              nombre: 'Tiramisú',
              img:'./img/tiramisu.jpeg',
              descripcion:'Tiramisú',
            },
          ],
      };
  
  return (
    <section className="recetas">
      <h1>Bienvenidos a Recetas Mama Coco</h1>

      <div className="carruseles">
        {Object.keys(recetas).map((categoria) => (
          <div key={categoria} className="carrusel-container">
            <h2 className='receta2 '>{categoria.charAt(0).toUpperCase() + categoria.slice(1)}</h2>
            <Carousel 
              showThumbs={false} 
              infiniteLoop 
              useKeyboardArrows 
              
              showStatus={false}
              className="custom-carousel"
            >
              {recetas[categoria].map((receta, index) => (
                <div className="receta" key={index}>
                  <Link to={`/receta/${receta.nombre}`}>
                    <img src={receta.img} alt={receta.nombre} />
                    <h3>{receta.nombre}</h3>
                    <p>{receta.descripcion}</p>
                  </Link>
                </div>
              ))}
            </Carousel>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Prueba;
