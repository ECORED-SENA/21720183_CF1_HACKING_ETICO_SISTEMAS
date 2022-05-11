<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Leyes y normas de la seguridad de información

    .row.justify-content-center 
      .col-md-10.col-12
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/img01.png')})`}"
          )
          .bloque-texto-g__texto.p-4(data-aos="fade-left")
            p.mb-0 Cada país puede tipificar los delitos informáticos de forma diferente, pero en general cuando se contrata un servicio de <em>hacking</em> ético los límites están más determinados por lo que la organización esté buscando, si simplemente quiere conocer sus fallas o que también las exploten y saber el impacto real de esta actividad que, como se decía hace un momento, se está anticipando a que un atacante la pueda llevar a cabo.
    separador

    #t_2_1.titulo-segundo.color-acento-contenido.p-0(data-aos="fade-right")
      h2 2.1 Aspectos legales de <em>hacking</em> ético

    p.mb-5 La siguiente historieta recrea algunos aspectos legales del <em>hacking</em> ético, revísela.

    .tarjeta.tarjeta--azul.mb-5.pt-5
      LineaTiempoC.color-primario(text-small)
        .row(titulo="1")
          .col-md-12
            figure(data-aos="fade-right")
              img(src='@/assets/curso/tema2/img02.png')
        .row(titulo="2")
          .col-md-12
            figure(data-aos="fade-right")
              img(src='@/assets/curso/tema2/img03.png')
        .row(titulo="3")
          .col-md-12
            figure(data-aos="fade-right")
              img(src='@/assets/curso/tema2/img04.png')
        .row(titulo="4")
          .col-md-12
            figure(data-aos="fade-right")
              img(src='@/assets/curso/tema2/img05.png')
        .row(titulo="5")
          .col-md-12
            figure(data-aos="fade-right")
              img(src='@/assets/curso/tema2/img06.png')
        .row(titulo="6")
          .col-md-12
            figure(data-aos="fade-right")
              img(src='@/assets/curso/tema2/img07.png')
        .row(titulo="7")
          .col-md-12
            figure(data-aos="fade-right")
              img(src='@/assets/curso/tema2/img08.png')

    p.mb-5 Por otra parte, analice los problemas profesionales y códigos de ética para el <em>hacking</em> ético.

  .container.BGIMG14.px-4.px-md-5
    .row.align-items-center
      .col-md-4.col-8.mt-5.mb-2
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema2/img10.svg')
      .col-md-12.mb-4
        .row.align-items-center
          .col-md-8.col-12
            p Los problemas profesionales del <em>hacking</em> ético incluyen un posible desempeño ineficaz en el trabajo, el <em>hacking</em> ético puede estar limitado por la sensibilidad de la información involucrada en la organización del cliente. Los clientes tienden a imponer requisitos y límites a las actividades del <em>hacker</em> ético.
            p Para que el <em>hacking</em> ético se desempeñe adecuadamente, puede ser necesario el acceso a todo el sistema o la red, debido a la necesidad de profesionalidad, el <em>hacker</em> ético no debe violar los límites impuestos por el cliente para reducir al mínimo las cuestiones profesionales.
            p Las empresas son hostiles a la investigación en materia de seguridad con una frecuencia alarmante. He aquí un ejemplo de cómo una compañía de drones DJI, que tiene un programa de control de errores, amenazó a un investigador con presentar cargos por violar la Ley de fraude y abuso informático por presentar a la compañía una vulnerabilidad y PoC. Otra empresa hostil, River City Media, demandó a un investigador por localizar una gran operación de <em>spam</em> originada en sus servidores. El director de seguridad de Oracle también escribió una famosa carta hostil sobre cómo la ingeniería inversa de su <em>software</em> viola su licencia y lo demandarán por reportar errores.
          .col-md-4.col-8 
            figure(data-aos="fade-right")
              img(src='@/assets/curso/tema2/img11.png')
      .col-md-2.col-4.mb-4
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema2/img12.svg')
      .col-md-12.mb-5
        .row.align-items-center 
          .col-md-5.col-10 
            figure(data-aos="fade-right")
              img(src='@/assets/curso/tema2/img13.png')
          .col-md-7.col-12
            p Los códigos de ética o conducta para el <em>hacking</em> ético se centran en los deberes, responsabilidades y límites del <em>hacker</em> ético en el desempeño de su trabajo. El <em>hacker</em> ético se asegura de que el sistema o la red del cliente se evalúa adecuadamente para los problemas de seguridad y las vulnerabilidades.
            p Debido a la naturaleza del <em>hacking</em> ético no es de extrañar que el <em>hacker</em> ético pueda encontrarse con información sensible, personal, confidencial o de propiedad exclusiva. A este respecto, el código de ética de la piratería ética debería guiar las acciones del <em>hacker</em> ético en el manejo de esa información. El código de ética debe centrarse en la protección del sistema o la red del cliente, así como en la eficacia del <em>hacker</em> ético en el desempeño de su trabajo.
            p ¿Qué hace que el <em>hacking</em> ético sea "ético"? A continuación, verá cómo la piratería ética puede ayudar a proteger a las empresas de los ataques, así como examinar las formas en que puede asegurarse de que está trabajando con auténticos <em>hackers</em> éticos.
    .row.justify-content-center 
      .col-md-10.col-12
        LineaTiempoD.color-acento-botones 
          .row.justify-content-center(numero="1" titulo="Realizado con consentimiento")
            .col-md-11
              p el <em>hacking</em> ético siempre se realiza con consentimiento. Si bien el objeto de los compromisos es reproducir con precisión las tácticas, técnicas y procedimientos utilizados por los ciberdelincuentes, nunca se diseña para que sea malicioso y tiene por objeto evitar daños y trastornos en las empresas. Antes de llevar a cabo una evaluación, una empresa profesional de seguridad cibernética se asegurará de que exista un acuerdo oficial que defina claramente el alcance de las evaluaciones y mantenga la confidencialidad del cliente.
            .col-md-11
              figure(data-aos="fade-right")
                img(src='@/assets/curso/tema2/img14.png')
          .row.justify-content-center(numero="2" titulo="Realizada por expertos")
            .col-md-11
              p : el pirateo ético siempre debe ser realizado por profesionales capacitados que comprendan las últimas herramientas y técnicas de piratería informática y que realicen evaluaciones según las normas técnicas, legales y éticas más elevadas.
            .col-md-11
              figure(data-aos="fade-right")
                img(src='@/assets/curso/tema2/img15.png')
          .row.justify-content-center(numero="3" titulo="Realizadas por consultores con certificación de seguridad")
            .col-md-11
              p al encargar una evaluación ética del <em>hacking</em> es importante tener plena confianza en las personas involucradas. Cuando una prueba con bolígrafo implica el acceso a información altamente confidencial y/o clasificada, las empresas pueden considerar garantías adicionales, como el uso de probadores con una autorización de seguridad de alto nivel.
            .col-md-11
              figure(data-aos="fade-right")
                img(src='@/assets/curso/tema2/img16.png')
          .row.justify-content-center(numero="4" titulo="Realizada de acuerdo con las leyes actuales")
            .col-md-11
              p hay muchos aspectos legales que deben ser considerados cuando se experimenta el <em>hacking</em> ético. Los probadores pueden, a través del proceso normal de un compromiso, acceder a datos altamente sensibles. Para lograr un objetivo acordado pueden tener la necesidad de extraer esta información.
            .col-md-11
              figure(data-aos="fade-right")
                img(src='@/assets/curso/tema2/img17.png')
          .row.justify-content-center(numero="5" titulo="Realizado de forma transparente")
            .col-md-11
              p es esencial que las evaluaciones éticas del <em>hacking</em> sean lo más transparentes posible. Un <em>hacker</em> ético siempre compartirá los hallazgos y ofrecerá consejos de reparación para asegurar que las vulnerabilidades sean reportadas y tratadas. Debe estar localizable durante los compromisos y proporcionar informes escritos claros para resumir las conclusiones y recomendaciones. Hay muchas cosas a considerar cuando se encarga un <em>hacker</em> ético para su negocio. En cualquier caso, es una buena idea trabajar con un proveedor muy experimentado que esté dispuesto a hablarle de los riesgos y a asegurarse de que todo el proceso se lleve a cabo de la forma más segura posible y ofrezca resultados tangibles.
            .col-md-11
              figure(data-aos="fade-right")
                img(src='@/assets/curso/tema2/img18.png')



</template>

<script>
export default {
  name: 'Tema2',
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
