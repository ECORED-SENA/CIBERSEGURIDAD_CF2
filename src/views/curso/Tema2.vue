<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        .h3
          i.title-num 2
      .h3 Metodologías de análisis y valuación de activos
    .row
      .titulo-segundo.mt-5
        #t_2_1.h4 2.1 MAGERIT
      .col-12.col-lg-7.align-self-center
        p.mt-3 MAGERIT es una metodología que se esfuerza por enfatizar en dividir los activos de la organización en variados grupos, para identificar más riesgos y poder tomar contramedidas para evitar así cualquier inconveniente.
        p.mt-3 La razón de ser de MAGERIT está directamente relacionada con la generalización del uso de las tecnologías de la información, que supone unos beneficios evidentes para los ciudadanos; pero también da lugar a ciertos riesgos que deben minimizarse con medidas de seguridad que generen confianza. 
        p.mt-3 En el periodo transcurrido desde la publicación de la primera versión de MAGERIT (1997) hasta la fecha, el análisis de riesgos se ha venido consolidando como paso necesario para la gestión de la seguridad.
        p.mt-3 La Evaluación del riesgo es fundamental para llevar a cabo planes de seguridad y de contingencia dentro de la organización, para poder gestionarlos y hacerse riguroso frente a posibles ataques a los datos y la información tanto de la organización, como de los servicios que presta.
      .col-5.d-none.d-lg-block
        .imagen-titulo--izq
          figure.mb-5
            img(src='@/assets/template/tema-2-1.svg', alt='Texto que describa la imagen')

          .imagen-titulo__titulo
            .h4.m-0.text-white MAGERIT
      .h5.mt-5 2.1.1 Objetivos de MAGERIT
    .row.mt-5.border-y.py-4
      .col-2.align-self-center.justify-content-center
        img(src='@/assets/template/tema-2-2.svg', alt='').w-50
      .col-9
        .col-sm.mb-5.mb-sm-0.mt-4
          .h5 Directos
          ul.lista-ul
            li.mb-0 
              .row
                .col-1.text-align-right
                  i.fas.fa-angle-right.color-c.text-center
                .col-11
                  p Concienciar a los responsables de los sistemas de información de la existencia de riesgos y de la necesidad de corregirlos a tiempo.
            li.mb-0.mt-1 
              .row
                .col-1.text-align-right
                  i.fas.fa-angle-right.color-c.text-center
                .col-11
                  p Ofrecer un método sistemático para analizar tales riesgos.
            li.mb-0.mt-1
              .row
                .col-1.text-align-right
                  i.fas.fa-angle-right.color-c.text-center
                .col-11
                  p Ayudar a descubrir y planificar las medidas oportunas para mantener los riesgos bajo control. 
    
    .row.mt-4.border-y.py-4
      .col-2.align-self-center.justify-content-center
        img(src='@/assets/template/tema-2-3.svg', alt='').w-50
      .col-9
        .col-sm.mb-5.mb-sm-0.mt-4
          .h5 Indirectos
          ul.lista-ul
            li.mb-0
              .row
                .col-1.text-align-right
                  i.fas.fa-angle-right.color-c.text-center
                .col-11
                  p Preparar a la Organización para procesos de evaluación, auditoría, certificación o acreditación, según corresponda en cada caso. 

    p.mt-5 La metodología MAGERIT es una de las más utilizadas ya que se encuentra en español. MAGERIT está basado en tres submodelos:

    .row.mt-5
      .tarjeta--container.row.mb-5
        .col-12.col-lg-4.tarjeta.tarjeta--morada.p-5.borde-blanco(style="background: linear-gradient(70deg, #9B235C, #531331);")
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/template/tema-2-4.svg', alt='')
            
          h4.text-center Submodelo de elementos
          p Es este submodelo se clasifican 6 elementos básicos que son: activos, amenazas, vulnerabilidades, impacto, riesgo, salvaguarda.

        .col-12.col-lg-4.tarjeta.tarjeta--amarilla.p-5.borde-blanco(style="background: linear-gradient(70deg, #657D89, #333F45);")
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/template/tema-2-5.svg', alt='')
            
          h4.text-center.text-white Submodelo de eventos
          p.text-white Aquí se clasifican los elementos anteriores en tres formas: dinámico físico, dinámico organizativo y estático.

        .col-12.col-lg-4.tarjeta.tarjeta--roja.p-5.borde-blanco(style="background: linear-gradient(70deg, #437795, #223C4B);")
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/template/tema-2-6.svg', alt='')
            
          h4.text-center Submodelo de procesos 
          p Se definen en 4 etapas (análisis de riesgo, planificación, gestión de riesgo y selección de salvaguardas).
    .row.mt-3
      .col-12.col-md-4.col-xl-3
        img(src='@/assets/template/tema-2-7.svg', alt='').mt-2.d-none.d-md-flex
      
      .col-12.col-md-8
        p.mb-4 #[strong La metodología consta de tres volúmenes:]
        AcordionA.mb-0(clase-tarjeta="tarjeta tarjeta-").borde-y-punteado.mb-0
          .row(titulo="Volumen I")
            .col-12
              p Método, es el volumen principal en el que se explica detalladamente la metodología.
        AcordionA.mb-0(clase-tarjeta="tarjeta tarjeta-").borde-y-punteado.mb-0
          .row(titulo="Volumen II")
            .col-12
              p Catálogo de elementos, complementa el volumen principal proporcionando diversos inventarios de utilidad en la aplicación de la metodología. Los inventarios que incluye son:
              ul.lista-ul.px-4.mt-4
                li.mb-0 
                  i.fas.fa-angle-right
                  | Tipos de activos
                li.mb-0 
                  i.fas.fa-angle-right
                  | Dimensiones y criterios de valoración 
                li.mb-0 
                  i.fas.fa-angle-right
                  | Amenazas 
                li.mb-0 
                  i.fas.fa-angle-right
                  | Salvaguardas
        AcordionA.mb-0(clase-tarjeta="tarjeta tarjeta-").borde-y-punteado.mb-0
          .row(titulo="Volumen III")
            .col-12
              p Guía de técnicas, complementa el volumen principal proporcionando una introducción de algunas de técnicas a utilizar en las distintas fases del análisis de riesgos. Las técnicas que recoge son:
              ul.lista-ul.px-4.mt-4
                li.mb-0 
                  i.fas.fa-angle-right
                  | Análisis mediante tablas
                li.mb-0 
                  i.fas.fa-angle-right
                  | Análisis algorítmico 
                li.mb-0 
                  i.fas.fa-angle-right
                  | Árboles de ataque   
                li.mb-0 
                  i.fas.fa-angle-right
                  | Técnicas generales
                li.mb-0 
                  i.fas.fa-angle-right
                  | Análisis coste-beneficio
                li.mb-0 
                  i.fas.fa-angle-right
                  | Diagramas de flujo de datos (DFD)
                li.mb-0 
                  i.fas.fa-angle-right
                  | Diagramas de procesos
                li.mb-0 
                  i.fas.fa-angle-right
                  | Técnicas gráficas
                li.mb-0 
                  i.fas.fa-angle-right
                  | Planificación de proyectos
                li.mb-0 
                  i.fas.fa-angle-right
                  | Sesiones de trabajo: entrevistas, reuniones y presentaciones
                li.mb-0 
                  i.fas.fa-angle-right
                  | Valoración Delphi
    p.mb-4.text-center #[strong La metodología MAGERIT se puede resumir gráficamente de la siguiente forma:]      
    .row.bg-amarillo-claro
      .col-12.col-md-8.offset-md-3.py-4
        img(src='@/assets/template/tema-2-8.svg', alt='')
    .row
      .titulo-segundo.mt-5
        #t_2_2.h4 2.2	Metodología OCTAVE (Operationally Critical Threat, Asset and Vulnerability Evaluation)
      .col-12.col-lg-7.align-self-center.px-5
        p.mt-3  Es un método de evaluación y de gestión de los riesgos para garantizar la seguridad del sistema informático, desarrollado por el estándar internacional ISO270001.
        p.mt-3 El núcleo central de OCTAVE es un conjunto de criterios (principios, atributos y resultados) a partir de los cuales se pueden desarrollar diversas metodologías.
      .col-2.d-none.col-lg-4.d-lg-block.mt-4.offset-1
        .imagen-titulo--izq
          figure.mb-5
            img(src='@/assets/template/tema-2-9.svg', alt='Texto que describa la imagen')

          .imagen-titulo__titulo
            .h4.m-0.text-white OCTAVE
    .row.mt-5      
      .col-12
        AcordionA.mb-0(clase-tarjeta="tarjeta tarjeta-").border-top.mb-0
          .row(titulo="2.1.1 Objetivos")
            .col-12.col-md-9
              ul.lista-ul.px-4.mt-4
                li.mb-0 
                  i.fas.fa-angle-right
                  | Permitir la comprensión del manejo de los recursos.
                li.mb-0 
                  i.fas.fa-angle-right
                  | Identificación y evaluación de los riesgos que afectan la seguridad dentro de una organización. 
                li.mb-0 
                  i.fas.fa-angle-right
                  | Exige llevar la evaluación de la organización y del personal de la tecnología de información.
              p.px-4.mt-4 #[strong OCTAVE divide los activos en dos tipos que son:]
              ul.lista-ul.px-4.mt-4
                li.mb-0 
                  i.fas.fa-angle-right
                  | Permitir la comprensión del manejo de los recursos.
                li.mb-0 
                  i.fas.fa-angle-right
                  | Identificación
            .col-md-2.d-none.d-md-flex.align-self-center
              img(src='@/assets/template/tema-2-10.svg', alt='').w-75
        AcordionA.mb-0(clase-tarjeta="tarjeta tarjeta-").border-top.mb-0
          .row(titulo="2.1.2 Equipo de Análisis de Riesgos ")
            .col-12.col-md-9
              p #[strong Debe existir un equipo de Análisis el cual tiene las siguientes funciones:]
              ul.lista-ul.px-4.mt-4
                li.mb-0 
                  i.fas.fa-angle-right
                  | Identificación recursos importantes mediante encuestas y entrevistas.
                li.mb-0.mt-1 
                  i.fas.fa-angle-right
                  | Enfoque actividades de análisis de riesgos. 
                li.mb-0.mt-1 
                  i.fas.fa-angle-right
                  | Relación de amenazas y vulnerabilidades. 
                li.mb-0.mt-1 
                  i.fas.fa-angle-right
                  | Evaluación riesgos.
                li.mb-0.mt-1 
                  i.fas.fa-angle-right
                  | Creación estrategia de protección, planes de mitigación y diseño de políticas de seguridad.
            .col-md-2.d-none.d-md-flex.align-self-center
              img(src='@/assets/template/tema-2-11.svg', alt='').w-75
        AcordionA.mb-0(clase-tarjeta="tarjeta tarjeta-").border-top.mb-0
          .row(titulo="2.1.3 Fases del método propuesto por OCTAVE ")
            .col-12.col-md-9
              ul.lista-ul.mt-4
                li.mb-0
                  .row
                    .col-1.text-align-right
                      i.fas.fa-angle-right.color-c.text-center
                    .col-11
                      p #[strong Visión de organización:] donde se definen los siguientes elementos: activos, vulnerabilidades de organización, amenazas, exigencias de seguridad y normas existentes.
                li.mb-0.mt-2
                  .row
                    .col-1.text-align-right
                      i.fas.fa-angle-right.color-c.text-center
                    .col-11
                      p  #[strong Visión tecnológica:] se clasifican en dos componentes o elementos: componentes claves y vulnerabilidades técnicas.
                li.mb-0.mt-2 
                  .row
                    .col-1.text-align-right
                      i.fas.fa-angle-right.color-c.text-center
                    .col-11
                      p #[strong Planificación de las medidas y reducción de los riesgos:] se clasifican en los siguientes elementos: evaluación de los riesgos, estrategia de protección, ponderación de los riesgos y plano de reducción de los riesgos.
            .col-md-2.d-none.d-md-flex.align-self-center
              img(src='@/assets/template/tema-2-12.svg', alt='').w-75
    .row.bg-gris
      .col-12.px-5
        p.pt-4.text-center #[strong El método OCTAVE se resume en las siguientes fases:]
        img(src='@/assets/template/tema-2-13.svg', alt='').py-4.px-5
    .row
      .titulo-segundo.mt-5
        #t_2_3.h4 2.3 Metodología CORAS (Construct a platform for risk analysis of security critical system)
      p.mt-3 Desarrollado a partir de 2001 por SINTEF, un grupo de investigación noruego financiado por organizaciones del sector público y privado. Se desarrolló en el marco del Proyecto CORAS (IST-2000-25031) financiado por la Unión Europea.
    .row.mt-3  
      .col-3.d-none.d-md-flex.offset-1
        img(src='@/assets/template/tema-2-14.svg', alt='')
      .col-12.col-md-8.mt-4
        p.px-4 #[strong El método CORAS proporciona:]
        ul.lista-ul.px-4.mt-3
          li.mb-0
            .row
              .col-1.text-align-right
                i.fas.fa-angle-right.color-c.text-center
              .col-11
                p Una metodología de análisis de riesgos basado en la elaboración de modelos, que consta de siete pasos, basados fundamentalmente en entrevistas con los expertos.
          li.mb-0.mt-2 
            .row
              .col-1.text-align-right
                i.fas.fa-angle-right.color-c.text-center
              .col-11
                p Un lenguaje gráfico basado en UML (Unified Modelling Language) para la definición de los modelos (activos, amenazas, riesgos y salvaguardas), y guías para su utilización a lo largo del proceso. El lenguaje se ha definido como un perfil UML.
          li.mb-0.mt-2 
            .row
              .col-1.text-align-right
                i.fas.fa-angle-right.color-c.text-center
              .col-11
                p Un editor gráfico para soportar la elaboración de los modelos, basado en Microsoft Visio.
          li.mb-0.mt-2
            .row
              .col-1.text-align-right
                i.fas.fa-angle-right.color-c.text-center
              .col-11
                p Una biblioteca de casos reutilizables.
          li.mb-0.mt-2
            .row
              .col-1.text-align-right
                i.fas.fa-angle-right.color-c.text-center
              .col-11
                p  Una herramienta de gestión de casos, que permite su gestión y reutilización.
          li.mb-0.mt-2
            .row
              .col-1.text-align-right
                i.fas.fa-angle-right.color-c.text-center
              .col-11
                p Representación textual basada en XML (eXtensible Mark-up Language) del lenguaje gráfico.
          li.mb-0.mt-2
            .row
              .col-1.text-align-right
                i.fas.fa-angle-right.color-c.text-center
              .col-11
                p Un formato estándar de informe para facilitar la comunicación de distintas partes en el proceso de análisis de riesgos.
    .row.mt-3
      .col-10.offset-1.border-morado.p-4.p-md-5
        p #[strong El método propone 7 pasos que son:]
        .row.mt-4.border-top-gris.py-3.mx-md-3
          .col-2.align-self-center
            h4.color-c.text-center Paso 1
          .col-10
            p #[strong Presentación:] reunión inicial, para presentar los objetivos y el alcance del análisis y recabar información inicial.
        .row.border-top-gris.py-3.mx-md-3
          .col-2.align-self-center
            h4.color-c.text-center Paso 2
          .col-10
            p #[strong Análisis de alto nivel: ] entrevistas para verificar la comprensión de la información obtenida y la documentación analizada. Se identifican amenazas, vulnerabilidades, escenarios e incidentes. 
        .row.border-top-gris.py-3.mx-md-3
          .col-2.align-self-center
            h4.color-c.text-center Paso 3
          .col-10
            p #[strong Aprobación:] descripción detallada de los objetivos, alcance y consideraciones, para su aprobación por parte del destinatario del análisis de riesgos.
        .row.border-top-gris.py-3.mx-md-3
          .col-2.align-self-center
            h4.color-c.text-center Paso 4
          .col-10
            p #[strong Identificación de riesgos:] identificación detallada de amenazas, vulnerabilidades, escenarios e incidentes.
        .row.border-top-gris.py-3.mx-md-3
          .col-2.align-self-center
            h4.color-c.text-center Paso 5
          .col-10
            p #[strong Estimación de riesgo:] estimación de probabilidades e impactos de los incidentes identificados en el paso anterior.
        .row.border-top-gris.py-3.mx-md-3
          .col-2.align-self-center
            h4.color-c.text-center Paso 6
          .col-10
            p #[strong Evaluación de riesgo:] emisión del informe de riesgos, para su ajuste fino y correcciones.
        .row.border-top-gris.py-3.mx-md-3
          .col-2.align-self-center
            h4.color-c.text-center Paso 7
          .col-10
            p #[strong Tratamiento del riesgo: ] identificación de las salvaguardas necesarias, y realización de análisis coste/beneficio.
        .row.mt-4
          .col-12
            img(src='@/assets/template/tema-2-15.svg', alt='')
    .row
      .titulo-segundo.mt-5
        #t_2_4.h4 2.4 Metodología MEHARI
      p.mt-4 MEHARI es una metodología desarrollada por CUSIF (Club de la Securité De L’information Français) en 1998 que pasó a ser open source en 2007.
      p.mt-4 El objetivo de esta metodología es permitir un análisis directo e individual de situaciones de riesgos descritas en diferentes escenarios y proporcionar un completo conjunto de herramientas específicamente diseñadas para la gestión de la seguridad a corto, medio y largo plazo, adaptables a diferentes niveles de madurez.
      .h5.mt-5 2.4.1 Introducción general de la utilización de MEHARI
      p.mt-4 La principal orientación de MEHARI es la evaluación y reducción de riesgos. Sus bases de datos de conocimiento, mecanismos y herramientas se han creado con ese objetivo.
      p.mt-4 Asimismo, en la mente de los diseñadores del conjunto de la metodología, la necesidad de un método estructurado para el análisis y reducción de riesgos puede ser, en función de la organización:
      .col-8.offset-2.mt-5
        img(src='@/assets/template/tema-2-16.svg', alt='')
      p.mt-5 Con esto en mente, MEHARI proporciona un conjunto de enfoques y herramientas que permiten realizar un análisis de riesgos cuando es necesario.
      p.mt-4 La metodología MEHARI, que comprende las bases de datos de conocimiento, los manuales y las guías que describen los diferentes módulos (amenazas, riesgos, vulnerabilidades), se encuentra disponible para ayudar a las personas implicadas en la gestión de la seguridad (CISO, responsables de riesgos, auditores y CIO), en sus diferentes tareas y actividades.

      .col-10.offset-1.rounded(style="background: linear-gradient(70deg, #9B235C, #531331);").px-5.py-4.mt-4
        p.text-white MEHARI es un conjunto de herramientas y funcionalidades metodológicas para la gestión de la seguridad y de las medidas asociadas, basado en un análisis de riesgos preciso. Los aspectos fundamentales de MEHARI son:
        ul.lista-ul.px-4.mt-3
          li.mb-0 
            i.fas.fa-angle-right.color-white
            | #[strong.text-white.font-normal Su modelo de riesgos (cualitativo y cuantitativo),]
          li.mb-0 
            i.fas.fa-angle-right.color-white
            | #[strong.text-white.font-normal El examen de la eficacia de las medidas de seguridad en vigor o previstas,]
          li.mb-0 
            i.fas.fa-angle-right.color-white
            | #[strong.text-white.font-normal La capacidad para evaluar y simular los niveles de riesgo derivados de medidas adicionales]
    .row
      .h5.mt-5 2.4.2 Fases de la metodología MEHARI      
    .row
      .col-11.border-y-morado.bg-amarillo-claro.p-4.mt-4.mx-5
        .row
          .col-12.col-md-8 
            p #[strong 2.4.2.1 Análisis o evaluación de Riesgos]
            p.mt-3 Una situación de riesgo se puede caracterizar por diferentes factores:
            ul.lista-ul.px-4.mt-3
              li.mb-0 
                .row
                  .col-1.text-align-right
                    i.fas.fa-angle-right.color-c.text-center
                  .col-11
                    p Factores estructurales (u organizacionales), los cuales no dependen de las medidas de seguridad, sino de la actividad principal de la organización, su entorno y su contexto.
              li.mb-0
                .row
                  .col-1.text-align-right
                    i.fas.fa-angle-right.color-c.text-center
                  .col-11
                    p Factores de la reducción de riesgo, que son función directa de las medidas de seguridad implementadas.
            p.mt-4 Para ello, integra herramientas (como criterios de evaluación, fórmulas, etc.) y bases de datos de conocimiento (en particular para el diagnóstico de las medidas de seguridad), como complemento esencial al marco de análisis de riesgos.
            p.mt-4 Es necesario realizar un enfoque estructurado que permita identificar todas las situaciones potenciales de riesgo, con el fin de analizar las más críticas y poder identificar las acciones para reducir el riesgo a niveles aceptables.
          .col-4.d-none.d-md-flex
            img(src='@/assets/template/tema-2-17.svg', alt='').w-75
      .col-11.border-y-morado.bg-amarillo-claro.p-4.mt-3.mx-5
        .row
          p #[strong 2.4.2.1 Análisis o evaluación de Riesgos]
          .col-4.d-none.d-md-flex.px-5.mt-4
            img(src='@/assets/template/tema-2-18.svg', alt='').w-75
          .col-12.col-md-8.align-self-center
            p MEHARI integra cuestionarios de controles de seguridad, lo que permite evaluar el nivel de calidad de los mecanismos y soluciones encaminadas a la reducción del riesgo. Los controles o medidas de seguridad se agrupan en servicios y en dominios de seguridad. Para realizar esta evaluación es necesario seguir los siguientes pasos:
          ul.lista-ul.px-5.mt-5
            li.mb-0 
              .row
                .col-1.text-align-right
                  i.fas.fa-angle-right.color-c.text-center
                .col-11
                  p Revisión de vulnerabilidades o evaluación de los servicios de seguridad: MEHARI proporciona un modelo de riesgos estructurado que considera los factores de reducción del riesgo en forma de servicios de seguridad. #[br] #[br] El resultado de la evaluación de la vulnerabilidad tendrá el fin de garantizar que los servicios de seguridad cumplen realmente su cometido. #[br] #[br] La evaluación se basa en una base de datos experta de conocimientos proporcionada por MEHARI para evaluar el nivel de calidad de las medidas de seguridad.
            li.mb-0.mt-4
              .row
                .col-1.text-align-right
                  i.fas.fa-angle-right.color-c.text-center
                .col-11
                  p Planes de seguridad basados en la revisión de vulnerabilidades: se realizará la confección de planes de seguridad como resultado directo de la evaluación del estado de los servicios de seguridad. #[br] #[br] El proceso de gestión de la seguridad se enfoca en ejecutar una evaluación y decidir mejorar todos aquellos servicios que no tienen un suficiente nivel de calidad. #[br] #[br] MEHARI proporciona unos cuestionarios de diagnóstico que se pueden utilizar para este tipo de enfoque.
            li.mb-0.mt-4
              .row
                .col-1.text-align-right
                  i.fas.fa-angle-right.color-c.text-center
                .col-11
                  p Apoyo en las BBDD en la creación de un marco de referencia de seguridad: las bases de datos de conocimiento de MEHARI se pueden utilizar directamente para crear un marco de referencia de seguridad que contendrá y describirá el conjunto de reglas e instrucciones de seguridad que debe seguir la organización. #[br] #[br] Los cuestionarios de evaluación de MEHARI son una buena base de trabajo para los responsables de seguridad para decidir lo que debe ser aplicado en la organización. #[br] #[br] La creación de un conjunto de reglas, a través de un marco de referencia de seguridad, se enfrenta a menudo a dificultades en la implementación local, por lo que se deben gestionar exenciones y excepciones.
            li.mb-0.mt-4
              .row
                .col-1.text-align-right
                  i.fas.fa-angle-right.color-c.text-center
                .col-11
                  p Dominios cubiertos por el módulo de evaluación de vulnerabilidades: desde un punto de vista de análisis de riesgo, en base a la identificación de todas las situaciones de riesgo y con el deseo de cubrir todos aquellos riesgos inaceptables, MEHARI no se limita simplemente al dominio IT. #[br] #[br] El módulo de evaluación cubre, además de los sistemas de información, todo el conjunto de la organización, como la protección del sitio en general, el entorno de trabajo y los aspectos legales y regulatorios.
      .col-11.border-y-morado.bg-amarillo-claro.p-4.mt-3.mx-5
        .row
          .col-12.col-md-8 
            p #[strong 2.4.2.2 Evaluaciones de Seguridad]
            p.mt-4 Sea cual sea la orientación de la política de seguridad, hay un principio en el que coinciden todos los responsables: debe existir un equilibrio entre las inversiones de seguridad por un lado y la importancia de los principales retos empresariales por el otro.
            p.mt-4 Esto significa que la comprensión de las amenazas del negocio es fundamental, y que el análisis del contexto de seguridad merece un nivel prioritario y un método estricto y riguroso de evaluación.
            p.mt-4 El fin del análisis de las amenazas de seguridad es responder a la siguiente doble pregunta ¿Qué puede suceder, y si sucede, puede ser serio?
            p.mt-4 MEHARI proporciona un módulo de análisis de amenazas con dos tipos de resultados:
          .col-4.d-none.d-md-flex.align-self-center
            img(src='@/assets/template/tema-2-19.svg', alt='').w-75 
        ul.lista-ul.mt-5
          li.mb-0 
            .row
              .col-1.text-align-right
                i.fas.fa-angle-right.color-c.text-center
              .col-11
                p Una escala de valores de posibles malfuncionamientos en sus procesos operacionales.
          li.mb-0.mt-2
            .row
              .col-1.text-align-right
                i.fas.fa-angle-right.color-c.text-center
              .col-11
                p Una clasificación de la información y de los activos TI: consiste en la definición, para cada tipo de información, para cada tipo de activo TI, y para cada criterio de clasificación (habitualmente Confidencialidad, Integridad y Disponibilidad). La clasificación de la información de los activos es la escala de los valores de malfuncionamiento definida anteriormente traducido a indicadores de sensibilidad asociados con los activos TI.
        p.mt-4 La escala de valores de malfuncionamiento y la clasificación de la información y activos son dos formas distintas de expresar las amenazas de seguridad. El primero es más detallado y proporciona más información a los CISO y el segundo es más generalista y resulta más útil para las campañas de sensibilización e información.
    .row.mt-4
      p.text-center #[strong La siguiente imagen resume las características y procesos de mehari.]
      .col-10.mt-4.offset-1
        img(src='@/assets/template/tema-2-20.svg', alt='').w-100
    .row
      .titulo-segundo.mt-5
        #t_2_5.h4 2.5 Identificación de amenazas
      p.mt-4 Una Amenaza es la posibilidad de ocurrencia de cualquier tipo de evento o acción que puede producir un daño (material o inmaterial) sobre los elementos de un sistema, en el caso de la Seguridad informática, los Elementos de Información.
      p.mt-4 Para el caso de SP-830 estas se categorizan en tres tipos: Humanas, naturales y del entorno, y las siguientes son algunos ejemplos.
    .tabla-a.mb-5.mt-4
      table
        thead(style="border-color: #FFC23B;")
          tr(style="background-color: #9B235C;")
            th(colspan="3").text-white Valuación de las Amenazas
          tr(style="background-color: #DEE4F0;")
            th Naturales
            th Humanas
            th Entorno
        tbody
          tr
            td
              .col-10.offset-1.pt-3 
                i.fas.fa-angle-right.color-c.px-3
                | Terremoto
              .col-10.offset-1.pt-3 
                i.fas.fa-angle-right.color-c.px-3
                | Inundaciones
              .col-10.offset-1.pt-3 
                i.fas.fa-angle-right.color-c.px-3
                | Tormentas eléctricas
              .col-10.offset-1.pt-3 
                i.fas.fa-angle-right.color-c.px-3
                | Vendavales
              .col-10.offset-1.pt-3 
                i.fas.fa-angle-right.color-c.px-3
                | Huracanes     
            td 
              .col-10.offset-1.pt-3 
                .row
                  .col-1
                    i.fas.fa-angle-right.color-c
                  .col-10
                    p Acceso no autorizado a la infraestructura
              .col-10.offset-1.pt-3 
                .row
                  .col-1
                    i.fas.fa-angle-right.color-c
                  .col-10
                    p Explotación de errores (usuario y administrador)
              .col-10.offset-1.pt-3
                .row
                  .col-1
                    i.fas.fa-angle-right.color-c
                  .col-10
                    p Ingeniería social
              .col-10.offset-1.pt-3
                .row
                  .col-1
                    i.fas.fa-angle-right.color-c
                  .col-10
                    p Malicia
              .col-10.offset-1.pt-3
                .row
                  .col-1
                    i.fas.fa-angle-right.color-c
                  .col-10
                    p Virus informático (malware)
              .col-10.offset-1.pt-3
                .row
                  .col-1
                    i.fas.fa-angle-right.color-c
                  .col-10
                    p Phishing
              .col-10.offset-1.pt-3
                .row
                  .col-1
                    i.fas.fa-angle-right.color-c
                  .col-10
                    p Ingeniería social
              .col-10.offset-1.pt-3
                .row
                  .col-1
                    i.fas.fa-angle-right.color-c
                  .col-10
                    p Denegación de servicio
              .col-10.offset-1.pt-3
                .row
                  .col-1
                    i.fas.fa-angle-right.color-c
                  .col-10
                    p Spoofing
            td 
              .col-10.offset-1.pt-3
                .row
                  .col-1
                    i.fas.fa-angle-right.color-c
                  .col-10
                    p Fallas eléctricas
              .col-10.offset-1.pt-3
                .row
                  .col-1
                    i.fas.fa-angle-right.color-c
                  .col-10
                    p Polución
              .col-10.offset-1.pt-3
                .row
                  .col-1
                    i.fas.fa-angle-right.color-c
                  .col-10
                    p Temperatura
              .col-10.offset-1.pt-3
                .row
                  .col-1
                    i.fas.fa-angle-right.color-c
                  .col-10
                    p Incendios
              .col-10.offset-1.pt-3
                .row
                  .col-1
                    i.fas.fa-angle-right.color-c
                  .col-10
                    p Control de humedad
              .col-10.offset-1.pt-3
                .row
                  .col-1
                    i.fas.fa-angle-right.color-c
                  .col-10
                    p Edificaciones Cercanas
              .col-10.offset-1.pt-3
                .row
                  .col-1
                    i.fas.fa-angle-right.color-c
                  .col-10
                    p Accidente de tránsito.
              .col-10.offset-1.pt-3
                .row
                  .col-1
                    i.fas.fa-angle-right.color-c
                  .col-10
                    p Protección de los equipos en el sitio
              .col-10.offset-1.pt-3
                .row
                  .col-1
                    i.fas.fa-angle-right.color-c
                  .col-10
                    p Fuentes de Potencia
              .col-10.offset-1.pt-3
                .row
                  .col-1
                    i.fas.fa-angle-right.color-c
                  .col-10
                    p Seguridad de cableados
              .col-10.offset-1.pt-3
                .row
                  .col-1
                    i.fas.fa-angle-right.color-c
                  .col-10
                    p Mantenimiento de equipos
              .col-10.offset-1.pt-3
                .row
                  .col-1
                    i.fas.fa-angle-right.color-c
                  .col-10
                    p Ingreso no autorizado
              .col-10.offset-1.pt-3
                .row
                  .col-1
                    i.fas.fa-angle-right.color-c
                  .col-10
                    p Aseguramiento de oficinas, recintos y espacios físicos.
              .col-10.offset-1.pt-3
                .row
                  .col-1
                    i.fas.fa-angle-right.color-c
                  .col-10
                    p Fallas de equipos
    .row.mt-5 
      p.text-center #[strong A continuación, se muestra un ejemplo de cómo se identifican las amenazas]
      .tabla-a.my-2
        table.border-table
          thead
            tr
              th Activo
              th A. Naturales
              th A. Humanas
              th A. Entorno
            tr 
              th.text-left 
                p Servidor
              th 
                p Inundación
              th 
                p Acceso no autorizado 
                p Denegación de servicio
                p Suplantación de seguridad 
              th 
                p Humedad 
                p Polvo
    .row.mt-5
      .h5.mt-5 2.5.1 Valuación de amenazas
      p.mt-4 El proceso de valuación de las amenazas se hace para cada activo en cada una de las categorías al igual que en el caso anterior tomaremos como ejemplo una categoría para realizar el proceso.
      p.mt-5.text-center #[strong Valuación de Amenazas]
      .col-8.offset-2
        .tabla-a.my-2
        table.border-table
          thead
            tr 
              th(colspan = "5") Valuación de Amenazas
            tr
              th Activo
              th A. Naturales
              th A. Humanas
              th A. Entorno
              th Valor Amenaza
            tr.bg-verde
              th.text-left 
                p #[strong Servidor]
              th 1
              th 2
              th 3
              th 9
            tr
              th.text-left 
                p #[strong Computador de escritorio]
              th 1
              th 4
              th 3
              th 8
            tr
              th.text-left 
                p #[strong Impresora]
              th 1
              th 1
              th 2
              th 4
            tr
              th.text-left 
                p #[strong Fotocopiadora]
              th 1
              th 1
              th 2
              th 4
    p.mt-5  De la tabla anterior se puede concluir que el activo llamado servidor es el que mayor valor en las amenazas tiene.   
    .h5.mt-5 2.5.2 Identificación de vulnerabilidades
    p.mt-4 Las vulnerabilidades son debilidad de cualquier tipo que compromete la seguridad del sistema informático, para la identificación de vulnerabilidades se puede recurrir a dos estrategias distintas pero complementarias que son a partir de la utilización de herramientas tecnológicas que de manera automática pueden identificarlas, este proceso se realiza mediante el cumplimiento de técnicas de ethical hacking siguiendo una metodología para este proceso como ISAF, OWASP, OSSTMM, entre otras.
    p.mt-4 Sin embargo, existen vulnerabilidades que deben identificadas y que ninguna herramienta tecnológica las puede detectar como las que se generan por problemas eléctricos, de control de acceso físico a servidores y equipos, falta de documentación de los procesos y procedimientos, entre otros que solo pueden identificarse mediante un análisis personal, observación directa, entrevista dirigida y otras estrategias de manera presencial.
    .row.mt-5
      .col-10.offset-1
        img(src='@/assets/template/tema-2-21.svg', alt='')
    p.mt-5 #[strong Análisis de controles]
    p.mt-4 En este apartado el estándar propone una actividad que corresponde a identificar y seleccionar los controles actuales y los controles planificados.
    p.mt-4 Los controles los podemos clasificar en técnicos, físicos y administrativos a continuación se mencionan algunos ejemplos de estos controles.
    .row
      .col-12.col-md-10.offset-md-1
        p.text-center #[strong Ejemplos de algunos controles]
        .tabla-a.my-2
        table.border-table
          thead
            tr 
              th(colspan = "3") Controles de seguridad
            tr
              th Controles físicos
              th Controles técnicos
              th Controles administrativos
          tbody  
            tr
              td 
                p Cámaras de circuito cerrado
                p.mt-4 Sistemas de alarmas térmicos o de movimiento
                p.mt-4 Guardias de seguridad 
                p.mt-4 Identificación con fotos
                p.mt-4 Puertas de acero con seguros especiales
                p.mt-4 Biométrica (incluye huellas digitales, voz, rostro, iris, escritura a mano y otros métodos automatizados utilizados para reconocer individuos)
              td 
                p Encriptación
                p.mt-4 Tarjetas inteligentes
                p.mt-4 Autenticación a nivel de la red
                p.mt-4 Listas de control de acceso (ACLs)
                p.mt-4 Software de auditoría de integridad de archivos
              td 
                p Entrenamiento y conocimiento
                p.mt-4 Planes de recuperación y preparación para desastres.
                p.mt-4 Estrategias de selección de personal y separación.
                p.mt-4 Registro y contabilidad de personal.
                p.mt-4 Políticas de seguridad
    .h5.mt-5 2.5.3 Determinación de probabilidades
    p.mt-4 Las probabilidades permiten medir en qué porcentajes se pueden llegar a presentar algún tipo de incidente que ponga en riesgo el correcto funcionamiento de los recursos tecnológicos.
    p.mt-4 Al igual que con las variables anteriores para su medición nos apoyaremos en las siguientes características:
    h6.text-center.mt-5 Criterios medición probabilidad
    .row
      .col-10.offset-1
        .tabla-a.my-2
        table.border-table(style='width:100%;table-layout: auto;')
          thead
            tr 
              th(colspan = "2") Criterios para medir la probabilidad de las amenazas
          tbody  
            tr
              th
                p.text-center ALTA
              th 
                p La realización del ataque es inminente. No existen condiciones internas y externas que impidan el desarrollo del ataque.
            tr
              th
                p.text-center MEDIA
              th 
                p Existen condiciones que hacen poco probable un ataque en el corto plazo pero que no son suficientes para evitarlo en el largo plazo
            tr
              th
                p.text-center BAJA
              th 
                p Existen condiciones que hacen muy lejana la posibilidad del ataque.
    p.mt-5 Dentro de la empresa existen una serie de vulnerabilidades que pueden ser explotadas por las amenazas por lo tanto se hace necesario definir criterios que permitan determinar el nivel de probabilidad de las vulnerabilidades; tres niveles son definidos con este fin como se observa en la tabla siguiente:               
    h6.text-center.mt-5 Criterios para medir la probabilidad de la vulnerabilidad
    .row
      .col-10.offset-1
        .tabla-a.my-2
        table.border-table(style='width:100%;table-layout: auto;')
          thead
            tr 
              th(colspan = "2") Criterios para medir la probabilidad de las vulnerabilidades
          tbody  
            tr
              th
                p.text-center ALTA
              th 
                p El threat-source es altamente motivado y suficientemente capaz, y los controles para evitar la vulnerabilidad de ser ejercidas son ineficaces
            tr.overflow-aut
              th
                p.text-center MEDIA
              th 
                p Existen condiciones que hacen poco probable un ataque en el corto plazo pero que no son El threat-source es altamente motivado y suficientemente capaz, y los controles para evitar la vulnerabilidad de ser ejercidas son ineficaces
            tr
              th
                p.text-center BAJA
              th 
                p El threat-source carece de motivación o capacidad, o los controles existen para prevenir, o al menos obstaculicen de manera significativa la vulnerabilidad de ser ejercida
    p.mt-5  A continuación, se muestra a manera de ejemplo como es el proceso de identificación de las probabilidades en las amenazas y vulnerabilidades.              
    h6.text-center.mt-5 Probabilidad en las vulnerabilidades
    .row
      .col-10.offset-1
        .tabla-a.my-2
        table.border-table(style='width:100%;table-layout: auto;')
          thead
            tr 
              th(rowspan = "2") Criterios para medir la probabilidad de las vulnerabilidades
              th(colspan = "3") Probabilidad de amenaza
            tr 
              th Alta
              th Media
              th Baja
          tbody  
            tr
              td Amenaza de entorno
              td  
              td X
              td
            tr
              td Amenaza humana
              td  X
              td 
              td
            tr
              td Control de humedad (Cuarto de telecomunicaciones)
              td  
              td X
              td
            tr
              td Polución (cuarto de telecomunicaciones)
              td  
              td X
              td
            tr
              td Falta de cumplimiento de la normatividad de cableado estructurado (Armario)
              td X
              td 
              td
    h6.text-center.mt-5 Probabilidad en las vulnerabilidades
    .row
      .col-10.offset-1
        .tabla-a.my-2
        table.border-table(style='width:100%;table-layout: auto;')
          thead
            tr
              th Vulnerabilidad 
              th Alta
              th Media
              th Baja
          tbody  
            tr
              td No se tiene un canal de backup con ISP en caso de fallo de canal principal.
              td X
              td 
              td 
            tr
              td Cableado de red y eléctrico junto en algunos sitios.
              td X
              td 
              td 
            tr
              td No existen barras de puesta a tierra dentro del cuarto de comunicaciones y en rack.
              td X
              td 
              td 
            tr
              td No se tiene un plano adecuado para mirar distancias de puntos de red, pero por observación de algunas oficinas se sobrepasa la distancia máxima.
              td 
              td X
              td 
            tr
              td Falta de etiquetas adecuadas de equipos activos y servidores.
              td 
              td X
              td 
            tr
              td No se maneja un mecanismo de control de humedad.
              td 
              td X
              td 
            tr
              td No se tiene un diagrama lógico de conexión de equipos.
              td X
              td 
              td 
    .h5.mt-5 2.5.4 Análisis de impacto
    p.mt-4  Para determinar el establecimiento de prioridades en la protección y prevención, se requiere conocer cual o cuales activos pueden ser potencialmente afectados por incidentes de seguridad. 
    p.mt-4 En caso de que haya afectaciones a los activos se debe determinar cuál es la afectación y grado de problema que podría causar en la organización, este grado de afectación puede medirse desde las consecuencias económicas, indisponibilidades de acceso entre otras.
    p.mt-4 El impacto debe medirse con base a los tres principios de la seguridad: la confidencialidad, la integridad y la disponibilidad.
    p.mt-4 El impacto se puede medir en tres niveles que son:
    h6.text-center.mt-5 Criterios medición probabilidad
    .row
      .col-8.offset-2
        .tabla-a.my-3
        table.border-table(style='width:100%;table-layout: auto;')
          thead
            
          tbody  
            tr
              th
                p.text-center ALTA
              th 
                p En el corto plazo desmoviliza o desarticula a la organización.
            tr
              th
                p.text-center MEDIA
              th 
                p Provoca la desarticulación de un componente de la organización. Si no se atiende a tiempo, a largo plazo puede provocar la desarticulación de la organización.
            tr
              th
                p.text-center BAJA
              th 
                p Causa daño aislado, que no perjudica a ningún componente de la organización.
    p.mt-4  A continuación, se presenta a manera de ejemplo como se puede realizar el proceso de evaluación del impacto.
    h6.text-center.mt-5 Probabilidad en las vulnerabilidades
    .row
      .col-10.offset-1
        .tabla-a.my-2
        table.border-table(style='width:100%;table-layout: auto;')
          thead
            tr
              th Activos Amenazados 
              th(colspan="3") Principios de la Seguridad Informática
              th(colspan="3") Impacto
            tr 
              th
              th Confidencialidad
              th Integridad
              th Disponibilidad
              th Alto
              th Medio
              th Bajo
          tbody  
            tr
              th Servidor 
              td X
              td X
              td X
              th X
              th 
              th 
            tr
              th Estaciones de trabajo 
              td X
              td X
              td X
              th 
              th X
              th
            tr
              th Impresiora 
              td X
              td X
              td X
              th 
              th 
              th X
    .row.mt-5
      .col-10.offset-1.rounded(style="background: linear-gradient(70deg, #9B235C, #531331);").px-5.py-4.mt-4
        .row
          .col-8.align-self-center
            p.text-white Dentro de este ámbito la Probabilidad de Amenaza e Impacto de las amenazas están considerados por medio de los siguientes niveles o escalas.
          .col-4
            h6.text-white.text-left  2 = Baja
            h6.text-white.text-left  3 = Mediana 
            h6.text-white.text-left  4 = Alta
    .row.mt-3
      .col-10.offset-1.rounded(style="background: linear-gradient(70deg, #437795, #223C4B);").px-5.py-4.mt-4
        .row
          .col-8.align-self-center
            p.text-white El Riesgo, se calcula como el producto de la multiplicación Probabilidad de Amenaza por el Impacto de la amenaza, está agrupado en tres rangos, y para su mejor visualización, se aplica diferentes colores.
          .col-4
            h6.text-white.text-left  Bajo Riesgo = 6 - 9 (Verde)
            h6.text-white.text-left  Medio Riesgo = 10-12 (Naranja) 
            h6.text-white.text-left  Alto Riesgo = 13– 16 (Rojo)
    h6.text-center.mt-5 Criterios para la medición del Riesgo
    .row
      .col-8.offset-2
        .tabla-a.my-3
        table.border-table(style='width:100%;table-layout: auto;')
          thead
            
          tbody  
            tr
              th
                p.text-center ALTA
              th 
                p En el corto plazo desmoviliza o desarticula a la organización.
            tr
              th
                p.text-center MEDIA
              th 
                p Provoca la desarticulación de un componente de la organización. Si no se atiende a tiempo, a largo plazo puede provocar la desarticulación de la organización.
            tr
              th
                p.text-center BAJA
              th 
                p Causa daño aislado, que no perjudica a ningún componente de la organización.
    p.mt-5 A continuación, se presenta a manera de ejemplo como sería el proceso general de la valuación del riesgo.
    h6.text-center.mt-5 Ejemplo Valuación del Riesgo
    .row
      .col-12
        .tabla-a.my-2
        table.border-table(style='width:100%;table-layout: auto;')
          thead
            tr
              th(colspan="7") ANÁLISIS DE RIESGOS
            tr 
              th(colspan="2") IMPACTO
              th(colspan="3")
              th(colspan="2") PROBABILIDAD DE AMENAZA (alto=4, Medio=3, Bajo=2)
            tr 
              th(colspan="2")
              th(colspan="1") HUMANA
              th(colspan="4") ENTORNO
            tr 
              th
              th(colspan="1") ESCALA PARA IMPACTO (Alto=4, Medio=3, Bajo=2)
              th Amenaza humana
              th Amenaza de entorno
              th Control de humedad (Cuarto de telecomunicaciones)
              th Polución (cuarto de telecomunicaciones)
              th Falta de cumplimiento de la normatividad de cableado estructurado (Armario)
          tbody
            tr
              td
              td
              th 4 
              th 3
              th 3
              th 3
              th 4
            tr
              th Servidor
              th 4
              td.bg-rojo
                p.text-white.text-center 16
              td.bg-naranja 12
              td.bg-naranja 12
              td.bg-naranja 12
              td.bg-rojo
                p.text-white.text-center 16
            tr
              th Estaciones de trabajo
              th 3
              td.bg-naranja 12
              td.bg-verde 
                p.text-white.text-center 9
              td.bg-verde 
                p.text-white.text-center 9
              td.bg-verde 
                p.text-white.text-center 9
              td.bg-naranja 12
            tr
              th Impresora
              th 4
              td.bg-rojo
                p.text-white.text-center 16
              td.bg-naranja 12
              td.bg-naranja 12
              td.bg-naranja 12
              td.bg-rojo
                p.text-white.text-center 16
            tr
              th 
              th 4
              td.bg-rojo
                p.text-white.text-center 16
              td.bg-naranja 12
              td.bg-naranja 12
              td.bg-naranja 12
              td.bg-rojo
                p.text-white.text-center 16
            tr
              th Rack
              th 4
              td.bg-rojo
                p.text-white.text-center 16
              td.bg-naranja 12
              td.bg-naranja 12
              td.bg-naranja 12
              td.bg-rojo
                p.text-white.text-center 16
    .h5.mt-5 2.5.6 Recomendaciones de Controles
    .row.mt-3
      .col-12.col-md-8
        p Como la revisión de las políticas de seguridad, actualización de antivirus, cambio periódico de contraseñas, instalación de firewalls o sanciones en caso de incumplimiento de la normativa vigente.
        p.mt4 Los controles pueden ser preventivos, correctivos o detectivos los cuales deben responder a las necesidades de mitigación a los riesgos identificados.
        p.mt-4 Una vez calculado el riesgo, debemos tratar aquellos riesgos que superen un límite que nosotros mismos hayamos establecido. Por ejemplo, trataremos aquellos riesgos cuyo valor sea igual o superior a “16” o superior a “Medio” en caso de que hayamos hecho el cálculo en términos cualitativos. A la hora de tratar el riesgo, existen cuatro estrategias principales:
      .col-4.d-none.d-md-flex
        img(src='@/assets/template/tema-2-22.svg', alt='').w-75
    .row.mt-5
      .col-12
        .row.py-2
          .col-2.col-lg-1.offset-1.align-self-center.justify-content-center
            img(src='@/assets/template/tema-2-23.svg', alt='', style='margin-right: -100px').w-100
          .col-8.py-3.border-y
            .col-sm.mb-5.mb-sm-0.mt-2.mx-5
              .h5 Transferir el riesgo a un tercero
              p.mt-3 Por ejemplo, contratando un seguro que cubra los daños a terceros ocasionados por fugas de información.
    .row.mt-2
      .col-12
        .row.py-2
          .col-2.col-lg-1.offset-1.align-self-center.justify-content-center
            img(src='@/assets/template/tema-2-24.svg', alt='', style='margin-right: -100px').w-100
          .col-8.py-3.border-y
            .col-sm.mb-5.mb-sm-0.mt-2.mx-5
              .h5 Eliminar el riesgo
              p.mt-3  Por ejemplo, eliminando un proceso o sistema que está sujeto a un riesgo elevado. En el caso práctico que hemos expuesto, podríamos eliminar la wifi de cortesía para dar servicio a los clientes si no es estrictamente necesario.   
    .row.mt-2
      .col-12
        .row.py-2
          .col-2.col-lg-1.offset-1.align-self-center.justify-content-center
            img(src='@/assets/template/tema-2-25.svg', alt='', style='margin-right: -100px').w-100
          .col-8.py-3.border-y
            .col-sm.mb-5.mb-sm-0.mt-2.mx-5
              .h5 Asumir el riesgo
              p.mt-3 Siempre justificadamente. Por ejemplo, el coste de instalar un grupo electrógeno puede ser demasiado alto y por tanto, la organización puede optar por asumir.
    .row.mt-2
      .col-12
        .row.py-2
          .col-2.col-lg-1.offset-1.align-self-center.justify-content-center
            img(src='@/assets/template/tema-2-26.svg', alt='', style='margin-right: -100px').w-100
          .col-8.py-3.border-y
            .col-sm.mb-5.mb-sm-0.mt-2.mx-5
              .h5 Implantar medidas para mitigarlo
              p.mt-3 Por ejemplo, contratando un acceso a internet de respaldo para poder acceder a los servicios en la nube en caso de que la línea principal haya caído.
    .h5.mt-5 2.5.7 Documentación de resultados
    p.my-3 En esta fase realizamos el informe correspondiente a la valoración de riesgos que incluye la valuación, el plan de tratamiento de riesgos incluyendo los controles a implementar.

</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema2',
  components: {
    BannerInterno,
  },
}
</script>

<style lang="sass" scoped>
table
  background-color: #EDF2F8
.border-table
  border: solid 1px
  tr, th, td
    border: solid 1px
    text-align: center
  p
    text-align: left
  thead
    border: none
.border-y
  border-top: solid 1px #437795
  border-bottom: solid 1px #437795
.border-y-morado
  border-top: solid 2px $color-curso-c
  border-bottom: solid 2px $color-curso-c
.border-top
  border-top: solid 1px #437795 !important
.border-top-gris
  border-top: solid 2px #C9C9C9 !important
.borde-y-punteado
  border-top: solid
  border-top: dotted
  border-color: #8E8E8E
.border-morado
  border: solid 4px $color-curso-c
  border-radius: 30px
.bg-amarillo-claro
  background-color: #FFFCF5
.bg-gris
  background-color: #D9E4EA
.bg-verde
  background-color: #00B050
.bg-rojo
  background-color: #FF3F3F
.bg-naranja
  background-color: #FFC269
.rounded
  border-radius: 20px !important
.color-white
  color: $white
.font-normal
  font-weight: normal !important
ul li::marker
  color: red
.text-align-right
  text-align: right
</style>
