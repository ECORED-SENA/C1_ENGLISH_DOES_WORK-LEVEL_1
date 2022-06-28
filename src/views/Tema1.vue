<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.text
        span.text-white 1
      h1 Categorías gramaticales básicas
    p.mb-5(data-aos='fade-right') Los artículos y los sustantivos son las palabras gramaticales básicas, que no solamente dan un punto de partida para aprender a formular oraciones y estructuras más complejas en este nuevo idioma, sino que, a su vez, ayudan a entender conceptos en inglés, como que las cosas (sustantivos) no varían en género (masculino y femenino) como en español, sino solo en número (singular y plural).
    .titulo-sexto.color-acento-contenido
      h5 Tabla 1
      span Artículo y sustantivo
    .row.justify-content-center
      .col-lg-8
        .tarjeta.color-primario.bg-claro.p-5.h-100(data-aos='zoom-in-up').mb-3.mb-lg-0
          h3.text-center Artículo
          .row.justify-content-center
            .col-lg-6
              .tabla-editada.color-acento-botones.mb-3.mb-lg-0
                table.w-100
                  thead.bg-primario-claro
                    tr
                      th(colspan='3').h4.text-center Definido
                  tbody.bg-white
                    tr
                      td 
                      td.fw-bold.text-center.h4 Singular
                      td.fw-bold.text-center.h4 Plural
                    tr
                      td Masculino
                      td.fw-bold.text-center.h4 El
                      td.fw-bold.text-center.h4 Los
                    tr
                      td Femenino
                      td.fw-bold.text-center.h4 La
                      td.fw-bold.text-center.h4 Las
            .col-lg-6
              .tabla-editada.color-acento-botones
                table.w-100
                  thead.bg-primario-claro
                    tr
                      th(colspan='3').h4.text-center Indefinido
                  tbody.bg-white
                    tr
                      td 
                      td.fw-bold.text-center.h4 Singular
                      td.fw-bold.text-center.h4 Plural
                    tr
                      td Masculino
                      td.fw-bold.text-center.h4 Un
                      td.fw-bold.text-center.h4 Unos
                    tr
                      td Femenino
                      td.fw-bold.text-center.h4 Una
                      td.fw-bold.text-center.h4 Unas
      .col-lg-4
        .tarjeta.color-primario.bg-claro.p-5.h-100(data-aos='zoom-in-up') 
          h3.text-center Sustantivo
          .tabla-editada.color-acento-botones.mb-3.mb-lg-0
            table.w-100
              thead.bg-primario-claro
                tr
                  th(colspan='2').p.text-center.fw-normal Se refiere a la palabra que se usa para nombrar una cosa, persona, animal o lugar.
              tbody.bg-white
                tr.fw-bold
                  td.h4.text-center Persona
                  td.h4.text-center Niño
                tr.fw-bold
                  td.h4.text-center Animal
                  td.h4.text-center Gato
              
                tr.fw-bold
                  td.h4.text-center Cosa
                  td.h4.text-center Lápiz
    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.1 Artículos definidos e indefinidos
    p.mb-5(data-aos='fade-right') Los artículos son palabras que definen los sustantivos como algo específico o inespecífico. Es decir, informan si eso de lo que se habla (el sustantivo) es algo conocido y definido, o algo desconocido e indefinido:
    .row.justify-content-center.mb-5
      .col-lg-6.mb-3.mb-lg-0
        .tarjeta.color-primario.bg-claro.p-5.h-100
          h3.text-center Artículo definido (determinado): 
            span.r-3.f-4.p-1.fw-bold THE
          p.mb-3 En español, los artículos definidos son 
            span.fw-bold el/la/los/las 
            | y varían en número (singular-plural) y en género (femenino-masculino), al igual que lo hacen los sustantivos; pero en el caso del idioma inglés, se cuenta exclusivamente con el artículo definido 
            span.fst-italic.r-3 the 
            | para preceder el sustantivo específico al que nos referimos.
          .margin-n
            .row.mb-3.g-5
              .col-lg-6
                .tarjeta-triangulo--derecha.bg-primario-claro.p-4
                  p 
                    span.fst-italic.r-3 THE 
                    | no varía en número (singular-plural):
                    br
                    span.fst-italic.r-3 The lemon-the lemons
                    br
                    |El limón-los limones
                    br
                    span.fst-italic.r-3 The apple-the apples
                    br
                    |La manzana-las manzanas
              .col-lg-6
                .tarjeta-triangulo--izquierda.bg-botones-claro.p-4.d-flex.align-items-center
                  p 
                    span.fst-italic.r-3 THE 
                    | no varía en género 
                    br
                    |(femenino-masculino):
                    br
                    span.fst-italic.r-3 The cat
                    |/la gata-el gato
                    br
                    span.fst-italic.r-3 The cats
                    |/las gatas-los gatos
          p.fw-bold Por ejemplo: 
          .tarjeta.bg-white.ps-5.p-4.tarjeta-apple.ms-lg-5.mb-5
            .tarjeta-apple__img: img(src='@/assets/curso/temas/15.svg', alt='Texto que describa la imagen')
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="I need the biology book and the summary sheets."
              :audio="require('@/assets/audio/1.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
              .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
            p.mb-3 Necesito <b>el</b> libro de biología y las hojas de resumen.
          p.mb-3 En la oración anterior se muestra que no se necesita un libro cualquiera sino un libro en particular, el de biología.
      .col-lg-6
        .tarjeta.color-primario.bg-claro.p-5.h-100
          h3.text-center Artículos indefinidos (indeterminados): 
            span.r-3.f-4.p-1.fw-bold A/AN
          p.mb-3 En español, los artículos indefinidos son 
            span.fw-bold un/una/unos/unas 
            | y varían en número (plural-singular) y en género (femenino-masculino), al igual que lo hacen los sustantivos, pero en el caso del idioma inglés, se cuenta con los artículos indefinidos 
            span.fst-italic.r-3 a/an 
            | para preceder el sustantivo (en singular) inespecífico al que se hace referencia.
            br
            br
            |Los artículos indefinidos 
            span.fst-italic.r-3 a/an 
            | son singulares y equivalen en español a los artículos 
            span.fw-bold un/una, 
            | pero no varían en género. El factor clave para discernir cuál de los dos usar depende del sustantivo que va después:
          .margin-n
            .row.mb-3.g-5
              .col-lg-6
                .tarjeta-triangulo--derecha.bg-primario-claro.p-4
                  p Usamos 
                    span.fst-italic.r-3 a 
                    | si el sustantivo que va después comienza con un sonido consonante:
                    br
                    span.fst-italic.r-3 A potato
                    |/una papa
                    br
                    span.fst-italic.r-3 A hotel
                    |/un hotel
                    br
                    span.fst-italic.r-3 A university
                    |/una universidad
              .col-lg-6
                .tarjeta-triangulo--izquierda.bg-botones-claro.p-4.d-flex.align-items-center
                  p Usamos 
                    span.fst-italic.r-3 an 
                    | si el sustantivo que va después comienza con un sonido vocálico:
                    br
                    span.fst-italic.r-3 An onion
                    |/una cebolla
                    br
                    span.fst-italic.r-3 An hour
                    |/una hora
                    br
                    span.fst-italic.r-3 An umbrella
                    |/un paraguas
          p.fw-bold Por ejemplo: 
          .tarjeta.bg-white.ps-5.p-4.tarjeta-apple.ms-lg-5.mb-5
            .tarjeta-apple__img: img(src='@/assets/curso/temas/15.svg', alt='Texto que describa la imagen')
            .row
              .col-lg-6
                TarjetaAudio.color-acento-contenido.mb-3(
                  texto="I need a book."
                  :audio="require('@/assets/audio/2.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                p.mb-3 Necesito <b>un</b> libro.
              .col-lg-6
                TarjetaAudio.color-acento-contenido.mb-3(
                  texto="I need an eraser."
                  :audio="require('@/assets/audio/3.mp3')"
                )
                p.mb-3 Necesito <b>un</b> borrador.
    p.mb-5(data-aos='fade-right') Cuando se va a hacer referencia de forma no específica a más de un sustantivo se puede usar 
      span.fst-italic.r-3 some 
      | para hacer las veces de 
      span.fw-bold unos/unas, 
      | teniendo en cuenta que 
      span.fst-italic.r-3 some 
      | no es un artículo indefinido y puede interpretarse también como algunos / algunas:
    .titulo-sexto.color-acento-contenido
      h5 Tabla 2
      span <em>Some</em>–unos/unas
    .row.justify-content-center.mb-5
      .col-lg-6
        .tarjeta.bg-contenido-claro.d-flex.justify-content-center.px-5.align-items-end(data-aos='zoom-in-up')
          img(src='@/assets/curso/temas/0.svg', alt='Texto que describa la imagen' style='width: 108px')
          .tabla-editada2.color-acento-botones.mb-3.mb-lg-0.p-4
            table.w-100
              thead.bg-contenido-claro
                tr
                  th 
                    img(src='@/assets/curso/temas/1.svg', alt='Texto que describa la imagen' style='width: 20px').m-auto
                  th
                    img(src='@/assets/curso/temas/2.svg', alt='Texto que describa la imagen' style='width: 20px').m-auto
              tbody.bg-white
                tr
                  td
                    span.fst-italic.r-3 Some potatoes
                  td Unas papas
                tr
                  td
                    span.fst-italic.r-3 Some hotels 
                  td Unos hoteles
                tr
                  td
                    span.fst-italic.r-3  Some universities
                  td Unas universidades
                tr
                  td
                    span.fst-italic.r-3 Some onions  
                  td Unas cebollas
                tr
                  td
                    span.fst-italic.r-3  Some hours
                  td Unas horas
                tr
                  td
                    span.fst-italic.r-3  Some umbrellas
                  td Unas sombrillas
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        p.fw-bold Por ejemplo: 
        .tarjeta.bg-violeta.ps-5.p-4.tarjeta-apple.ms-lg-5.mb-5
          .tarjeta-apple__img: img(src='@/assets/curso/temas/libro.svg', alt='Texto que describa la imagen')
          TarjetaAudio.color-acento-contenido.bg-white.mb-3(
            texto="I need a book and some sheets."
            :audio="require('@/assets/audio/4.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
            .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
          p.mb-0 Necesito <b>un</b> libro y unas (algunas) hojas.
      .col-lg-5
        p.mb-0 En la oración anterior, se muestra que no se necesita un libro en particular, en este caso, cualquier libro puede ser útil.
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-left')
      h2 1.2 Sustantivos comunes y propios relacionados
    p.mb-5(data-aos='fade-right') Los sustantivos son palabras que funcionan para nombrar algo y pueden hacer referencia a una persona (William Smith), una cosa (<em>computer</em>/computador), un animal (<em>cat</em>/gato-gata), un lugar (<em>Rome</em>/Roma), una cualidad (<em>opacity</em>/opacidad), una idea (<em>love</em>/amor), una actividad (natación/<em>swimming</em>), etc.
    .row.justify-content-center.align-items-end
      .col-lg-4(data-aos='fade-right').mb-3.mb-lg-0
        img(src='@/assets/curso/temas/3.png', alt='Texto que describa la imagen')
        .tarjeta.color-secundario.rounded-0.p-3
          p.mb-0 A diferencia del español, en el idioma inglés los sustantivos no tienen género:
      .col-lg-4(data-aos='fade-left')
        p En español, se tienen sustantivos como gato, en género masculino, que habla del individuo macho de la especie, y gata, en género femenino, que habla del individuo hembra de la especie. En inglés, solo se tiene cat, que bien podría referirse a cualquiera de los dos indiscriminadamente.
    p.my-5(data-aos='fade-right') Existen varias categorías de sustantivos, como propios, comunes, contables, no contables, concretos, abstractos, compuestos, colectivos, entre otros, los cuales se definen a continuación:
    .row.justify-content-center.mb-5
      .col-lg-6.mb-3.mb-lg-0
        .tarjeta.color-primario.bg-claro.p-5.h-100(data-aos='zoom-in')
          .text-center
            h3 Sustantivos comunes
            p Los sustantivos comunes son usados para nombrar personas, animales, lugares, cosas en general, sin ser específicos.
          p.fw-bold Por ejemplo
          .tarjeta.bg-contenido-claro(data-aos='zoom-in-up')
            .tabla-editada2.color-acento-botones.mb-3.mb-lg-0.p-4
              table.w-100
                thead.bg-contenido-claro
                  tr
                    th 
                      img(src='@/assets/curso/temas/1.svg', alt='Texto que describa la imagen' style='width: 20px').m-auto
                    th
                      img(src='@/assets/curso/temas/2.svg', alt='Texto que describa la imagen' style='width: 20px').m-auto
                tbody.bg-white
                  tr
                    td
                      span.fst-italic.r-3  Man
                    td Hombre
                  tr
                    td
                      span.fst-italic.r-3 Cat
                    td Gato-gata
                  tr
                    td
                      span.fst-italic.r-3 City
                    td Ciudad
                  tr
                    td
                      span.fst-italic.r-3 Planet
                    td Planeta
                  tr
                    td
                      span.fst-italic.r-3 Mom
                    td Mamá
                  tr
                    td
                      span.fst-italic.r-3 Doctor
                    td Doctor-doctora
                  tr
                    td
                      span.fst-italic.r-3 Coach 
                    td Entrenador-entrenadora
      .col-lg-6
        .tarjeta.color-primario.bg-claro.p-5.h-100(data-aos='zoom-in')
          .text-center
            h3 Sustantivos propios
            p Los sustantivos propios son usados para nombrar personas, animales, lugares, cosas en específico. Al igual que en español, en inglés los sustantivos propios se escriben con la primera letra en mayúscula.
          p.fw-bold Por ejemplo
          .tarjeta.bg-contenido-claro(data-aos='zoom-in-up')
            .tabla-editada2.color-acento-botones.mb-3.mb-lg-0.p-4
              table.w-100
                thead.bg-contenido-claro
                  tr
                    th 
                      img(src='@/assets/curso/temas/1.svg', alt='Texto que describa la imagen' style='width: 20px').m-auto
                    th
                      img(src='@/assets/curso/temas/2.svg', alt='Texto que describa la imagen' style='width: 20px').m-auto
                tbody.bg-white
                  tr
                    td
                      span.fst-italic.r-3  Man
                    td Hombre → William
                  tr
                    td
                      span.fst-italic.r-3 Cat

                    td Gato-gata → Max

                  tr
                    td
                      span.fst-italic.r-3 City
                    td Ciudad → Rome (Roma)
                  tr
                    td
                      span.fst-italic.r-3 Planet
                    td Planeta → Pluto (Plutón)
    p.mb-5(data-aos='fade-right') A veces, se puede hacer referencia a una persona no por su nombre, sino por su ocupación, su profesión, su título laboral o algún rol específico que desempeña. En esta situación, ese título se estaría usando como un caso vocativo (en inglés, llamado <em>nouns of address o vocatives</em>) y ese sustantivo sería considerado un sustantivo propio, sin importar que bajo cualquier otra circunstancia sea considerado un sustantivo común.
    .row.justify-content-center.mb-5
      .col-lg-4
        .tarjeta.color-primario.bg-claro.tarjeta-icon.p-4.mb-3.mb-lg-0 
          img(src='@/assets/curso/temas/4.svg', alt='Texto que describa la imagen' style='width: 92px').m-auto
          p.text-center.mb-0  
            span.fst-italic.r-3 Mom/
            |mamá        
      .col-lg-4
        .tarjeta.color-primario.bg-claro.tarjeta-icon.p-4.mb-3.mb-lg-0 
          img(src='@/assets/curso/temas/5.svg', alt='Texto que describa la imagen' style='width: 92px').m-auto
          p.text-center.mb-0.ms-lg-3 
            span.fst-italic.r-3 Doctor/
            |doctor-doctora      
      .col-lg-4
        .tarjeta.color-primario.bg-claro.tarjeta-icon.p-4 
          img(src='@/assets/curso/temas/6.svg', alt='Texto que describa la imagen' style='width: 92px').m-auto
          p.text-center.mb-0.ms-lg-5 
            span.fst-italic.r-3 Coach/
            |entrenador - entrenadora 
    p.fw-bold Por ejemplo: 
    img(src='@/assets/curso/temas/7.svg', alt='Texto que describa la imagen')
    .row.justify-content-center.mb-5.g-0
      .col-lg-4
        .tarjeta.color-acento-contenido.bg-claro.p-4.rounded-0.h-100
          .tarjeta.bg-white.p-4
            TarjetaAudio.color-acento-contenido.mb-3(
            texto="Mom, can you come with me to the doctor's office?"
            :audio="require('@/assets/audio/5.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
        )
            .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
            p.mb-0 Mamá, ¿puedes venir conmigo al consultorio del doctor?
      .col-lg-4
        .tarjeta.bg-contenido-claro.p-4.rounded-0.h-100
          .tarjeta.bg-white.p-4
            TarjetaAudio.color-acento-contenido.bg-white.mb-3(
            texto="How are you doing, Doctor? Nice to meet you."
            :audio="require('@/assets/audio/6.mp3')"
          )
            p.mb-0 ¿Cómo está, doctor? Es un placer conocerlo.
      .col-lg-4
        .tarjeta.color-acento-contenido.bg-claro.p-4.rounded-0.h-100
          .tarjeta.bg-white.p-4
            TarjetaAudio.color-acento-contenido.bg-white.mb-3(
            texto="Ok, Coach. I will follow your advice."
            :audio="require('@/assets/audio/7.mp3')"
          )
            p.mb-0 Muy bien, entrenador. Voy a seguir su consejo.




</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
.tarjeta-triangulo
  &--derecha
    height: 200px
    position: relative
    &:before
      content: ''
      position: absolute
      top: 0
      right: 0
      transform: translateX(  100%)
      width: 0
      height: 100%
      width: 0;
      height: 0;
      border-right: 100px solid transparent
      border-top: 100px solid transparent
      border-left: 23px solid #c4d1ff
      border-bottom: 100px solid transparent
.tarjeta-triangulo
  &--izquierda
    height: 200px
    position: relative
    &:before
      content: ''
      position: absolute
      top: 0
      left: 0
      transform: translateX(  -100%) rotate(180deg)
      width: 0
      height: 100%
      width: 0;
      height: 0;
      border-right: 100px solid transparent
      border-top: 100px solid transparent
      border-left: 23px solid #fff0b5
      border-bottom: 100px solid transparent
.bg-primario-claro
  background-color: #c4d1ff
.bg-botones-claro
  background-color: #fff0b5
.bg-contenido-claro
  background-color: #ffdfe0
</style>
