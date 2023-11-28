export default {
  global: {
    componenteFormativo:
      'Construcción de la interfaz de usuario del <em>software</em>',
    descripcionCurso:
      'En este componente formativo se trabajarán los temas de interfaces gráficas de usuario, con todos sus conceptos, buenas prácticas y como entorno visual de imágenes y objetos donde se da una interacción productiva, así como también el tema de experiencia de usuario que se enfoca, sobre todo, en páginas web y aplicaciones móviles, como un concepto clave dentro del entorno digital.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
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
        titulo: 'Lenguajes de programación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'HTML',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'CSS',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'JavaScript',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Tecnologías de programación, <em>frameworks</em> y librerías',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Codificación en lenguajes de programación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Estilo de codificación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Experiencia de usuario',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
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
      tema: 'Lenguajes de programación',
      referencia:
        'EDteam. (2020). <em>Tipos de lenguajes de programación</em> [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=gFMMmi-EYEM',
    },
    {
      tema: 'HTML',
      referencia:
        'Fazt. (2018). <em>Curso HTML para principiantes</em> [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=rbuYtrNUxg4',
    },
    {
      tema: 'CSS',
      referencia:
        'HolaMundo. (2021). ¡Aprende CSS ahora! Curso completo GRATIS desde cero [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=wZniZEbPAzk',
    },
    {
      tema: 'JavaScript',
      referencia:
        'Fazt. (2018). <em>Curso Javascript para Principiantes</em> [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=RqQ1d1qEWlE',
    },
  ],
  glosario: [
    {
      termino: 'Block',
      significado:
        'indica que los elementos estarán organizados en una línea vertical uno abajo del otro, es decir, de esa forma los interpreta el navegador.',
    },
    {
      termino: 'CSS',
      significado:
        'son las siglas que, en español, significa hoja de estilos en cascada y complementa las páginas web, dando estilo y forma.',
    },
    {
      termino: 'DOCTYPE',
      significado:
        'es la etiqueta que se coloca al inicio de una página HTML para decirle al navegador cómo va a interpretar la página siendo HTML5.',
    },
    {
      termino: 'Inline',
      significado:
        'indica que los elementos estarán organizados en una línea horizontal uno al lado del otro, es decir, de esa forma los interpreta el navegador.',
    },
    {
      termino: 'Parámetro',
      significado: 'especifica el tipo de dato que recibirá un método.',
    },
    {
      termino: 'PHP',
      significado:
        'es un lenguaje de programación del lado del servidor. que permite la comunicación de la web con servidores de datos o persistencia.',
    },
    {
      termino: 'React',
      significado:
        'está escrito en código abierto en JavaScript, muy útil para construir las interfaces de usuario.',
    },
    {
      termino: 'Responsive',
      significado:
        'propiedad que indica que la página se adapta a todas las pantallas de los diferentes dispositivos donde se revise.',
    },
    {
      termino: 'Script',
      significado:
        'es un pedazo de código JavaScript creado para ejecutar cierta función o procedimiento.',
    },
    {
      termino: 'Selector',
      significado:
        'es la forma como se selecciona o indica a cuál elemento HTML se le va a aplicar las reglas CSS escritas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Guapi Auquilla, M. J. (2018). <em>Diseño metodológico para el desarrollo de interfaces gráficas en páginas web utilizando los lenguajes HTML5 y CSS3.</em> Trabajo presentado como requisito para obtener el título de Licenciado en la especialidad de Diseño Gráfico. Universidad Nacional De Chimborazo Facultad De Ciencias De La Educación, Humanas Y Tecnologías.',
      link:
        'http://dspace.unach.edu.ec/bitstream/51000/5163/1/UNACH-FCEHT-DS%c3%91-GRF-2018-000018.pdf',
    },
    {
      referencia:
        'Guapi Auquilla, M. J. (2018). <em>Diseño metodológico para el desarrollo de interfaces gráficas en páginas web utilizando los lenguajes HTML5 y CSS3</em>.',
      link:
        'http://dspace.unach.edu.ec/bitstream/51000/5163/1/UNACH-FCEHT-DS%c3%91-GRF-2018-000018.pdf',
    },
    {
      referencia:
        'Llerena Ocaña, L. A., Fernández Villacres, G. E., Viscaino Naranjo, F. A. & Baño Naranjo, F. P. (2021). Frameworks basados en typescript para el desarrollo de aplicaciones web interactivas. <i>Dilemas contemporáneos: educación, política y valores,</i> 8(3). ',
      link:
        'https://dilemascontemporaneoseducacionpoliticayvalores.com/index.php/dilemas/article/view/2644/2675',
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
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
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
