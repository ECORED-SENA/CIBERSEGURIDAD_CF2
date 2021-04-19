<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        .h3
          i.fas.fa-info
      .h3 Introducción
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    p Identificar cuál es la metodología Análisis de riesgos que brinda una mejor oportunidad en la toma de decisiones dentro de una organización se ha convierte en uno de los activos más importantes y su uso es necesario para garantizar la seguridad. Existen varias metodologías para el análisis de riesgos como: OCTAVE, MEHARI, MAGERIT y CORAS las cuales están orientadas hacia un mismo objetivo y tienen características que las hacen atractivas en las organizaciones. Se ha determinado que un análisis de riesgos es efectivo y completo porque protege la información en cuanto a integridad, confidencialidad, disponibilidad y otras características importantes para garantizar la seguridad del sistemas y procesos de la organización.
    p.mt-4 La aplicación de metodologías de análisis de riesgos ayudará a las organizaciones a tener un mayor control sobre sus activos, su valor y las amenazas que puedan afectarlos, obligándolas a seleccionar medidas de seguridad para asegurar el éxito de sus procesos y una mayor competitividad en el mundo empresarial.

</template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'
export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
  },
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
