import React from 'react';
import { useParams } from 'react-router-dom';
import './RecetaDetallada.css';

// Datos de ejemplo de las recetas
const recetasDetalladas = {
    Milanesas: {
        nombre: 'Milanesas',
        ingredientes:[
            '4 filetes de carne (puede ser de ternera, pollo o cerdo).',
            '2 huevos.',
            'Pan rallado (cantidad suficiente para cubrir la carne).',
            'Sal y pimienta (a gusto).',
            'Aceite para freír.',
            'Opcional: ajo picado o perejil para darle más sabor',
        ],
        pasos: [
            'Paso 1: Preparar los ingredientes.',
            'Paso 2: Batir los huevos.',
            'Paso 3: Pasar la carne por el huevo y el pan rallado.',
            'Paso 4: Freír en aceite caliente hasta dorar.',
        ],
    },
    Empanadas: {
        nombre: 'Empanadas',
        ingredientes:[
            '500g de harina',
            '100g de manteca',
            '1 cucharadita de sal',
            '250ml de agua tibia',
            '500g de carne molida',
            '1 cebolla picada',
            '1 huevo duro picado',
            'Aceitunas verdes (opcional)',
            '1 cucharadita de comino',
            '1 cucharadita de pimentón',
            '1 cucharadita de sal',
            'Pimienta (a gusto)',
            'Aceite para cocinar',
        ],
        pasos: [
            'Paso 1: Mezclar los ingredientes secos: En un bol grande, coloca la harina y la sal.',
            'Paso 2: Incorporar la manteca: Agrega la manteca en trozos pequeños a la harina. Mezcla con las manos hasta que la manteca se integre bien y la mezcla tenga una textura arenosa.',
            'Paso 3: Añade el agua tibia poco a poco mientras mezclas hasta formar una masa suave y homogénea. Amasa por unos minutos.',
            'Paso 4: Cubre la masa con un paño y déjala reposar por 30 minutos',
            'Paso 5: En una sartén con un poco de aceite, sofríe la cebolla hasta que esté transparente. Agrega la carne molida y cocina hasta que se dore.',
            'Paso 6: Añade comino, pimentón, sal y pimienta a la carne. Cocina unos minutos más para que los sabores se mezclen bien.',
            'Paso 7: Una vez cocida la carne, retírala del fuego y agrega el huevo duro picado y las aceitunas si decides usarlas. Deja enfriar el relleno.',
            'Paso 8: Estira la masa en una superficie enharinada hasta que quede de unos 3mm de grosor.',
            'Paso 9: Con un cortador o un vaso grande, corta círculos de la masa de unos 10-12 cm de diámetro.',
            'Paso 10: Coloca una cucharada de relleno en el centro de cada círculo.',
            'Paso 11:  Dobla la masa por la mitad para formar una media luna y presiona los bordes para sellarla. Puedes hacer un repulgue (doblar los bordes) o usar un tenedor para sellarlas bien.',
            'Paso 12: Hornear: Precalienta el horno a 180°C. Coloca las empanadas en una bandeja para hornear y píntalas con huevo batido para que queden doradas. Hornea por 20-25 minutos o hasta que estén doradas.',
             'También se pueden freír: Si prefieres, puedes freírlas en aceite caliente hasta que estén doradas y crujientes.',
          
        ],
    },
    Pizza: {
        nombre: 'Pizza',
        ingredientes:[
            '500g de harina',
            '300ml de agua tibia',
            '1 sobre de levadura seca (7g)',
            '1 cucharadita de azúcar',
            '1 cucharadita de sal.',
            '2 cucharadas de aceite de oliva',
            '200g de salsa de tomate (puede ser casera o comprada)',
            '1 diente de ajo picado',
            '1 cucharada de orégano seco',
            '1 cucharada de aceite de oliva',
            'Sal y pimienta a gusto',
            '200g de queso mozzarella rallado',
            'Toppings a elección: jamón, pepperoni, champiñones, pimientos, cebolla, aceitunas, etc.',
            'Orégano o albahaca para espolvorear',
        ],
        pasos: [
            'Paso 1: Preparar la masa.',
            'Paso 2: Extender la masa en la bandeja.',
            'Paso 3: Agregar salsa, queso y toppings.',
            'Paso 4: Hornear hasta que el queso se derrita.',
        ],
    },
    Hamburgesas: {
        nombre: 'Hamburgesas',
       ingredientes: [
        '200g de carne molida (de res, pollo, o cerdo)',
        '1 pan de hamburguesa',
        '1 porción de queso (cheddar o el que prefieras)',
        '1 hoja de lechuga',
        '1 rodaja de tomate',
        'Sal y pimienta (a gusto)',
        '1 cucharadita de aceite',
        'Kétchup, mayonesa o la salsa que prefieras',
       ],
        pasos: [
            'Paso 1: Formar la hamburguesa con la carne molida.',
            'Paso 2: Cocinar la carne en la sartén.',
            'Paso 3: Tostar el pan y agregar los ingredientes.',
            'Paso 4: Servir con salsas a gusto.',
        ],
    },
     
    PizzaCeliaca: {
        nombre: 'Pizza Celiaca',
        ingredientes: [
            '300g de harina sin gluten',
            '1 sobre de levadura seca (sin gluten)',
            '1 cucharadita de azúcar',
            '250ml de agua tibia',
            '2 cucharadas de aceite de oliva',
            '1 cucharadita de sal',
            '200g de salsa de tomate (sin gluten)',
            '200g de queso mozzarella rallado (sin gluten)',
            'Toppings a elección (jamón, pimientos, champiñones, etc. sin gluten)',
        ],
        pasos: [
            'Paso 1: Activar la levadura en agua tibia con azúcar.',
            'Paso 2: Mezclar la harina sin gluten con la sal.',
            'Paso 3: Añadir el agua con levadura y el aceite, y amasar.',
            'Paso 4: Dejar reposar la masa cubierta por 30-45 minutos.',
            'Paso 5: Precalentar el horno a 220°C.',
            'Paso 6: Extender la masa en una bandeja aceitada.',
            'Paso 7: Agregar salsa, queso y toppings.',
            'Paso 8: Hornear por 15-20 minutos o hasta que esté dorada.',
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
            <h2>Ingredientes:</h2>
            <ul>
                {receta.ingredientes.map((ingrediente, index) => (
                    <li key={index}>{ingrediente}</li>
                ))}
            </ul>
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
