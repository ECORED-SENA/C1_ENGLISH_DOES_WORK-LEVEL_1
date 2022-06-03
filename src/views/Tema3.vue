<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.text-white
        span 3
      h1 Greetings and farewells
    p.mb-5(data-aos='fade-right') El primer paso que se da en una conversación es saludar, por ende, inicialmente, para comunicarse en inglés, es importante aprender los diferentes tipos de saludos (greetings) y determinar bajo qué contextos pueden utilizarse: 
    .row.justify-content-center.mb-5
      .col-lg-6.mb-3.mb-lg-0
        .tarjeta.color-secundario.p-5
          .d-flex.justify-content-center
            .texts
              h2.fst-italic.mb-1 Formal Greetings
              p Saludos informales
          .tarjeta.bg-white.p-5.tarjeta-reproductor--izquierda
            .tarjeta-reproductor--izquierda__img
              img(src='@/assets/curso/temas/17.png')
            .row.justify-content-end.t-s
              .col-7
                img(src='@/assets/curso/temas/ejemplo4.svg').mb-3
                p.mb-5 Hola!
                img(src='@/assets/curso/temas/ejemplo4.svg').mb-3
                p.mb-5 Buenos días
      .col-lg-6
        .tarjeta.color-acento-botones.p-5
          .d-flex.justify-content-start
            .texts
              h2.fst-italic.mb-1
                span.r-3 Informal greetings
              p Saludos informales
          .tarjeta.bg-white.p-5.tarjeta-reproductor--izquierda
            .tarjeta-reproductor--derecha__img
              img(src='@/assets/curso/temas/18.png')
            .row.justify-content-start
              .col-7
                img(src='@/assets/curso/temas/ejemplo4.svg').mb-3
                p.mb-5 Hola!
                img(src='@/assets/curso/temas/ejemplo4.svg').mb-3
                p.mb-5 ¡Hola!
    p.mb-5(data-aos='fade-left') Y el último paso en una conversación es despedirse (farewells). Repase a continuación los diferentes tipos de despedidas: 
    .row.justify-content-center.mb-5
      .col-lg-6.mb-3.mb-lg-0
        .tarjeta.color-acento-contenido.p-5
          .d-flex.justify-content-center
            .texts
              h2.fst-italic.mb-1.text-white Formal farewells 
              p Despedidas formales
          .tarjeta.bg-white.p-5.tarjeta-reproductor--izquierda
            .tarjeta-reproductor--izquierda__img
              img(src='@/assets/curso/temas/19.svg')
            .row.justify-content-end
              .col-7
                img(src='@/assets/curso/temas/ejemplo4.svg').mb-3
                p.mb-5 Adiós
                img(src='@/assets/curso/temas/ejemplo4.svg').mb-3
                p.mb-5 Adiós
      .col-lg-6
        .tarjeta.color-secundario.p-5
          .d-flex.justify-content-start
            .texts
              h2.fst-italic.mb-1
                span.r-3 Informal farewells
              p Despedidas informales
          .tarjeta.bg-white.p-5.tarjeta-reproductor--izquierda
            .tarjeta-reproductor--derecha__img
              img(src='@/assets/curso/temas/20.svg')
            .row.justify-content-start.t-s
              .col-7
                img(src='@/assets/curso/temas/ejemplo4.svg').mb-3
                p.mb-5 ¡Chao!
                img(src='@/assets/curso/temas/ejemplo4.svg').mb-3
                p.mb-5 ¡Nos vemos! 
    .titulo-sexto.color-acento-contenido
      h5 Tabla 5
      span Recordatorio 
    .row.justify-content-center.align-items-end
      .col-lg-4.col-8(data-aos='fade-right').mb-3.mb-lg-0
        img(src='@/assets/curso/temas/21.png', alt='Texto que describa la imagen')
        .tarjeta.color-secundario.rounded-0.p-3
          p.mb-0.text-center Para recordar: 
      .col-lg-4(data-aos='fade-left')
        p Las expresiones 
          span.r-3.fst-italic good night 
          | y 
          span.r-3.fst-italic good evening 
          | significan lo mismo: buenas<b> noches</b>. 
          br
          br
          |Pero se debe tener en cuenta que 
          span.r-3.fst-italic good night 
          | <b>suele usarse como una despedida</b>, antes de ir a casa o antes de ir a dormir. 
          br
          br
          |En cambio, 
          span.r-3.fst-italic good evening 
          | <b>suele usarse como un saludo</b>, cuando se llega a un lugar o para darle la bienvenida a alguien.
    p.mb-5.fw-bold Por ejemplo:     
    .row.justify-content-center.mb-5
      .col-lg-6.mb-3.mb-lg-0
        .tarjeta.bg--3-claro.px-4.py-2
          .row.justify-content-center.align-items-center.g-0
            .col-lg-6.col-8
              img(src='@/assets/curso/temas/22.svg')  
            .col-lg-6
              .tabla-editada2.color-acento-botones.mb-3.mb-lg-0
                table.w-100
                  thead.bg-contenido-claro
                    tr
                      th(colspan='2') 
                      th(colspan='12')
                  tbody.bg-white
                    tr
                      td(colspan='1')
                        img(src='@/assets/curso/temas/1.svg', alt='Texto que describa la imagen' style='width: 20px').m-auto
                      td(colspan='12')
                        span.r-3.fst-italic Good evening = Hello
                    tr
                      br
                    tr
                      td(colspan='1')
                        img(src='@/assets/curso/temas/1.svg', alt='Texto que describa la imagen' style='width: 20px').m-auto
                      td(colspan='12')
                        span.r-3.fst-italic Good evening. May I help you?

                    tr
                      td(colspan='1')
                        img(src='@/assets/curso/temas/2.svg', alt='Texto que describa la imagen' style='width: 20px').m-auto
                      td(colspan='12') 
                        p.mb-0 Buenas noches. ¿Puedo ayudarle?
                    tr
                      td(colspan='1')
                        img(src='@/assets/curso/temas/1.svg', alt='Texto que describa la imagen' style='width: 20px').m-auto
                      td(colspan='12')
                        span.r-3.fst-italic Good evening. My name is Andrea. Nice to meet you.
                    tr
                      td(colspan='1')
                        img(src='@/assets/curso/temas/2.svg', alt='Texto que describa la imagen' style='width: 20px').m-auto
                      td(colspan='12') 
                        p.mb-0 Buenas noches. Mi nombre es Andrea. Un placer conocerte.
      .col-lg-6
        .tarjeta.bg--3-claro.px-4.py-2.h-100
          .row.justify-content-center.align-items-center.g-0
            .col-lg-6.col-8
              img(src='@/assets/curso/temas/23.svg')  
            .col-lg-6
              .tabla-editada2.color-acento-botones.mb-3.mb-lg-0
                table.w-100
                  thead.bg-contenido-claro
                    tr
                      th(colspan='2') 
                      th(colspan='12')
                  tbody.bg-white
                    tr
                      td(colspan='1')
                        img(src='@/assets/curso/temas/1.svg', alt='Texto que describa la imagen' style='width: 20px').m-auto
                      td(colspan='12')
                        span.r-3.fst-italic Good night = Goodbye
                    tr
                      br
                    tr
                      td(colspan='1')
                        img(src='@/assets/curso/temas/1.svg', alt='Texto que describa la imagen' style='width: 20px').m-auto
                      td(colspan='12')
                        span.r-3.fst-italic Good night. Thanks for everything.

                    tr
                      td(colspan='1')
                        img(src='@/assets/curso/temas/2.svg', alt='Texto que describa la imagen' style='width: 20px').m-auto
                      td(colspan='12') 
                        p.mb-0 Buenas noches. Gracias por todo.
                    tr
                      td(colspan='1')
                        img(src='@/assets/curso/temas/1.svg', alt='Texto que describa la imagen' style='width: 20px').m-auto
                      td(colspan='12')
                        span.r-3.fst-italic I’m going to bed. Good night.
                    tr
                      td(colspan='1')
                        img(src='@/assets/curso/temas/2.svg', alt='Texto que describa la imagen' style='width: 20px').m-auto
                      td(colspan='12') 
                        p.mb-0 Me voy a dormir. Buenas noches.
    p.mb-5(data-aos='fade-left') Otra de las expresiones informales que puede usar en ocasiones en el discurso cotidiano desde el inglés americano es 
      span.r-3.fst-italic “got to” 
      | y que suele acortarse como 
      span.r-3.fst-italic “gotta”:
    .franja
      .content
        .row.justify-content-center.align-items-center
          .col-lg-4.order-lg-1.order-1.mb-3.mb-lg-0
            p.mb-0.text-lg-start.text-center 
              span.r-3.fst-italic I'm sorry, I've got to go. / I'm sorry, I've gotta go.
              br 
              | Lo siento, tengo que irme.
          .col-lg-4.col-8.order-lg-2.order-3: img(src='@/assets/curso/temas/24.svg')
          .col-lg-4.order-lg-3.order-2.mb-3.mb-lg-0
            p.mb-0.text-lg-start.text-center 
              span.r-3.fst-italic Thank you all again, and goodbye. I've got to go
              br 
              | Gracias a todos de nuevo, y adiós. Me tengo que ir.








</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.tarjeta-reproductor
  &--izquierda
    position: relative
    &__img
      position: absolute
      height: 100%
      left: 0
      bottom: 0
      transform: translateX(-20%) translateY(-10%)
  &--derecha
    position: relative
    &__img
      position: absolute
      height: 100%
      right: 0
      bottom: 0
      transform: translateX(20%) translateY(-10%)
.franja
  position: relative

  &:before
    content: ''
    position: absolute
    bottom: 0%
    left: 0
    width: 100%
    height: 35%
    background-color: #ffd947
    z-index: 0
  .content
    position: inherit
</style>
