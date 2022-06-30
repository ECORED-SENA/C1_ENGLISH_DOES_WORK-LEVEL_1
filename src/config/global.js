export default {
  global: {
    componenteFormativoENG: 'Hello! It’s nice to meet you. ',
    componenteFormativo:
      '<span class= r-4>¡Hola! Encantado de conocerte.</span>',
    descripcionCurso:
      'Durante el siguiente componente se brinda la introducción a las nociones gramaticales básicas, desde artículos, sustantivos y pronombres de sujeto para denominar correctamente cualquier cosa (persona, animal, objeto, etc.), pasando por el verbo ser/estar, los saludos y las despedidas, para enunciar ideas un poco más elaboradas; y por último, vocabulario útil, como los números, los colores y la pronunciación del alfabeto.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Categorías gramaticales básicas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Artículos definidos e indefinidos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Sustantivos comunes y propios relacionados',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'La persona gramatical y verbo <em>to be</em>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Greetings and farewells',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Vocabulary: Let&#8217s start ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Pronunciación: abecedario',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: '<em>Colors/colours</em>',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Números en inglés',
            hash: 't_4_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Categorías gramaticales básicas',
      referencia:
        'Habla Inglés con Oliver. (2020). Artículos Definidos e Indefinidos en Inglés [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=u9fuPGgvLB8',
    },
    {
      tema: 'La persona gramatical y verbo "TO BE”',
      referencia:
        'Equipo académico – Teaching Centre in Colombia. (2021). Aprende cuándo y cómo usar el verbo to be en inglés. British Council Colombia. ',
      tipo: 'Artículo Web',
      link: 'https://www.britishcouncil.co/blog/aprende-ingles/verbo-to-be',
    },
    {
      tema: 'Greetings and farewells',
      referencia:
        'English Flux. (2018). Greetings and Farewells in English. Basic Phrases in English [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=EvbhKINYrPg',
    },
    {
      tema: 'Vocabulary: Let´s start',
      referencia: 'Inglés.com. (s. f.). British Council. ',
      tipo: 'Página Web',
      link: 'https://www.ingles.com/pronunciacion/british%20council',
    },
  ],
  glosario: [
    {
      termino: '<em>Alphabet</em>/alfabeto',
      significado:
        'un sistema de signos, señales, conjunto de letras u otros caracteres con los que se escriben uno o varios idiomas, especialmente si estos signos están ordenados de alguna manera particular.',
    },
    {
      termino: '<em>Article</em>/artículo',
      significado:
        'Se hace referencia en el contexto de la gramática a cualquiera de un pequeño conjunto de palabras o afijos (en el idioma inglés, tenemos, por ejemplo, a, an y the) usados con sustantivos para limitar o dar definición a la aplicación de ese sustantivo.',
    },
    {
      termino: '<em>Noun</em>/sustantivo',
      significado:
        'cualquier tipo de palabra que se pueda usar como sujeto de un verbo en una oración. En español, varían en número (singular o plural) y en género (femenino o masculino), pero en inglés solo varían en número. También se pueden reemplazar con un pronombre y pueden referirse a una persona, animal, objeto, lugar, actividad o concepto abstracto.',
    },
    {
      termino: '<em>Pronoun</em>/pronombre',
      significado:
        'conjunto de palabras como, por ejemplo: yo, ella, él, usted, eso, nosotros o ellos, que en un idioma se usan como sustitutos de sustantivos o frases nominales y cuyos referentes se nombran o entienden en el contexto; estos pueden ser pronombres de sujeto o pronombres de objeto, pero también existen otros tipos, como pronombres posesivos, pronombres reflexivos, etc.',
    },
  ],
  referencias: [
    {
      referencia:
        'Equipo académico-Teaching Centre in Colombia. (2021). Aprende cuándo y cómo usar el verbo to be en inglés. British Council Colombia.',
      link: 'https://www.britishcouncil.co/blog/aprende-ingles/verbo-to-be',
    },
    {
      referencia:
        'English Flux. (2018). Greetings and Farewells in English. Basic Phrases in English [Video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=EvbhKINYrPg',
    },
    {
      referencia:
        'Habla Inglés con Oliver. (2020). Artículos Definidos e Indefinidos en Inglés [Video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=u9fuPGgvLB8',
    },
    {
      referencia: 'Inglés.com. (s. f.). British Council',
      link: 'https://www.ingles.com/pronunciacion/british%20council',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura-Regional Santander',
      },
      {
        nombre: 'Michelle Manuela Pérez Hernández',
        cargo: 'Experta Temática',
        centro:
          'CENIGRAF - Centro para la Industria de la Comunicación Gráfica-Regional Distrito Capital  ',
      },
      {
        nombre: 'Óscar Absalón Guevara',
        cargo: 'Diseñador instruccional',
        centro:
          'Centro de la Industria, la Empresa y los Servicios–CIES - Regional Santander',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Asesora Metodológica',
        centro: 'Centro de Diseño y Metrología-Regional Distrito Capital ',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrector de Estilo',
        centro: 'Centro de Diseño y Metrología-Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura-Regional Santander',
      },
      {
        nombre: 'Yuly Andrea Rey Quiñonez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura-Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios-Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura-Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura-Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura-Regional Santander',
      },
      {
        nombre: 'Oleg Litvin',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura-Regional Santander',
      },
      {
        nombre: 'Camilo Andres Bolaño Rey',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura-Regional Santander',
      },
      {
        nombre: 'Lina Marcela Perez ',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura-Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios-Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios-Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios-Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
