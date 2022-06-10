<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white
          i.fas.fa-info
      h1 Introducción
    p.mb-5 Bienvenido al componente formativo 
      span.fw-bold Hello! It’s nice to meet you. / ¡Hola! Encantado de conocerte. 
      | En el siguiente video, conocerá la temática que estudiará a lo largo del componente. 
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>

<script>
export default {
  name: 'Introduccion',
  components: {},
  data: () => ({}),
}
</script>

<style lang="sass"></style>
