<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.text-white
        span 2
      h1 Tecnologías de programación, #[i frameworks] y librerías

    .row.justify-content-center.mb-0
      p Cuando se habla de tecnologías de programación, se refiere a los lenguajes de programación que se pueden utilizar para el desarrollo de #[i software], así como las diferentes herramientas y #[i frameworks] que se pueden aplicar.
      p Entre estas tecnologías podemos encontrar las siguientes:

    .row.justify-content-center
      .col-lg-8.mt-0
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(data-aos="fade-left" src='@/assets/curso/temas/tema2/t2-1.svg', alt='')

          .tarjeta.estilo-cajon.p-3(x="15%" y="81.5%" numero="1")
            p Es el lenguaje de marca o etiquetas utilizado para la creación de sitios web. Con HTML se realiza la estructura del sitio, su maquetación a través de etiquetas que permiten la organización de contenido. Estas etiquetas son interpretadas por los navegadores para mostrar la estructura, tal cual como fue organizada.
            p En conclusión, HTML permite a los desarrolladores <i>Front-End</i> describir, estructura o maquetar el contenido del sitio web, como es su información a través de párrafos, imágenes, listas, tablas, barras de menú, etc.

          .tarjeta.estilo-cajon.p-3(x="45%" y="73.5%" numero="2")
            p CSS es la hoja de estilos en cascada que, como su nombre lo indica, permite agregar estilos o diseño a las páginas web o desarrollo de aplicaciones web. Haciendo una analogía el HTML es como hacer la estructura de la casa y el CC ya permite estucar, colocar baldosa, etc.
            p Este lenguaje da diseño a la maquetación o representación visual que se hizo en HTML, dándole color, estilos de borde, fondo, animaciones, etc.

          .tarjeta.estilo-cajon.p-3(x="78.2%" y="84%" numero="3")
            p Es una de las tecnologías web más usadas. Con este lenguaje de programación multiplataforma es posible dar una mayor interactividad y dinamismo a los sitios web. Entre sus distintas funcionalidades, JavaScript permite crear tanto animaciones como objetos, localizar errores en formularios, cambiar elementos web de manera intuitiva y crear cookies.
            p Además, también permite desarrollar aplicaciones tan potentes como Facebook o Twitter. Por esto, JavaScript es una de las mejores tecnologías para desarrollo web de la actualidad.

    .titulo-segundo.color-acento-botones(data-aos="fade-left")
      h2.mt-5 Tecnologías del lado del servidor
    
    .row.justify-content-center
      p Las tecnologías del lado del servidor o también llamadas #[i backend] son las que tienen como objetivo implementar los comportamientos que tendrá la web en el servidor; es decir, sus peticiones, cómo se tratan, cómo se consume la capa de datos, etc. 
      p Entre ellas, algunas de las tecnologías para desarrollo web más populares son:

    .row.justify-content-center.mt-5     
      .col-8.col-lg-4          
        figure
          img(src='@/assets/curso/temas/tema2/t2-2.svg', alt='' data-aos="fade-down-left")         
      .col-lg-8.mt-3
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")
          .row(titulo="PHP")
            .col-12.ps-5
              p.mb-0 PHP es un lenguaje de programación del lado del servidor, que permite la comunicación de la web con servidores de datos o persistencia. Esta funcionalidad permite crear la capa de datos en los desarrollos web y comunicarse con diferentes motores de bases de datos como MYSQL, PostgreSQL, etc.; además, con este lenguaje de programación se gestiona todo el comportamiento del servidor, el tratamiento de archivos, imágenes, la recopilación de información desde los formularios del sitio, entre otras.
          .row(titulo="Python")
            .col-12.ps-5
              p.mb-0 La popularidad de Python se debe a que, además de tener una gran cantidad de librerías, es totalmente gratis. Asimismo, destaca por su sencillez y potencia, porque usa menos líneas de código que cualquier otro lenguaje de programación, para cualquier aplicación que se ejecute. Esto supone una gran ventaja con respecto a otros tipos de lenguajes de programación y lo convierte, sin duda, en una de las tecnologías web más usadas.
          .row(titulo="<em>Frameworks</em> y librerías")
            .col-12.ps-5
              p Los lenguajes de programación son importantes, pero, aparte de ellos, existen #[i frameworks] que permiten dar una forma o buenas prácticas sobre cómo trabajar el desarrollo. Son una serie de herramientas y librerías de código ya escrito, que facilitan a los desarrolladores las tareas cotidianas o de uso común, para evitar ejecutarlas desde cero.
              p Los #[i frameworks] dan un marco de trabajo para programar en un lenguaje y las librerías se encargan de solucionar problemas, haciendo el código más legible. 
          .row(titulo="Angular")
            .col-12.ps-5
              p.mb-0 Entre los #[i frameworks] más usados se encuentra Angular, perfecto para aplicaciones web. Además, utiliza HTML para realizar UI y es compatible con las últimas versiones de Chrome, Firefox, Edge, iOS y Android.
          .row(titulo="React")
            .col-12.ps-5
              p.mb-0 React está escrito en código abierto en JavaScript, muy útil para construir las interfaces de usuario. Es una biblioteca, aunque muchos programadores la consideran un framework por la excelencia de sus componentes. Asimismo, admite y combina diferentes idiomas y tecnologías.                         

    .titulo-segundo.color-acento-botones(data-aos="fade-left")
      h2.mt-5.fst-italic Frameworks

    .row.justify-content-center.mb-5
      p Un #[i framework], como se dijo en el ítem anterior, es un marco de trabajo para programar en diferentes lenguajes, usando librerías, buenas prácticas y una forma más sencilla de ejecutar funcionalidades, al reutilizar código. 
    
    .row.justify-content-center.bkg-t2.p-3
      .col-lg-4.col-10
        figure
          img(src='@/assets/curso/temas/tema2/t2-4.svg', alt='').img-cajon
      .col-lg-8
        .row.cajon-texto.p-5.text-white.mt-4
          p El concepto de <i>framework</i> no es de uso exclusivo de la tecnología web o del desarrollo de sus aplicaciones; también se puede encontrar en aplicaciones de realidad aumentada, de inteligencia artificial y de escritorio. Es decir, es una estructura conformada por componentes reutilizables e intercambiables, durante el proceso de desarrollo de una aplicación.
          p Existen varios tipos de <i>frameworks</i> web: orientados a la interfaz de usuario, como Java Server Faces; orientados a aplicaciones de publicación de documentos, como Cocoon; orientados a la parte de control de eventos, como Struts, y algunos que incluyen varios elementos, como Tapestry.  
          p.mb-0 La mayoría de <i>frameworks</i> web se encargan de ofrecer una capa de controladores, de acuerdo con el patrón MVC o con el modelo 2 de Servlets y JSP, ofreciendo mecanismos para facilitar la integración con otras herramientas para la implementación de las capas de negocio y presentación.

    .row.justify-content-center.mt-5     
      p A continuación, algunas características que pueden tener los diferentes <i>frameworks</i>:
      .col-lg-8.mt-3
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")
          .row(titulo="Acceso a datos")
            .col-12.ps-5
              p.mb-0 Se incluyen clases, herramientas, interfaces, con las cuales se puede integrar la manipulación de bases de datos de una forma más directa y sencilla.
          .row(titulo="Controladores")
            .col-12.ps-5
              p.mb-0 Todos los #[i frameworks] tienen implementada, una serie de controladores con los cuales se pueden gestionar eventos, como las operaciones CRUD, formularios de captura de datos, etc.
          .row(titulo="Autenticador")
            .col-12.ps-5
              p Incluyen mecanismos con los cuales identificar usuarios a través del inicio de sesión.
          .row(titulo="Abstracción")
            .col-12.ps-5
              p.mb-0 Cuando se habla de abstracción de URL y sesiones, no se necesita manipular directamente la URL ni las variables de sesión; el #[i framework] se encarga de eso.

      .col-8.col-lg-4          
        figure
          img(src='@/assets/curso/temas/tema2/t2-5.svg', alt='' data-aos="fade-down-right")                

    .titulo-segundo.color-acento-botones(data-aos="fade-left")
      h2.mt-5 Librerías

    .row.mt-3
      p Para conocer qué es una librería, sus tipos y características, lo invitamos a ver el siguiente video.
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption VIDEO       

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
