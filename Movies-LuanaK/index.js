let peliculas = [
    {
        imagen: "https://moviestack.onrender.com/static/y5szbv8zju.jpg",
        
        resumen: "En Francia, en 1956, un sacerdote es asesinado violentamente y la hermana Irene comienza a investigar. Una vez más, se enfrenta cara a cara con un poderoso mal.",
        
        fecha_lanzamiento: "6/9/2023",
        titulo: "La Monja II",
        tagline: "Confiesa tus pecados."
    },
    {
        imagen: "https://moviestack.onrender.com/static/vlzyyn9td8.jpg",
        
        resumen: "La historia de Tim Ballard, un ex agente del gobierno de Estados Unidos que renuncia a su trabajo para dedicar su vida a rescatar a niños de los traficantes sexuales globales.",
        titulo: "Sonido de la libertad",
        tagline: "Lucha por la luz. Silencia la oscuridad.",
        
    },
    {
        imagen: "https://moviestack.onrender.com/static/kp4vyfpa8b.jpg",
        
        resumen:"A lo largo de muchas misiones y contra todo pronóstico, Dom Toretto y su familia han superado en inteligencia, nerviosismo y determinación a todos los enemigos que se han cruzado en su camino. Ahora, se enfrentan al oponente más letal al que se han enfrentado jamás: una amenaza aterradora que surge de las sombras del pasado, impulsada por la venganza sangrienta y que está decidida a destrozar a esta familia y destruir todo (y a todos) lo que Dom ama, para siempre.",
        titulo: "X rapido",
        tagline: "El final del camino comienza.",
    },
    {
        imagen: "https://moviestack.onrender.com/static/4yxeyq2o1k.jpg",
        
        resumen: "Barbie y Ken se lo pasan genial en el colorido y aparentemente perfecto mundo de Barbie Land. Sin embargo, cuando tienen la oportunidad de ir al mundo real, pronto descubren las alegrías y los peligros de vivir entre humanos",
        titulo: "Barbie",
        tagline: "Ella lo es todo. Él es sólo Ken.",
        
    },
    {
        imagen: "https://moviestack.onrender.com/static/zv15772eut.jpg",
        
        resumen: "En una ciudad donde los habitantes del fuego, el agua, la tierra y el aire conviven, una joven fogosa y un chico que se deja llevar por la corriente descubrirán algo elemental: cuánto tienen en común.",
        titulo: "Elemental",
        tagline: "Los opuestos reaccionan.",
        
    },
    {
        imagen: "https://moviestack.onrender.com/static/2pqmfzopqq.jpg",
        resumen: "Ethan Hunt y su equipo del FMI se embarcan en su misión más peligrosa hasta el momento: rastrear una nueva y aterradora arma que amenaza a toda la humanidad antes de que caiga en las manos equivocadas. Con el control del futuro y el destino del mundo en juego y las fuerzas oscuras del pasado de Ethan acercándose, comienza una carrera mortal alrededor del mundo. Enfrentado a un enemigo misterioso y todopoderoso, Ethan debe considerar que nada puede importar más que su misión, ni siquiera las vidas de las personas que más le importan",
        titulo: "Misión: Imposible - Dead Reckoning Parte Uno",
        tagline: "Todos compartimos el mismo destino.",
       
    },
    {
    
        imagen: "https://moviestack.onrender.com/static/p369xj1lon.jpg",
        resumen: "Después de reunirse con Gwen Stacy, el amigable Spider-Man del vecindario de Brooklyn es catapultado a través del Multiverso, donde se encuentra con la Sociedad de las Arañas, un equipo de Spider-People encargado de proteger la existencia misma del Multiverso. Pero cuando los héroes chocan sobre cómo manejar una nueva amenaza, Miles se encuentra enfrentado a los otros Spiders y debe emprender su propio camino para salvar a quienes más ama.",
        titulo: "Spider-Man: A través del Spider-Verse",
        tagline: "Lo que importa es cómo llevas la mascarilla",

      }

    
    
    
];


function estructuraCard(pelicula) {
    return `
        <div class="flex flex-wrap flex-row w-80 h-auto bg-white rounded-lg overflow-hidden shadow-md m-4">
            <img class="w-full h-48 object-cover rounded-t-lg" src="${pelicula.imagen}" alt="${pelicula.titulo}">
            <div class="p-4">
                <h2 class="text-xl font-bold text-gray-800 mb-2">${pelicula.titulo}</h2>
                <p class="text-sm text-gray-500 mb-2">${pelicula.tagline}</p>
                <p class="text-gray-700">${pelicula.resumen}</p>
            </div>
        </div>
    `;
}


function mostrarTarjetasPeliculas(peliculas) {
    let mainContainer = document.getElementById('mainContainer');
    if (!mainContainer) {
        console.error(`No se encontró el contenedor principal con ID 'mainContainer'`);
        return;
    }

    peliculas.forEach(pelicula => {
        let cardHTML = estructuraCard(pelicula);
        mainContainer.innerHTML += cardHTML;
    });
}

// Llama a la función para mostrar las tarjetas de películas
mostrarTarjetasPeliculas(peliculas);
