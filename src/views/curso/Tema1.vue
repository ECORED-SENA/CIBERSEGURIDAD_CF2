<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        .h3
          i.title-num 1
      .h3 Características de las metodologías de análisis y valuación de riesgos
    .row
      .col-12.col-lg-7.align-self-center
        p.mt-3 El análisis de riesgos informáticos es un proceso que comprende la identificación de activos informáticos, sus vulnerabilidades y amenazas a los que se encuentran expuestos, así como su probabilidad de ocurrencia y el impacto de las mismas, a fin de determinar los controles adecuados para aceptar, disminuir, transferir o evitar la ocurrencia del riesgo.
        p.mt-3 El análisis de riesgos es el primer punto de la gestión de la seguridad de la información de una organización, y es necesario para realizar la gestión de los riesgos, es decir, tomar la decisión de eliminarlos, ignorarlos, transferirlos o mitigarlos y controlarlos, es decir realizar la gestión de riesgos.
        p.mt-3 Por esta razón se hace imprescindible la utilización o adopción de una metodología que le permita al personal de tecnología realizar el proceso de una manera más ordenada, especializada y ajustada a las necesidades propias de cada organización.
      .col-5.d-none.d-lg-block.mt-3
        .imagen-titulo--izq
          figure.mb-5
            img(src='@/assets/template/tema-1-1.svg', alt='Texto que describa la imagen')

          .imagen-titulo__titulo
            .h4.m-0.text-white Análisis y valuación
    .titulo-segundo.mt-5
      #t_1_1.h4 1.1 Objetivos de las metodologías de análisis y valuación de activos 
    p Tanto en las metodologías acá estudiadas como la que se desarrollará el ejemplo tienen por objetivo los siguientes puntos:
    .row.mt-5
      .tarjeta--container.row.mb-5
        .col-12.col-md-6.col-xl-3.tarjeta.tarjeta--morada.p-5.borde-blanco(style="background: linear-gradient(70deg, #9B235C, #531331);")
          .row.justify-content-center.mb-4
            .col-5.col-md-6.col-xl-8
              figure
                img(src='@/assets/template/tema-1-2.svg', alt='').w-75
            
          p.text-center Planificación de la reducción de riesgos

        .col-12.col-md-6.col-xl-3.tarjeta.tarjeta--amarilla.p-5.borde-blanco(style="background: linear-gradient(70deg, #657D89, #333F45);")
          .row.justify-content-center.mb-4
            .col-5.col-md-6.col-xl-8
              figure
                img(src='@/assets/template/tema-1-3.svg', alt='').w-75
            
          p.text-white.text-center  Planificación de la prevención de accidentes
          
        .col-12.col-md-6.col-xl-3.tarjeta.tarjeta--roja.p-5.borde-blanco(style="background: linear-gradient(70deg, #437795, #223C4B);")
          .row.justify-content-center.mb-4
            .col-5.col-md-6.col-xl-8
              figure
                img(src='@/assets/template/tema-1-4.svg', alt='').w-75
            
          p.text-center  Visualización y detección de las debilidades existentes en los sistemas.

        .col-12.col-md-6.col-xl-3.tarjeta.tarjeta--roja.p-5.borde-blanco(style="background: linear-gradient(70deg, #FFC23B, #80611E);")
          .row.justify-content-center.mb-4
            .col-5.col-md-6.col-xl-8
              figure
                img(src='@/assets/template/tema-1-5.svg', alt='').w-75
            
          p.text-center Ayuda en la toma de las mejores decisiones en materia de seguridad de la información.
    .titulo-segundo.mt-5
      #t_1_2.h4 1.2 ¿Qué es el análisis de riesgos? 
    .row
      .col-10.offset-0
        .row.tarjeta--gris.p-4.rounded
          .col-12.col-lg-11.align-self-center
            p.mt-3 Es la consideración sistemática del daño probable que puede causar en el negocio un fallo en la seguridad de la información con las consecuencias potenciales de pérdida de confidencialidad, integridad y la disponibilidad de la información.
            p.mt-3 A continuación, se mencionan algunas de las metodologías más comunes o de mayor utilización en el mundo para este propósito.
          .col-1.d-none.d-lg-flex
            img(src='@/assets/template/tema-1-6.svg', alt='', style="margin-top: -60px").img-17.position-absolute
</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema1',
  components: {
    BannerInterno,
  },
}
</script>

<style lang="sass" scoped></style>
