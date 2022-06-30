<template lang="pug">
.banner-principal
  .container.tarjeta.position-relative(
    :style="{'background-image': globalData.fondoBannerPrincipal ? `url(${globalData.fondoBannerPrincipal})` : 'none'}"
  )
    .row.banner-principal__row.position-relative.justify-content-center.align-items-center
      .col-lg-7.col-xxl-5.py-4.py-sm-5.banner-principal__info.px-3
        .banner-principal__componente
          h1.mb-0.mt-5(v-html="globalData.componenteFormativoENG")
          h1.mb-0.text-white(v-html="globalData.componenteFormativo")
        .col-lg-12
          .banner-principal__descripcion
            p.mb-0(v-html="globalData.descripcionCurso")
        .banner-principal__accion
          router-link.boton(:to="{name: iniciarLnk.nombreRuta }")
            span.me-1 Ver más
            i.fas.fa-angle-right

      .d-none.d-lg-block.col-lg-5.px-0.banner-principal__img
        img(:src="globalData.imagenBannerPrincipal")
    .imagen_flotante_1.d-none.d-lg-block: img(src="@/assets/curso/portada/float1.svg")
    .imagen_flotante_2.d-none.d-lg-block: img(src="@/assets/curso/portada/float2.svg")
    .imagen_flotante_3.d-none.d-lg-block: img(src="@/assets/curso/portada/float3.svg")
    .imagen_flotante_4.d-none.d-lg-block: img(src="@/assets/curso/portada/flag.svg")
    //- .imagen_flotante_4.d-none.d-lg-block: img(src="@/assets/curso/portada/float4.png")
    //- .imagen_flotante_5.d-none.d-lg-block: img(src="@/assets/curso/portada/float5.png")
    //- .imagen_flotante_6.d-none.d-lg-block: img(src="@/assets/curso/portada/float6.png")
    //- .imagen_flotante_7.d-none.d-lg-block: img(src="@/assets/curso/portada/float7.png")
    //- //- .imagen_flotante_9: img(src="@/assets/curso/portada/float9.png")
  

</template>

<script>
import mixins from '../components/plantillaMixins'
export default {
  name: 'BannerPrincipal',
  mixins: [mixins],
  computed: {
    globalData() {
      return this.$config.global
    },
  },
}
</script>

<style lang="sass">
.fondo-contenido
  position: absolute
  padding: 0px
  z-index: 2
  height: 100%
  width: 100%
.banner-principal__info
  z-index: 3


.banner-principal
  p, h1, h2, h3, h4, h5, h6
    color: $color-banner-text

  .tarjeta
    background-color: $color-banner-fondo
    background-size: cover
    background-position: 50%

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

  &__row
    @if $banner-principal-img-x == 'derecha'
      justify-content: space-between
    @else
      justify-content: space-around
      .banner-principal__img
        padding-right: 1.5rem!important
      @media (min-width: $bp-min-sm)
        .banner-principal__img
          padding-right: 3rem!important

  &__img
    animation: scale 10s ease-in-out infinite alternate
    width: 40%
    @if $banner-principal-img-y == 'arriba'
      align-self: flex-start
      padding-bottom: 1.5rem
      @media (min-width: $bp-min-sm)
        padding-bottom: 3rem!important
    @else if $banner-principal-img-y == 'abajo'
      align-self: flex-end
      padding-top: 1.5rem
      @media (min-width: $bp-min-sm)
        padding-top: 3rem!important
    @else
      align-self: center
      padding-top: 1.5rem
      padding-bottom: 1.5rem
      @media (min-width: $bp-min-sm)
        padding-top: 3rem!important
        padding-bottom: 3rem!important


.imagen_flotante
  &_1
    animation: move 3s ease-in-out infinite alternate
    position: absolute
    width: 69px
    top: 10%
    left: 65%
  &_2
    animation: float1 3.5s ease-in-out infinite alternate, scale 3s ease-in-out infinite alternate
    position: absolute
    width: 33,55px
    top: 45%
    box-shadow:
    left: 60%
  &_3
    animation: float1 3.8s ease-in-out infinite alternate
    position: absolute
    width: 120px
    top: 7%
    left: 79%
  &_4
    // animation: float1 4s ease-in-out infinite alternate
    position: absolute
    width: 72,94px
    top: 12%
    left: 10%
    z-index: 99
  &_5
    animation: float2 3.9s ease-in-out infinite alternate
    position: absolute
    width: 69px
    bottom: 26%
    right: 13%
    z-index: 99
  &_6
    animation: float2 2.7s ease-in-out infinite alternate
    position: absolute
    width: 74,74px
    bottom: 2%
    right: 30%
    z-index: 99
  &_7
    animation: float1 2.5s ease-in-out infinite alternate
    position: absolute
    width: 56px
    bottom: 7%
    right: 10%
    z-index: 99
  &_8

    animation: float1 3s ease-in-out infinite alternate
    position: absolute
    width: 350px
    bottom: 5%
    right: 13%
    z-index: 99
    @media  (max-width: $bp-max-lg)
      display: none



@keyframes float1
  0%
    transform: translateY(20px)

  100%
    transform: translateY(0px)
@keyframes float2
  0%
    transform: translateX(20px)

  100%
    transform: translateX(0px)
@keyframes scale
  0%
    transform: scale(1.1)

  100%
    transform: scale(1)
@keyframes move
  0%
    transform: translate(0%, 0%) rotate(0deg)

  100%
    transform: translate(80%, -30%) rotate(30deg)


@media (max-width: $bp-max-md)
  .fondo-contenido
    display: none
  .fondo-contenido2
    background-repeat: no-repeat
    background-size: cover
.banner-principal .tarjeta
  background-size: 100% 100%
</style>
