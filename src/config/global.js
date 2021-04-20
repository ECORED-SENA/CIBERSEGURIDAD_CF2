export const global = {
  componenteFormativo: 'Metodologías de análisis y valuación de riesgos ',
  descripcionCurso:
    'En el componente formativo se exponen las metodologías de análisis y valuación de activos más usadas en el desarrollo de sistemas de gestión de seguridad de la información y en particular se muestra el proceso utilizando para ello la NIST SP-830.',
  imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
  fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
  programaFormacion: 'Apropiación de los conceptos en ciberseguridad',
  imagenBannerSubPrincipal: require('@/assets/curso/imagen-banner-subp.svg'),
}

export const menuPrincipal = {
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
      titulo:
        'Características de las metodologías de análisis y valuación de riesgos',
      desarrolloContenidos: true,
      subMenu: [
        {
          icono: 'far fa-file-alt',
          numero: '1.1',
          titulo:
            'Objetivos de las metodologías de análisis y valuación de activos ',
          hash: 't_1_1',
        },
        {
          icono: 'far fa-file-alt',
          numero: '1.2',
          titulo: '¿Qué es el análisis de riesgos? ',
          hash: 't_1_2',
        },
      ],
    },
    {
      nombreRuta: 'tema2',
      icono: 'far fa-file-alt',
      numero: '2',
      titulo: 'Metodologías de análisis y valuación de activos',
      desarrolloContenidos: true,
      subMenu: [
        {
          icono: 'far fa-file-alt',
          numero: '2.1',
          titulo: 'MAGERIT',
          hash: 't_2_1',
        },
        {
          icono: 'far fa-file-alt',
          numero: '2.2',
          titulo:
            'Metodología OCTAVE (Operationally Critical Threat, Asset and Vulnerability Evaluation)',
          hash: 't_2_2',
        },
        {
          icono: 'far fa-file-alt',
          numero: '2.3',
          titulo:
            'Metodología CORAS (Construct a platform for risk analysis of security critical system)',
          hash: 't_2_3',
        },
        {
          icono: 'far fa-file-alt',
          numero: '2.4',
          titulo: 'Metodología MEHARI',
          hash: 't_2_4',
        },
        {
          icono: 'far fa-file-alt',
          numero: '2.5',
          titulo: 'Identificación de amenazas',
          hash: 't_2_5',
        },
      ],
    },
  ],
  subMenu: [
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
}

export const creditos = {
  liderEquipo: {
    nombre: 'Henry Eduardo Bastidas Paruma',
    cargo: 'Instructor',
  },
  contenidoInstruccional: [
    {
      nombre: 'Carlos Andrés Rodríguez',
      cargo: 'Diseñador Instruccional',
      centro: 'Centro de Diseño y Metrología',
    },
    {
      nombre: 'Rafael Neftalí Lizcano Reyes',
      cargo: 'Asesor pedagógico',
      centro: 'Centro Industrial del Diseño y la Manufactura',
      regional: 'Regional Santander',
    },
    {
      nombre: 'Oscar Absalón Guevara',
      cargo: 'Evaluador Instruccional',
      centro: 'Centro de Gestión Industrial ',
      regional: 'Regional Bogotá',
    },
  ],
}

export const referencias = [
  {
    referencia:
      'Abril Estupiñan, A., Pulido, J., & Bohada Jaime, J. (2013). Análisis de riesgos en seguridad de la información. Ciencia, Innovación Y Tecnología, 1, 40-53. ',
    link: 'https://www.jdc.edu.co/revistas/index.php/rciyt/article/view/121',
  },
  {
    referencia:
      'Autrey, A. C. (2001). OCTAVE Criteria Versión 2.0. ittsburgh: Carniege Mellon – Software Engineering Institute',
    link:
      'https://resources.sei.cmu.edu/asset_files/TechnicalReport/2001_005_001_13871.pdf',
  },
  {
    referencia:
      'Calder, A. (2018). NIST Cybersecurity Framework: Una guía de bolsillo. IT Governance Publishing Ltd.',
    link:
      'https://books.google.com.co/books?id=rWxvDwAAQBAJ&dq=editions:ISBN1787780406&hl=es',
  },
  {
    referencia:
      'CERT - Software Engineering Institute - Carnegie Mellon University. (s.f.). CERT. OCTAVE (Operationally Critical Threat, Asset, and Vulnerability Evaluation).',
    link: 'http://www.cert.org/OCTAVE/',
  },
  {
    referencia:
      'Gobierno de España (2012). MAGERIT “Metodología de Análisis y Gestión de Riesgos de los Sistemas de Información” está disponible tanto en español como en inglés. ',
    link:
      'https://administracionelectronica.gob.es/pae_Home/dam/jcr:fb373672-f804-4d05-8567-2d44b3020387/2012_MAGERIT_v3_libro1_metodo_es_NIPO_630-12-171-8.pdf',
  },
  {
    referencia:
      'National Institute of Standards and Technology (NIST). (2018) Framework for Improving Critical Infrastructure Cybersecurity',
    link: 'https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.04162018.pdf ',
  },
  {
    referencia:
      'National Institute of Standards and Technology (NIST). (2011) Managing Information Security Risk .',
    link:
      'https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-39.pdf',
  },
  {
    referencia:
      'SGSI - 08 Análisis y valoración de riesgos. Metodologías. (2010, 12 mayo). [Vídeo]. YouTube.',
    link: 'https://www.youtube.com/watch?v=g7EPuzN5Awg',
  },
  {
    referencia:
      'Wilson, W. R., Alberts, C. J., Behrens, S., & Pethia, R. D. (1999). Operationally critical threat, asset, and vulnerability evaluation (OCTAVE) framework, version 1.0. Carnegie Mellon University. ',
    link: 'https://resources.sei.cmu.edu/library/asset-view.cfm?assetid=13473',
  },
]

export const glosario = [
  {
    termino: 'Activo tecnológico',
    significado:
      'Todo equipo tecnológico o relacionado con la tecnología requerido para que la organización cumpla con su función o misión.',
  },
  {
    termino: 'CISO',
    significado:
      'Chief Information Security Officer (Oficial de seguridad de la Información)',
  },
  {
    termino: 'Confidencialidad',
    significado:
      'Propiedad que determina que la información sólo esté disponible y sea revelada a individuos, entidades o procesos autorizados',
  },
  {
    termino: 'Disponibilidad',
    significado:
      'Propiedad de que la información sea accesible y utilizable por solicitud de una entidad autorizada, cuando ésta así lo requiera.',
  },
  {
    termino: 'Integridad',
    significado:
      'Propiedad de salvaguardar la exactitud y estado completo de los activos',
  },
  {
    termino: 'NIST',
    significado:
      'National Institute of Standard Technology (Instituto Nacional de Estándares y Tecnología).',
  },
  {
    termino: 'SP-830',
    significado:
      'Special Publication 830. Guía de gestión de riesgo para sistemas de tecnología de la información – recomendaciones del instituto nacional de estándares y tecnología',
  },
]

export const complementario = [
  {
    texto: '',
    tipo: '',
    link: '',
  },
]
