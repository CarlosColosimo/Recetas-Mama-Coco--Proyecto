import React from 'react';
import { useParams } from 'react-router-dom';
import './RecetaDetallada.css';

// Datos de ejemplo de las recetas
const recetasDetalladas = {
    Milanesas: {
        nombre: 'Milanesas',
        pasos: [
            'Paso 1: Preparar los ingredientes.',
            'Paso 2: Batir los huevos.',
            'Paso 3: Pasar la carne por el huevo y el pan rallado.',
            'Paso 4: Freír en aceite caliente hasta dorar.',
        ],
    },
    Empanadas: {
        nombre: 'Empanadas',
        pasos: [
            'Paso 1: Hacer la masa.',
            'Paso 2: Preparar el relleno.',
            'Paso 3: Armar las empanadas.',
            'Paso 4: Hornear hasta dorar.',
        ],
    },
    Pizza: {
        nombre: 'Pizza',
        pasos: [
            'Paso 1: Preparar la masa.',
            'Paso 2: Extender la masa en la bandeja.',
            'Paso 3: Agregar salsa, queso y toppings.',
            'Paso 4: Hornear hasta que el queso se derrita.',
        ],
    },
};

const RecetaDetallada = () => {
    const { nombre } = useParams(); // Obtener el nombre de la receta desde la URL
    const receta = recetasDetalladas[nombre]; // Obtener la receta correspondiente

    if (!receta) {
        return <h2>Receta no encontrada</h2>;
    }

    return (
        <div className="receta-detallada">
            <h1>{receta.nombre}</h1>
            <h2>Pasos:</h2>
            <ol>
                {receta.pasos.map((paso, index) => (
                    <li key={index}>{paso}</li>
                ))}
            </ol>
        </div>
    );
};

export default RecetaDetallada;
