<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Metodologías del #[i hacking] ético

    p Se le invita a revisar el siguiente recurso que hace una introducción a las metodologías del hacking ético.

    figure.mb-4
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    #t_3_1.titulo-segundo.color-acento-contenido.p-0(data-aos="fade-right")
      h2 3.1 Estándares y metodologías
    
    .BGIMG03.p-4.mb-4
      .row.mb-4
        .col-md-2.col-4
          figure(data-aos="fade-right")
            img(src='@/assets/curso/tema3/img01.svg')
      .row.mb-4
        .col-md-8
          p El “Manual de la Metodología Abierta de Testeo de Seguridad”  se ha convertido en un estándar de facto. Sin duda supuso el primer acercamiento a una estructura global del concepto de seguridad. Si bien las pruebas incluidas y los test que se ejecutan no son especialmente innovadores, se ha convertido en una auténtica referencia para los organismos que quieren desarrollar un testing de calidad, ordenado y eficiente.  
          p Para organizar y estructurar su contenido, la metodología se subdivide en los aspectos más importantes de los sistemas de información. Se destacan los siguientes aspectos como:
        .col-md-3
          figure(data-aos="fade-left")
            img(src='@/assets/curso/tema3/img02.png')

    p De manera sencilla se identifican una serie de actividades de testeo específicas por área, sobre las que se comprueban las especificaciones de seguridad, integradas con las verificaciones realizadas en las revisiones rutinarias.

    .row.justify-content-center.mb-4
      .col-md-6
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema3/img04.svg')
      .col-md-6
        figure(data-aos="fade-left")
          img(src='@/assets/curso/tema2/img36.png')
      .col-md-10
        .bloque-texto-d.color-secundario.p-4.mb-4
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            h3.text-regular Un aspecto importante de esta metodología es que no solo se centra en los aspectos eminentemente técnicos de seguridad tradicionales, sino que abarca aspectos sobre los responsables del testeo, trata de estandarizar las credenciales del desarrollador a cargo del test, el formato de los resultados, crear un código ético, un plan temporal de ejecución, entre otros, un aspecto muy importante de la metodología, es la incorporación del concepto de valores de evaluación de riesgo, que permiten diferenciar y clasificar las diferentes problemáticas 
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h5.mb-0 (Caballero, 2015).
    
    p OSSTMM plantea categorizaciones estándar, que permiten identificar claramente el alcance de cada una de las actividades, evitando inconvenientes en tal sentido:
  
    .row.mb-4
      .col-md-6
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema3/img05.png')
      .col-md-6
        LineaTiempoD.color-primario
          .row(numero="a." titulo="Búsqueda de vulnerabilidades")
            p orientado principalmente a realizar comprobaciones automáticas de un sistema o sistemas dentro de una red.
          .row(numero="b." titulo="Escaneo de la seguridad")
            p orientado a las búsquedas principales de vulnerabilidades en el sistema que incluyen verificaciones manuales de falsos positivos, identificación de los puntos débiles en el sistemas y análisis individualizado
          .row(numero="c." titulo="Test de intrusión")
            p se plantean test de pruebas que se centran en romper la seguridad de un sistema determinado.
          .row(numero="d." titulo="Evaluación del riesgo")
            p se refiere a los análisis de seguridad a través de entrevistas e investigación de nivel medio que incluye la justificación negocios, las justificaciones legales y las justificaciones específicas de la industria.
          .row(numero="e." titulo="Auditoría de seguridad")
            p se refiere a la continua inspección que sufre el sistema por parte de los administradores que controlan que se cumplan las políticas de seguridad definidas.
          .row(numero="f." titulo="Hacking ético")
            p orientado a tratar de obtener, a partir de los test de intrusión, objetivos complejos dentro de la red de sistemas.

    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="ISSAF" :icono="require('@/assets/curso/tema3/img06.png')")
        .row.justify-content-evenly.align-items-center
          .col-md-8.mb-4.mb-md-0
            p El ISSAF (Information System Security Assessment Framework) es un enfoque especializado y estructurado para las pruebas de penetración, más importante aún, el framework proporciona metodologías avanzadas que están personalizadas para el contexto.
            p Estos estándares le permiten al pentester planificar y ejecutar cada paso del proceso de prueba de penetración, por lo tanto, satisface todos los requisitos del proceso de prueba de penetración. Como hacker ético si está utilizando diferentes herramientas, ISSAF es un framework crucial, por ejemplo, vincula cada paso a una herramienta específica y, por lo tanto, reduce la complejidad.
            p ISSAF ofrece información adicional sobre varios vectores de ataque, así como el resultado de la vulnerabilidad después de la explotación, toda esta información permite a los evaluadores planificar un ataque avanzado que garantiza beneficios al tiempo que protege los sistemas de los ataques cibernéticos.
          .col-md-2.col-4
            img(src='@/assets/curso/tema3/img11.png')
      .py-4.py-md-5(titulo="OWASP" :icono="require('@/assets/curso/tema3/img07.png')")
        .row.justify-content-evenly.align-items-center
          .col-md-8.mb-4.mb-md-0
            p “OWASP Testing Project”Project” (está muy orientado a realizar pruebas sobre aplicaciones web y está en el camino de convertirse en uno de los proyectos referencia en su ámbito OWASP, ha conseguido ser una referencia habitual para cualquier desarrollador en el ámbito de la seguridad OTP en particular, se encuentra enfocado a responder preguntas tales como ¿qué?, ¿por qué?, ¿cuándo?, ¿dónde? y ¿cómo? Al testear una aplicación web se cubren los siguientes puntos:
            ul.lista-ul
              li 
                i.fas.fa-lock.fa-fw
                | El alcance de qué testear.
              li 
                i.fas.fa-lock.fa-fw
                | Principios del testeo.
              li 
                i.fas.fa-lock.fa-fw
                | Explicación de las técnicas de testeo.
              li 
                i.fas.fa-lock.fa-fw
                | Explicación general acerca del framework de testeo de OWASP.
          .col-md-2.col-4
            img(src='@/assets/curso/tema3/img12.png')
      .py-4.py-md-5(titulo="OTP" :icono="require('@/assets/curso/tema3/img08.png')")
        .row.justify-content-evenly.align-items-center
          .col-md-8.mb-4.mb-md-0
            p OTP incorpora en su metodología de testeo, aspectos clave relacionados con el “Ciclo de vida del desarrollo de software” a fin de que el “testeo a realizar comience mucho antes de que la aplicación web se encuentre en producción, de este modo, y teniendo en cuenta que un programa efectivo de testeo de aplicaciones web, debe incluir elementos como testear personas, procesos y tecnologías, OTP delinea en su primer parte conceptos claves a la vez que introduce un framework específicamente diseñado para evaluar la seguridad de aplicaciones web a lo largo de su vida.
          .col-md-2.col-4
            img(src='@/assets/curso/tema3/img13.png')
      .py-4.py-md-5(titulo="CEH" :icono="require('@/assets/curso/tema3/img09.png')")
        .row.justify-content-evenly.align-items-center
          .col-md-8.mb-4.mb-md-0
            p Acrónimo de “Certified Ethical Hacker “ es uno de los más reconocidos internacionalmente en el campo del hacking ético y la auditoría de sistemas informáticos, es una metodología de pruebas de seguridad desarrollada por el International Council of Electronic Commerce Consultants (EC Council) algunas de las fases enunciadas en esta metodología son:
            ul.lista-ul
              li 
                i.fas.fa-lock.fa-fw
                | Obtención de información.
              li 
                i.fas.fa-lock.fa-fw
                | Obtención de acceso.
              li 
                i.fas.fa-lock.fa-fw
                | Enumeración.
              li 
                i.fas.fa-lock.fa-fw
                | Escalamiento de privilegios.
              li 
                i.fas.fa-lock.fa-fw
                | Reporte.
          .col-md-2.col-4
            img(src='@/assets/curso/tema3/img14.png')
      .py-4.py-md-5(titulo="Offensive Security" :icono="require('@/assets/curso/tema3/img10.png')")
        .row.justify-content-evenly.align-items-center
          .col-md-8.mb-4.mb-md-0
            p Metodología líder a nivel mundial para el desarrollo de pruebas de penetración y estudios de seguridad, la metodología contempla principalmente los métodos para el desarrollo de estudios de seguridad enfocados en seguridad ofensiva y teniendo como marco la posibilidad real de explotación, independientemente de los indicadores de riesgos y vulnerabilidades, las principales
            p ventajas de adoptar este marco metodológico son:
            ul.lista-ul
              li 
                i.fas.fa-lock.fa-fw
                | Enfoque sobre la explotación real de las plataformas.
              li 
                i.fas.fa-lock.fa-fw
                | Enfoque altamente intrusivo.
              li 
                i.fas.fa-lock.fa-fw
                | Enfoque orientado a resultados tangibles y no a estadísticas generadas por herramientas.
          .col-md-2.col-4
            img(src='@/assets/curso/tema3/img15.png')
    
    separador
    #t_3_2.titulo-segundo.color-acento-contenido.p-0(data-aos="fade-right")
      h2 3.2 Buenas prácticas   
    
    p Se utiliza para identificar los riesgos y poner de relieve las acciones correctivas, y también reduce los
    p costos de las Tecnologías de la Información y la Comunicación (TIC); sin embargo, a menos que las empresas primero sepan que es lo que buscan, y por qué están contratando a un proveedor externo para hackear los sistemas en primer lugar, lo más probable es que no se gane mucha experiencia del ejercicio, un hacker ético, solo puede ayudar a la organización a entender mejor sus sistemas de seguridad, pero está de parte de la organización el colocar las salvaguardas en sus redes.
    p El hacking ético es un componente crucial para desarrollar las mejores prácticas y el buen gobierno para resolver las vulnerabilidades, desde:

    .row.justify-content-center.mb-4
      .col-md-4.col-10
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema3/img16.svg')
      .col-md-4.col-10
        figure(data-aos="fade-down")
          img(src='@/assets/curso/tema3/img17.svg')
      .col-md-4.col-10
        figure(data-aos="fade-left")
          img(src='@/assets/curso/tema3/img18.svg')
    
    .row.mb-4
      .col-md-9
        p Dentro de las buenas prácticas de un hacker ético encontrará que ellos tratan de responder las siguientes preguntas:
        ul.lista-ul
          li 
            i.fas.fa-lock.fa-fw
            | ¿Qué puede ver un intruso en el sistema de destino? (reconocimiento y fases de exploración)
          li 
            i.fas.fa-lock.fa-fw
            | ¿Qué puede hacer un intruso con esa información? (obtención de acceso y permanencia)
          li 
            i.fas.fa-lock.fa-fw
            | ¿Hay alguien en el objetivo que pueda detectar los intentos y aciertos de los intrusos? (reconocimiento y cubrimiento de huellas)
      .col-md-3.col-6
        figure(data-aos="fade-left")
          img(src='@/assets/curso/tema3/img19.png')

</template>

<script>
export default {
  name: 'Tema3',
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
