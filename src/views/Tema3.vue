<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.text-white
        span 3
      h1 Greetings and farewells
    p.mb-5(data-aos='fade-right') El primer paso que se da en una conversación es saludar, por ende, inicialmente, para comunicarse en inglés, es importante aprender los diferentes tipos de saludos (<em>greetings</em>) y determinar bajo qué contextos pueden utilizarse: 
    .row.justify-content-center.mb-5
      .col-xl-6.mb-3.mb-xl-0
        .tarjeta.color-secundario.p-5
          .d-flex.justify-content-center
            .texts
              h2.fst-italic.mb-1 Formal Greetings
              p Saludos informales
          .tarjeta.bg-white.p-5.tarjeta-reproductor--izquierda.h-100
            .row.justify-content-end.t-s
              .col-12
                SlyderE(indicadores="derecha")
                  div.ps-2
                    TarjetaAudio.color-acento-contenido.mb-3.text-start.text-small(
                      texto="Hello!"
                      :audio="require('@/assets/audio/52.mp3')"
                      )
                    p.ms-3 ¡Hola!
                    TarjetaAudio.color-acento-contenido.mb-3.text-start.text-small(
                      texto="Good morning"
                      :audio="require('@/assets/audio/53.mp3')"
                      )
                    p.ms-3 Buenas dias
                  div.ps-2
                    TarjetaAudio.color-acento-contenido.mb-3.text-start.text-small(
                      texto="Good afternoon"
                      :audio="require('@/assets/audio/54.mp3')"
                      )
                    p.ms-3 Buenas tardes
                    TarjetaAudio.color-acento-contenido.mb-3.text-start.text-small(
                      texto="Good evening"
                      :audio="require('@/assets/audio/55.mp3')"
                      )
                    p.ms-3 Buenas noches
                  div.ps-2
                    TarjetaAudio.color-acento-contenido.mb-3.text-start.text-small(
                      texto="It’s an honor to meet you"
                      :audio="require('@/assets/audio/56.mp3')"
                      )
                    p.ms-3 Es un honor conocerlo/
                      br
                      |Es un honor conocerte
                    TarjetaAudio.color-acento-contenido.mb-3.text-start.text-small(
                      texto="How do you do?"
                      :audio="require('@/assets/audio/57.mp3')"
                      )
                    p.ms-3 ¿Cómo le va? / 
                      br
                      |¿Cómo te va?
                  div.ps-2
                    TarjetaAudio.color-acento-contenido.mb-3.text-start.text-small(
                      texto="How are you doing?"
                      :audio="require('@/assets/audio/58.mp3')"
                      )
                    p.ms-3 ¿Cómo le está yendo?
                      br
                      |¿Cómo te está yendo?
                    TarjetaAudio.color-acento-contenido.mb-3.text-start.text-small(
                      texto="Nice to meet you"
                      :audio="require('@/assets/audio/59.mp3')"
                      )
                    p.ms-3 Gusto en conocerlo
                  div.ps-2
                    TarjetaAudio.color-acento-contenido.mb-3.text-start.text-small(
                      texto="It’s nice to meet you"
                      :audio="require('@/assets/audio/60.mp3')"
                      )
                    p.ms-3 Encantado de conocerlo
                      br
                      |Encantado de conocerte
                    TarjetaAudio.color-acento-contenido.mb-3.text-start.text-small(
                      texto="What are you doing?"
                      :audio="require('@/assets/audio/61.mp3')"
                      )
                    p.ms-3 ¿Qué está haciendo?
                      br
                      |¿Qué estás haciendo?
                  div.ps-2
                    TarjetaAudio.color-acento-contenido.mb-3.text-start.text-small(
                      texto="Good to see you"
                      :audio="require('@/assets/audio/62.mp3')"
                      )
                    p.ms-3 Qué bueno verlo
                      br
                      |Qué bueno verte
                    TarjetaAudio.color-acento-contenido.mb-3.text-start.text-small(
                      texto="How are you?"
                      :audio="require('@/assets/audio/63.mp3')"
                      )
                    p.ms-3 ¿Cómo está?
                      br
                      |¿Cómo estás?
      .col-xl-6.mb-3.mb-xl-0
        .tarjeta.color-acento-botones.p-5
          .d-flex.justify-content-start
            .texts
              h2.fst-italic.mb-1
                span.r-3 Informal greetings
              p Saludos informales
          .tarjeta.bg-white.p-5.tarjeta-reproductor--izquierda
            .tarjeta-reproductor--derecha__img
              img(src='@/assets/curso/temas/18.png' style='width: 90% ; transform: translateX(10%)')
            .row.justify-content-start
              .col-8
                SlyderE(indicadores="derecha").pe-3
                  div
                    TarjetaAudio.color-acento-contenido.mb-3.text-start.text-small(
                      texto="Hi! "
                      :audio="require('@/assets/audio/64.mp3')"
                      )
                    p.ms-3 ¡Hola!
                    TarjetaAudio.color-acento-contenido.mb-3.text-start.text-small(
                      texto="Howdy!"
                      :audio="require('@/assets/audio/65.mp3')"
                      ) 
                    p.ms-3 ¡Hola!
                  div
                    TarjetaAudio.color-acento-contenido.mb-3.text-start.text-small(
                      texto="What’s up?"
                      :audio="require('@/assets/audio/66.mp3')"
                      )
                    p.ms-3 ¿Qué pasa?
                      br
                      |¿Qué más?
                    TarjetaAudio.color-acento-contenido.mb-3.text-start.text-small(
                      texto="What’s going on?"
                      :audio="require('@/assets/audio/67.mp3')"
                      )
                    p.ms-3 ¿Qué está sucediendo?
                      br
                      |¿Qué pasa?
                      br
                      |¿Qué ha pasado?
                  div
                    TarjetaAudio.color-acento-contenido.mb-3.text-start.text-small(
                      texto="How are you?"
                      :audio="require('@/assets/audio/68.mp3')"
                      )
                    p.ms-3 ¿Cómo estás?
                    TarjetaAudio.color-acento-contenido.mb-3.text-start.text-small(
                      texto="What’s new?"
                      :audio="require('@/assets/audio/69.mp3')"
                      )
                    p.ms-3 ¿Qué hay de nuevo? 
                  div
                    TarjetaAudio.color-acento-contenido.mb-3.text-start.text-small(
                      texto="Long time no see!"
                      :audio="require('@/assets/audio/70.mp3')"
                      )
                    p.ms-3 ¡Mucho tiempo sin verte!
                    TarjetaAudio.color-acento-contenido.mb-3.text-start.text-small(
                      texto="How’s life?"
                      :audio="require('@/assets/audio/71.mp3')"
                      )
                    p.ms-3 ¿Qué tal tu vida?
                  div
                    TarjetaAudio.color-acento-contenido.mb-3.text-start.text-small(
                      texto="How is everything?"
                      :audio="require('@/assets/audio/72.mp3')"
                      )
                    p.ms-3 ¿Cómo está todo?
                      br
                      |¿Qué tal todo?
                    TarjetaAudio.color-acento-contenido.mb-3.text-start.text-small(
                      texto="Hey! (Interjections)"
                      :audio="require('@/assets/audio/73.mp3')"
                      )
                    p.ms-3 Ey! (Interjección)
                  div
                    TarjetaAudio.color-acento-contenido.mb-3.text-start.text-small(
                      texto="How are things?"
                      :audio="require('@/assets/audio/74.mp3')"
                      )
                    p.ms-3 ¿Cómo están las cosas?.
    p.mb-5(data-aos='fade-left') Y el último paso en una conversación es despedirse (<em>farewells</em>). Repase a continuación los diferentes tipos de despedidas: 
    .row.justify-content-center.mb-5
      .col-xl-6.mb-3.mb-lg-0
        .tarjeta.color-acento-contenido.p-5.mb-3.mb-xl-0
          .d-flex.justify-content-center
            .texts
              h2.fst-italic.mb-1.text-white Formal farewells 
              p Despedidas formales
          .tarjeta.bg-white.p-5.tarjeta-reproductor--izquierda
            .tarjeta-reproductor--izquierda__img
              img(src='@/assets/curso/temas/19.svg' style='width: 250px;')
            .row.justify-content-end
              .col-8
                SlyderE(indicadores="derecha")
                  div.ps-2
                    TarjetaAudio.color-acento-contenido.mb-3.text-start.text-small(
                      texto="Goodbye"
                      :audio="require('@/assets/audio/75.mp3')"
                      )
                    p.ms-3 Adiós
                    TarjetaAudio.color-acento-contenido.mb-3.text-start.text-small(
                      texto="Farewell"
                      :audio="require('@/assets/audio/76.mp3')"
                      )
                    p.ms-3 Adiós
                  div.ps-2
                    TarjetaAudio.color-acento-contenido.mb-3.text-start.text-small(
                      texto="Good night"
                      :audio="require('@/assets/audio/77.mp3')"
                      )
                    p.ms-3 Buenas noches
                    TarjetaAudio.color-acento-contenido.mb-3.text-start.text-small(
                      texto="Take care"
                      :audio="require('@/assets/audio/78.mp3')"
                      )
                    p.ms-3 Cuídese/cuídate
                  div.ps-2
                    TarjetaAudio.color-acento-contenido.mb-3.text-start.text-small(
                      texto="I look forward to seeing you again"
                      :audio="require('@/assets/audio/79.mp3')"
                      )
                    p.ms-3 Espero verlo de nuevo
                      br
                      |Espero verte de nuevo
                    TarjetaAudio.color-acento-contenido.mb-3.text-start.text-small(
                      texto="It was nice to see you!"
                      :audio="require('@/assets/audio/80.mp3')"
                      )
                    p.ms-3 ¡Fue agradable verlo!
                      br
                      |¡Fue agradable verte!
                  div.ps-2
                    TarjetaAudio.color-acento-contenido.mb-3.text-start.text-small(
                      texto="It was nice to meet you!"
                      :audio="require('@/assets/audio/81.mp3')"
                      )
                    p.ms-3 ¡Fue un placer conocerlo!
                      br
                      |¡Fue un placer conocerte!
                    TarjetaAudio.color-acento-contenido.mb-3.text-start.text-small(
                      texto="Have a good day"
                      :audio="require('@/assets/audio/82.mp3')"
                      )
                    p.ms-3 Que tenga un buen día
                      br
                      |Que tengas un buen día
                  div.ps-2
                    TarjetaAudio.color-acento-contenido.mb-3.text-start.text-small(
                      texto="Have a great day!"
                      :audio="require('@/assets/audio/83.mp3')"
                      )
                    p.ms-3 ¡Que tenga un gran día!
                      br
                      |¡Que tengas un gran día!
      .col-xl-6
        .tarjeta.color-secundario.p-5.h-100
          .d-flex.justify-content-start
            .texts
              h2.fst-italic.mb-1
                span.r-3 Informal farewells
              p Despedidas informales
          .tarjeta.bg-white.p-5.tarjeta-reproductor--izquierda
            .tarjeta-reproductor--derecha__img
              img(src='@/assets/curso/temas/20.svg')
            .row.justify-content-start.t-s
              .col-8
                SlyderE(indicadores="derecha").pe-3
                  div
                    TarjetaAudio.color-acento-contenido.mb-3.text-start.text-small(
                      texto="Bye!"
                      :audio="require('@/assets/audio/84.mp3')"
                      )
                    p.ms-3 ¡Chao!
                    TarjetaAudio.color-acento-contenido.mb-3.text-start.text-small(
                      texto="See ya!"
                      :audio="require('@/assets/audio/85.mp3')"
                      )
                    p.ms-3 ¡Nos vemos!
                  div
                    TarjetaAudio.color-acento-contenido.mb-3.text-start.text-small(
                      texto="See you later"
                      :audio="require('@/assets/audio/86.mp3')"
                      )
                    p.ms-3 Hasta luego
                    TarjetaAudio.color-acento-contenido.mb-3.text-start.text-small(
                      texto="Bye-bye!"
                      :audio="require('@/assets/audio/87.mp3')"
                      )
                    p.ms-3 ¡Adiós!
                  div
                    TarjetaAudio.color-acento-contenido.mb-3.text-start.text-small(
                      texto="Talk to you later"
                      :audio="require('@/assets/audio/88.mp3')"
                      )
                    p.ms-3 Hablamos luego
                    TarjetaAudio.color-acento-contenido.mb-3.text-start.text-small(
                      texto="See you again soon"
                      :audio="require('@/assets/audio/89.mp3')"
                      )
                    p.ms-3 Nos vemos pronto
                  div
                    TarjetaAudio.color-acento-contenido.mb-3.text-start.text-small(
                      texto="Catch you later!"
                      :audio="require('@/assets/audio/90.mp3')"
                      )
                    p.ms-3 ¡Te veo luego!
                    TarjetaAudio.color-acento-contenido.mb-3.text-start.text-small(
                      texto="Have a good one!"
                      :audio="require('@/assets/audio/91.mp3')"
                      )
                    p.ms-3 ¡Que tengas un buen día!
                  div
                    TarjetaAudio.color-acento-contenido.mb-3.text-start.text-small(
                      texto="I’m off<br>I’m heading off"
                      :audio="require('@/assets/audio/92.mp3')"
                      )
                    p.ms-3 Me voy
                    TarjetaAudio.color-acento-contenido.mb-3.text-start.text-small(
                      texto="I’ve got to go<br>I’ve gotta go"
                      :audio="require('@/assets/audio/93.mp3')"
                      )
                    p.ms-3 Me tengo que ir
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
          .row.justify-content-center.align-items-center
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
    .franja.mb-5
      .content
        .row.justify-content-center.align-items-center
          .col-lg-4.order-lg-1.order-1.mb-3.mb-lg-0
            p.mb-0.text-lg-start.text-center 
              span.r-3.fst-italic I'm sorry, I've got to go./I'm sorry, I've gotta go.
              br 
              | Lo siento, tengo que irme.
          .col-lg-4.col-8.order-lg-2.order-3: img(src='@/assets/curso/temas/24.svg')
          .col-lg-4.order-lg-3.order-2.mb-3.mb-lg-0
            p.mb-0.text-lg-start.text-center 
              span.r-3.fst-italic Thank you all again, and goodbye. I've got to go
              br 
              | Gracias a todos de nuevo, y adiós. Me tengo que ir.
    .titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 Actividad didáctica
    Dialogo.color-primario(:dialogo="dialogo")
      template(#nombre-actividad) Arrastrar y Soltar
      template(#titulo-actividad) Greeting the doctor. / Saludando al doctor.
      template(#descripcion-actividad) Organizar en el orden correcto una conversación.








</template>

<script>
export default {
  name: 'Tema3',
  data() {
    return {
      dialogo: {
        personajes: [
          {
            nombre: 'Doctor',
            img: require('@/assets/curso/temas/doctor.svg'),
          },
          {
            nombre: 'Jonathan',
            img: require('@/assets/curso/temas/jonathan.svg'),
          },
        ],
        dialogo: [
          {
            personaje: 'Jonathan',
            textoIng: '*** ',
            textoEsp: 'Hola, doctor. ¿Cómo estás?',
            audio: require('@/assets/audio/ad/1.mp3'),
            palabra: 'Hello, Doctor. How are you?',
          },
          {
            personaje: 'Doctor',
            textoIng: '*** ',
            textoEsp: 'Buenos días Jonathan .',
            audio: require('@/assets/audio/ad/2.wav'),
            palabra: 'Good morning Jonathan.',
          },
          {
            personaje: 'Doctor',
            textoIng: '***.',
            textoEsp: 'Estoy bien, ¿cómo estás?',
            audio: require('@/assets/audio/ad/3.wav'),
            palabra: 'I am great. How are you doing?',
          },
          {
            personaje: 'Jonathan',
            textoIng: 'I&#8217m doing very well. I&#8217m feeling better.',
            textoEsp: 'Estoy muy bien. Me siento mejor.',
            audio: require('@/assets/audio/ad/4.mp3'),
          },
          {
            personaje: 'Doctor',
            textoIng: ' ***.',
            textoEsp: ' ¡Qué gusto verte! Me alegro de que te sientas mejor.',
            audio: require('@/assets/audio/ad/5.wav'),
            palabra: ' It was nice to see you! I am glad you feel better. ',
          },
          {
            personaje: 'Jonathan',
            textoIng: ' ***.',
            textoEsp: 'Gracias Doctor. ¡Qué tengas un lindo día! ',
            audio: require('@/assets/audio/ad/6.mp3'),
            palabra: ' Thank you Doctor. Have a great day!  ',
          },
          {
            personaje: 'Doctor',
            textoIng: ' ***.',
            textoEsp: 'Adiós.',
            audio: require('@/assets/audio/ad/7.wav'),
            palabra: ' Goodbye. ',
          },
        ],
      },
    }
  },
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
      width: 300px

      position: absolute
      height: 100%
      left: 0
      bottom: 0
      transform: translateX(-30%) translateY(0%)
  &--derecha
    position: relative
    &__img
      width: 300px
      margin: 0 auto
      position: absolute
      height: 100%
      right: 0
      bottom: 0
      transform: translateX(30%) translateY(10%)
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
.slyder__btn
  background-color: $color-acento-contenido
  i
    color: white !important
</style>
