export default {
  global: {
    componenteFormativo:
      'Fundamentos de <em>hacking</em> ético y seguridad informática',
    descripcionCurso:
      'Las malas prácticas, configuraciones incorrectas y el uso inadecuado de las tecnologías son procesos que se ejecutan día a día enmarcados por los ataques informáticos. Comprender el ecosistema de los ciberdelincuentes contribuye a mitigar los ataques de gran y pequeña escala, logrando minimizar la afectación a las organizaciones, esto conlleva a conocer aspectos fundamentales sobre el <em>hacking</em> ético y la seguridad informática.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
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
        titulo: 'Fundamentos de hacking',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Conceptos y generalidades (triada de la seguridad)',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Fases de <em>hacking</em>',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: '<em>Hacking</em> ético',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Investigación de vulnerabilidades',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Tipos de ataques',
            hash: 't_1_5',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Leyes y normas de la seguridad de información',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Aspectos legales de <em>hacking</em> ético',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Normatividad legal vigente',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Metodologías del hacking ético',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Estándares y metodologías',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Buenas prácticas',
            hash: 't_3_2',
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
  referencias: [
    {
      referencia: 'Borges, E. (2019). Servidor FTP.',
      link: 'https://blog.infranetworking.com/servidor-ftp/',
    },
    {
      referencia: 'Borges, S. (2019). Servidor web.',
      link: 'https://blog.infranetworking.com/servidor-web/',
    },
    {
      referencia:
        'Caballero, A. (2015). Introducción a OSSTMM (Open Source Security Testing Methodology Manual).',
      link:
        'http://www.reydes.com/d/?q=Introduccion_a_OSSTMM_Open_Source_Security_Testing_Methodology_Manual',
    },
    {
      referencia:
        'Castillo, J. (2018). Active directory qué es y para qué sirve.',
      link: 'https://www.profesionalreview.com/2018/12/15/active-directory/',
    },
    {
      referencia:
        'Echeverry, J. (2009). Metodología para el diagnóstico continuo de la seguridad informática de la red de datos de la Universidad Militar Nueva Granada.',
      link:
        'https://pdfs.semanticscholar.org/60c7/dbe2abab31a25422c92ead74085fd7093715.pdf',
    },
    {
      referencia:
        'Gaviria, R. (2015). Guía práctica para pruebas de pentest basada en la metodología OSSTMM V2.1 y la guía OWASP V3.0.',
      link:
        'https://repository.unilibre.edu.co/bitstream/handle/10901/17296/GU%c3%8dA%20PR%c3%81CTICA%20PARA%20PRUEBAS.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'INCIBE. (2017). Amenaza vs. vulnerabilidad, ¿sabes en qué se diferencia?',
      link:
        'https://www.incibe.es/protege-tu-empresa/blog/amenaza-vs-vulnerabilidad-sabes-se-diferencian',
    },
    {
      referencia:
        'Martínez, E. (2018). Las diferentes amenazas de seguridad informática.',
      link: 'https://sites.google.com/site/lasamenazaslainformatica/',
    },
    {
      referencia:
        'Zuluaga, A. (2017). Hacking ético basado en la metodología abierta de testeo de seguridad - OSSTMM, aplicado a la rama judicial, seccional Armenia.',
      link:
        'https://stadium.unad.edu.co/preview/UNAD.php?url=/bitstream/10596/17410/1/94288061.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Cifrado',
      significado:
        'Esconder información, la cual se utiliza con el fin de proteger la estructura de los datos e información de una empresa o persona.',
    },
    {
      termino: '<em>Exploit</em>',
      significado:
        'Término acuñado en informática para explotar o aprovechar una vulnerabilidad de un sistema o red, se realiza a través de fragmentos de código.',
    },
    {
      termino: '<em>Insider</em>',
      significado:
        'Es una amenaza interna, un riesgo para la seguridad que se origina dentro de la organización objetivo, esto no significa que el responsable deba ser un empleado u oficial actual de la organización. Puede ser un consultor, ex empleado, socio comercial o miembro de la junta.',
    },
    {
      termino: '<em>Sniffing</em>',
      significado:
        'Técnica de un <em>hacker</em> que se realiza por medio de “escuchar” para poder captar información importante tales como contraseñas o datos sensibles.',
    },
    {
      termino: 'Vulnerabilidad',
      significado:
        'Se puede determinar cómo errores de un sistema o red que puede conllevar a que un tercero se aproveche de ella para hacer robo, manipulación o eventos inesperados en el sistema.',
    },
  ],
  complementario: [
    {
      texto:
        'Perú Hacking. (2020). Fases del Ethical Hacking [video]. YouTube.',
      tipo: 'Videoconferencia',
      link: 'https://www.youtube.com/watch?v=HG1N1kMj8cM',
    },
    {
      texto:
        'Betancourth, J. (2020). Herramientas fundamentales para el hacking ético. Universidad Piloto de Colombia.',
      tipo: 'Artículo científico',
      link: 'http://polux.unipiloto.edu.co:8080/00001610.pdf',
    },
    {
      texto:
        'Ontek. (2020). ¿Qué es? Tríada CID (Confidencialidad, Integridad y Disponibilidad',
      tipo: 'Sitio web',
      link: 'https://www.ontek.net/que-es-triada-cid/',
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
      {
        nombre: 'Pedro Javier Lozada Villota',
        cargo: 'Experto temático',
        centro:
          'Regional Cauca - Centro de Teleinformática y Producción Industrial',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Diseñadora instruccional',
        centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Revisora metodológica y pedagógica ',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología ',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Diseñadora y evaluadora instruccional',
        centro:
          'Regional Distrito Capital – Centro para la Industria de la Comunicación Gráfica',
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
        nombre: 'Anllelo Andres Reina Montañez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Andrés Bolaño Rey',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ángela María Maldonado Jaime',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yicelly Estefania Mesa Silva',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lady Adriana Ariza Luque',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carmen Alicia Martínez Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Laura Gisselle Murcia Pardo',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ludwyng Corzo García',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Eduardo Garavito Parada',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Diego Fernando Velasco Güiza',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Emilsen Alfonso Bautista',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
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
