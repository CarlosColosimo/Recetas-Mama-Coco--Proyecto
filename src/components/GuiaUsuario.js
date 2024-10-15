import './manual.css'; // Importar los estilos

const ManualUsuario = () => {

    return (
        <div>
            <section className="indice">
                <h2>Índice</h2>
                <ul>
                    <li><a href="#barra-superior"><i className="fas fa-bars"></i> Barra Superior</a> - Conoce las opciones de navegación.</li>
                    <li><a href="#inicio-pagina"><i className="fas fa-home"></i> Inicio de la Página</a> - Descubre recetas al azar.</li>
                    <li><a href="#uso-recetas"><i className="fas fa-receipt"></i> Uso de las Recetas</a> - Aprende a utilizar las recetas.</li>
                    <li><a href="#consejos-cocina"><i className="fas fa-utensils"></i> Consejos de Cocina</a> - Mejora tus habilidades culinarias.</li>
                    <li><a href="#preguntas-frecuentes"><i className="fas fa-question-circle"></i> Preguntas Frecuentes</a> - Encuentra respuestas a tus dudas.</li>
                </ul>
            </section>

            <div className="floating-icons">
                <a href="#barra-superior"><i className="fas fa-bars"></i></a>
                <a href="#inicio-pagina"><i className="fas fa-home"></i></a>
                <a href="#uso-recetas"><i className="fas fa-receipt"></i></a>
                <a href="#consejos-cocina"><i className="fas fa-utensils"></i></a>
                <a href="#preguntas-frecuentes"><i className="fas fa-question-circle"></i></a>
            </div>

            <div className="separador"></div>

            {/* Secciones de contenido */}
            <section className="recetas">
                <section id="guia-usuario" className="guia-usuario">
                    <h2>Guía del Usuario</h2>
                    <p>Esta guía te explicará cómo utilizar la página web <strong>Mamá Coco</strong> en su máximo esplendor.</p>
                    <h3>¿Qué es Mamá Coco?</h3>
                    <p>La página web Mamá Coco busca facilitar la decisión sobre qué cocinar hoy y cómo hacer la receta elegida, con un paso a paso detallado para cada platillo.</p>
                    <h3>¿Cómo Funciona?</h3>
                    <ul>
                        <li><b>Exploración de Recetas:</b> Navega por una amplia selección de recetas que se ajustan a tus preferencias y necesidades.</li>
                        <li><b>Detalles de la Receta:</b> Cada receta incluye una lista de ingredientes, instrucciones detalladas y consejos útiles para lograr el mejor resultado.</li>
                        <li><b>Favoritos:</b> Guarda tus recetas favoritas para acceder a ellas fácilmente en el futuro.</li>
                        <li><b>Interacción:</b> Comenta y califica las recetas para compartir tus experiencias con otros usuarios.</li>
                    </ul>
                </section>

                <div className="separador"></div>
                
                <section id="barra-superior" className="barra-superior">
                <h2>Barra Superior</h2>
                <img src="./img/Picture1.png" alt="" id="barra" />
                <p>En la barra superior encontrarás cuatro opciones que te permitirán navegar por el sitio:</p>
                
                <h3>Opciones de Navegación</h3>
                <ul>
                    <li>
                        <img src="./img/icono_inicio.jpg" alt="Icono Inicio" className="icono-nav" id="ini" />
                        <b>Inicio:</b>
                        <p>Te llevará al inicio de la página donde podrás ver las recetas destacadas y novedades.</p>
                    </li>
                    <li>
                        <img src="./img/icono_recetas.jpg" alt="Icono Recetas" className="icono-nav" id="rece" />
                        <b>Recetas:</b>
                        <p>Accede a una sección donde podrás elegir entre diferentes recetas clasificadas por tipo y ocasión.</p>
                    </li>
                    <li>
                        <img src="./img/icono_login.jpg" alt="Icono Iniciar Sesión" className="icono-nav" id="log" />
                        <b>Iniciar Sesión:</b>
                        <p>Te permitirá iniciar sesión y tener tu propio usuario. Si no tienes una cuenta, podrás registrarte al hacer clic en el botón de registrar.</p>
                    </li>
                    <li>
                        <img src="./img/icono_manual.jpg" alt="Icono Manual de Usuario" className="icono-nav" id="manu" />
                        <b>Manual de Usuario:</b>
                        <p>Te llevará a este manual de usuario que explica todos los detalles de esta página web y cómo utilizarla eficientemente.</p>
                    </li>
                </ul>
            </section>

            <div className="separador"></div>


            <section id="inicio-pagina" className="inicio-pagina">
                <h2>Inicio de la Página</h2>
                <p>En esta sección verás recetas al azar según la hora del día. Al seleccionar una receta, serás llevado a los detalles de la misma.</p>
                
                <h3>Recetas por Hora del Día</h3>
                <p>Las recetas que se muestran en la página principal están organizadas según la hora del día:</p>
                <ul>
                    <li><b>Desayuno:</b> Recetas ligeras y energéticas para comenzar el día.</li>
                    <li><b>Almuerzo:</b> Comidas más completas para una alimentación balanceada durante el mediodía.</li>
                    <li><b>Cena:</b> Recetas más ligeras o rápidas para terminar el día.</li>
                    <li><b>Postres y Snacks:</b> Opciones dulces y saladas para cualquier momento.</li>
                </ul>
                
                <h3>Cómo Navegar por las Recetas</h3>
                <p>Para explorar las recetas desde la página principal, sigue estos pasos:</p>
                <ul>
                    <li>Desplázate hacia abajo en la página para ver las recetas disponibles.</li>
                    <li>Haz clic en la receta que te llame la atención.</li>
                    <li>Serás llevado a una página con los detalles de la receta, incluidos ingredientes y el paso a paso.</li>
                    <li>Si deseas volver al inicio, puedes hacer clic en el logo de la parte superior o usar el botón de "Volver al Inicio".</li>
                </ul>
                
                <h3>Consejos para Seleccionar Recetas</h3>
                <ul>
                    <li>Prueba recetas diferentes para cada momento del día y amplía tu repertorio culinario.</li>
                    <li>Si tienes tiempo limitado, busca recetas con tiempos de preparación cortos.</li>
                    <li>Guarda tus recetas favoritas para acceder a ellas más tarde desde tu perfil.</li>
                </ul>
            </section>

            <div className="separador"></div>

            <section id="uso-recetas" className="uso-recetas">
                <h2>Uso de las Recetas</h2>
                <p>Cada receta incluye una lista de ingredientes y un paso a paso detallado. Asegúrate de seguir las instrucciones para obtener los mejores resultados. Si alguna receta tiene un video, no dudes en verlo para obtener una guía visual.</p>
                
                <h3>Elementos de una Receta</h3>
                <ul>
                    <li><b>Ingredientes:</b> Todos los ingredientes necesarios para la receta se listan claramente. Asegúrate de tener todos ellos antes de comenzar.</li>
                    <li><b>Instrucciones:</b> Las instrucciones son paso a paso, asegurando que cada etapa esté bien explicada para facilitar la preparación del plato.</li>
                    <li><b>Tiempo de Preparación:</b> Indica cuánto tiempo tomarás para preparar la receta y el tiempo de cocción, lo que te ayuda a planificar tus comidas.</li>
                    <li><b>Porciones:</b> La cantidad de porciones que la receta produce, lo que es útil para planificar comidas familiares o cenas con amigos.</li>
                    <li><b>Nivel de Dificultad:</b> Algunas recetas indican si son fáciles, intermedias o difíciles, lo que te ayuda a elegir según tu habilidad en la cocina.</li>
                    <li><b>Consejos Adicionales:</b> Muchas recetas incluyen consejos útiles, como sustituciones de ingredientes o métodos alternativos de cocción.</li>
                    <li><b>Videos Tutoriales:</b> Si una receta tiene un video, puedes seguir visualmente cada paso. Esto es especialmente útil para técnicas de cocina más complejas.</li>
                </ul>
            </section>

            <div className="separador"></div>

            <section id="consejos-cocina" className="consejos-cocina">
                <h2>Consejos de Cocina</h2>
                <p>Aquí hay algunos consejos para mejorar tus habilidades culinarias:</p>
                
                <ul>
                    <li><b>Lee toda la receta:</b> Antes de comenzar, asegúrate de tener todos los ingredientes y utensilios necesarios.</li>
                    <li><b>Mise en Place:</b> Prepara todos los ingredientes antes de comenzar a cocinar. Esto te ayudará a que el proceso sea más fluido.</li>
                    <li><b>Experimenta:</b> No dudes en adaptar las recetas a tu gusto personal. ¡Cocinar es un arte!</li>
                    <li><b>Conserva tus sobras:</b> Si te sobra comida, guárdala en recipientes herméticos para disfrutarla más tarde.</li>
                </ul>
                
                <h3>Consejos Adicionales</h3>
                <p>Además de los consejos anteriores, aquí hay algunas recomendaciones que pueden ayudarte a mejorar aún más en la cocina:</p>
                <ul>
                    <li>Utiliza utensilios de cocina de calidad para facilitar el proceso.</li>
                    <li>Haz limpieza mientras cocinas para mantener tu espacio organizado.</li>
                    <li>Prueba nuevas técnicas de cocina, como asar, hervir o saltear.</li>
                    <li>Siempre prueba tu comida a medida que cocinas para ajustar el sazón.</li>
                </ul>
                
                <h3>Recursos Útiles</h3>
                <p>Considera consultar los siguientes recursos para aprender más sobre técnicas de cocina:</p>
                <ul>
                    <li><a href="https://www.ejemplo.com" target="_blank" rel="noopener noreferrer">Técnicas de Cocina para Principiantes</a></li>
                    <li><a href="https://www.ejemplo.com" target="_blank" rel="noopener noreferrer">Guía de Utensilios de Cocina</a></li>
                    <li><a href="https://www.ejemplo.com" target="_blank" rel="noopener noreferrer">Recursos de Conservación de Alimentos</a></li>
                </ul>
            </section>

            <div className="separador"></div>

            <section id="preguntas-frecuentes" className="preguntas-frecuentes">
                <h2>Preguntas Frecuentes</h2>
                <p>Consulta estas preguntas frecuentes para resolver cualquier duda que tengas:</p>
                
                <ul>
                    <li><b>¿Cómo puedo registrarme?</b> - Haz clic en "Iniciar Sesión" y luego en "Registrar" para crear una cuenta nueva.</li>
                    <li><b>¿Puedo guardar mis recetas favoritas?</b> - Sí, una vez que inicies sesión, podrás guardar tus recetas favoritas en tu perfil.</li>
                    <li><b>¿Hay una app móvil?</b> - Actualmente, el sitio está optimizado para dispositivos móviles, pero no hay una app específica.</li>
                    <li><b>¿Cómo puedo contactar al soporte?</b> - Puedes encontrar nuestra información de contacto en la parte inferior de la página.</li>
                </ul>
                
                <h3>Consejos para el Uso del Soporte</h3>
                <p>Si necesitas ayuda adicional, aquí hay algunos consejos para utilizar el soporte:</p>
                <ul>
                    <li>Ten listo tu nombre de usuario y dirección de correo electrónico al contactar al soporte.</li>
                    <li>Describe tu problema de manera clara y concisa para que el equipo de soporte pueda ayudarte mejor.</li>
                    <li>Revisa las secciones de ayuda en el sitio antes de contactar, ya que muchas preguntas comunes tienen respuestas allí.</li>
                </ul>
                
                <h3>Más Preguntas Frecuentes</h3>
                <p>Si tienes más preguntas, no dudes en consultarlas. Aquí algunas adicionales:</p>
                <ul>
                    <li><b>¿Puedo cambiar mi contraseña?</b> - Sí, puedes cambiar tu contraseña desde la configuración de tu perfil.</li>
                    <li><b>¿Las recetas tienen información nutricional?</b> - Sí, muchas recetas incluyen información sobre calorías y nutrientes.</li>
                </ul>
            </section>        
        </section>

            <a href="#top" className="volver-arriba">Volver al inicio</a>
        </div>
    );
};

export default ManualUsuario;
