<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.BGIMG01.align-items-center.mb-5.p-4
      .col-md-9.col-11
        figure.mb-3(data-aos="fade-right")
          img(src='@/assets/curso/introduccion/img01.svg')  
      .col-lg-10.col-md-8
        p El <em>software</em> y el <em>hardware</em> son indicadores del crecimiento T.I en el mundo y con este crecimiento la ciberdelincuencia también lo hace exponencialmente siguiendo sus pasos. Las malas prácticas, configuraciones incorrectas y uso inadecuado de las tecnologías son procesos que se ejecutan día a día enmarcados por los ataques informáticos. Comprender el ecosistema de los ciberdelincuentes contribuye a mitigar los ataques de gran y pequeña escala, logrando minimizar la afectación de las organizaciones. A continuación, puede revisar la introducción de este componente.
      .col-lg-2.col-md-4.col-6
        figure(data-aos="fade-right")
          img(src='@/assets/curso/introduccion/img02.svg')  
      .col-md-2
      .col-md-10.col-11
        figure.mb-5(data-aos="fade-right")
          img(src='@/assets/curso/introduccion/img03.svg')  
      .col-md-12     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/r26Fo97eKmA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            

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
