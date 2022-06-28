<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.text-white
        span 4
      h1.fst-italic Vocabulary: Let's start
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0(data-aos='zoom-in-up'): img(src='@/assets/curso/temas/38.png')
      .col-lg-8
        p El abecedario, los colores y los números son conceptos básicos necesarios para poder empezar a construir un buen vocabulario en inglés, que será útil para crear y ensamblar ideas o estructuras más complejas.
          br
          br
          |Uno de los aspectos primordiales a la hora de aprender el idioma inglés es la pronunciación, y una herramienta muy útil para mejorarla es estudiar el Alfabeto Fonético Internacional o IPA <b><em>(International Phonetic Alphabet)</em></b>, el cual es un sistema diseñado para entender cómo suena cualquier palabra del idioma inglés. Esto es muy importante, ya que el inglés no es un idioma escrito fonéticamente, lo que significa que cuando se lee una palabra en inglés no se sabe exactamente cómo suena, a diferencia de otros idiomas, como el español, donde sí se entienden los sonidos y se aprende a cuáles letras corresponde, y así se puede pronunciar correctamente cualquier palabra nueva al leerla.
    Separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.1 Pronunciación: abecedario
    p.mb-5(data-aos='fade-right') Inicialmente, el primer paso para conocer la pronunciación y reconocer el inglés como lenguaje de comunicación internacional debe ser el alfabeto. Observe su pronunciación, características y, lo más ideal, practique mientras escucha: 
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/4EHf6Z_FhBU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.mb-5(data-aos='fade-right') Las consonantes son un sonido que se produce cuando el aire es parcialmente bloqueado por alguna parte de la boca o la faringe, creando una turbulencia audible; y una vocal es un sonido que se produce cuando el aire fluye libremente, sin ser bloqueado por ninguna parte de la boca o la faringe, por ende, las vocales se pronuncian con el tracto vocal abierto.
    h3(data-aos='fade-right') Los sonidos en las vocales
    p.mb-5(data-aos='fade-right') Ahora bien, es importante mencionar que, igual que en el español, todas y cada una de las palabras en inglés tienen, al menos, una vocal, por lo que es importante aclarar los sonidos cortos y largos en las vocales:
    .titulo-sexto.color-acento-contenido
      h5 Tabla 6
      span Los sonidos de las vocales
    .bg--4-claro.p-5.mb-4
      .row.justify-content-center.mb-3
        .col-lg-6
          .tarjeta-avatar-b.mb-5
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/temas/a.svg' alt='AvatarTop')
            .tarjeta.bg-tarjeta-v
              .p-4
                p
                  span.text-white Corta → æ
                    br
                    b Apple, cat, man. 
                  br
                  | Ejercicio:
                TarjetaAudio.color-acento-contenido.bg-white.mb-3.text-start(
                      texto="The fat man had a hat"
                      :audio="require('@/assets/audio/94.mp3')"
                      )
        .col-lg-6
          .tarjeta-avatar-b.mb-5
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/temas/a.svg' alt='AvatarTop')
            .tarjeta.bg-tarjeta-v
              .p-4
                p
                  span.text-white Larga → ɑ 
                    br
                    b  Car, far, bar.
                  br
                  | Ejercicio: 
                TarjetaAudio.color-acento-contenido.bg-white.mb-3.text-start(
                      texto="My car was far from the bar"
                      :audio="require('@/assets/audio/95.mp3')"
                      )
      .row.justify-content-center.mb-3
        .col-lg-6
          .tarjeta-avatar-b.mb-5
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/temas/e.svg' alt='AvatarTop')
            .tarjeta.bg-tarjeta-v
              .p-4
                p
                  span.text-white Corta → e
                    br
                    |Jet, net, bed, ten
                  br
                  | Ejercicio: 
                TarjetaAudio.color-acento-contenido.bg-white.mb-3.text-start(
                      texto="Let me get the set."
                      :audio="require('@/assets/audio/96.mp3')"
                      )
        .col-lg-6
          .tarjeta-avatar-b.mb-5
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/temas/e.svg' alt='AvatarTop')
            .tarjeta.bg-tarjeta-v
              .p-4
                p
                  span.text-white  Larga → i
                    br
                    | Sheep, feet, he, we, cheap.
                  br
                  | Ejercicio: 
                TarjetaAudio.color-acento-contenido.bg-white.mb-3.text-start(
                      texto="We liked the cheap jeep."
                      :audio="require('@/assets/audio/97.mp3')"
                      )
      .row.justify-content-center.mb-3
        .col-lg-6
          .tarjeta-avatar-b.mb-5
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/temas/i.svg' alt='AvatarTop')
            .tarjeta.bg-tarjeta-v
              .p-4
                p
                  span.text-white Corta → ɪ
                    br
                    |Fish, pig, ship, trick.
                  br
                  | Ejercicio: 
                TarjetaAudio.color-acento-contenido.bg-white.mb-3.text-start(
                      texto="I fit my clip onto my wrist."
                      :audio="require('@/assets/audio/98.mp3')"
                      )
        .col-lg-6
          .tarjeta-avatar-b.mb-5
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/temas/i.svg' alt='AvatarTop')
            .tarjeta.bg-tarjeta-v
              .p-4
                p
                  span.text-white Larga → ɜ 
                    br
                    | Bird, third, first, girl.
                  br
                  | Ejercicio: 
                TarjetaAudio.color-acento-contenido.bg-white.mb-3.text-start(
                      texto="The first bird sang for the girl."
                      :audio="require('@/assets/audio/99.mp3')"
                      )
      .row.justify-content-center.mb-3
        .col-lg-6
          .tarjeta-avatar-b.mb-5
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/temas/o.svg' alt='AvatarTop')
            .tarjeta.bg-tarjeta-v
              .p-4
                p
                  span.text-white Corta → ɒ
                    br
                    |Clock, dog, on, hot.
                  br
                  | Ejercicio: 
                TarjetaAudio.color-acento-contenido.bg-white.mb-3.text-start(
                      texto="It's hot in the box. "
                      :audio="require('@/assets/audio/100.mp3')"
                      )
        .col-lg-6
          .tarjeta-avatar-b.mb-5
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/temas/o.svg' alt='AvatarTop')
            .tarjeta.bg-tarjeta-v
              .p-4
                p
                  span.text-white Larga → ɔ
                    br
                    | Or, four, door.
                  br
                  | Ejercicio: 
                TarjetaAudio.color-acento-contenido.bg-white.mb-3.text-start(
                      texto="Are there four horns or four doors?"
                      :audio="require('@/assets/audio/101.mp3')"
                      )
      .row.justify-content-center.mb-3
        .col-lg-6
          .tarjeta-avatar-b.mb-5
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/temas/u.svg' alt='AvatarTop')
            .tarjeta.bg-tarjeta-v
              .p-4
                p
                  span.text-white Corta → ʌ
                    br
                    |Sun, jump, up, umbrella.
                  br
                  | Ejercicio: 
                TarjetaAudio.color-acento-contenido.bg-white.mb-3.text-start(
                      texto="But the butter is upstairs. "
                      :audio="require('@/assets/audio/102.mp3')"
                      )
        .col-lg-6
          .tarjeta-avatar-b.mb-5
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/temas/u.svg' alt='AvatarTop')
            .tarjeta.bg-tarjeta-v
              .p-4
                p
                  span.text-white Larga → u  
                    br
                    | Rude, crude, dude, you.
                  br
                  | Ejercicio: 
                TarjetaAudio.color-acento-contenido.bg-white.mb-3.text-start(
                      texto="You are being rude, dude"
                      :audio="require('@/assets/audio/103.mp3')"
                      )
      p.mb-5(data-aos='fade-right') Otros sonidos vocálicos existentes en el idioma inglés:
      .row.justify-content-center.mb-3
        .col-lg-6
          .tarjeta-avatar-b.mb-5
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/temas/25.svg' alt='AvatarTop')
            .tarjeta.color-acento-botones
              .p-4
                p
                  span Corto → ə
                    br
                    | <b>The, banana, another, teacher, problem</b>
                  br
                  | Ejercicio: 
                TarjetaAudio.color-acento-contenido.bg-white.mb-3.text-start(
                      texto=" I want water and another banana. "
                      :audio="require('@/assets/audio/104.mp3')"
                      )
        .col-lg-6
          .tarjeta-avatar-b.mb-5
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/temas/25.svg' alt='AvatarTop')
            .tarjeta.color-acento-botones
              .p-4
                p
                  span Corto → ʊ 
                    br
                    | <b>Full, put, should, good, room.</b>
                  br
                  | Ejercicio: 
                TarjetaAudio.color-acento-contenido.bg-white.mb-3.text-start(
                      texto=" I would if I could, but I don't know if I should."
                      :audio="require('@/assets/audio/105.mp3')"
                      )
    h3(data-aos='fade-right') La Y como vocal y consonante
    p.mb-5(data-aos='fade-right') Tenga en cuenta que la <b>Y /uai/</b> es tradicionalmente considerada una consonante, pero, dependiendo de la palabra en la que se encuentre, a veces también representa un sonido vocálico:
    .titulo-sexto.color-acento-contenido
      h5 Tabla 7 
      span La Y como vocal y consonante
    .row.justify-content-center.mb-3
      .col-lg-5.mb-lg-0.mb-3
        .tarjeta.bg-tarjeta-v.h-100.p-4
          .d-lg-flex.align-items-start
            img(src='@/assets/curso/temas/y.svg' alt='AvatarTop' style='width: 44px').me-3
            .content.w-100
              p.fw-bold.text-white.mb-3 La Y suena como una vocal cuando:
              .tarjeta.color-acento-botones.p-2.rounded-2.mb-3
                h4.mb-0.fw-bold No hay otra vocal en la palabra
              TarjetaAudio.color-acento-contenido.bg-white.mb-3.text-start(
                texto="dry, fly, shy, cry, gym, cyst. "
                :audio="require('@/assets/audio/106.mp3')"
                )
              .tarjeta.color-acento-botones.p-2.rounded-2.mb-3
                h4.mb-0.fw-bold Está ubicada al final de la palabra
              TarjetaAudio.color-acento-contenido.bg-white.mb-3.text-start(
                texto="busy, glory, unify, July, money, essay"
                :audio="require('@/assets/audio/107.mp3')"
                )
              .tarjeta.color-acento-botones.p-2.rounded-2.mb-3
                h4.mb-0.fw-bold Está ubicada al final de una sílaba
              TarjetaAudio.color-acento-contenido.bg-white.mb-3.text-start(
                texto="type, lyrics, syrup, dynamite, anonymous."
                :audio="require('@/assets/audio/108.mp3')"
                )
              .tarjeta.color-acento-botones.p-2.rounded-2.mb-3
                h4.mb-0.fw-bold Está ubicada en la mitad de una sílaba
              TarjetaAudio.color-acento-contenido.bg-white.mb-3.text-start(
                texto="keys, system, hymn, antonym, idyll."
                :audio="require('@/assets/audio/109.mp3')"
                )
      .col-lg-5
        .tarjeta.bg-tarjeta-v.h-100.p-4
          .d-lg-flex.align-items-start
            img(src='@/assets/curso/temas/y.svg' alt='AvatarTop' style='width: 44px').me-3
            .content
              p.fw-bold.text-white La Y suena como una consonante cuando:
              .tarjeta.color-acento-botones.p-2.rounded-2.mb-3
                h4.mb-0 Está ubicada al principio de la palabra
              TarjetaAudio.color-acento-contenido.bg-white.mb-3.text-start(
                texto="you, yacht, yelling, yolk, yard, yesterday."
                :audio="require('@/assets/audio/110.mp3')"
                )
              .tarjeta.color-acento-botones.p-2.rounded-2.mb-3
                h4.mb-0 Está ubicada al principio de una sílaba
              TarjetaAudio.color-acento-contenido.bg-white.mb-3.text-start(
                texto="layer, kayak, buying, beyond."
                :audio="require('@/assets/audio/111.mp3')"
                )
              p.text-white Es por este sonido de la 
                span.r-4.fst-italic Y
                | , al principio de la palabra o al principio de la sílaba, que es tan particular y no puede ser reemplazada por otras letras, que la 
                span.r-4.fst-italic Y 
                | es considerada tradicionalmente una consonante (sin importar que se encuentre con mayor frecuencia como una vocal). 
    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.2 Colors/colours
    p.mb-5(data-aos='fade-right') Al continuar con los conceptos y vocabulario básico, es importante reconocer los nombres de los colores en inglés:
    .titulo-sexto.color-acento-contenido
      h5 Tabla 8
      span Colors
    SlyderF.mb-5(columnas="col-lg-1 col-xl-3")
      .tarjeta.p-4.d-flex.align-items-center(:style="{'background-image': `url(${require('@/assets/curso/temas/26.jpg')})`}" style='height: 394px')
        .tarjeta.tarjeta-bg.bg-white.p-3.w-100
          Audio.color-acento-contenido.mb-2.m-auto(:audio="require('@/assets/audio/112.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold Yellow
            br
            | Amarillo
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-center(:style="{'background-image': `url(${require('@/assets/curso/temas/27.jpg')})`}" style='height: 394px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-contenido.mb-2.m-auto(:audio="require('@/assets/audio/113.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold Orange
            br
            | Naranja
      .tarjeta.p-4.d-flex.align-items-center(:style="{'background-image': `url(${require('@/assets/curso/temas/28.jpg')})`}" style='height: 394px')
        .tarjeta.tarjeta-bg.bg-white.p-3.w-100
          Audio.color-acento-contenido.mb-2.m-auto(:audio="require('@/assets/audio/114.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold Red
            br
            | Rojo
      .tarjeta.p-4.d-flex.align-items-center(:style="{'background-image': `url(${require('@/assets/curso/temas/29.jpg')})`}" style='height: 394px')
        .tarjeta.tarjeta-bg.bg-white.p-3.w-100
          Audio.color-acento-contenido.mb-2.m-auto(:audio="require('@/assets/audio/115.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold Pink
            br
            | Rosado
            br
            | Rosa
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-center(:style="{'background-image': `url(${require('@/assets/curso/temas/30.jpg')})`}" style='height: 394px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-contenido.mb-2.m-auto(:audio="require('@/assets/audio/116.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold Purple
            br
            | Morado
            br
            | Purpura 
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-center(:style="{'background-image': `url(${require('@/assets/curso/temas/31.jpg')})`}" style='height: 394px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-contenido.mb-2.m-auto(:audio="require('@/assets/audio/117.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold Blue
            br
            | Azul
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-center(:style="{'background-image': `url(${require('@/assets/curso/temas/32.jpg')})`}" style='height: 394px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-contenido.mb-2.m-auto(:audio="require('@/assets/audio/118.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold Green
            br
            | Verde
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-center(:style="{'background-image': `url(${require('@/assets/curso/temas/33.jpg')})`}" style='height: 394px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-contenido.mb-2.m-auto(:audio="require('@/assets/audio/119.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold White
            br
            | Blanco
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-center(:style="{'background-image': `url(${require('@/assets/curso/temas/34.jpg')})`}" style='height: 394px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-contenido.mb-2.m-auto(:audio="require('@/assets/audio/120.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold Black
            br
            | Negro
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-center(:style="{'background-image': `url(${require('@/assets/curso/temas/35.jpg')})`}" style='height: 394px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-contenido.mb-2.m-auto(:audio="require('@/assets/audio/121.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold Brown
            br
            | Marrón
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-center(:style="{'background-image': `url(${require('@/assets/curso/temas/36.jpg')})`}" style='height: 394px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-contenido.mb-2.m-auto(:audio="require('@/assets/audio/122.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold Gray/grey

            br
            | Gris
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-center(:style="{'background-image': `url(${require('@/assets/curso/temas/37.jpg')})`}" style='height: 394px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-contenido.m-auto(:audio="require('@/assets/audio/123.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold Silver
            br
            | Plata
    .row.justify-content-center.align-items-end.mb-5
      .col-lg-4.col-8(data-aos='fade-right').mb-3.mb-lg-0
        img.w-100(src='@/assets/curso/temas/39.png', alt='Texto que describa la imagen')
        .tarjeta.color-secundario.rounded-0.p-3
          p.mb-0.text-center ¿Cuál es la diferencia entre 
            span.r-3.fst-italic gray 
            | y 
            span.r-3.fst-italic grey?
      .col-lg-5
        p 
          span.r-3.fst-italic Gray 
          | es ampliamente usado en el inglés americano, en cambio, 
          span.r-3.fst-italic grey 
          | es usado con más frecuencia en el inglés británico. Pasa lo mismo con la palabra <b>“color”</b>, la cual se escribe 
          span.r-3.fst-italic color 
          | en inglés americano y 
          span.r-3.fst-italic colour 
          | en inglés británico:
    .row.justify-content-center.mb-5.g-0
      .col-lg-3
        .bg-tarjeta-v.p-4.text-white.h-100
          p Español:
            br
            |¿Cuál es tu color favorito?
            br
            |Mi color favorito es el gris.
      .col-lg-9
        .bg--4-claro.p-4
          .row.justify-content-center
            .col-lg-6.mb-3.mb-lg-0
              .d-flex.align-items-center
                img(src='@/assets/curso/temas/40.svg', alt='Texto que describa la imagen' style='width:85px').me-3
                .content
                  h4 Inglés americano:
                  TarjetaAudio.color-acento-contenido.bg-white.mb-3.text-start(
                    texto="What is your favorite color?"
                    :audio="require('@/assets/audio/124.mp3')"
                    )
                  TarjetaAudio.color-acento-contenido.bg-white.mb-3.text-start(
                    texto="My favorite color is gray"
                    :audio="require('@/assets/audio/125.mp3')"
                    )
            .col-lg-6.mb-3.mb-lg-0
              .d-flex.align-items-center
                img(src='@/assets/curso/temas/41.svg', alt='Texto que describa la imagen' style='width:85px').me-3
                .content
                  h4 Inglés británico:
                  TarjetaAudio.color-acento-contenido.bg-white.mb-3.text-start(
                    texto="What is your favorite colour?"
                    :audio="require('@/assets/audio/126.mp3')"
                    )
                  TarjetaAudio.color-acento-contenido.bg-white.mb-3.text-start(
                    texto="My favorite colour is grey"
                    :audio="require('@/assets/audio/127.mp3')"
                    )
    Separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos='fade-left')
      h2 4.3 Números en inglés
    p.mb-5(data-aos='fade-right') Los números en inglés son muy similares a los números en español, en su mayor parte; sin embargo, hay elementos propios del inglés que resaltan al trabajarlos:
    .row.justify-content-center.mb-5
      .col-lg-4
        img(data-aos='zoom-in-up')(src='@/assets/curso/temas/42.jpg', alt='Texto que describa la imagen').w-100
      .col-lg-8
        .tarjeta.bg-tarjeta-v.px-5.py-3(data-aos='zoom')
          SlyderA(tipo='b')
            div
              .tarjeta.bg--4-claro.p-5
                h4.text-center Números del cero al diez 
                .row.justify-content-center.mb-5
                  .col-lg-6
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3.text-start(
                    texto="0 → Zero/Oh"
                    :audio="require('@/assets/audio/128.mp3')"
                    )
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3.text-start(
                    texto="1 → One"
                    :audio="require('@/assets/audio/129.mp3')"
                    )
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3.text-start(
                    texto="2 → Two"
                    :audio="require('@/assets/audio/130.mp3')"
                    )
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3.text-start(
                    texto="3 → Three"
                    :audio="require('@/assets/audio/131.mp3')"
                    )
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3.text-start(
                    texto="4 → Four"
                    :audio="require('@/assets/audio/132.mp3')"
                    )
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3.text-start(
                    texto="5 → Five"
                    :audio="require('@/assets/audio/133.mp3')"
                    )
                  .col-lg-6
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3.text-start(
                      texto="6 → Six"
                      :audio="require('@/assets/audio/134.mp3')"
                      )
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3.text-start(
                      texto="7 → Seven"
                      :audio="require('@/assets/audio/135.mp3')"
                      )
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3.text-start(
                      texto="8 → Eight"
                      :audio="require('@/assets/audio/136.mp3')"
                      )
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3.text-start(
                      texto="9 → Nine"
                      :audio="require('@/assets/audio/137.mp3')"
                      )
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3.text-start(
                      texto="10 → Ten"
                      :audio="require('@/assets/audio/138.mp3')"
                      )
                    TarjetaAudio.color-primario.bg-white.mb-3.text-start(
                      texto="Todos"
                      :audio="require('@/assets/audio/139.mp3')"
                      )
            div
              .tarjeta.bg--4-claro.p-5
                h4 El número cero (0) puede llamarse de dos formas:
                p.mb-3 
                  span.r-3.fst-italic Zero/Oh 
                  | (se pronuncia como la letra O del alfabeto) 
                  br
                  br
                  |Comúnmente, se usa el término 
                  span.r-3.fst-italic “zero” 
                  | en contextos matemáticos y científicos. Por el contrario, 
                  span.r-3.fst-italic “oh” 
                  | es más común en contextos como el dictado de un número telefónico o un código:
                TarjetaAudio.color-acento-contenido.bg-white.mb-3.text-start(
                      texto="My phone number is three-one-oh-seven-eight-nine-four-five-one-four."
                      :audio="require('@/assets/audio/140.mp3')"
                      )
                p.mb-3 Mi número de teléfono es 3-1-0-7-8-9-4-5-1-4.
                TarjetaAudio.color-acento-contenido.bg-white.mb-3.text-start(
                      texto="My pin code is one - oh - two- oh."
                      :audio="require('@/assets/audio/141.mp3')"
                      )
                p.mb-3 Mi código pin es 1-0-2-0
            div
              .tarjeta.bg--4-claro.p-5
                h4.text-center Números del once al diecinueve
                .row
                  .col-lg-6
                      TarjetaAudio.color-acento-contenido.bg-white.mb-3.text-start(
                      texto="11 → Eleven"
                      :audio="require('@/assets/audio/142.mp3')"
                      )
                      TarjetaAudio.color-acento-contenido.bg-white.mb-3.text-start(
                      texto="12 → Twelve"
                      :audio="require('@/assets/audio/143.mp3')"
                      )
                      TarjetaAudio.color-acento-contenido.bg-white.mb-3.text-start(
                      texto="13 → Thirteen"
                      :audio="require('@/assets/audio/144.mp3')"
                      )
                      TarjetaAudio.color-acento-contenido.bg-white.mb-3.text-start(
                      texto="14 → Fourteen"
                      :audio="require('@/assets/audio/145.mp3')"
                      )
                      TarjetaAudio.color-acento-contenido.bg-white.mb-3.text-start(
                      texto="15 → Fifteen"
                      :audio="require('@/assets/audio/146.mp3')"
                      )
                  .col-lg-6
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3.text-start(
                    texto="16 → Sixteen"
                    :audio="require('@/assets/audio/147.mp3')"
                    )
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3.text-start(
                      texto="17 → Seventeen"
                      :audio="require('@/assets/audio/148.mp3')"
                      )
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3.text-start(
                      texto="18 → Eighteen"
                      :audio="require('@/assets/audio/149.mp3')"
                      )
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3.text-start(
                      texto="19 → Nineteen"
                      :audio="require('@/assets/audio/150.mp3')"
                      )
                    TarjetaAudio.color-primario.bg-white.mb-3.text-start(
                      texto="Todos"
                      :audio="require('@/assets/audio/151.mp3')"
                      )
            div
              .tarjeta.bg--4-claro.p-5
                h4.text-center Números del veinte al noventa y nueve
                p.text-center Para trabajar los números del 20 hasta el 99, se pueden reutilizar los números del 1 al 9 y, de esa manera, sólo memorizar las decenas (20, 30, 40, 50, 60…).
                .row.justify-content-center
                    .col-lg-6
                        TarjetaAudio.color-acento-contenido.bg-white.mb-3.text-start(
                        texto="20 → Twenty"
                        :audio="require('@/assets/audio/152.mp3')"
                        )
                        TarjetaAudio.color-acento-contenido.bg-white.mb-3.text-start(
                        texto="30 → Thirty"
                        :audio="require('@/assets/audio/153.mp3')"
                        )
                        TarjetaAudio.color-acento-contenido.bg-white.mb-3.text-start(
                        texto="40 → Forty"
                        :audio="require('@/assets/audio/154.mp3')"
                        )
                        TarjetaAudio.color-acento-contenido.bg-white.mb-3.text-start(
                        texto="50 → Fifty"
                        :audio="require('@/assets/audio/155.mp3')"
                        )
                    .col-lg-6
                      TarjetaAudio.color-acento-contenido.bg-white.mb-3.text-start(
                      texto="60 → Sixty eight"
                      :audio="require('@/assets/audio/156.mp3')"
                      )
                      TarjetaAudio.color-acento-contenido.bg-white.mb-3.text-start(
                        texto="70 → Seventy"
                        :audio="require('@/assets/audio/157.mp3')"
                        )
                      TarjetaAudio.color-acento-contenido.bg-white.mb-3.text-start(
                        texto="80 → Eighty"
                        :audio="require('@/assets/audio/158.mp3')"
                        )
                      TarjetaAudio.color-acento-contenido.bg-white.mb-3.text-start(
                        texto="90 → Ninety"
                        :audio="require('@/assets/audio/159.mp3')"
                        )
                    .col-lg-6
                      TarjetaAudio.color-primario.bg-white.mb-3.text-start(
                        texto="Todos"
                        :audio="require('@/assets/audio/160.mp3')"
                        )

            div
              .tarjeta.bg--4-claro.p-5
                h4.text-center.mb-3 Las decenas…
                p.text-center El número 20 es 
                  span.r-3.fst-italic twenty 
                  | en inglés, entonces, si queremos mostrar el número 25, solo basta recordar el número 5 que se escribe 
                  span.r-3.fst-italic five  
                  |  y agregarlo, por lo tanto, el número 25 en inglés se leería 
                  span.r-3.fst-italic twenty-five, 
                  | y así sucesivamente si se quiere hablar de cualquier número entre 20 y 99. En estos números, solo se debe usar la decena y el número del 1 al 9 correspondiente.
                .row.justify-content-center
                  .col-lg-4
                      TarjetaAudio.color-acento-contenido.bg-white.mb-3.text-start(
                        texto="25 → Twenty-five"
                        :audio="require('@/assets/audio/168.mp3')"
                        )
                      h4.fst-italic 20: Twenty
                        br
                        |5: Five
                  .col-lg-4
                      TarjetaAudio.color-acento-contenido.bg-white.mb-3.text-start(
                        texto="68 → Sixty eight"
                        :audio="require('@/assets/audio/169.mp3')"
                        )
                      h4.fst-italic 68: Sixty
                        br
                        |8: Eight
                  .col-lg-4
                      TarjetaAudio.color-acento-contenido.bg-white.mb-3.text-start(
                        texto="99 → Ninety-nine"
                        :audio="require('@/assets/audio/170.mp3')"
                        )
                      h4.fst-italic 90: Ninety
                        br
                        |9: Nine
            div
              .tarjeta.bg--4-claro.p-5
                h4.text-center.fw-bold
                  span.tarjeta.color-acento-contenido.rounded-0.p-2.px-5 Warning!/¡Advertencia!
                p.text-center Si bien se ve una similitud en los números de uno y dos dígitos que podría llegar a parecer un patrón en el que solo se agrega una terminación como -teen o -ty (como, por ejemplo, 6 
                  span.r-3.fst-italic six,
                  |  16 
                  span.r-3.fst-italic sixteen 
                  | y 60 
                  span.r-3.fst-italic sixty
                  |), se debe ser muy cuidadoso con la ortografía de los números a la hora de escribirlos, porque algunos sufren cambios que van más allá de su terminación:
                .row.justify-content-center
                  .col-lg-4
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3.text-start(
                      texto="3 → Three"
                      :audio="require('@/assets/audio/131.mp3')"
                      ) 
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3.text-start(
                      texto="13 → Thirteen"
                      :audio="require('@/assets/audio/144.mp3')"
                      ) 
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3.text-start(
                      texto="30 → Thirty "
                      :audio="require('@/assets/audio/153.mp3')"
                      ) 
                  .col-lg-4
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3.text-start(
                      texto="4 → Four"
                      :audio="require('@/assets/audio/132.mp3')"
                      ) 
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3.text-start(
                      texto="14 → Fourteen"
                      :audio="require('@/assets/audio/145.mp3')"
                      ) 
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3.text-start(
                      texto="40 → Forty"
                      :audio="require('@/assets/audio/154.mp3')"
                      ) 
                  .col-lg-4
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3.text-start(
                      texto="5 → Five"
                      :audio="require('@/assets/audio/133.mp3')"
                      ) 
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3.text-start(
                      texto="15 → Fifteen"
                      :audio="require('@/assets/audio/146.mp3')"
                      ) 
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3.text-start(
                      texto="50 → Fifty"
                      :audio="require('@/assets/audio/155.mp3')"
                      ) 
            div
              .tarjeta.bg--4-claro.p-5
                h4.text-center Las centenas
                p.text-center El uso de números más grandes en inglés se puede simplificar si se aprende a leerlos en lugar de memorizarlos. 
                  br
                  br
                  |Los números del 100 al 999 siguen una lógica bastante sencilla.
                .row.justify-content-center.mb-3
                  .col-lg-6
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3.text-start(
                      texto="100 → One hundred"
                      :audio="require('@/assets/audio/161.mp3')"
                      )
                  .col-lg-6
                    p 
                      span.r-3.fst-italic One 
                      | → cantidad de centenas (1 sola centena).
                      br
                      span.r-3.fst-italic Hundred 
                      | → palabra para las centenas en inglés.
                .row.justify-content-center.mb-3
                  .col-lg-6
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3.text-start(
                      texto="500 → Five hundred"
                      :audio="require('@/assets/audio/162.mp3')"
                      )
                  .col-lg-6
                    p 
                      span.r-3.fst-italic Five
                      | → 5 centenas.
                      br
                      span.r-3.fst-italic Hundred 
                      | → palabra para las centenas en inglés.
                .row.justify-content-center.mb-3
                  .col-lg-6
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3.text-start(
                      texto="800 → Eight hundred"
                      :audio="require('@/assets/audio/163.mp3')"
                      )
                  .col-lg-6
                    p 
                      span.r-3.fst-italic Eight  
                      | → 8 centenas.
                      br
                      span.r-3.fst-italic Hundred 
                      | → palabra para las centenas en inglés. 
            
            div
              .tarjeta.bg--4-claro.p-5
                h4.text-center Ejemplifiquemos las centenas:
                .tarjeta.color-acento-contenido--borde.p-4.bg-transparent.border-2.mb-3
                  .row.justify-content-center
                    .col-lg-6
                      p.text-center Ahora bien, si se debe hablar de números como el 642, no basta con solo saber leer el 600, es necesario conocer un poco más. El 642 se puede dividir en centenas, decenas y unidades, para facilitar su lectura:
                    .col-lg-6
                      p
                        span.r-3.fst-italic 600 → Six hundred
                          br
                          |40 → Forty
                          br
                          |2 → Two
                        br
                        |Por lo tanto, el 642 en inglés se leería:
                      TarjetaAudio.color-acento-contenido.bg-white.mb-3.text-start(
                        texto="Six hundred forty two."
                        :audio="require('@/assets/audio/164.mp3')"
                        )
                .tarjeta.color-acento-contenido--borde.p-4.bg-transparent.border-2
                  .row.justify-content-center
                    .col-lg-6
                      p.text-center Lo anterior no aplica cuando las decenas no pasan de 20. Para este caso, se usará como ejemplo el número 214: 
                    .col-lg-6
                      p
                        span.r-3.fst-italic 200 → Two hundred
                          br
                          |14 → Fourteen
                        br
                        |Así, el número 214 se leería:
                      TarjetaAudio.color-acento-contenido.bg-white.mb-3.text-start(
                        texto="Two hundred fourteen."
                        :audio="require('@/assets/audio/165.mp3')"
                        )
            div
              .tarjeta.bg--4-claro.p-5
                h4.text-center.mb-3 Otros ejemplos:
                .row.justify-content-center
                  .col-lg-6
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3.text-start(
                        texto="156 → One hundred fifty six."
                        :audio="require('@/assets/audio/166.mp3')"
                        )
                    h4.fst-italic 100 → One hundred
                      br
                      |50 → Fifty
                      br
                      |6 → Six 
                  .col-lg-6
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3.text-start(
                        texto="904 → Nine hundred four"
                        :audio="require('@/assets/audio/167.mp3')"
                        )
                    h4.fst-italic 900 → Nine hundred
                      br
                      |4 → Four
                p.text-center AHORA, PODEMOS PRACTICAR CON EL NÚMERO DE IDENTIFICACIÓN, TELÉFONO, EDAD…  Y TODO LO QUE SE NOS OCURRA.
                

            







</template>

<script>
export default {
  name: 'Tema4',
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
.bg-tarjeta-v
  background-color: #6b8dff
.tarjeta-bg
  background-repeat: no repeat
  background-size: cover
  background-position: center
</style>
