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

    #t_2_1.titulo-segundo.color-acento-contenido.p-0(data-aos="fade-right")
      h2 2.1 Aspectos legales de <em>hacking</em> ético

    p.mb-5 La siguiente historieta recrea algunos aspectos legales del <em>hacking</em> ético, revísela.

    .tarjeta.tarjeta--azul.mb-5.p-4
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
      .col-lg-5.col-md-6.col-8.mt-5.mb-4
        .row.align-items-center.mt-5.BGIMG15(data-aos="fade-right")
          .col-11.p-1
            .h4.ms-3.mb-0.text-white Problemas profesionales del #[i hacking] ético
          .col-1
            img.img05(src='@/assets/curso/tema1/img19.png')
      .col-md-12.mb-4
        .row.align-items-center
          .col-md-8.col-12
            p Los problemas profesionales del <em>hacking</em> ético incluyen un posible desempeño ineficaz en el trabajo, el <em>hacking</em> ético puede estar limitado por la sensibilidad de la información involucrada en la organización del cliente. Los clientes tienden a imponer requisitos y límites a las actividades del <em>hacker</em> ético.
            p Para que el <em>hacking</em> ético se desempeñe adecuadamente, puede ser necesario el acceso a todo el sistema o la red, debido a la necesidad de profesionalidad, el <em>hacker</em> ético no debe violar los límites impuestos por el cliente para reducir al mínimo las cuestiones profesionales.
            p Las empresas son hostiles a la investigación en materia de seguridad con una frecuencia alarmante. He aquí un ejemplo de cómo una compañía de drones DJI, que tiene un programa de control de errores, amenazó a un investigador con presentar cargos por violar la Ley de fraude y abuso informático por presentar a la compañía una vulnerabilidad y PoC. Otra empresa hostil, River City Media, demandó a un investigador por localizar una gran operación de <em>spam</em> originada en sus servidores. El director de seguridad de Oracle también escribió una famosa carta hostil sobre cómo la ingeniería inversa de su <em>software</em> viola su licencia y lo demandarán por reportar errores.
          .col-md-4.col-8 
            figure(data-aos="fade-right")
              img(src='@/assets/curso/tema2/img11.png')
      .col-lg-5.col-md-6.col-8
        .row.align-items-center.BGIMG15(data-aos="fade-right")
          .col-11.p-1
            .h4.ms-3.mb-0.text-white Códigos de ética
          .col-1
            img.img05(src='@/assets/curso/tema1/img19.png')
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
              img(src='@/assets/curso/tema2/img15.png')
          .row.justify-content-center(numero="2" titulo="Realizada por expertos")
            .col-md-11
              p : el pirateo ético siempre debe ser realizado por profesionales capacitados que comprendan las últimas herramientas y técnicas de piratería informática y que realicen evaluaciones según las normas técnicas, legales y éticas más elevadas.
            .col-md-11
              img(src='@/assets/curso/tema2/img16.png')
          .row.justify-content-center(numero="3" titulo="Realizadas por consultores con certificación de seguridad")
            .col-md-11
              p al encargar una evaluación ética del <em>hacking</em> es importante tener plena confianza en las personas involucradas. Cuando una prueba con bolígrafo implica el acceso a información altamente confidencial y/o clasificada, las empresas pueden considerar garantías adicionales, como el uso de probadores con una autorización de seguridad de alto nivel.
            .col-md-11
              img(src='@/assets/curso/tema2/img14.png')
          .row.justify-content-center(numero="4" titulo="Realizada de acuerdo con las leyes actuales")
            .col-md-11
              p hay muchos aspectos legales que deben ser considerados cuando se experimenta el <em>hacking</em> ético. Los probadores pueden, a través del proceso normal de un compromiso, acceder a datos altamente sensibles. Para lograr un objetivo acordado pueden tener la necesidad de extraer esta información.
            .col-md-11
              img(src='@/assets/curso/tema2/img17.png')
          .row.justify-content-center(numero="5" titulo="Realizado de forma transparente")
            .col-md-11
              p es esencial que las evaluaciones éticas del <em>hacking</em> sean lo más transparentes posible. Un <em>hacker</em> ético siempre compartirá los hallazgos y ofrecerá consejos de reparación para asegurar que las vulnerabilidades sean reportadas y tratadas. Debe estar localizable durante los compromisos y proporcionar informes escritos claros para resumir las conclusiones y recomendaciones. Hay muchas cosas a considerar cuando se encarga un <em>hacker</em> ético para su negocio. En cualquier caso, es una buena idea trabajar con un proveedor muy experimentado que esté dispuesto a hablarle de los riesgos y a asegurarse de que todo el proceso se lleve a cabo de la forma más segura posible y ofrezca resultados tangibles.
            .col-md-11
              img(src='@/assets/curso/tema2/img18.png')

  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #t_2_2.titulo-segundo.color-acento-contenido.p-0(data-aos="fade-right")
      h2 2.2 Normatividad legal vigente
    
    p La normatividad para que se pueda realizar hacking ético depende de la legislación del país donde se ejecute, en la siguiente figura se presentan algunas leyes que pueden permitirse y ser aplicadas a nivel global.

    .titulo-sexto.color-acento-contenido.mb-5(data-aos="fade-right")
      h5 Figura 5
      span Normatividad legal vigente

    figure.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/tema2/img19.svg')
    
    .BGIMG03.py-5.pe-5.mb-4
      p.mt-5.ms-5 A continuación, se realizará la descripción de cada una.
      .row.mb-5
        .col-lg-5.col-md-6.col-8
          .row.align-items-center.BGIMG15(data-aos="fade-right")
            .col-11.p-1
              .h4.ms-3.mb-0.text-white PCI (Payment Card Industry Security Standards)
            .col-1
              img.img05(src='@/assets/curso/tema1/img19.png')
        .col-md-10  
          p.ms-5 También conocida como la norma de seguridad de datos de la industria de las tarjetas de pago (PCI DSS).
      .row.justify-content-center.mb-5 
        .col-md-10
          figure(data-aos="fade-right")
            img(src='@/assets/curso/tema2/img21.svg')
    
    .BGIMG05.p-4.mb-4
      .row.mb-4
        .col-lg-5.col-md-6.col-8
          .row.align-items-center.BGIMG15(data-aos="fade-right")
            .col-11.p-1
              .h4.ms-3.mb-0.text-white ISO/IEC 27001:2013
            .col-1
              img.img05(src='@/assets/curso/tema1/img19.png')
      p También conocida como ISO27001.
      .row.justify-content-center.mb-4  
        .col-md-10
          figure(data-aos="fade-right")
            img(src='@/assets/curso/tema2/img23.svg')

    .row.mb-4
      .col-lg-5.col-md-6.col-8
        .row.align-items-center.BGIMG15(data-aos="fade-right")
          .col-11.p-1
            .h4.ms-3.mb-0.text-white Ley de Portabilidad y Responsabilidad del Sistema de Seguro Médico (HIPAA)
          .col-1
            img.img05(src='@/assets/curso/tema1/img19.png') 

    p HIPAA es el acrónimo de la Ley de Portabilidad y Responsabilidad del Seguro Médico que fue aprobada por el congreso americano en 1996.  La HIPAA hace lo siguiente:

    .row.justify-content-center.mb-4
      .col-md-8
        .tarjeta-avatar-b.align-items-center.mb-4
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/img25.svg' alt='AvatarTop')
          .tarjeta.BG08
            .p-4
              p Proporciona la capacidad de transferir y continuar la cobertura de seguro de salud para millones de trabajadores americanos y sus familias cuando cambian o pierden sus trabajos
        .tarjeta-avatar-b.align-items-center.mb-4
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/img26.svg' alt='AvatarTop')
          .tarjeta.BG08
            .p-4
              br
              p Reduce el fraude y el abuso en la atención médica.
              br
        .tarjeta-avatar-b.align-items-center.mb-4
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/img27.svg' alt='AvatarTop')
          .tarjeta.BG08
            .p-4
              p Establece normas para toda la industria en cuanto a la información sobre la atención médica en la facturación electrónica y otros procesos; y requiere la protección y el manejo confidencial de la información médica protegida.

    .row.justify-content-center.mb-4
      .col-md-10.BG09
        .row.align-items-center
          .col-9.p-4
            p Las normas de privacidad de la HIPAA exigen que los proveedores y las organizaciones de atención de la salud, así como sus asociados comerciales, elaboren y sigan procedimientos que garanticen la confidencialidad y la seguridad de la información de salud protegida (PHI) cuando se transfiera, reciba, maneje o comparta, esto se aplica a todas las formas de PHI, incluyendo la impresa, la oral, la electrónica, entre otras, además, sólo se utilizará o compartirá la información de salud mínima necesaria para llevar a cabo las actividades.
          .col-3
            figure(data-aos="fade-right")
              img(src='@/assets/curso/tema2/img27.png')

    .row.mb-4
      .col-lg-5.col-md-6.col-8
        .row.align-items-center.BGIMG15(data-aos="fade-right")
          .col-11.p-1
            .h4.ms-3.mb-0.text-white Ley Sarbanes Oxley (SOX)
          .col-1
            img.img05(src='@/assets/curso/tema1/img19.png') 
    
    .row.justify-content-center.mb-4
      .col-md-10.mb-4
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema2/img29.svg')
      .col-md-10
        .row.align-items-center.BG04.p-3
          .col-10
            p La ley lleva el nombre de sus patrocinadores, el senador Paul Sarbanes, demócrata de Maryland, y el congresista Michael Oxley, republicano de Ohio, también se llama Sarbox o SOX. Se convirtió en ley el 30 de julio de 2002, la Comisión de Valores y Bolsa la hace cumplir.
          .col-2
            figure(data-aos="fade-left")
              img(src='@/assets/curso/tema2/img30.png')
    
    .row.mb-4
      .col-lg-5.col-md-6.col-8
        .row.align-items-center.BGIMG15(data-aos="fade-right")
          .col-11.p-1
            .h4.ms-3.mb-0.text-white La Ley de Derechos de Autor del Milenio Digital (DMCA)
          .col-1
            img.img05(src='@/assets/curso/tema1/img19.png') 
    
    p  Es una ley de derechos de autor de los Estados Unidos.

    .row.justify-content-center.BG04.mb-5
      .col-md-8.mb-4
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema2/img32.svg')
      .col-md-10.mb-lg-4.mb-5
        .cajon.bottom50.color-primario.p-4.mb-5
          .row
            .col-2 
              figure(data-aos="fade-right")
                img(src='@/assets/curso/tema2/img33.png')
            .col-10
              p La DMCA también se ocupa de los derechos y obligaciones de los OSP / ISP (Proveedores de Servicios de Internet) en cuyos servidores o redes se puede encontrar el material infractor. Aunque la DMCA es la ley de derechos de autor en los EE.UU., este servicio no es exclusivo de los EE.UU. solamente. DMCA.com ha trabajado con el alojamiento <em>web</em> o los procesos de derechos de autor de Internet o de propiedad intelectual en la mayoría de los países del mundo.
    
    separador
    .BGIMG14.p-4
      .row.mb-4
        .col-md-6.col-8
          figure(data-aos="fade-right")
            img(src='@/assets/curso/tema2/img34.svg')

      .row.mb-4
        .col-md-8.mb-4
          p FISMA es la Ley Federal de Gestión de la Seguridad de la Información aprobada por el Congreso de los Estados Unidos en 2002, exige a los organismos federales que apliquen planes de seguridad de la información para proteger los datos sensibles.
          .BG07.p-4
            p El cumplimiento de la FISMA es una guía de seguridad de datos establecida por la FISMA y el Instituto Nacional de Normas y Tecnología (NIST). El NIST se encarga de mantener y actualizar los documentos de cumplimiento según lo dispuesto por la FISMA. 
        .col-md-4.col-6
          figure(data-aos="fade-left")
            img(src='@/assets/curso/tema2/img35.png')
        .col-12
          p Más concretamente, el NIST:
      
      .row.align-items-center.mb-4
        .col-md-4.col-6
          figure(data-aos="fade-right")
            img(src='@/assets/curso/tema2/img36.png')
        .col-md-8
          hr
          .row.align-items-center
            .col-lg-1.col-2
              img(src='@/assets/curso/tema1/img46.png')
            .col-10
              p Establece los requisitos mínimos para los planes y procedimientos de seguridad de la información.
          hr
          .row.align-items-center
            .col-lg-1.col-2
              img(src='@/assets/curso/tema1/img46.png')
            .col-10
              p Recomienda los tipos de seguridad (sistemas, programas informáticos, etc.) que los organismos deben aplicar y aprueba a los proveedores.
          hr
          .row.align-items-center
            .col-lg-1.col-2
              img(src='@/assets/curso/tema1/img46.png')
            .col-10
              p Estandariza el proceso de evaluación de riesgos y establece diversas normas de seguridad de la información basadas en las evaluaciones de riesgos de los organismos. Cada organismo tiene diferentes niveles de requisitos de seguridad: el Organismo Nacional de Seguridad y el Organismo de Vivienda y Desarrollo Urbano, por ejemplo, tienen diferentes niveles de riesgo y, por consiguiente, diferentes requisitos de seguridad.
          hr


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
