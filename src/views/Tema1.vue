<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Fundamentos de <em>hacking</em>

    .row.justify-content-center.align-items-center.BGIMG02.mb-4
      .col-md-3.col-6.p-0.ms-1
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img02.png')  
      .col-md-8.col-12
        p Los sistemas de gestión, planes de continuidad del negocio son de vital importancia; sin embargo, los aspectos técnicos son la base sostenible de la ciberseguridad y de la seguridad informática. Los ataques informáticos lamentablemente pueden ser llevados a cabo por personas sin gran experiencia, quienes por medio de herramientas básicas pueden conseguir objetivos de fácil acceso. Es importante resaltar que tener conocimiento del modus operandi de la ciberdelincuencia, articulado a conocimientos técnicos marcan la diferencia en cargos relacionados con la ciberseguridad y la seguridad informática, ya que de esta manera se puede evidenciar un ataque difícil de ser detectado. 
        p Por lo anterior, la inversión en capacitación de personal es indiscutiblemente el pilar fundamental de toda implementación de seguridad, teniendo en cuenta que adquirir sistemas de seguridad con altas capacidades y características lleva a las organizaciones a entrar en un estado de falsa seguridad, dando un segundo lugar a las capacidades humanas.
      
    separador

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1	Conceptos y generalidades (triada de la seguridad)

    p.mb-5 Cuando se escucha la palabra “<em>hacker</em>” en el mundo digital se ha asociado a prácticas indebidas por ciberdelincuentes, lo cual no es del todo cierto, ya que muchos de ellos se dedican a buenas prácticas en pro de salvaguardar la información de una persona, individuo u organización, poniendo a prueba todos sus organismos de control de seguridad, con el fin de determinar debilidades, amenazas y riesgos a los cuales pueden estar expuestos los sistemas de información, a esto comúnmente se le conoce como <b><em>hacking</em> ético</b> y, para conocerlo y apropiarlo debe conocer la terminología necesaria para que se determine la respectiva importancia de este tema, por ello, revise los conceptos más importantes.

    ImagenInfografica.color-acento-botones.mb-5
      template(v-slot:imagen)
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img03.svg')  
      .tarjeta.BG01.p-3(x="15.9%" y="60.4%")
        h5 Valor de <em>hacking</em>
        p A menudo se aduce como la razón o motivación para gastar el esfuerzo hacia un objetivo aparentemente inútil, el punto es que el objetivo logrado es un <em>hack</em>.
      .tarjeta.BG01.p-3(x="24.8%" y="27.8%")
        h5 Objetivo de la evaluación
        p no es más que el <em>target</em> al que se enfocará la evaluación de seguridad.
      .tarjeta.BG01.p-3(x="39.9%" y="7.8%")
        h5 Ataque
        p Un ciberataque es un asalto lanzado por los ciberdelincuentes que utilizan una o más computadoras contra una o varias computadoras o redes. Un ataque cibernético puede desactivar equipos maliciosamente, robar datos o utilizar un equipo dañado como punto de lanzamiento de otros ataques. Los ciberdelincuentes utilizan una variedad de métodos para lanzar un ataque cibernético, incluyendo <em>malware</em>, <em>phishing</em>, rescate, denegación de servicio, entre otros métodos.
      .tarjeta.BG01.p-3(x="60.2%" y="6.8%")
        h5 <em>Exploit</em>
        p Un <em>exploit</em> es considerado un código o líneas de comando, que aprovechan vulnerabilidades de <em>software</em> o un fallo de seguridad, algunos investigadores de la seguridad también lo definen como una amenaza de prueba de concepto o los agentes malintencionados para utilizarlo en sus operaciones, cuando se utilizan, los exploits permiten a un
      .tarjeta.BG01.p-3(x="75.7%" y="26.4%")
        h5 Ataque de día cero
        p Un ataque de día cero, es un <em>exploit</em> que realiza un ciberataque y este ocurre el mismo día que se descubre una debilidad en el <em>software</em>, en ese momento es explotado antes de que una solución esté disponible por parte de su creador.
      .tarjeta.BG01.p-3(x="84%" y="61.4%")
        h5 Seguridad
        p La seguridad cibernética se utiliza para evitar las violaciones, robo, manipulación y alteración de la información, es la encargada de proteger la integridad de las redes y sistemas de los ataques que se puedan presentar aprovechando las vulnerabilidades de un sistema.

    p.mb-5 En la siguiente figura se presentan algunos de los conceptos importantes en el <b><em>hacking</em> ético</b>.

    .row.justify-content-center
      .col-md-10.col-12
        .titulo-sexto.color-acento-contenido.mb-5(data-aos="fade-right")
          h5 Figura 1
          span Conceptos importantes en el <em>hacking</em> ético
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img04.svg')  
    
    .row.justify-content-center.BGIMG03
      .col-md-9.col-10
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img06.svg')  
      .col-md-12.mt-5
        p Antes de entrar a hablar sobre los métodos efectivos de realizar un buen hacking ético debe de conocer y apropiar tres conceptos básicos de la seguridad de la información, que conforman el llamado triángulo o triada de la seguridad de la información, la cual se integra por la confidencialidad, integridad y disponibilidad, comúnmente conocida como la tríada CID (seguridad de la información), esta da el modelo base por el cual se incluye la terminología usada en seguridad, centrada en los datos y en la información, ver figura 2.
        

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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

<style lang="sass"></style>
