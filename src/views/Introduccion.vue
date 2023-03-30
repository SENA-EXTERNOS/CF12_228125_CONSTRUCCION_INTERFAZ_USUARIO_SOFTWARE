<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info.text-white
      h1 Introducción

    .row.justify-content-center
      p Apreciado aprendiz, bienvenido a este componente formativo, donde aprenderá a construir la interfaz gráfica de usuario, con el objetivo de establecer una buena experiencia de usuario, al momento de usar la aplicación.
      p En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.

    .row.mt-3
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/huI-scInu4Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption VIDEO 
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
