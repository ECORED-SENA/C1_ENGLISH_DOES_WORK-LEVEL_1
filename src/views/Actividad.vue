<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-tasks" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
                
</template>

<script>
export default {
  name: 'Actividad',
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
}
</script>

<style lang="sass"></style>
