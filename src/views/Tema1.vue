<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Fundamentos de <em>hacking</em>

    .row.justify-content-center.align-items-center.BGIMG02.mb-5
      .col-md-3.col-6.p-0.ms-1
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img02.png')  
      .col-md-8.col-12
        p Los sistemas de gestión, planes de continuidad del negocio son de vital importancia; sin embargo, los aspectos técnicos son la base sostenible de la ciberseguridad y de la seguridad informática. Los ataques informáticos lamentablemente pueden ser llevados a cabo por personas sin gran experiencia, quienes por medio de herramientas básicas pueden conseguir objetivos de fácil acceso. Es importante resaltar que tener conocimiento del <em>modus operandi</em> de la ciberdelincuencia, articulado a conocimientos técnicos marcan la diferencia en cargos relacionados con la ciberseguridad y la seguridad informática, ya que de esta manera se puede evidenciar un ataque difícil de ser detectado. 
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

  .container.BGIMG03.px-4.px-md-5
    .row.justify-content-center
      .col-md-9.col-10.mb-4
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img06.svg')  
      .col-md-12.mt-5.mb-4
        p Antes de entrar a hablar sobre los métodos efectivos de realizar un buen <em>hacking</em> ético debe de conocer y apropiar tres conceptos básicos de la seguridad de la información, que conforman el llamado <span style="color:#500C75 !important; font-weight: bold;">triángulo o triada de la seguridad de la información</span>, la cual se integra por la <span style="color:#500C75 !important; font-weight: bold;">confidencialidad, integridad y disponibilidad</span>, comúnmente conocida como la tríada CID (seguridad de la información), esta da el modelo base por el cual se incluye la terminología usada en seguridad, centrada en los datos y en la información, ver figura 2.
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
    
    .row.justify-content-center.mb-5
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
  
  .container.tarjeta.tarjeta--blanca.px-4.pt-4.px-md-5.pt-md-5
    
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
            p Disponibilidad: radica en que la infraestructura de la información debe estar controlada rigurosamente, manteniendo el <em>hardware</em> en debido funcionamiento sin errores, para que de esta manera siempre que se necesite el acceso a la información esté disponible, evitando cuellos de botella y otros factores que pongan en riesgo la información.
            p Es por ello que los sistemas, las aplicaciones y los datos tienen poco valor para una organización y sus clientes si no son accesibles cuando los usuarios autorizados los necesitan, es por ello que la disponibilidad significa que las redes, los sistemas y las aplicaciones están en funcionamiento, garantizando que los usuarios autorizados tengan acceso oportuno y fiable a los recursos cuando los necesiten.

    .row.BGIMG05.justify-content-center.mb-4
      .col-md-8.col-10.mt-5
        p.mt-5 Muchas cosas pueden poner en peligro la disponibilidad, entre ellas las fallas de <em>hardware</em> o <em>software</em>, los cortes de energía, los desastres naturales y los errores humanos, tal vez el ataque más conocido que amenaza la disponibilidad sea el de negación del servicio, en el que el rendimiento de un sistema, un sitio <em>web</em>, una aplicación o un servicio basado en la web se degrada de forma intencionada y maliciosa, o el sistema se vuelve completamente inalcanzable. En la siguiente figura se pueden observar las estadísticas de la ciberseguridad en Colombia.
      .col-2.mt-5
        figure.mt-5(data-aos="fade-left")
          img(src='@/assets/curso/tema1/img15.svg')
      .col-md-10.mb-4
        .titulo-sexto.color-acento-contenido.mb-5(data-aos="fade-right")
          h5 Figura 3
          span Estadísticas de la ciberseguridad en Colombia
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img16.svg')
      separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2	Fases de #[i hacking]
    
    .row.mb-5
      .col-md-7
        p La seguridad de la información es una creciente preocupación para las personas y las empresas, la protección de sus datos se ha convertido en una premisa, ya que los ataques por parte de ciberdelincuentes cada vez son más comunes; sin embargo, los riesgos y constantes amenazas dejan al desnudo los sistemas de información y los peligros que en la era digital se están afrontando en el mundo de hoy, es por ello que se ha hecho fundamental que tenga conocimientos informáticos y de seguridad para poder aplicarlos en los sistemas y redes, para poder solventar fallos a tiempo, documentarlos y atacarlos de forma efectiva.
        .cajon.color-acento-botones.p-4(data-aos="fade-right")
          p Para ello, se usan pruebas de penetración o conocidas comúnmente como <em>pentesting</em>, las cuales se usan para poder detectar riesgos en sus sistemas de información o redes, su uso pretende encontrar fallas en la seguridad de la información, saltándose las medidas de seguridad adoptadas por un individuo, empresa u organización, existen principalmente 5 fases del <em>hacking</em>, un <em>hacker</em> no necesariamente tiene seguirlas de forma secuencial; pero cuando se lleva de forma secuencial se obtienen mejores resultados.
      .col-md-5.mb-4
        figure(data-aos="zoom-in-down")
          img(src='@/assets/curso/tema1/img17.svg')
      .col-md-4.col-6
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img18.svg')
    
    .row.justify-content-center.mb-5
      .col-md-10
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img19.svg')

    .row.BGIMG06.justify-content-center.p-5.mb-5
      .col-md-7.mt-4
        p En esta fase de reconocimiento la huella proporciona información importante como:
        .row.align-items-center.mb-4          
          .col-6.p-4
            ul.lista-ul
              li.mb-4 
                i.fas.fa-dot-circle
                | El nombre de dominio.
              li.mb-4
                i.fas.fa-dot-circle
                | Los servicios TCP y UDP.
              li.mb-3
                i.fas.fa-dot-circle
                | Los nombres de los sistemas y las contraseñas.
          .col-3.p-0
            figure(data-aos="fade-right")
              img(src='@/assets/curso/tema1/img22.png')
        p Igualmente, hay otras formas de realizar la huella, como la suplantación de la identidad de un sitio <em>web</em> mediante su duplicación, el uso de motores de búsqueda para encontrar información sobre la organización e incluso el uso de la información de los empleados actuales para la suplantación.
        p En la siguiente tabla se presenta un comparativo entre la recolección activa y la recolección pasiva.
      .col-md-5
        figure(data-aos="fade-left")
          img(src='@/assets/curso/tema1/img20.png')

    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      h5 Tabla 1
      span Tipos de reconocimiento
    
    .tabla-b.color-acento-contenido.mb-5 
      table(data-aos="fade-right")
        thead
          tr
            th(style="background-color: #E01650; color: #fff").text-center Recolección activa
            th(style="background-color: #E01650; color: #fff").text-center Recolección pasiva
        tbody
          tr
            td(style="background-color: #F6F6F6; color: #000")
              p.text-bold Es de gran efectividad, pero no es la mejor aliada si de anonimato se quiere hablar, porque puede llamar mucho la atención del objetivo:
              ul.lista-ul
                li.mb-4 
                  i.fas.fa-angle-right
                  | Campañas de ingeniería social (llamadas falsas).
                li.mb-4 
                  i.fas.fa-angle-right
                  | Metasploitable.
                li.mb-4 
                  i.fas.fa-angle-right
                  | Ataques al objetivo u escaneos invasivos.
            td(style="background-color: #F6F6F6; color: #000")
              p.text-bold Es cuando se tiene un contacto directo con el objetivo, es decir, cuando existe el apoyo de fuentes públicas para obtener información, lo cual ayuda a mantener el anonimato y es menos “ruidosa” que la activa; estas fuentes pueden ser:
              ul.lista-ul
                li.mb-4 
                  i.fas.fa-angle-right
                  | Sitios <em>web</em> relacionados con el objetivo.
                li.mb-4 
                  i.fas.fa-angle-right
                  | Motores de búsqueda.
                li.mb-4 
                  i.fas.fa-angle-right
                  | Redes sociales.
                li.mb-4 
                  i.fas.fa-angle-right
                  | Blogs.
    .row.mb-4
      .col-md-3.col-5
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img23.svg')   
    
    .row.justify-content-center.mb-5
      .col-md-8
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img24.svg') 

    p.mb-5 En la siguiente tabla puede observar algunas características de cada método.

    .titulo-sexto.color-acento-contenido.ms-5(data-aos="fade-right")
      h5 Tabla 2
      span Métodos de escaneo
    
    .tabla-b.color-acento-contenido.mb-5 
      table(data-aos="fade-right")
        thead
          tr
            th(style="background-color: #E01650; color: #fff").text-center Fase de pre-ataque
            th(style="background-color: #E01650; color: #fff").text-center Rastreo de puertos
            th(style="background-color: #E01650; color: #fff").text-center Extraer información
        tbody
          tr
            td.p-5(style="background-color: #F6F6F6; color: #000") Escaneo se refiere a la fase de pre-ataque cuando el atacante busca en la red para obtener información específica sobre la base de la información recopilada durante el reconocimiento.
            td.p-5(style="background-color: #F6F6F6; color: #000") La exploración puede incluir el uso de marcadores, analizadores de puertos, la cartografía de la red, barrido, escáneres de vulnerabilidades, entre otros.
            td.p-5(style="background-color: #F6F6F6; color: #000") Los atacantes extraen información como los nombres de equipos, direcciones IP y cuentas de usuario para lanzar ataques posteriores.

    .row.mb-5
      .col-md-4.col-5
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img25.svg')   
    
    .row.justify-content-center.mb-4
      .col-md-10.mb-5
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img26.svg')
      .col-md-10.mb-4
        .row.BGIMG07.align-items-center.p-2
          .col-10.px-5
            p Los accesos hacen referencia al punto donde el atacante obtiene acceso al sistema operativo, a aplicaciones en el computador, al dispositivo o a la red, dentro de ella se puede realizar el descifrado de contraseñas, los desbordamientos de <em>buffer</em>, la denegación de servicio, el secuestro de sesión, entre los más comunes.
          .col-2.px-3
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

    .row.justify-content-center.mb-5
      .col-md-10.BGIMG08.p-5(data-aos="fade-right")
        .row.justify-content-end.py-5
          .col-7
            p Mantener el acceso es el fin de esta fase, lo que se trata de poder permanecer con el control del sistema, los atacantes pueden impedir que el sistema sea propiedad de otros atacantes, asegurando su acceso exclusivo con puertas traseras, <em>rootkits</em> y troyanos e incluso usan ya el sistema que se encuentra comprometido para poder lanzar nuevos ataques.

    .row.mb-4
      .col-md-4.col-5
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img32.svg')   
    
    .row.justify-content-center.mb-5
      .col-md-10
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img33.svg') 
    
    .row.justify-content-center.mb-4
      .col-md-10.BGIMG09.p-5(data-aos="fade-left")
        .row.py-5
          .col-7
            p Las intenciones del atacante incluyen acceso continuo a los sistemas víctimas, pasar inadvertido y eliminar las pruebas que puedan conducir a su identificación, es por ello que se disfraza entre el sistema para no ser detectado y así evitar cualquier sospecha, haciendo pensar que es parte del sistema.

    separador

    #t_1_3.titulo-segundo.color-acento-contenido.p-0.mb-0(data-aos="fade-right")
      h2 1.3 <em>Hacking</em> ético 

  .container.BGIMG10.px-4.px-md-5.pt-5
    .row.align-items-center.my-5
      .col-md-9.col-10
        p Es muy frecuente que las personas, empresas u organizaciones instalen sistemas de seguridad para mantener sus propiedades y activos a salvo, que compren un seguro en caso de desastre o hurto; sin embargo, cuando se encuentra que ese activo es la información es muy poco común encontrarse que las empresas inviertan en el sistema de seguridad informática; que es igual o hasta muchas veces más importante que los mismos activos, es por ello que hoy por hoy, es la que los propietarios de las empresas pueden implementar con programas y procedimientos para proteger los computadores de la empresa de los piratas informáticos y de los virus, el pirateo en general cuesta a las empresas miles de millones de dólares cada año, pero hay más que dinero en juego si su empresa se encontrará con un <em>hacker</em> informático.
      .col-md-3.col-2
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img36.png') 
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img37.png')})`}"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 Es probable que las empresas tengan información como tarjetas de crédito y cuentas confidenciales, por no mencionar la información financiera personal de sus clientes archivada en una base de datos informática, además de esto, también es probable que haya otra información personal de los empleados como números de seguridad social, direcciones de casa e información de atención médica en el archivo y todo tipo de información, un pirata informático puede acceder a esta información sensible, lo que a su vez podría conducir al robo de identidad y múltiples ataques ciberdelincuenciales que ponen en riesgo inminente a una persona o empresa, esto no solo puede ser perjudicial para sus empleados y clientes actuales, sino también para la reputación de su empresa.

  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4(titulo="Problemas de ciberseguridad")
        .row.align-items-center.justify-content-center.p-4
          .col-md-5.mb-5.p-0
            figure(data-aos="fade-right")
              img(src='@/assets/curso/tema1/img38.png') 
          .col-md-6.mb-5.p-0
            h5 Problemas de ciberseguridad
            p Pueden variar desde cosas tan granulares como <em>software</em> desactualizado hasta luchas a gran escala como la falta de apoyo de los equipos de liderazgo; las medidas que deben adoptar con relación a la seguridad a aplicar dentro de una organización dependerán del tipo de sistemas a proteger o salvaguardar, de la información que produzcan, de las condiciones intrínsecas de cada empresa y de los riesgos y amenazas a las que se exponen. A continuación, en la tabla 3, podrá observar los problemas más comunes que cualquier empresa debería tener en cuenta independientemente de su actividad.
          .col-md-10.ms-5.mb-4
            .titulo-sexto.color-acento-contenido.mb-5(data-aos="fade-right")
              h5 Figura 4
              span Problemas de ciberseguridad
          .col-md-11.col-12
            figure(data-aos="fade-right")
              img(src='@/assets/curso/tema1/img39.svg') 
      .py-3.py-md-4(titulo="Desafíos de la ciberseguridad")
        .row.align-items-center.justify-content-center.p-4
          .col-md-5.mb-5
            figure(data-aos="fade-right")
              img(src='@/assets/curso/tema1/img40.png') 
          .col-md-6.mb-5
            p Dentro del <em>hacking</em> ético se deben tener en cuenta algunos aspectos de la ciberseguridad, tales como son los retos de la seguridad y los riesgos asociados a la misma, y de esta manera poder actuar con programas pertinentes a la hora de realizar actuaciones frente a un ataque o vulneración de un sistema o red. Revise a continuación los retos y riesgos de seguridad más comunes.
            h5 Retos de la seguridad
            ol.lista-candado.ps-4
              li
                .lista-candado
                | Aumento de la sofisticación en los cibercriminales
              li
                .lista-candado
                | La fuga de datos, los <em>insiders</em> maliciosos y los trabajadores remotos.
              li
                .lista-candado
                | La seguridad móvil, la adaptación de autenticación, estrategias de medios sociales.
              li
                .lista-candado
                | Vulnerabilidades explotadas, seguridad operacional.
              li
                .lista-candado
                | Fuerza de trabajo de seguridad cibernética. Estrategias de acceso, identidad y de ciclo de vida.
              li
                .lista-candado
                | Vulnerabilidades explotadas, seguridad operacional.
              li
                .lista-candado
                | Equilibrio de intercambio con los requisitos de privacidad.
          .col-md-3
            figure(data-aos="fade-right")
              img.img04(src='@/assets/curso/tema1/img42.png') 
          .col-md-8.mb-5
            .BGIMG11.p-4
              SlyderA(tipo="b")
                .row.justify-content-center
                  .col-9
                    h5 Riesgos de la seguridad
                    ol.lista-candado.ps-4
                      li
                        .lista-candado
                        | Robo/venta de identidades mercado negro.
                      li
                        .lista-candado
                        | <em>Botnets</em> (red de computadoras infectadas por malware que están bajo el control de una sola parte atacante, conocida como "<em>bot-herder</em>") <em>Fast Flux</em>.
                      li
                        .lista-candado
                        | Datos transportables (USB, ordenadores portátiles, cintas de seguridad).
                      li
                        .lista-candado
                        | Redes zombies (ordenador conectado a Internet que ha sido comprometido por un pirata informático, un virus informático o un troyano y que puede ser utilizado para realizar tareas maliciosas de un tipo u otro bajo dirección remota).
                .row.justify-content-center
                  .col-9
                    h5 Riesgos de la seguridad
                    ol.lista-candado.ps-4
                      li
                        .lista-candado
                        | <em>Exploits</em> en nuevas tecnologías.
                      li
                        .lista-candado
                        | Las redes sociales.
                      li
                        .lista-candado
                        | Ciberespionaje, <em>exploits</em> de día cero.
                      li
                        .lista-candado
                        | Troyanos/robo de información/<em>keyloggers</em>.
                      li
                        .lista-candado
                        | Pérdida/brechas de datos.
                .row.justify-content-center
                  .col-9
                    h5 Riesgos de la seguridad
                    ol.lista-candado.ps-4
                      li
                        .lista-candado
                        | Las amenazas internas.
                      li
                        .lista-candado
                        | Delito cibernético organizado.
                      li
                        .lista-candado
                        | Ingeniería <em>phishing</em> (<em>vishing</em>)/social.
                      li
                        .lista-candado
                        | Virtualización y <em>cloud computing</em>.
          .col-md-1
          .col-md-10
            p Aunado a lo anterior, se puede dar cuenta que los riesgos asociados a la seguridad informática a la cual se expone como individuo, como empresa o como organización, son múltiples y es allí que se deben generar contingencias especializadas para poder salvaguardar la información sensible, a lo cual las organizaciones mundiales de seguridad informática desarrollaron el “<b><em>hacking</em> ético</b>”. Como aprendiz SENA debe estar a la vanguardia de este tipo de actividades y es pertinente que genere habilidades que permitan apoyar los sistemas y redes de información, ya sea de tipo personal o empresarial dentro del mundo digital al cual se enfrenta con las nuevas tecnologías emergentes.  
      .py-3.py-md-4(titulo="Tipos de <em>hackers</em>")
        .row.align-items-center.justify-content-center.p-4
          .col-md-10.mb-5
            p Para describir los tipos de <em>hackers</em> existentes se debe definir de forma sencilla qué son: 
          .col-md-10.col-12.mb-5
            figure(data-aos="fade-right")
              img(src='@/assets/curso/tema1/img44.svg') 
          .col-md-9.col-11
            .row.BG04
              .col-9.p-4
                p Un <b><em>hackers</em></b> en seguridad es alguien que explora métodos para romper las defensas y explotar las debilidades de un sistema o red informática. Los <b><em>hackers</em></b> pueden estar motivados por una multitud de razones, como el beneficio, la protesta, la recopilación de información, el desafío, la recreación o para evaluar las debilidades del sistema para ayudar a formular defensas contra posibles delincuentes. 
              .col-md-3
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/tema1/img45.png') 
    
    p.mb-5 En el siguiente recurso podrá revisar las características de los diferentes tipos de <em>hackers</em>.

    figure.mb-5(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.justify-content-center.align-items-center.mb-4
      .col-md-8.col-9
        h4 ¿Por qué es necesario el #[i hacking] ético?
        hr
        .row.align-items-center
          .col-1(data-aos="fade-right")
            img(src='@/assets/curso/tema1/img46.png')
          .col-10
            p El #[i hacking] ético es necesario, como piratería implica el pensamiento creativo, las pruebas de vulnerabilidad y auditorías de seguridad  que no pueden garantizar que sean seguras.
        hr
        .row.align-items-center
          .col-1(data-aos="fade-right")
            img(src='@/assets/curso/tema1/img46.png')
          .col-10
            p Como estrategia de la defensa en profundidad, para ello, las organizaciones deben implementar este tipo de estrategia para penetrar en sus redes y así poder estimar las vulnerabilidades y exponerse.
        hr
        .row.align-items-center
          .col-1(data-aos="fade-right")
            img(src='@/assets/curso/tema1/img46.png')
          .col-10
            p Para contrarrestar los ataques es necesario, ya que permite la lucha contra los ataques de los <em>hackers</em> mediante la prevención de intrusos en el sistema. 
        hr
      .col-md-2.col-3
        figure(data-aos="fade-left")
          img(src='@/assets/curso/tema1/img47.png')
    separador
    #t_1_4.titulo-segundo.color-acento-contenido.p-0(data-aos="fade-right")
      h2 1.4 Investigación de vulnerabilidades

    p Es el proceso de descubrimiento de vulnerabilidades y fallos de diseño que abrirá un sistema operativo y sus aplicaciones a los ataques o al mal uso, las vulnerabilidades se clasifican según el nivel de gravedad (bajo, medio o alto) y el rango que explotan (local o remota). A continuación, se presentan los casos de vulnerabilidades más comunes.     

    figure.mb-4(data-aos="fade-down")
      img(src='@/assets/curso/tema1/img48.svg')
    
    .row.mb-4
      .col-md-8
        LineaTiempoD.color-primario(data-aos="fade-right")
          .row(numero="a." titulo="El equipo del administrador está infectado por un virus")
            p El <em>hacker</em> puede haber instalado <em>software</em> espía en el equipo del administrador infectado por el virus para registrar sus combinaciones de teclas.
            ol.lista-candado.ps-4
              li.mb-2
                .lista-candado
                | Compruebe si hay virus en los sistemas del administrador, se recomienda que ejecute varios escáneres con antivirus de prestigio en todos los equipos que el administrador use para iniciar sesión en el sitio <em>web</em>, esta acción no es un método infalible de detección de virus, ya que constantemente se diseñan nuevas infecciones de <em>software</em> malicioso para evadir los análisis, es posible que los análisis antivirus informen sobre falsos positivos, por esta razón, la ejecución de varios análisis puede proporcionar distintos datos para determinar si existe una vulnerabilidad.
              li.mb-2 
                .lista-candado
                | Si el análisis antivirus detecta <em>spyware</em>, virus, troyanos o cualquier otro programa sospechoso, investigue los registros del servidor para comprobar la actividad del administrador propietario del equipo infectado.
              li.mb-2 
                .lista-candado
                | Es posible que el #[i hacker] haya alterado los archivos de registro, si no es así, la correlación del nombre de usuario del administrador con comandos sospechosos en el archivo de registro es una prueba más de que la causa de la vulnerabilidad ha sido un virus en el sistema del administrador.
          .row(numero="b." titulo="Contraseñas débiles o reutilizadas")
            p A los <em>hackers</em>s les puede resultar relativamente fácil descifrar una contraseña débil, y esto le proporciona acceso directo a tu servidor, todas las contraseñas seguras están formadas por una combinación de letras, números y signos de puntuación, y no incluyen palabras, ni jerga que se puedan encontrar en un diccionario. 
            ol.lista-candado.ps-4
              li.mb-2
                .lista-candado
                | Las contraseñas se deben utilizar para una única aplicación, no se deben reutilizar para todos los servicios, Si se reutilizan las contraseñas, con una sola infracción de la seguridad en una aplicación el <em>hacker</em> consigue el nombre de usuario y la contraseña, y puede intentar reutilizarlos en otros lugares.
              li.mb-2
                .lista-candado
                | En el registro del servidor comprueba si hay actividad no deseada, por ejemplo, que un administrador haya hecho varios intentos para iniciar sesión o haya utilizado comandos inesperados. Anote cuándo ocurrió la actividad sospechosa. Es importante saber cuándo se pirateó el sitio <em>web</em> por primera vez para poder determinar qué copias de seguridad pueden estar limpias.
          .row(numero="c." titulo="<em>Software</em> desactualizado ")
            p Comprueba que los servidores tengan instalada la última versión del sistema operativo, del sistema de gestión de contenido, de la plataforma de blogs, de las aplicaciones, de los complementos, entre otros.
      .col-md-4
        figure(data-aos="fade-left")
          img(src='@/assets/curso/tema1/img49.png')
      
      p Existen sitios <em>web</em> de investigación de vulnerabilidades, como:
    
    .BGIMG12.p-5.mb-4
      SlyderA(tipo="b")
        .row.align-items-center
          .col-md-6.mb-md-0.mb-4
            p El <em>software</em> Engineering Institute (SEI), que es un instituto federal estadounidense de investigación y desarrollo, fundado por el Congreso de los Estados Unidos en 1984 para desarrollar modelos de evaluación y mejora en el desarrollo de <em>software</em>, que dieran respuesta a los problemas que generaba al ejército estadounidense la programación e integración de los sub-sistemas de <em>software</em> en la construcción de complejos sistemas militares. Financiado por el Departamento de Defensa de los Estados Unidos y administrado por la Universidad Carnegie Mellon. Es un referente en Ingeniería de <em>software</em> por realizar el desarrollo del modelo SW-CMM (1991) que ha sido el punto de arranque de todos los que han ido formando parte del modelo que ha desarrollado sobre el concepto de capacidad y madurez, hasta el actual CMMI.
          .col-md-6
            img(src='@/assets/curso/tema1/img50.png')
        .row.align-items-center
          .col-md-6.mb-md-0.mb-4
            p Por otro lado, el equipo de investigación de Secunia de Flexera está compuesto por varios especialistas en seguridad que, además de probar, verificar y validar los informes públicos de vulnerabilidad, realizan su propia investigación de vulnerabilidad en varios productos, desde la fundación del equipo de investigación de Secunia en 2002, el objetivo ha sido proporcionar la fuente más precisa y fiable de inteligencia sobre vulnerabilidades.
          .col-md-6
            img(src='@/assets/curso/tema1/img51.png')
        .row.align-items-center
          .col-md-6.mb-md-0.mb-4
            p La Base de Datos Nacional de Vulnerabilidad (NVD) es el repositorio del gobierno de los EE.UU. de datos de gestión de vulnerabilidades basados en estándares representados mediante el Protocolo de Automatización de Contenidos de Seguridad (SCAP), estos datos permiten la automatización de la gestión de la vulnerabilidad, la medición de la seguridad y el cumplimiento; el NVD incluye bases de datos de referencias de listas de control de seguridad, fallas de <em>software</em> relacionadas con la seguridad, configuraciones erróneas, nombres de productos y métricas de impacto.
          .col-md-6
            img(src='@/assets/curso/tema1/img52.png')
        .row.align-items-center
          .col-md-6.mb-md-0.mb-4
            p SecuriTeam es un pequeño grupo dentro de Beyond Security dedicado a traer las últimas noticias y utilidades en seguridad informática.
          .col-md-6
            img(src='@/assets/curso/tema1/img53.png')
    
    .row.BGIMG13.justify-content-center.p-5.mb-4
      .col-md-7.mt-5
        .BG07.p-4.mb-4
          p.mb-0 Este tipo de sitios desarrollan continuamente sus habilidades explorando varios programas de alto perfil, tanto de código cerrado como de código abierto, utilizando una variedad de enfoques, centrándose principalmente en auditorías exhaustivas de código y análisis binarios.
        p.mb-5 Existen múltiples herramientas en Internet que permitirán reconocer las vulnerabilidades que puede tener su sistema o red, e igualmente, están a la disposición para poder mitigarlas, en la siguiente tabla se deja una cantidad de direcciones que pueden ser de mucha ayuda.
      .col-md-3.col-6.mb-5
        figure(data-aos="fade-left")
          img(src='@/assets/curso/tema1/img56.png')
      .col-md-9
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 4
          span Herramientas para conocimiento de vulnerabilidades
        
        .tabla-a.color-acento-contenido.mb-5 
          table(data-aos="fade-right")
            thead
              tr
                th.p-3 Nombre
                th.p-3 Sitio <em>web</em>/URL
            tbody
              tr
                td.p-4(style="background-color: #fff; color: #000").text-center Security Magazine
                td.p-4(style="background-color: #fff; color: #000") <a href="http://securitymagazine.com" target="_blank">http://securitymagazine.com</a>
              tr
                td.p-4(style="background-color: #fff; color: #000").text-center <em>pentest</em> Tools
                td.p-4(style="background-color: #fff; color: #000") <a href="https://pentest-tools.com/website-vulnerability-scanning/website-scanner" target="_blank">https://pentest-tools.com/website-vulnerability-scanning/website-scanner</a>
              tr
                td.p-4(style="background-color: #fff; color: #000").text-center HackerWatch
                td.p-4(style="background-color: #fff; color: #000") <a href="http://www.hackerwatch.org" target="_blank">http://www.hackerwatch.org</a>
              tr
                td.p-4(style="background-color: #fff; color: #000").text-center CodeRed Center
                td.p-4(style="background-color: #fff; color: #000") <a href="http://eccouncil.org" target="_blank">http://eccouncil.org</a>
              tr
                td.p-4(style="background-color: #fff; color: #000").text-center TechNet
                td.p-4(style="background-color: #fff; color: #000") <a href="http://blogs.technet.com" target="_blank">http://blogs.technet.com</a>
              tr
                td.p-4(style="background-color: #fff; color: #000").text-center Common Vulnerabilities and Exposures
                td.p-4(style="background-color: #fff; color: #000") <a href="https://cve.mitre.org/" target="_blank">https://cve.mitre.org/</a>
              tr
                td.p-4(style="background-color: #fff; color: #000").text-center Hackerstorm Vulnerability Database Tool
                td.p-4(style="background-color: #fff; color: #000") <a href="http://www.hackerstorm.com" target="_blank">http://www.hackerstorm.com</a>
              tr
                td.p-4(style="background-color: #fff; color: #000").text-center CNET Blogs
                td.p-4(style="background-color: #fff; color: #000") <a href="http://www.new.cnet.com" target="_blank">http://www.new.cnet.com</a>

    .row.align-items-center.mb-5
      .col-md-7(data-aos="fade-right")
        .bloque-texto-d.color-secundario.p-4.mb-4
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            h3.text-regular Dentro de la investigación de vulnerabilidades se realizan las pruebas de penetración (o <em>pentesting</em>), como un ejercicio de seguridad en el que un experto en seguridad cibernética intenta encontrar y explotar las vulnerabilidades de un sistema informático, el propósito de este ataque simulado es identificar cualquier punto débil en las defensas de un sistema que los atacantes podrían aprovechar
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h5.mb-0 (Gaviria, 2015).
        .cajon.color-acento-contenido.p-4
          p Esto es como si un banco contratara a alguien para que se disfrace de ladrón y trate de entrar en su edificio y obtener acceso a la bóveda. Si el "ladrón" tiene éxito y entra en el banco o en la bóveda, el banco obtendrá información valiosa sobre cómo necesitan reforzar sus medidas de seguridad.
      .col-md-5.col-6
        figure(data-aos="fade-left")
          img(src='@/assets/curso/tema1/img57.png')

    .row.BG05.justify-content-center.p-4
      .col-md-12.mt-4
        h4.text-center ¿Quién realiza los <em>pentests</em>?
      .col-md-4.col-8.mb-5
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img58.svg')
      .col-md-12.mb-5
        .row  
          .col-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/tema1/img59.svg')
          .col-7
            p Lo mejor es que el <em>pentest</em> lo realice alguien con poco o ningún conocimiento previo de cómo se asegura el sistema, ya que puede ser capaz de exponer los puntos ciegos que no han sido detectados por los desarrolladores que construyeron el sistema, por esta razón, se suele traer a contratistas externos para que realicen las pruebas, a estos contratistas se les suele denominar "<em>hackers</em> éticos", ya que se les contrata para piratear un sistema con permiso y con el fin de aumentar la seguridad.
            p Muchos <em>hackers</em> éticos son desarrolladores experimentados con títulos avanzados y una certificación para pruebas de pluma, por otro lado, algunos de los mejores <em>hackers</em> éticos son autodidactas, pero el SENA por medio de estos programas de formación logra formar bases teórico – prácticas sobre estas prácticas, incluso, algunos son <em>hackers</em> criminales reformados, que ahora utilizan su experiencia para ayudar a arreglar los fallos de seguridad en lugar de explotarlos. Son los mejores candidatos para llevar a cabo una <em>pentest</em> que puede variar enormemente, dependiendo de la empresa objetivo y del tipo de <em>pentest</em> que quieran iniciar.
      
    .row.justify-content-center.p-4.mb-4
      .col-md-4.col-8.mb-5
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img60.svg')
      .col-md-12
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img61.svg')
    
    p.mb-5 En la siguiente tabla se presenta un comparativo entre las pruebas de penetración y el <em>hacking</em> ético.

    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      h5 Tabla 5
      span Comparativo pruebas de penetración – <em>hacking</em> ético
    
    .tabla-b.color-acento-contenido.mb-5 
      table(data-aos="fade-right")
        thead
          tr
            th(style="background-color: #E01650; color: #fff").text-center Pruebas de penetración
            th(style="background-color: #E01650; color: #fff").text-center <em>Hacking</em> ético            
        tbody
          tr
            td(style="background-color: #F6F6F6; color: #000") El objetivo principal es encontrar vulnerabilidades dentro del entorno objetivo.
            td(style="background-color: #F6F6F6; color: #000") Su objetivo es abarcar varios ataques a través de diferentes técnicas de <em>hacking</em> para encontrar fallas de seguridad.
          tr
            td(style="background-color: #Fff; color: #000") Las pruebas de penetración se centran en la seguridad del área específica definida para las pruebas.
            td(style="background-color: #FFF; color: #000") El <em>hacking</em> ético es un término integral y las pruebas de penetración son una de las funciones del <em>hacker</em> ético.
          tr
            td(style="background-color: #F6F6F6; color: #000") Se espera que el <em>pentester</em> sea consciente de ejecutar diferentes metodologías y conocer el propósito de cada metodología, cómo y cuándo ejecutar.
            td(style="background-color: #F6F6F6; color: #000") El <em>hacker</em> ético debe tener un conocimiento integral de las metodologías de <em>hacking</em>.
          tr
            td(style="background-color: #Fff; color: #000") Se requiere experiencia previa en <em>hacking</em> ético para ser un buen <em>pentester</em>.
            td(style="background-color: #FFF; color: #000") El <em>hacking</em> ético es un paso hacia las pruebas de penetración, a menos que uno conozca las metodologías, no pueden realizar un <em>pentest</em>.
          tr
            td(style="background-color: #F6F6F6; color: #000") Un <em>pentester</em> puede funcionar en un dominio y red específicos, el conocimiento esperado es más específico a nivel experto.
            td(style="background-color: #F6F6F6; color: #000") Al ser un <em>hacker</em> ético debe tener en cuenta los aspectos técnicos del <em>software</em> y el <em>hardware</em> de los dispositivos digitales conectados a la red.
    .row.align-items-center.mb-5
      .col-md-9.col-12
        p El <em>ethical hacking</em> compromete los sistemas informáticos para evaluar la seguridad y actuar de buena fe informando a la parte vulnerable, el <em>hacking</em> ético es una habilidad clave para muchos puestos de trabajo relacionados con la seguridad de los activos en línea de una organización. Los profesionales que trabajan en estas funciones laborales mantienen las computadoras, los servidores y otros componentes de la infraestructura de la organización en condiciones de trabajo que impiden el acceso no autorizado a través de canales no físicos.
        p La gente cree que "<em>hacking</em>" significa <em>hackear</em> cualquier sitio <em>web</em> en un minuto, este concepto proviene de ver películas, por lo que ni siquiera conocen el concepto básico original de lo que significa <em>hackear</em> o cómo hacerlo. ¿Descifrar contraseñas o robar datos? No, el "<em>ethical hacking</em>" es mucho más que eso; el <em>hacking</em> ético es escanear las vulnerabilidades y encontrar amenazas potenciales en una computadora o red, un <em>hacker</em> ético encuentra los puntos débiles o lagunas en un computador, aplicaciones <em>web</em> o red y los reporta a la organización.
      .col-md-3.col-6
        figure(data-aos="fade-left")
          img(src='@/assets/curso/tema1/img62.svg')

    separador

    #t_1_5.titulo-segundo.color-acento-contenido.p-0(data-aos="fade-right")
      h2 1.5 Tipos de ataques

    p.mb-5 Hay varias maneras en que un atacante puede obtener acceso a un sistema, estos deben ser capaz de explotar una debilidad o vulnerabilidad en un sistema, entre los tipos de ataque más populares se encuentran:

    .row.align-items-center.mb-5
      .col-md-8
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta BG06")
          .row.justify-content-center(titulo="Ataques al sistema operativo")
            .col-md-11
              p El sistema operativo ejecuta muchos servicios como interfaces gráficas de usuario (GUI) que soportan aplicaciones y herramientas del sistema, y permiten el acceso a Internet, en los ataques a sistemas operativos, "los atacantes buscan vulnerabilidades en el sistema operativo de tal manera que puedan explotarlas a través de las vulnerabilidades y obtener acceso al sistema o red objetivo".
              p Las vulnerabilidades en el sistema operativo pueden ser puertos y servicios abiertos, ya que la mayoría de los sistemas operativos instalan estos servicios y puertos por defecto, estas son las vulnerabilidades más comunes encontradas por los atacantes para obtener acceso a un sistema operativo; por lo tanto, para prevenir los ataques al sistema operativo se necesita eliminar o deshabilitar aquellos servicios y puertos que son innecesarios por el momento. 
          .row(titulo="Ataques a nivel de aplicación")
            .col-md-11
              p A veces un entorno seguro de una organización construida por varios interesados (administradores de sistemas, administradores de bases de datos o desarrolladores) queda con lagunas vulnerables, incluso después de haber pensado que el trabajo está completo, ya que no todos los interesados están al tanto o son responsables de asegurar la aplicación <em>web</em> y/o la infraestructura. Estas lagunas de seguridad llevan, entonces, a la organización a graves riesgos más adelante, incluyendo costosas multas y daños a la reputación. Incluso dejando sus aplicaciones a la merced de los ciberdelincuentes, esto se ve que en el <em>software</em> se encuentra:
              ul.lista-ul.mb-5
                li 
                  i.lista-ul__vineta
                  | Sistemas sin parches.
                li 
                  i.lista-ul__vineta
                  | Archivos no encriptados.
                li 
                  i.lista-ul__vineta
                  | Aplicaciones <em>web</em> antiguas y desactualizadas.
                li 
                  i.lista-ul__vineta
                  | La aplicación <em>web</em> y la mala configuración de la nube
                li 
                  i.lista-ul__vineta
                  | Insuficiente protección de los cortafuegos.
              p Como bien se sabe, el desafío de un entorno heterogéneo para las empresas y la falta de conciencia de seguridad pueden aumentar el riesgo de estas peligrosas anomalías de seguridad y las amenazas que afectan a su negocio. Las debilidades de seguridad deben ser abordadas a través de todas las capas de su entorno diversificado.
          .row(titulo="Ataques por mala configuración")
            .col-md-11
              p Las malas configuraciones de seguridad surgen cuando no se definen, implementan o mantienen los valores predeterminados de la configuración de seguridad, por lo general, esto significa que los ajustes de configuración no cumplen con los estándares de seguridad de la industria (puntos de referencia de la CEI, OWASP top 10, etc.) que son fundamentales para mantener la seguridad y reducir el riesgo empresarial, la mala configuración normalmente ocurre cuando un administrador o desarrollador de sistemas o bases de datos no configura adecuadamente el marco de seguridad de una aplicación, sitio <em>web</em>, escritorio o servidor, lo que conduce a peligrosas vías abiertas para los <em>hackers</em>.
              p Las configuraciones erróneas suelen considerarse un blanco fácil, ya que pueden ser fáciles de detectar en servidores <em>web</em>, nubes y aplicaciones mal configurados y luego se convierten en explotables, causando un daño significativo y provocando problemas catastróficos de fuga de datos para las empresas, una vez que un sistema es presa de una vulnerabilidad o falta de seguridad, sus datos sensibles corren el riesgo de ser robados o alterados muy a menudo, el mayor problema al que se enfrentan las organizaciones es que estos fallos no se identifican o abordan con la suficiente antelación de acuerdo con las mejores prácticas de higiene de seguridad.
          .row(titulo="Ataques <em>srhink/wrap</em>")
            .col-md-11
              p cuando se instala un sistema operativo/aplicaciones viene una gran cantidad de <em>scripts</em> de ejemplo para hacer la vida de un administrador más fácil, el problema no es el afinamiento o la personalización de estos scripts, lo cual llevará a un código predeterminado o  a ataques de código <em>shrink wrap</em>, para lo cual se considera un ataque de este tipo a solo el acto de explotar agujeros en <em>software</em> sin parches o mal configurado. Para utilizar el término de otra manera, una "vulnerabilidad de <em>shrink wrap</em>" sería aquella que solo debería verse en un producto inmediatamente después de su instalación inicial "recién salido del <em>shrink wrap</em>", se podría decir.
              p La mayor parte de Internet depende de un número relativamente pequeño de aplicaciones, marcos y sistemas operativos diferentes, dado que estas plataformas se comparten entre una gran base de destinatarios y que tantas organizaciones y/o administradores optan por ignorar el "fruto de la casualidad", este tipo de vulnerabilidades suelen ser las primeras a las que recurrirá un atacante para explotar rápidamente un sistema.
      .col-md-4
        figure(data-aos="fade-left")
          img(src='@/assets/curso/tema1/img63.svg')


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
