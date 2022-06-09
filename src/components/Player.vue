<template lang="pug">
  .player
    .tarjeta.color-acento-contenido--borde.p-5.border-4.rounded-pill
      .d-flex.justify-content-between
        h3 Texto de muestra
        button.rounded-circle.color-acento-contenido.p-4(@click="setActive")
          .icono(:class="{ active }")
            i
</template>

<script>
export default {
  name: 'Player',
  data() {
    return {
      active: false,
    }
  },
  methods: {
    setActive() {
      this.active = !this.active
    },
  },
}
</script>

<style lang="sass">
h3
  color: $color-acento-contenido
  font-style: italic
button
  transition: transform .3s ease-in-out
  &.color-primario
    background-color: $color-primario
  &.color-secundario
    background-color: $color-secundario
  &.color-acento-contenido
    background-color: $color-acento-contenido
    i
      color: $white
  &.color-acento-botones
    background-color: $color-acento-botones
button
  &:hover
    transform: scale(1.1)
.icono
  &.active
    i
      &:before
        content: "\\f00c"
</style>
