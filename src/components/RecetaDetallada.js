import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './RecetaDetallada.css';

// Datos de ejemplo de las recetas
const recetasDetalladas = {
    Milanesas: {
        nombre: 'Milanesas',
        ingredientes: [
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
    Fideos: {
        nombre: 'Fideos',
        ingredientes: [
            '200 g de fideos (tipo a elección)',
            '1 cucharada de sal',
            '1 litro de agua',
            '1 cucharada de aceite de oliva (opcional)',
            'Salsa de tomate, pesto, o tu salsa favorita (al gusto)',
        ],
        pasos: [
            'Hervir el agua: En una olla grande, calienta el agua a fuego alto hasta que comience a hervir. Agrega la sal para sazonar el agua.',
            'Cocinar los fideos: Añade los fideos al agua hirviendo y cocina de acuerdo a las instrucciones del paquete (usualmente entre 8-12 minutos, dependiendo del tipo de fideo). Remueve ocasionalmente para que no se peguen.',
            'Escurrir los fideos: Una vez cocidos, escurre los fideos en un colador. Puedes añadir un poco de aceite de oliva para evitar que se peguen.',
            'Servir: Sirve los fideos con la salsa de tu elección y, si lo prefieres, espolvorea un poco de queso rallado encima.',
        ],
    },
    Empanadas: {
        nombre: 'Empanadas',
        ingredientes: [
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
        ingredientes: [
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

    'Pizza Celiaca': {
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

    'Vegana de Garbanzos y Palta': {
        nombre: 'Vegana de Garbanzos y Palta',
        ingredientes: [
            '1 taza de garbanzos cocidos (pueden ser de lata, bien enjuagados)',
            '1 palta en cubos',
            '1 tomate en cubos',
            '1/2 pepino en rodajas finas',
            '1/4 cebolla morada en rodajas',
            'Hojas de espinaca o rúcula (al gusto)',
            'Jugo de 1/2 limón',
            '1 cucharada de aceite de oliva',
            'Sal y pimienta al gusto',

        ],
        pasos: [
            'Paso 1: Preparar los ingredientes: En un bol grande, mezcla los garbanzos, el aguacate, el tomate, el pepino, la cebolla morada y las aceitunas.',
            'Paso 2: Añadir las hojas verdes: Agrega las hojas de espinaca o rúcula y mezcla bien.',
            'Paso 3: Exprime el jugo de limón sobre la ensalada y añade el aceite de oliva. Sazona con sal y pimienta al gusto.',
            'Paso 4: Incorporar las hierbas frescas: Añade cilantro o perejil picado si lo deseas, para darle un toque de frescura.',
        ],

    },
    'Tacos con Coliflor y Garbanzos': {
        nombre: 'Tacos Veganos con Coliflor y Garbanzos',
        ingredientes: [
            '2-3 cucharadas de aceite de oliva',
            '1/2 cebolla picada',
            '2 ajos picados',
            '1-2 jalapeños laminados',
            '1/2 pimiento rojo picado',
            '1/2 coliflor (separar las florecillas de coliflor del tallo)',
            '2 cucharadas grandes de puré de tomate',
            '400g de salsa de tomate',
            'Sal y pimienta al gusto',
            'Chile o cayena molida al gusto',
            '400g de garbanzos colados y escurridos ',
            '3 papas',
            '1 palta',
            '2 cucharadas grandes de cilantro fresco molido',
            '1-2 limas',

        ],
        pasos: [
            'Paso 1: Poner una sartén a fuego medio. Añade el aceite y cuando esté caliente, añade la cebolla. Sofríe 5min, hasta que la cebolla esté bien traslúcida. Añade los ajos y los jalapeños, el pimiento rojo picado y las florecillas de coliflor y saltea durante otros 5min hasta que la coliflor tome color, como se ve en las fotos.',
            'Paso 2: Incorporar a la sartén la pasta de tomate, la salsa de tomate casera y los garbanzos. Sal pimienta y dejar cocinar hasta que la coliflor esté hecha y se haya reducido la salsa. Unos 10-12min.',
            'Paso 3: Pon una olla con abundante agua al fuego. Cortar las papas en cubitos y cuando el agua rompa a hervir, añade 1/2 cucharada de sal y la papa. Cocinar hasta que estén tiernas, unos 10min. Cuando estén listas, colar y reservar.',
            'Paso 4: Adereza las papas con 1 cucharada de aceite de oliva extra virgen, un poquito de cilantro picado, sal, pimienta y chile molido a gusto',
            'Paso 5: Calentar las tortillas de maíz en la sartén o en el microondas. Rellenarlas con un poco de guiso, las papas por encima, palta, cilantro y un chorrito de lima.'
        ],
    },
    'Pasta Primavera': {
        nombre: 'Pasta Primavera',
        ingredientes: [
            '200 g de pasta (puedes usar pasta integral o sin gluten si prefieres)',
            '1 taza de brócoli en pequeños floretes',
            '1/2 pimiento rojo en tiras',
            '1/2 pimiento amarillo en tiras',
            '1 calabacín en rodajas finas',
            '1/2 taza de zanahoria en tiras finas',
            '1/2 cebolla morada en rodajas finas',
            '2 dientes de ajo picados',
            '1/2 taza de tomates cherry partidos por la mitad',
            '1 cucharada de aceite de oliva',
            'Jugo de 1/2 limón',
            'Sal, pimienta y albahaca fresca o seca al gusto',
        ],
        pasos: [
            'Paso 1: Cocinar la pasta: Hierve la pasta en agua con sal según las instrucciones del paquete. Escúrrela y reserva.',
            'Paso 2: Saltear las verduras: En una sartén grande, calienta el aceite de oliva a fuego medio. Agrega el ajo y la cebolla y cocina hasta que estén suaves y fragantes.',
            'Paso 3: Añadir las verduras: Agrega el brócoli, los pimientos, la zanahoria y el calabacín a la sartén. Saltea durante 5-7 minutos o hasta que las verduras estén tiernas pero crujientes. Agrega los tomates cherry al final para que no se cocinen demasiado.',
            'Paso 4: Incorporar la pasta: Añade la pasta cocida a la sartén con las verduras y mezcla bien.',
            'Paso 5: Aliñar y sazonar: Exprime el zumo de limón sobre la pasta y sazona con sal, pimienta y albahaca. Mezcla nuevamente para que todos los sabores se integren.',
        ],
    },
    'Ensalada de Quinoa': {
        nombre: 'Ensalada de Quinoa',
        ingredientes: [
            '1 taza de quinua cocida',
            '1 taza de espinacas frescas',
            '1/2 taza de pepino en rodajas',
            '1/2 pimiento rojo en tiras',
            '1/4 de aguacate en cubos',
            '1/4 taza de garbanzos cocidos',
            'Jugo de limón y aceite de oliva (para aliñar)',
            'Sal y pimienta al gusto',
        ],
        pasos: [
            'Paso 1: Cocinar la quinoa hasta que esté suave.',
            'Paso 2: Dejar enfriar la quinoa cocida.',
            'Paso 3: Mezclar con vegetales frescos y hierbas.',
            'Paso 4: Aliñar con aceite de oliva y limón.',
        ],
    },
    'Tortilla de maíz': {
        nombre: 'Tortilla de maíz',
        ingredientes: [
            '1 taza de harina de maíz',
            '1 taza de agua tibia',
            '1 huevo',
            'Sal al gusto',
            'Aceite para cocinar',
        ],
        pasos: [
            'Paso 1: En un bol, mezcla la harina de maíz con el agua tibia hasta obtener una masa uniforme.',
            'Paso 2: Agrega el huevo y la sal, y mezcla bien.',
            'Paso 3:Calienta una sartén con un poco de aceite a fuego medio.',
            'Paso 4:Coloca pequeñas porciones de la mezcla en la sartén y cocina unos 2-3 minutos de cada lado hasta que estén doradas.',
            'Paso 5: Sirve las tortitas con guacamole, salsa o vegetales.',
        ],
    },
    'Flan': {
        nombre: 'Flan casero',
        ingredientes: [
            '1 lata de leche de coco o leche de almendras (400 ml)',
            '1 taza de leche vegetal adicional (de soja, almendras, avena, etc.)',
            '1/4 taza de azúcar moreno o de coco (o edulcorante al gusto)',
            '1 cucharadita de extracto de vainilla',
            '1/2 cucharadita de cúrcuma en polvo (opcional, para darle color)',
            '1 1/2 cucharadas de agar-agar en polvo (gelificante vegetal)',
            'Para el caramelo:',
            '1/4 taza de azúcar (puedes usar azúcar moreno o azúcar de coco)',
            '2 cucharadas de agua',
        ],
        pasos: [
            'Paso 1: Preparar el caramelo: En una cacerola pequeña, mezcla el azúcar y el agua a fuego medio. Cocina hasta que el azúcar se derrita y se forme un caramelo dorado. Vierte el caramelo rápidamente en moldes individuales o en un molde grande para flan, y distribúyelo por el fondo antes de que se endurezca.',
            'Paso 2: Hacer la mezcla de flan: En otra cacerola, combina la leche de coco, la leche vegetal, el azúcar, el extracto de vainilla y la cúrcuma (si estás usando). Calienta a fuego medio y revuelve para integrar los ingredientes.',
            'Paso 3: Añadir el agar-agar: Una vez que la mezcla esté caliente, agrega el agar-agar y revuelve constantemente. Lleva a ebullición y continúa cocinando por 2-3 minutos, asegurándote de que el agar-agar se disuelva completamente.',
            'Paso 4: Verter en los moldes: Retira la mezcla del fuego y viértela cuidadosamente en los moldes sobre el caramelo.',
            'Paso 5: Enfriar y desmoldar: Deja que el flan se enfríe a temperatura ambiente y luego refrigera durante al menos 1 hora para que cuaje. Para desmoldar, pasa un cuchillo por el borde y dale la vuelta en un plato.'
        ],
    },
    'Risotto de Champiñones': {
        nombre: 'Risotto de Champiñones',
        ingredientes: [
            '400g de arroz para risotto',
            '200g de champiñones frescos',
            '1 cebolla ',
            'Vino Blanco',
            'Caldo de verduras, al menos 2lts',
            'Queso parmesano o grana padano',
            'Albahaca fresca',
            'Aceite de oliva extra virgen',
            'Sal y pimienta negra (al gusto de cada uno)',
            'Para el caldo de verduras: 1 cebolla mediana',
            '1 puerro mediano',
            '2 zanahorias',
        ],
        pasos: [
            'Paso 1: Lo primero que necesitamos es hacer un buen caldo de verduras casero. En el caso de no tener mucho tiempo, es mejor comprar un caldo de verduras de calidad, ya que la mitad del sabor que impregna el arroz es el caldo. Si es casero, solo tenemos que limpiar y picar las verduras.',
            '2.En una cazuela, echamos 3lts de agua y hervimos. Añadimos las verduras, salamos a nuestro gusto y cocinamos al menos 30min, a fuego medio.',
        ],
    },
    'Hamburguesa de Lentejas': {
        nombre: 'Hamburguesa de Lentejas',
        ingredientes: [
            '200g de lentejas cocidas',
            '1 cebolla',
            '1 diente de ajo',
            '2 cucharadas soperas de puré de tomate concentrado',
            '1 ucharadita de comino en polvo',
            '1 pizca de sal',
            '1 pizca de pimienta negra',
            '1 cucharada sopera de aceite de oliva',
            '4 cucharadas soperas de harina integral o pan rallado',
            '1 zanahoria',
            '1 rama de apio',
        ],
        pasos: [
            'Paso 1: Pela y pica finamente la cebolla, el ajo, la zanahoria y el apio ',
            'Paso 2: Calienta la cucharada de aceite de oliva en una sartén al fuego, y cuando esté caliente, añade la cebolla, el ajo picado, la zanahoria y el apio y sofríe ambos ingredientes removiendo de vez en cuando.',
            'Paso 3: Enjuaga las lentejas si son de lata ya cocidas. Déjalas que se escurran y colócalas en un bol junto con la cebolla, el ajo, la zanahoria y el apio pochados, las dos cucharadas de puré de tomate concentrado, el comino y un poco de sal y pimienta. Mezclar bien.',
            'Paso 4: Incorpora poco a poco la harina integral, ya que tal vez no la necesites toda o incluso sea necesario añadir un poco más. Procurar que quede una masa un poco pegajosa, pero que se puedan formar las hamburguesas. No excederse mucho con la cantidad de harina para que no te queden unas hamburguesas secas. Mezclar bien.',
            'Paso 5: Formar las hamburguesas de lentejas y verduras con las manos. También puedes ayudarte con un aro de emplatar poniendo una porción de masa dentro, aplastando bien con una cuchara y retirando el aro con cuidado. Cuando las tengas, puedes cocinar las hamburguesas de dos formas: En una sartén o al horno. Para la primera opción, calienta un poco el aceite en una sartén y cocinarlas por ambos lados hasta que estén doradas. Para hacerlas al horno, colócalas en una bandeja forrada con papel de hornear y cocinar a 200°C, con calor arriba y abajo, durante 15min o hasta que veas que se han compactado.',
            'Paso 6: Y ya tienes las hamburguesas de lentejas tanto si las has cocinado a la plancha como al horno, Puedes servirlas tal cuál, acompañadas de una ensalada o ponerlas en un pan típico para hamburguesas con el relleno que quieras.',

        ],
    },
    'Salmón al Horno con Verduras': {
        nombre: 'Salmón al Horno con Verduras Asadas',
        ingredientes: [
            '1 filete de salmón (150-200 g)',
            '1 taza de espárragos (o brócoli, calabacín, pimientos)',
            '1/2 cebolla morada en rodajas',
            '1 tomate en rodajas',
            '1 cucharada de aceite de oliva',
            '1 diente de ajo picado',
            'Zumo de limón (al gusto)',
            'Sal y pimienta al gusto',
            'Hierbas frescas (romero, albahaca, o eneldo, opcionales)',
        ],
        pasos: [
            'Paso 1: Precalentar el horno a 200 °C (400 °F).',
            'Paso 2: Preparar las verduras: En una bandeja para hornear, coloca los espárragos, la cebolla y el tomate. Rocía las verduras con la mitad del aceite de oliva, sal, pimienta y el ajo picado. Mezcla para que queden bien sazonadas.',
            'Paso 3: Preparar el salmón: Coloca el filete de salmón en el centro de la bandeja, entre las verduras. Rocía con el resto del aceite de oliva y exprime un poco de zumo de limón por encima. Sazona con sal, pimienta y las hierbas frescas.',
            'Paso 4: Hornear durante 15-20 minutos, hasta que el salmón esté cocido y las verduras estén doradas y tiernas.',
        ],
    },
    'Morrones Rellenos de Pollo y Vegetales': {
        nombre: 'Morrones Rellenos de Pollo y Vegetales',
        ingredientes: [
            '2 pimientos grandes (rojo, amarillo o verde, cortados por la mitad y sin semillas)',
            '200 g de carne molida de pavo (puedes usar pollo o res magra)',
            '1/2 cebolla picada',
            '1/2 taza de espinacas frescas picadas',
            '1 tomate pequeño picado',
            '1/4 taza de champiñones picados',
            '1 cucharada de aceite de oliva',
            'Sal, pimienta y especias al gusto (orégano, comino, pimentón)',
        ],
        pasos: [
            'Paso 1: Precalentar el horno a 180 °C (350 °F).',
            'Paso 2: Preparar el relleno: En una sartén grande, calienta el aceite de oliva a fuego medio. Agrega la cebolla y cocina hasta que esté transparente. Luego, añade la carne molida de pavo y cocina hasta que esté dorada.',
            'Paso 3: Incorporar los vegetales: Agrega los champiñones, el tomate y las espinacas. Cocina hasta que los vegetales estén tiernos. Sazona con sal, pimienta y tus especias preferidas.',
            'Paso 4: Rellenar los pimientos: Coloca las mitades de los pimientos en una bandeja para hornear y rellénalos con la mezcla de pavo y vegetales. Si deseas, agrega un poco de queso rallado por encima.',
            'Paso 5: Hornear durante 20-25 minutos, o hasta que los pimientos estén tiernos y el queso esté derretido y dorado.'
        ],
    },
    'Frittata de Verduras': {
        nombre: 'Frittata de Verdura',
        ingredientes: [
            '100g de cebolla',
            '70g de zanahoria',
            '100g de tomates cherry',
            '1 cucharada de guisantes congelados',
            '3 huevos',
            'Queso rallado a gusto',
            'Sal',
            'Pimienta negra molida',
            '1/2 Cucharadita de pimentón ahumado',
            '1 cucharada de perejil picado',
        ],
        pasos: [
            'Paso 1: Pelamos y cortamos 100g de cebolla en trocitos pequeños y 70g de zanahoria a daditos. Lavamos 100g de tomates cherry y los cortamos por la mitad.',
            'Paso 2: En una sartén apta para horno, calentamos 1 cucharada de aceite de oliva y sofreímos la cebolla picada durante 6min, hasta que esté transparente. Precalentamos el horno a 180°C.',
            'Paso 3: Añadimos a la misma sartén la zanahoria y la cocinamos durante 10min.',
            'Paso 4: A continuación, agregamos 50g de guisantes congelados y los tomates cherry.',
            'Paso 5: Batimos 3 huevos junto a 20g de queso rallado y condimentamos con sal, pimienta negra molida, media cucharadita de pimentón ahumado y 1 cucharada de perejil picado.',
            'Paso 6: Vertemos la mezcla de huevo sobre las verduras y cubrimos con los 10g restantes de queso rallado.',
            'Paso 7: Horneamos 180°C durante 25min, hasta que el huevo esté cuajado. Si vemos que se tuesta demasiado, podemos tapar la frittata con papel de aluminio.',
        ],
    },
    'Budín de Pan': {
        nombre: 'Budín de Pan',
        ingredientes: [

            '300 g de pan (puede ser pan duro o del día anterior)',
            '1 litro de leche',
            '4 huevos',
            '1 taza de azúcar',
            '1 cucharadita de esencia de vainilla',
            '1/2 cucharadita de canela en polvo (opcional)',
            'Ralladura de limón o naranja (opcional, para darle un toque cítrico)',
            'Para el caramelo:',
            '1 taza de azúcar',
            '1/4 taza de agua',

        ],
        pasos: [
            'Paso 1: Preparar el caramelo: En una cacerola pequeña, mezcla el azúcar con el agua y calienta a fuego medio sin revolver. Cocina hasta que el azúcar se disuelva y el caramelo tome un color dorado oscuro. Vierte rápidamente el caramelo en el fondo de un molde para budín, distribuyéndolo uniformemente.',
            'Paso 2: Remojar el pan: Corta el pan en trozos pequeños y colócalo en un bol grande. Vierte la leche sobre el pan y deja reposar unos minutos para que el pan se ablande.',
            'Paso 3: Preparar la mezcla de budín: Con un tenedor o una batidora, mezcla el pan remojado hasta que esté bien deshecho. Luego, añade los huevos, el azúcar, la esencia de vainilla, la canela y la ralladura de limón o naranja. Mezcla bien hasta obtener una mezcla homogénea.',
            'Paso 4: Verter en el molde: Vierte la mezcla de budín en el molde acaramelado.',
            'Paso 5: Hornear a baño maría: Precalienta el horno a 180 °C (350 °F). Coloca el molde con el budín dentro de una fuente para horno con agua caliente, de forma que el agua llegue hasta la mitad del molde. Hornea durante aproximadamente 1 hora, o hasta que al insertar un cuchillo en el centro, este salga limpio.',
            'Paso 6: Enfriar y desmoldar: Deja enfriar el budín a temperatura ambiente y luego refrigéralo al menos 2 horas antes de desmoldarlo. Para desmoldar, pasa un cuchillo por los bordes y voltea el molde sobre un plato.'
        ],
    },
    'Gelatina': {
        ingredientes: [
            ' 1 litro de jugo de fruta natural (puede ser de naranja, manzana, mango o el que prefieras)',
            '4 cucharadas de gelatina sin sabor (aproximadamente 30 g)',
            '1/4 taza de agua fría',
            'Azúcar al gusto (opcional, dependiendo de la dulzura del jugo)',
        ],
        pasos: [
            'Paso 1: Hidratar la gelatina: En un recipiente pequeño, disuelve la gelatina sin sabor en el agua fría y deja reposar durante 5 minutos para que se hidrate completamente.',
            'Paso 2: Calentar el jugo: En una cacerola, calienta el jugo de fruta a fuego medio hasta que esté caliente, pero sin que llegue a hervir. Si el jugo es ácido, añade azúcar al gusto para equilibrar el sabor (esto es opcional).',
            'Paso 3: Incorporar la gelatina: Una vez que el jugo esté caliente, añade la gelatina hidratada y mezcla bien hasta que se disuelva por completo.x',
            'Paso 4: Verter en moldes: Vierte la mezcla de gelatina en moldes individuales o en un molde grande y deja enfriar a temperatura ambiente.',
            'Paso 5: Refrigerar: Coloca la gelatina en el refrigerador durante al menos 3-4 horas, o hasta que esté completamente firme.',

        ],
    },
    'Tiramisú': {
        nombre: 'Tiramisú',
        ingredientes: [
            '400 g de queso mascarpone',
            '4 huevos grandes (separadas claras y yemas)',
            '1/2 taza de azúcar',
            '1 taza de café fuerte (enfriado)',
            '200 g de bizcochos de soletilla (o Ladyfingers)',
            '1 cucharada de licor de café o licor amaretto (opcional)',
            'Cacao en polvo para espolvorear',
        ],
        pasos: [
            'Paso 1: Preparar la crema de mascarpone: En un bol grande, bate las yemas con el azúcar hasta obtener una mezcla cremosa y de color claro. Luego, añade el queso mascarpone y mezcla suavemente hasta obtener una crema lisa.',
            'Paso 2: Montar las claras: En otro bol, bate las claras de huevo a punto de nieve hasta que estén firmes. Luego, incorpora las claras a la mezcla de mascarpone con movimientos envolventes, para que la crema quede aireada y suave.',
            'Paso 3: Preparar el café: Mezcla el café enfriado con el licor de café o amaretto (si estás usando). Este paso es opcional pero le da un toque especial.',
            'Paso 4: Montar el tiramisú: Sumerge los bizcochos en el café rápidamente para que se empapen, pero sin que se deshagan. Coloca una capa de bizcochos empapados en el fondo de un molde rectangular. Luego, extiende una capa de la crema de mascarpone sobre los bizcochos.',
            'Paso 5: Repetir las capas: Repite el proceso, alternando capas de bizcochos y crema, hasta llenar el molde. Termina con una capa de crema de mascarpone.',
            'Paso 6: Enfriar y espolvorear cacao: Cubre el tiramisú con film y refrigéralo durante al menos 4 horas (mejor si es toda la noche). Justo antes de servir, espolvorea cacao en polvo sobre la capa superior usando un colador para que quede uniforme.'
        ],
    },
};

const RecetaDetallada = () => {
    const { nombre } = useParams();
    const receta = recetasDetalladas[nombre];

    const [ingredientesMarcados, setIngredientesMarcados] = useState(
        Array(receta.ingredientes.length).fill(false) // Inicializa el estado para marcar ingredientes
    );

    const toggleIngrediente = (index) => {
        setIngredientesMarcados((prev) => {
            const nuevosMarcados = [...prev];
            nuevosMarcados[index] = !nuevosMarcados[index]; // Cambia el estado al hacer clic
            return nuevosMarcados;
        });
    };

    if (!receta) {
        return <h2>Receta no encontrada</h2>;
    }

    return (
        <div className="receta-detallada">
            <h1>{receta.nombre}</h1>
            {receta.img && <img src={receta.img} alt={receta.nombre} />}
            <h2>Ingredientes:</h2>
            <ul>
                {receta.ingredientes.map((ingrediente, index) => (
                    <li key={index} onClick={() => toggleIngrediente(index)}>
                        {ingredientesMarcados[index] ? '✔️' : '❌'} {/* Muestra tilde o cruz */}
                        {ingrediente}
                    </li>
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
