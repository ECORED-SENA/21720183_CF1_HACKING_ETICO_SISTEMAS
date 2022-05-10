<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
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

  .container.BGIMG03.px-4.px-md-5.mb-5
    .row.justify-content-center
      .col-md-9.col-10.mb-4
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img06.svg')  
      .col-md-12.mt-5.mb-4
        p Antes de entrar a hablar sobre los métodos efectivos de realizar un buen hacking ético debe de conocer y apropiar tres conceptos básicos de la seguridad de la información, que conforman el llamado <span style="color:#500C75 !important; font-weight: bold;">triángulo o triada de la seguridad de la información</span>, la cual se integra por la <span style="color:#500C75 !important; font-weight: bold;">confidencialidad, integridad y disponibilidad</span>, comúnmente conocida como la tríada CID (seguridad de la información), esta da el modelo base por el cual se incluye la terminología usada en seguridad, centrada en los datos y en la información, ver figura 2.
      .col-md-10.col-10.mb-4
        .titulo-sexto.color-acento-contenido.mb-5(data-aos="fade-right")
          h5 Figura 2
          span Triada de la seguridad de la información
      .col-md-8.col-10.mb-5
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure(data-aos="fade-right")
              img(src='@/assets/curso/tema1/img07.svg')
          .tarjeta.BG01.p-3(x="21.9%" y="25.4%")
            h5 CONFIDENCIALIDAD
            p La información solo es accesible para usuarios autorizados.
          .tarjeta.BG01.p-3(x="50.8%" y="90%")
            h5 INTEGRIDAD
            p Los recursos deben estar protegidos y deben ser exactos y completos.
          .tarjeta.BG01.p-3(x="77.9%" y="25.4%")
            h5 DISPONIBILIDAD
            p Los usuarios autorizados deben tener acceso a la información cuando requieran.
    
    .row.justify-content-center
      .col-md-9.col-11
        .row.BGIMG04
          .col-2
            figure(data-aos="fade-right")
              img.img01(src='@/assets/curso/tema1/img09.svg')  
          .col-10.py-5.pe-4
            p <b>Confidencialidad</b>: se puede equiparar con la privacidad que tiene un usuario o empresa, radica en todas las medidas que se toman para que los datos solo lleguen a personas autorizadas y no caigan en manos de terceros o ciberdelincuentes, igualmente, se diseña de cierta manera para que la información esté cifrada y solo pueden acceder a ella personal autorizado bajo claves o contraseñas; el poder salvaguardar la información tiene la visión ética de cada una de las personas que tienen acceso, y de ser conscientes de los riesgos, amenazas y vulnerabilidades a las cuales están expuestos.
            p La confidencialidad se refiere a los esfuerzos de una organización por mantener sus datos en privado o en secreto, en la práctica, se trata de controlar el acceso a los datos para impedir su divulgación no autorizada, por lo general, se trata de asegurar que solo las personas autorizadas tengan acceso a determinados bienes y que se impida activamente el acceso de las personas no autorizadas. 
      .col-md-9.col-11.me-5
        .row.BG02
          .col-10.p-5
            p <b>Por ejemplo</b>, solo los empleados autorizados de la nómina deben tener acceso a la base de datos de los empleados; además, dentro de un grupo de usuarios autorizados puede haber limitaciones adicionales más estrictas sobre la información exacta a la que se permite acceder a esos usuarios autorizados. 
          .col-2
            figure(data-aos="fade-left")
              img.img02(src='@/assets/curso/tema1/img10.png') 
  
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    
    SlyderF.mb-5(columnas="col-12")
      .tarjeta
        .row.align-items-center
          .col-md-6
            figure.img03
              img(src='@/assets/curso/tema1/img11.png')
          .col-md-6.BG03.p-4
            p La confidencialidad puede violarse de muchas maneras, como ataques directos destinados a obtener acceso no autorizado a sistemas, aplicaciones y bases de datos, con el fin de robar o manipular datos, el reconocimiento de redes y otros tipos de escaneos, las escuchas electrónicas (mediante un ataque de hombre en medio) y la escalada de los privilegios del sistema por parte de un atacante son solo algunos ejemplos, pero la confidencialidad también puede ser violada sin querer, por error humano, descuido o controles de seguridad inadecuados, entre los ejemplos cabe citar la incapacidad (por parte de los usuarios o de la seguridad de la tecnología de la información) de proteger adecuadamente las contraseñas; el uso compartido de cuentas de usuario; la escucha física (también conocida como “#[i shoulder surfing]"); la no codificación de los datos (en proceso, en tránsito y cuando están almacenados); los sistemas de autenticación deficientes, débiles o inexistentes; y el robo de equipo físico y dispositivos de almacenamiento.  
      .tarjeta
        .row.align-items-center
          .col-md-6
            figure.img03
              img(src='@/assets/curso/tema1/img12.png')
          .col-md-6.BG03.p-4
            p Integridad: está inmersa en poder dar a los datos características como precisión, confiabilidad y consistencia, estos a su vez no deben ser alterados en su paso y se toman medidas de seguridad que garanticen que no se deben modificar, se realiza a través de permisos y controles de cada uno de los usuarios autorizados al acceso.
            p En el uso diario, la integridad se refiere a la calidad de algo que está entero o completo, se refiere a asegurar que los datos no han sido manipulados y, por lo tanto, se puede confiar en ellos, es correcto, auténtico y fiable, como ocurre con la confidencialidad, la integridad puede verse comprometida directamente a través de un vector de ataque (como la manipulación de los sistemas de detección de intrusos, la modificación de los archivos de configuración o el cambio de los registros del sistema para eludir la detección) o involuntariamente, por error humano, falta de cuidado, errores de codificación o políticas, procedimientos y mecanismos de protección inadecuados.
      .tarjeta
        .row.align-items-center
          .col-md-6
            figure.img03
              img(src='@/assets/curso/tema1/img13.png')
          .col-md-6.BG03.p-md-5.p-4
            p Disponibilidad: radica en que la infraestructura de la información debe estar controlada rigurosamente, manteniendo el hardware en debido funcionamiento sin errores, para que de esta manera siempre que se necesite el acceso a la información esté disponible, evitando cuellos de botella y otros factores que pongan en riesgo la información.
            p Es por ello que los sistemas, las aplicaciones y los datos tienen poco valor para una organización y sus clientes si no son accesibles cuando los usuarios autorizados los necesitan, es por ello que la disponibilidad significa que las redes, los sistemas y las aplicaciones están en funcionamiento, garantizando que los usuarios autorizados tengan acceso oportuno y fiable a los recursos cuando los necesiten.

    .row.BGIMG05.justify-content-center.mb-4
      .col-md-8.col-10.mt-5
        p.mt-5 Muchas cosas pueden poner en peligro la disponibilidad, entre ellas las fallas de hardware o software, los cortes de energía, los desastres naturales y los errores humanos, tal vez el ataque más conocido que amenaza la disponibilidad sea el de negación del servicio, en el que el rendimiento de un sistema, un sitio web, una aplicación o un servicio basado en la web se degrada de forma intencionada y maliciosa, o el sistema se vuelve completamente inalcanzable. En la siguiente figura se pueden observar las estadísticas de la ciberseguridad en Colombia.
      .col-2.mt-5
        figure.mt-5(data-aos="fade-left")
          img(src='@/assets/curso/tema1/img15.svg')
      .col-md-10
        .titulo-sexto.color-acento-contenido.mb-5(data-aos="fade-right")
          h5 Figura 3
          span Estadísticas de la ciberseguridad en Colombia
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img16.svg')

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2	1.2	Fases de #[i hacking]
    
    .row.mb-4
      .col-md-7
        p La seguridad de la información es una creciente preocupación para las personas y las empresas, la protección de sus datos se ha convertido en una premisa, ya que los ataques por parte de ciberdelincuentes cada vez son más comunes; sin embargo, los riesgos y constantes amenazas dejan al desnudo los sistemas de información y los peligros que en la era digital se están afrontando en el mundo de hoy, es por ello que se ha hecho fundamental que tenga conocimientos informáticos y de seguridad para poder aplicarlos en los sistemas y redes, para poder solventar fallos a tiempo, documentarlos y atacarlos de forma efectiva.
        .cajon.color-acento-botones.p-4(data-aos="fade-right")
          p Para ello, se usan pruebas de penetración o conocidas comúnmente como pentesting, las cuales se usan para poder detectar riesgos en sus sistemas de información o redes, su uso pretende encontrar fallas en la seguridad de la información, saltándose las medidas de seguridad adoptadas por un individuo, empresa u organización, existen principalmente 5 fases del hacking, un hacker no necesariamente tiene seguirlas de forma secuencial; pero cuando se lleva de forma secuencial se obtienen mejores resultados.
      .col-md-5.mb-4
        figure(data-aos="fade-left")
          img(src='@/assets/curso/tema1/img17.png')
      .col-md-4.col-6
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img18.svg')
    
    .row.justify-content-center.mb-4
      .col-md-10
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img19.svg')

    .row.BGIMG06.justify-content-center.p-4.mb-4
      .col-md-7
        p En esta fase de reconocimiento la huella proporciona información importante como:
        .row.align-items-center.mb-4
          .col-1
          .col-6
            ul.lista-ul
              li 
                i.fas.fa-dot-circle
                | El nombre de dominio.
              li 
                i.fas.fa-dot-circle
                | Los servicios TCP y UDP.
              li 
                i.fas.fa-dot-circle
                | Los nombres de los sistemas y las contraseñas.
          .col-3
            figure(data-aos="fade-right")
              img(src='@/assets/curso/tema1/img22.png')
        p Igualmente, hay otras formas de realizar la huella, como la suplantación de la identidad de un sitio web mediante su duplicación, el uso de motores de búsqueda para encontrar información sobre la organización e incluso el uso de la información de los empleados actuales para la suplantación.
        p En la siguiente tabla se presenta un comparativo entre la recolección activa y la recolección pasiva.
      .col-md-5
        figure(data-aos="fade-left")
          img(src='@/assets/curso/tema1/img20.png')

    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      h5 Tabla 1
      span Tipos de reconocimiento
    
    .tabla-b.color-acento-contenido.mb-5 
      table
        thead
          tr
            th(style="background-color: #E01650; color: #fff").text-center Recolección activa
            th(style="background-color: #E01650; color: #fff").text-center Recolección pasiva
        tbody
          tr
            td(style="background-color: #F6F6F6; color: #000")
              p.text-bold Es de gran efectividad, pero no es la mejor aliada si de anonimato se quiere hablar, porque puede llamar mucho la atención del objetivo:
              ul.lista-ul
                li 
                  i.fas.fa-angle-right
                  | Campañas de ingeniería social (llamadas falsas).
                li 
                  i.fas.fa-angle-right
                  | Metasploitable.
                li 
                  i.fas.fa-angle-right
                  | Ataques al objetivo u escaneos invasivos.
            td(style="background-color: #F6F6F6; color: #000")
              p.text-bold Es cuando se tiene un contacto directo con el objetivo, es decir, cuando existe el apoyo de fuentes públicas para obtener información, lo cual ayuda a mantener el anonimato y es menos “ruidosa” que la activa; estas fuentes pueden ser:
              ul.lista-ul
                li 
                  i.fas.fa-angle-right
                  | Sitios web relacionados con el objetivo.
                li 
                  i.fas.fa-angle-right
                  | Motores de búsqueda.
                li 
                  i.fas.fa-angle-right
                  | Redes sociales.
                li 
                  i.fas.fa-angle-right
                  | Blogs.
    .row.mb-4
      .col-md-3.col-5
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img23.svg')   
    
    .row.justify-content-center.mb-4
      .col-md-8
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img24.svg') 

    p En la siguiente tabla puede observar algunas características de cada método.

    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      h5 Tabla 2
      span Métodos de escaneo
    
    .tabla-b.color-acento-contenido.mb-5 
      table
        thead
          tr
            th(style="background-color: #E01650; color: #fff").text-center Fase de pre-ataque
            th(style="background-color: #E01650; color: #fff").text-center Rastreo de puertos
            th(style="background-color: #E01650; color: #fff").text-center Extraer información
        tbody
          tr
            td(style="background-color: #F6F6F6; color: #000") Escaneo se refiere a la fase de pre-ataque cuando el atacante busca en la red para obtener información específica sobre la base de la información recopilada durante el reconocimiento.
            td(style="background-color: #F6F6F6; color: #000") La exploración puede incluir el uso de marcadores, analizadores de puertos, la cartografía de la red, barrido, escáneres de vulnerabilidades, entre otros.
            td(style="background-color: #F6F6F6; color: #000") Los atacantes extraen información como los nombres de equipos, direcciones IP y cuentas de usuario para lanzar ataques posteriores.

    .row.mb-4
      .col-md-4.col-5
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img25.svg')   
    
    .row.justify-content-center.mb-4
      .col-md-10.mb-4
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img26.svg')
      .col-md-10.mb-4
        .row.BGIMG07.align-items-center.p-2
          .col-10
            p Los accesos hacen referencia al punto donde el atacante obtiene acceso al sistema operativo, a aplicaciones en el computador, al dispositivo o a la red, dentro de ella se puede realizar el descifrado de contraseñas, los desbordamientos de buffer, la denegación de servicio, el secuestro de sesión, entre los más comunes.
          .col-2
            figure(data-aos="fade-left")
              img(src='@/assets/curso/tema1/img28.png')

    .row.mb-4
      .col-md-5.col-6
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img29.svg')   
    
    .row.justify-content-end.mb-5
      .col-md-9
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img30.svg')

    .row.justify-content-center.mb-4
      .col-md-10.BGIMG08.p-5
        .row.justify-content-end.py-5
          .col-7
            p Mantener el acceso es el fin de esta fase, lo que se trata de poder permanecer con el control del sistema, los atacantes pueden impedir que el sistema sea propiedad de otros atacantes, asegurando su acceso exclusivo con puertas traseras, rootkits y troyanos e incluso usan ya el sistema que se encuentra comprometido para poder lanzar nuevos ataques.


    .row.mb-4
      .col-md-4.col-5
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img32.svg')   
    
    .row.justify-content-center.mb-5
      .col-md-10
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img33.svg') 
    
    .row.justify-content-center.mb-4
      .col-md-10.BGIMG09.p-5
        .row.py-5
          .col-7
            p Las intenciones del atacante incluyen acceso continuo a los sistemas víctimas, pasar inadvertido y eliminar las pruebas que puedan conducir a su identificación, es por ello que se disfraza entre el sistema para no ser detectado y así evitar cualquier sospecha, haciendo pensar que es parte del sistema.


</template>

<script>
export default {
  name: 'Tema1',
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

<style lang="sass"></style>
