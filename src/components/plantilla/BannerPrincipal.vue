<template lang="pug">
.banner-principal
  .container.tarjeta.p-4.ps-sm-5.pe-sm-5.pt-sm-5.pb-0(
    :style="{'background-image': `url(${globalData.fondoBannerPrincipal})`}"
  )
    .row.justify-content-around
      .col-lg-7.col-xxl-5.banner-principal__info.pb-4.pb-sm-5
        .banner-principal__programa
          span.text-small.insignia.me-2 Programa
          p.text-small.mb-0 {{globalData.programaFormacion}}
        .banner-principal__componente
          h1.mb-0 {{globalData.componenteFormativo}}
        .banner-principal__descripcion
          p.mb-0 {{globalData.descripcionCurso}}
        .banner-principal__accion
          router-link.boton(:to="{name: iniciarLnk.nombreRuta }")
            span.me-1 Iniciar
            i(class="fas fa-angle-right")

      .d-none.d-lg-block.col-lg-5.align-self-end.pl-5.centrar
        img(:src="globalData.imagenBannerPrincipal").w-75
  .container.tarjeta.mt-5.ps-sm-5(
    :style="{'background-image': `url(${globalData.fondoBannerSubPrincipal})`}"
  )
    .row.p-3.p-xl-4
      .col-2.d-none.d-lg-block.pl-4
        img(:src="globalData.imagenBannerSubPrincipal").img-11.position-absolute.d-none.d-xl-flex
        img(:src="globalData.imagenBannerSubPrincipal").img-14.position-absolute.d-lg-flex.d-xl-none
      .col-8.col-md-4.align-self-center
        h3.mb-0.text-white ¿Todo listo para iniciar?
      .col-4.align-self-center.d-none.d-md-block
        p Es momento de empezar tu proceso académico, descubre y explora todas las habilidades cognitivas en este nuevo curso.
      .col-2.d-lg-block.pl-4.align-self-center.boton-derecha
        .banner-principal__accion
          router-link.boton(:to="{name: iniciarLnk.nombreRuta }")
            span.me-1 Iniciar
            i(class="fas fa-angle-right")

</template>

<script>
import { global } from '../../config/global'
import mixins from '../../mixins/plantillaMixins'
export default {
  name: 'BannerPrincipal',
  mixins: [mixins],
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass" scoped>
.banner-principal
  p, h1
    color: $white

  .tarjeta
    background-color: $color-curso-a
    background-size: cover
    background-position: center


  &__info
    display: flex
    flex-direction: column
    justify-content: center

  &__programa
    display: flex
    align-items: center
    margin-bottom: 20px

  &__componente
    margin-bottom: 20px
    h1
      line-height: 1.1em

      @media (max-width: $bp-max-xs)
        font-size: 2em

  &__descripcion
    margin-bottom: 20px
.img-11
  width: 11%
  margin-top: -34px
.img-14
  width: 14%
  margin-top: -23px
.boton-derecha
  text-align: right
.centrar
  text-align: -webkit-center
</style>
