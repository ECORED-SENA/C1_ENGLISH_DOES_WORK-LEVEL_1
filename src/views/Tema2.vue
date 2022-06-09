<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.text-white
        span 2
      h1 La persona gramatical y el verbo "to be"
    p.mb-5(data-aos='fade-right') La persona gramatical, como sujeto que ejecuta una acción, y el verbo to be (ser o estar), como esa acción que se lleva a cabo, es una estructura básica para empezar a aprender el idioma inglés.
    h3(data-aos='fade-right') Pronombres de sujeto
    p.mb-5(data-aos='fade-right') Los pronombres de sujeto (también llamados en español pronombres personales, y en inglés, subject pronouns) se utilizan para reemplazar a cualquier sustantivo (persona, animal, objeto, lugar, etc.) que esté haciendo las veces de sujeto en una oración:
    .titulo-sexto.color-acento-contenido
      h5 Tabla 3
      span Pronombres de sujeto
    img(src='@/assets/curso/temas/8.png', alt='Texto que describa la imagen')
    .tabla-audios1.tabla-a.color-acento-botones.mb-5(data-aos='zoom-in')
      table
        tbody.text-center
          tr.fw-bold
            td
            td Sujeto
            td.bg-1-claro Subject <br> pronouns
            td Pronombre
            td Example
            td Ejemplo
          tr
            td(rowspan='5').fw-bold Singular
            td.fw-bold 1era persona
            td.bg-1-claro.fw-bold I
            td yo
            td
              TarjetaAudio.color-acento-contenido.mb-3.text-start(
            texto="I am a student."
            :audio="require('@/assets/audio/8.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
        )
            .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
            td.text-start
              p <b>Yo</b> soy un estudiante
          tr
            td.fw-bold 2nda persona
            td.bg-1-claro.fw-bold You
            td Tú / usted
            td
              TarjetaAudio.color-acento-contenido.mb-3.text-start(
                texto="You are Colombian"
                :audio="require('@/assets/audio/9.mp3')"
                )

            td.text-start
              p <b>Tú</b> eres colombiano
          tr
            td(rowspan='3').fw-bold 3era persona
            td.bg-1-claro.fw-bold He
            td El
            td
              TarjetaAudio.color-acento-contenido.mb-3.text-start(
                texto="Fabio is very fiendly.<br> He is very friendly"
                :audio="require('@/assets/audio/10.mp3')"
                )
            td.text-start
              p <b>Fabio</b> es muy amigable <br><br> <b>Él</b> es muy amigable
          tr
            td.bg-1-claro.fw-bold She
            td Ella
            td
              TarjetaAudio.color-acento-contenido.mb-3.text-start(
                texto="Martha lives in Chile<br>She lives in Chile."
                :audio="require('@/assets/audio/11.mp3')"
                )
            td.text-start
              p <b>Martha</b> vive en Chile.
                br
                br
                | <b>Ella</b> vive en Chile.
          tr
            td.bg-1-claro.fw-bold It
            td (Eso)
            td
              TarjetaAudio.color-acento-contenido.mb-3.text-start(
                texto="The dog eats a lot.<br> It eats a lot."
                :audio="require('@/assets/audio/12.mp3')"
                )
            td.text-start
              p El <b>perro</b> come mucho.
                br
                br
                |  <b>Él</b> (eso) come mucho.
          tr
            td(rowspan='3').fw-bold Plural
            td.fw-bold 1era persona
            td.bg-1-claro.fw-bold We
            td nosotros
            td 
              TarjetaAudio.color-acento-contenido.mb-3.text-start(
                texto="Andrea and I swim in the sea <br> We swim in the sea."
                :audio="require('@/assets/audio/13.mp3')"
                )
              
            td.text-start
              p <b>Andrea y yo</b> nadamos en el mar.
                br
                br
                | <b>Nosotros</b> nadamos en el mar.
          tr
            td.fw-bold 2nda persona
            td.bg-1-claro.fw-bold You
            td ustedes
            td 
              TarjetaAudio.color-acento-contenido.mb-3.text-start(
                texto="You and John are vegetarians <br> You are vegetarians."
                :audio="require('@/assets/audio/14.mp3')"
                )
              
            td.text-start
              p <b>Tú y John</b> son vegetarianos.
                br
                br
                | <b>Ustedes</b> son vegetarianos.
          tr
            td.fw-bold 3era persona
            td.bg-1-claro.fw-bold They
            td ellos
            td 
              TarjetaAudio.color-acento-contenido.mb-3.text-start(
                texto="Lisa, William and Hector work at the hospital. <br> They work at the hospital."
                :audio="require('@/assets/audio/15.mp3')"
                )
            td.text-start
              p <b>Lisa, William y Hector</b> trabajan en el hospital
                br
                br
                | <b>Ellos</b> trabajan en el hospital.
    .row.justify-content-center.align-items-end.mb-5
      .col-lg-4(data-aos='fade-right').mb-3.mb-lg-0
        img(src='@/assets/curso/temas/9.png', alt='Texto que describa la imagen')
        .tarjeta.color-secundario.rounded-0.p-3
          p.mb-0 Se debe tener en cuenta que:
      .col-lg-4(data-aos='fade-left')
        p Siempre el pronombre de sujeto 
          span.r-1.fst-italic I 
          | va en mayúscula, sin importar si va al inicio, en el medio o al final de la oración:   
        TarjetaAudio.color-acento-contenido.mb-3.text-start(
          texto="My friend and I are teachers."
          :audio="require('@/assets/audio/16.mp3')"
          )
        p.ms-3 Mi amigo y yo somos profesores.
    p.mb-5(data-aos='fade-up') Es importante señalar que existen algunas particularidades en el pronombre determinando su uso en inglés, como se presenta a continuación: 
    .row.justify-content-center.mb-5
      .col-lg-3.col-8.mb-3.mb-lg-0
        img(src='@/assets/curso/temas/10.jpg', alt='Texto que describa la imagen')(data-aos='zoom-in-up')
      .col-lg-9
        TabsA.color-acento-contenido.mb-5
          .tarjeta.color-primario.bg-claro.p-4(titulo="1. You").px-5
            p.mb-3 En español, la segunda persona singular tiene la versión formal <b>“usted”</b> y la versión informal <b>“tú”</b>; en inglés, no existe esta diferencia, solo existe el pronombre de sujeto 
              span.r-3.fst-italic you, 
              | que además es usado también para la segunda persona plural <em>“ustedes”</em>. En inglés, se diferencia entre la segunda persona singular o plural dependiendo del contexto de la oración en la que se usa:
            .tarjeta.color-primario.bg-claro.p-4.d-flex.justify-content-center
              .tabla-editada3.color-acento-botones.mb-3.mb-lg-0
                table.w-100
                  thead
                    tr
                      th(colspan='2') 
                      th(colspan='12')
                  tbody.bg-white
                    tr
                      td(colspan='1')
                        img(src='@/assets/curso/temas/1.svg', alt='Texto que describa la imagen' style='width: 20px').m-auto
                      td(colspan='12')
                        span.r-3.fst-italic You are my friend.

                    tr
                      td(colspan='1')
                        img(src='@/assets/curso/temas/2.svg', alt='Texto que describa la imagen' style='width: 20px').m-auto
                      td(colspan='12') 
                        p.mb-0 <b>Tú</b> eres mi amigo.
                    tr
                      td(colspan='1')
                        img(src='@/assets/curso/temas/1.svg', alt='Texto que describa la imagen' style='width: 20px').m-auto
                      td(colspan='12')
                        span.r-3.fst-italic You have to go to the next bus stop.

                    tr
                      td(colspan='1')
                        img(src='@/assets/curso/temas/2.svg', alt='Texto que describa la imagen' style='width: 20px').m-auto
                      td(colspan='12') 
                        p.mb-0 <b>Usted</b> tiene que ir a la próxima parada de autobús.
                    tr
                      td(colspan='1')
                        img(src='@/assets/curso/temas/1.svg', alt='Texto que describa la imagen' style='width: 20px').m-auto
                      td(colspan='12')
                        span.r-3.fst-italic You and Ana study a lot.

                    tr
                      td(colspan='1')
                        img(src='@/assets/curso/temas/2.svg', alt='Texto que describa la imagen' style='width: 20px').m-auto
                      td(colspan='12') 
                        p.mb-0 <b>Tú y Ana</b> estudian mucho.
                    tr
                      td(colspan='1')
                        img(src='@/assets/curso/temas/1.svg', alt='Texto que describa la imagen' style='width: 20px').m-auto
                      td(colspan='12')
                        span.r-3.fst-italic You study a lot.

                    tr
                      td(colspan='1')
                        img(src='@/assets/curso/temas/2.svg', alt='Texto que describa la imagen' style='width: 20px').m-auto
                      td(colspan='12') 
                        p.mb-0 <b>Ustedes</b> estudian mucho.
          .tarjeta.color-primario.bg-claro.p-4(titulo="2. It").px-5
            p.mb-3 El pronombre de sujeto 
              span.r-3.fst-italic it 
              | no tiene una traducción textual al español, pero la mejor aproximación para entender el concepto es referirnos a 
              span.r-3.fst-italic it 
              | como <b>“eso”</b>. Esto se debe a que, como en inglés los sustantivos no varían en género como en español, no se pueden usar los pronombres de sujeto en tercera persona singular 
              span.r-3.fst-italic he 
              | o 
              span.r-3.fst-italic she 
              | para hablar de un animal, un objeto o un lugar; para estos sustantivos se utiliza 
              span.r-3.fst-italic it
              |:
            .tarjeta.color-primario.bg-claro.p-4.d-flex.justify-content-center.mb-3
              .tabla-editada3.color-acento-botones.mb-3.mb-lg-0
                table.w-100
                  thead
                    tr
                      th(colspan='2') 
                      th(colspan='12')
                  tbody.bg-white
                    tr
                      td(colspan='1')
                        img(src='@/assets/curso/temas/1.svg', alt='Texto que describa la imagen' style='width: 20px').m-auto
                      td(colspan='12')
                        span.r-3.fst-italic The cow drinks water. → It drinks wáter
                        br
                        span.r-2.fst-italic (“she drinks water” X es incorrecto).

                    tr
                      td(colspan='1')
                        img(src='@/assets/curso/temas/2.svg', alt='Texto que describa la imagen' style='width: 20px').m-auto
                      td(colspan='12') 
                        p.mb-0 <b>La vaca</b> bebe agua. → <b>Ella</b> bebe agua.
                    tr
                      td(colspan='1')
                        img(src='@/assets/curso/temas/1.svg', alt='Texto que describa la imagen' style='width: 20px').m-auto
                      td(colspan='12')
                        span.r-3.fst-italic The plane flies very high. → It flies very high.
                        br
                        span.r-2.fst-italic (“he flies very high” X es incorrecto).
                        
                    tr
                      td(colspan='1')
                        img(src='@/assets/curso/temas/2.svg', alt='Texto que describa la imagen' style='width: 20px').m-auto
                      td(colspan='12') 
                        p.mb-0 <b>El avión</b> vuela muy alto. → <b>Él</b> vuela muy alto.
                    tr
                      td(colspan='1')
                        img(src='@/assets/curso/temas/1.svg', alt='Texto que describa la imagen' style='width: 20px').m-auto
                      td(colspan='12')
                        span.r-3.fst-italic The city is very beautiful. → It is very beautiful
                        br
                        span.r-2.fst-italic (“she is very beautiful” X es incorrecto).


                    tr
                      td(colspan='1')
                        img(src='@/assets/curso/temas/2.svg', alt='Texto que describa la imagen' style='width: 20px').m-auto
                      td(colspan='12') 
                        p.mb-0 <b>La ciudad</b> es muy hermosa. → <b>Ella</b> es muy hermosa.

            .d-lg-flex.align-items-center
              img(src='@/assets/curso/temas/11.svg', alt='Texto que describa la imagen' style='width: 72px').m-auto.me-3
              .textos
                h4 Atención: 
                p.mb-0
                  span.r-3.fst-italic It 
                  | es la tercera persona singular, se usa con un solo animal, un solo objeto o un solo lugar.
          .tarjeta.color-primario.bg-claro.p-4(titulo="3. They").px-5
            p.mb-3 Cuando en la tercera persona plural nos referimos a más de un animal, <b>más de un</b> objeto o más de un lugar, usamos 
              span.r-3.fst-italic they, 
              | no <b><em>it</em></b>:
            .tarjeta.color-primario.bg-claro.p-4.d-flex.justify-content-center.mb-3
              .tabla-editada3.color-acento-botones.mb-3.mb-lg-0
                table.w-100
                  thead
                    tr
                      th(colspan='2') 
                      th(colspan='12')
                  tbody.bg-white
                    tr
                      td(colspan='1')
                        img(src='@/assets/curso/temas/1.svg', alt='Texto que describa la imagen' style='width: 20px').m-auto
                      td(colspan='12')
                        span.r-3.fst-italic The butterfly, the eagle and the seagull fly in the sky.
                          br
                          | They fly in the sky.

                    tr
                      td(colspan='1')
                        img(src='@/assets/curso/temas/2.svg', alt='Texto que describa la imagen' style='width: 20px').m-auto
                      td(colspan='12') 
                        p.mb-0 <b>La mariposa</b>, el águila y la gaviota vuelan en el cielo. 
                          br 
                          | <b>Ellas</b> vuelan en el cielo.
                    tr
                      td(colspan='1')
                        img(src='@/assets/curso/temas/1.svg', alt='Texto que describa la imagen' style='width: 20px').m-auto
                      td(colspan='12')
                        span.r-3.fst-italic The shoes are under the bed.
                          br
                          | They are under the bed.
                        
                    tr
                      td(colspan='1')
                        img(src='@/assets/curso/temas/2.svg', alt='Texto que describa la imagen' style='width: 20px').m-auto
                      td(colspan='12') 
                        p.mb-0 <b>Los zapatos</b> están debajo de la cama.
                          br
                          |<b>Ellos</b> están debajo de la cama.
                    tr
                      td(colspan='1')
                        img(src='@/assets/curso/temas/1.svg', alt='Texto que describa la imagen' style='width: 20px').m-auto
                      td(colspan='12')
                        span.r-3.fst-italic Santa Marta and Cartagena are coastal cities.
                          br
                          | They are coastal cities.


                    tr
                      td(colspan='1')
                        img(src='@/assets/curso/temas/2.svg', alt='Texto que describa la imagen' style='width: 20px').m-auto
                      td(colspan='12') 
                        p.mb-0 <b>Santa Marta y Cartagena</b> son ciudades costeras.
                          br
                          |<b>Ellas</b> son ciudades costeras.
          .tarjeta.color-primario.bg-claro.p-4(titulo="4. El sujeto en inglés").px-5
            p.mb-3 En inglés, las cláusulas siempre tienen un sujeto, no como en español, que algunas veces podemos prescindir de él: 
            .tarjeta.color-primario.bg-claro.p-4.d-flex.justify-content-center.mb-3
              .tabla-editada3.color-acento-botones.mb-3.mb-lg-0
                table.w-100
                  thead
                    tr
                      th(colspan='2') 
                      th(colspan='12')
                  tbody.bg-white
                    tr
                      td(colspan='1')
                        img(src='@/assets/curso/temas/2.svg', alt='Texto que describa la imagen' style='width: 20px').m-auto
                      td(colspan='12') 
                        p.mb-0 (yo) Como pizza todas las noches
                    tr
                      td(colspan='1')
                        img(src='@/assets/curso/temas/1.svg', alt='Texto que describa la imagen' style='width: 20px').m-auto
                      td(colspan='12')
                        span.r-3.fst-italic I eat pizza every night.
                        br
                        span.r-2.fst-italic (“Eat pizza every night” X es incorrecto). 

                    tr
                      td(colspan='1')
                        img(src='@/assets/curso/temas/2.svg', alt='Texto que describa la imagen' style='width: 20px').m-auto
                      td(colspan='12') 
                        p.mb-0 Mi madre está jubilada. (ella) Era enfermera.
                          br
                          |<b>Ellos</b> están debajo de la cama.
                    tr
                      td(colspan='1')
                        img(src='@/assets/curso/temas/1.svg', alt='Texto que describa la imagen' style='width: 20px').m-auto
                      td(colspan='12')
                        span.r-3.fst-italic My mother is retired. She was a nurse. 
                        br
                        span.r-2.fst-italic (“Was a nurse” X es incorrecto). 
    h3(data-aos='fade-right') Verbo ser o estar (verb “to be”)
    p.mb-5(data-aos='fade-right') En inglés, uno de los verbos más importantes es el verbo to be, que en español equivale a dos verbos: el verbo ser y el verbo estar. Por lo tanto, la conjugación del verbo ser o estar con todas las personas gramaticales se detalla de la siguiente manera: 
    .titulo-sexto.color-acento-contenido
      h5 Tabla 4
      span To be
    img(src='@/assets/curso/temas/12.png', alt='Texto que describa la imagen')
    .tabla-audios2.tabla-a.color-acento-botones.mb-5(data-aos='zoom-in')
      table
        tbody.text-center
          tr.fw-bold
            td(colspan=2) Clasificación
            td.bg-1-claro Subject <br> pronouns
            td Verb to be
            td Example
            td Ejemplo
          tr
            td(rowspan='5').fw-bold Singular
            td.fw-bold 1era persona
            td.bg-1-claro.fw-bold I
            td am
            td
              TarjetaAudio.color-acento-contenido.mb-3.text-start(
                texto="I am a scientist."
                :audio="require('@/assets/audio/17.mp3')"
                )
              TarjetaAudio.color-acento-contenido.mb-3.text-start(
                texto="I am in the lab."
                :audio="require('@/assets/audio/18.mp3')"
                )
            td.text-start
              p Yo <b>soy</b> un científico.
                br
                br
                | Yo <b>estoy</b> en el laboratorio.
          tr
            td.fw-bold 2nda persona
            td.bg-1-claro.fw-bold You
            td are
            td
              TarjetaAudio.color-acento-contenido.mb-3.text-start(
                texto="You are a good designer."
                :audio="require('@/assets/audio/19.mp3')"
                )
              TarjetaAudio.color-acento-contenido.mb-3.text-start(
                texto="You are in your office."
                :audio="require('@/assets/audio/20.mp3')"
                )

            td.text-start
              p Tú <b>eres</b> un buen diseñador.
                br
                br
                | Tú <b>estás</b> en tu oficina.
          tr
            td(rowspan='3').fw-bold 3era persona
            td.bg-1-claro.fw-bold He
            td is
            td
              TarjetaAudio.color-acento-contenido.mb-3.text-start(
                texto="He is an architect."
                :audio="require('@/assets/audio/21.mp3')"
                )
              TarjetaAudio.color-acento-contenido.mb-3.text-start(
                texto="He is in the new building."
                :audio="require('@/assets/audio/22.mp3')"
                )

            td.text-start
              p Él <b>es</b> un arquitecto.
                br
                br
                | Él <b>está</b> en el edificio nuevo.
          tr
            td.bg-1-claro.fw-bold She
            td is
            td
              TarjetaAudio.color-acento-contenido.mb-3.text-start(
                texto="She is a lawyer. "
                :audio="require('@/assets/audio/23.mp3')"
                )
              TarjetaAudio.color-acento-contenido.mb-3.text-start(
                texto="She is in court."
                :audio="require('@/assets/audio/24.mp3')"
                )
            td.text-start
              p Ella <b>es</b> una abogada.
                br
                br
                | Ella <b>está</b> en la corte.
          tr
            td.bg-1-claro.fw-bold It
            td is
            td
              TarjetaAudio.color-acento-contenido.mb-3.text-start(
                texto="It is a dog."
                :audio="require('@/assets/audio/25.mp3')"
                )
              TarjetaAudio.color-acento-contenido.mb-3.text-start(
                texto="It is at the vet."
                :audio="require('@/assets/audio/26.mp3')"
                )
            td.text-start
              p (eso) <b>Es</b> un perro.
                br
                br
                |  (eso) <b>Está</b> en el veterinario.
          tr
            td(rowspan='3').fw-bold Plural
            td.fw-bold 1era persona
            td.bg-1-claro.fw-bold We
            td are
            td 
              TarjetaAudio.color-acento-contenido.mb-3.text-start(
                texto="We are friends."
                :audio="require('@/assets/audio/27.mp3')"
                )
              TarjetaAudio.color-acento-contenido.mb-3.text-start(
                texto="We are in the cafeteria."
                :audio="require('@/assets/audio/28.mp3')"
                )
              
            td.text-start
              p Nosotros <b>somos</b> amigos.
                br
                br
                | Nosotros <b>estamos</b> en la cafetería.
          tr
            td.fw-bold 2nda persona
            td.bg-1-claro.fw-bold You
            td are
            td 
              TarjetaAudio.color-acento-contenido.mb-3.text-start(
                texto="You are friendly. "
                :audio="require('@/assets/audio/29.mp3')"
                )
              TarjetaAudio.color-acento-contenido.mb-3.text-start(
                texto="You are in the library."
                :audio="require('@/assets/audio/30.mp3')"
                )
              
            td.text-start
              p Ustedes son amigables.
                br
                br
                | Ustedes <b>están</b> en la biblioteca.
          tr
            td.fw-bold 3era persona
            td.bg-1-claro.fw-bold They
            td are
            td 
              TarjetaAudio.color-acento-contenido.mb-3.text-start(
                texto="They are teachers."
                :audio="require('@/assets/audio/31.mp3')"
                )
              TarjetaAudio.color-acento-contenido.mb-3.text-start(
                texto="They are in a seminar."
                :audio="require('@/assets/audio/32.mp3')"
                )
              
            td.text-start
              p Ellos <b>son</b> profesores.
                br
                br
                | Ellos <b>están</b> en un seminario.
    p.mb-5(data-aos='fade-right') Se entiende a cuál de las dos acciones (ser o estar) se hace referencia dependiendo del contexto.
    h3(data-aos='fade-right') Contracciones
    p.mb-5(data-aos='fade-right') A continuación, observe cómo las contracciones se crean en inglés, particularmente con el verbo to be y los pronombres de sujeto:
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row.justify-content-center.align-items-end.mb-5
      .col-lg-4(data-aos='fade-right').mb-3.mb-lg-0
        img(src='@/assets/curso/temas/13.png', alt='Texto que describa la imagen' wi)
        .tarjeta.color-secundario.rounded-0.p-3
          p.text-center No olvidar:
            br
            span.fst-italic.r-3 Don´t forget
      .col-lg-4(data-aos='fade-left')
        p Las contracciones hacen que las palabras sean <b>más cortas y fáciles de pronunciar</b>, por lo cual se le da un tono informal al mensaje que se quiere transmitir. Una regla general <b>es la de evitar usar contracciones en contextos formales</b>, como pueden ser conversaciones, documentos y discursos académicos, oficiales o laborales.
    h3(data-aos='fade-right') Estructuras en presente simple, verbo ser o estar
    p.mb-5(data-aos='fade-right') Ahora, dentro de las estructuras del verbo ser o estar y sus conjugaciones, se hará uso del presente simple para determinar de manera correcta el sujeto y complemento de una oración: 
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg--1-claro")
      .row(titulo="Afirmativo +").px-5
        .col-md-4.mb-4.mb-md-0
          figure
            img.rounded-3(src='@/assets/curso/temas/14.jpg', alt='Texto que describa la imagen')
        .col-md-8
          p Cuando se usan frases afirmativas, solo se debe tener en cuenta la correcta conjugación del verbo to be dependiendo del sujeto, y luego agregar el complemento de la oración:
          .tabla-a.color-acento-botones.mb-5
            table.border-0
              thead
                tr
                  th(colspan='3').text-white.fw-bold.bg-2 Afirmativa → Gloria es una ingeniera.
              tbody
                tr.fw-bold.bg--2-claro
                  td Sujeto
                  td Verbo to be
                  td Complemento de la oración
                tr.fst-italic.bg--3-claro
                  td
                    span.r-3 Gloria
                  td
                    span.r-3 is
                  td
                    span.r-3 an engineer.
          p.ps-4.fw-bold  Por ejemplo:
          .tarjeta.bg-white.p-5.tarjeta-apple.ms-lg-5
            .tarjeta-apple__img: img(src='@/assets/curso/temas/15.svg', alt='Texto que describa la imagen')
            .row.justify-content-center.mb-3
              .col-lg-6
                TarjetaAudio.color-acento-contenido.mb-3.text-start(
                texto="I’m ready."
                :audio="require('@/assets/audio/32.mp3')"
                )
                p.ms-3 Yo estoy listo.
              .col-lg-6
                TarjetaAudio.color-acento-contenido.mb-3.text-start(
                texto="You’re tall."
                :audio="require('@/assets/audio/34.mp3')"
                )
                p.ms-3 Tu eres alto.
            .row.justify-content-center
              .col-lg-6
                TarjetaAudio.color-acento-contenido.mb-3.text-start(
                texto="Sandra is a doctor."
                :audio="require('@/assets/audio/35.mp3')"
                )
                p.ms-3 Sandra es una doctora.
              .col-lg-6
                TarjetaAudio.color-acento-contenido.mb-3.text-start(
                texto="My parents are in Cali."
                :audio="require('@/assets/audio/36.mp3')"
                )
                p.ms-3 Mis padres están en Cali.
      .row(titulo="Negativo -").px-5
        .col-md-4.mb-4.mb-md-0
          figure
            img.rounded-3(src='@/assets/curso/temas/16.jpg', alt='Texto que describa la imagen')
        .col-md-8
          p Para las frases negativas, se debe agregar la partícula de negación 
            span.r-3.fst-italic not 
            | después del verbo <b><em>to be.</em></b>
          .tabla-a.color-acento-botones.mb-5
            table.border-0
              thead
                tr
                  th(colspan='3').text-white.fw-bold.bg-2 Negativa → Gloria no es una ingeniera
              tbody
                tr.fw-bold.bg--2-claro
                  td Sujeto
                  td Verbo to be + not
                  td Complemento de la oración
                tr.fst-italic.bg--3-claro
                  td
                    span.r-3 Gloria
                  td
                    span.r-3 is not
                  td
                    span.r-3 an engineer.
          p.mb-3 En las oraciones negativas, también se pueden hacer contracciones entre el verbo to be y la negación not (con todas las formas del verbo to be, excepto con “am”).
          p.ps-4.fw-bold  Por ejemplo:
          .tarjeta.bg-white.p-5
            .row.justify-content-center.mb-3
              .col-lg-6
                p Yo <b>no estoy</b> listo
                TarjetaAudio.color-acento-contenido.mb-3.text-start(
                texto="I am not ready."
                :audio="require('@/assets/audio/37.mp3')"
                )
                TarjetaAudio.color-acento-contenido.mb-3.text-start(
                texto="I’m not ready "
                :audio="require('@/assets/audio/38.mp3')"
                )
                p.ms-3
                  span.r-2.fst-italic  (“I amn’t read” X es incorrecto).
              .col-lg-6
                p.ms-3 Tú <b>no eres</b> alto.
                TarjetaAudio.color-acento-contenido.mb-3.text-start(
                texto="You are not tall."
                :audio="require('@/assets/audio/39.mp3')"
                )
                TarjetaAudio.color-acento-contenido.mb-3.text-start(
                texto="You’re not tall. "
                :audio="require('@/assets/audio/40.mp3')"
                )
                TarjetaAudio.color-acento-contenido.mb-3.text-start(
                texto="You aren’t tall."
                :audio="require('@/assets/audio/41.mp3')"
                )
                
            .row.justify-content-center
              .col-lg-6
                p.ms-3 Ella <b>no es</b> una doctora.
                TarjetaAudio.color-acento-contenido.mb-3.text-start(
                texto="She is not a doctor. "
                :audio="require('@/assets/audio/42.mp3')"
                )
                TarjetaAudio.color-acento-contenido.mb-3.text-start(
                texto="She’s not a doctor."
                :audio="require('@/assets/audio/43.mp3')"
                )
                TarjetaAudio.color-acento-contenido.mb-3.text-start(
                texto="She isn’t a doctor."
                :audio="require('@/assets/audio/44.mp3')"
                )
              .col-lg-6
                p.ms-3 Ellos <b>no están</b> en Cali.
                TarjetaAudio.color-acento-contenido.mb-3.text-start(
                texto="They are not in Cali."
                :audio="require('@/assets/audio/45.mp3')"
                )
                TarjetaAudio.color-acento-contenido.mb-3.text-start(
                texto="They’re not in Cali."
                :audio="require('@/assets/audio/46.mp3')"
                )
                TarjetaAudio.color-acento-contenido.mb-3.text-start(
                texto="They aren’t in Cali."
                :audio="require('@/assets/audio/47.mp3')"
                )
      .row(titulo="Interrogativo ?").px-5
        .col-md-4.mb-4.mb-md-0
          figure
            img.rounded-3(src='@/assets/curso/temas/17.jpg', alt='Texto que describa la imagen')
        .col-md-8
          p Para las frases interrogativas, se debe cambiar el orden de la estructura. A diferencia del español, en que la oración es la misma que la afirmativa y solo se agregan los signos de interrogación, a nivel escrito, o se cambia la entonación de la frase, a nivel oral, en inglés, se intercambia el orden verbo to be y el sujeto.
          .tabla-a.color-acento-botones.mb-5
            table.border-0
              thead
                tr
                  th(colspan='3').text-white.fw-bold.bg-2 Interrogativa → ¿Gloria es una ingeniera?
              tbody
                tr.fw-bold.bg--2-claro
                  td Verbo to be
                  td Sujeto
                  td Complemento de la oración + ?
                tr.fst-italic.bg--3-claro
                  td
                    span.r-3 Is
                  td
                    span.r-3 Gloria
                  td
                    span.r-3 an engineer?.
          p.mb-3 También se debe tener en cuenta que, a nivel escrito, en inglés se usa un solo signo de interrogación al final de la pregunta, mientras que en español se usan dos (uno al principio de la oración y otro al final).
          p.ps-4.fw-bold  Por ejemplo:
          .tarjeta.bg-white.p-5
            .row.justify-content-center.mb-3
              .col-lg-6
                TarjetaAudio.color-acento-contenido.mb-3.text-start(
                texto="Am I ready?"
                :audio="require('@/assets/audio/48.mp3')"
                )
                p.ms-3 ¿Yo estoy listo?
              .col-lg-6
                TarjetaAudio.color-acento-contenido.mb-3.text-start(
                texto="Are you tall?"
                :audio="require('@/assets/audio/49.mp3')"
                )
                p.ms-3 ¿Tú eres alto?
            .row.justify-content-center
              .col-lg-6
                TarjetaAudio.color-acento-contenido.mb-3.text-start(
                texto="Is Sandra a doctor?"
                :audio="require('@/assets/audio/50.mp3')"
                )
                p.ms-3 ¿Sandra es una doctora?
              .col-lg-6
                TarjetaAudio.color-acento-contenido.mb-3.text-start(
                texto="Are my parents in Cali?"
                :audio="require('@/assets/audio/51.mp3')"
                )
                p.ms-3 ¿Mis padres están en Cali?




</template>

<script>
export default {
  name: 'Tema2',
  components: {},
  data: () => ({}),
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
.tabla-audios1
  thead
    td,th
      padding: 0
  td, th
    border: 2px solid $color-secundario
  td.bg-1-claro
    background-color: #e1e8ff !important
  tr
    td:nth-child(5)
      width: 30%
    td:nth-child(6)
      width: 20%
.tabla-audios2
  thead
    td,th
      padding: 0
  td, th
    border: 2px solid $color-secundario
  td.bg-1-claro
    background-color: #e1e8ff !important
  tr
    td:nth-child(4)
      width: 30%
    td:nth-child(5)
      width: 20%
.tabs-a__tab
  background-color: #ffdfe0
.tabs-a__tab__selected
  .tabs-a__tab__text
      color: $white !important
.bg-2
  background-color: $color-secundario
.acordion__activo
  background: #c4d1ff
</style>
