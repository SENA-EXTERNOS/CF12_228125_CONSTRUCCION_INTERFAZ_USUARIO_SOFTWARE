<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.text-white
        span 1
      h1 Lenguajes de programación

    .row.justify-content-center
      p Comencemos diciendo que los lenguajes de programación son un conjunto de instrucciones a través de las cuales se pueden programar funcionalidades que serán ejecutadas a través de una computadora. Conozcamos los diferentes lenguajes.    

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2.mt-3 1.1 HTML

    .row.justify-content-center
      p Antes de entrar a revisar el lenguaje HTML5, se deben tener presentes un conocimiento base y unos conceptos fundamentales.

    .row.justify-content-center.mt-4
      .col-lg-12
        .b1.bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .b1.bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/t1-1.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Toda la tecnología web nace con la aparición del internet; en realidad, internet es la unión de dos palabras #[b #[i interconnected]] y #[b #[i network]], lo que quiere decir que es una red global de computadores interconectados entre sí, que permiten compartir información como texto, sonido, imágenes, etc.

    .row.justify-content-center.mt-5
      p Tim Berners Lee, inventor de la #[i World Wide Web] (WWW), fundó el consorcio W3C para estandarizar, supervisar y estar al tanto de las tecnologías basadas en el internet; debido a este procedimiento, se originan los siguientes conceptos:
      
      .col-lg-10.mt-3
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(data-aos="fade-left" src='@/assets/curso/temas/tema1/t1-2.svg', alt='')

          .tarjeta.estilo-cajon.p-3(x="10.6%" y="13.5%" numero="1")
            p #[i Hypertext Transfer Protocol (Protocolo de Transferencia de Hipertextos)]
            p Es el protocolo de transferencia de hipertexto y es el apoyo que permite la operación de la comunicación entre los dispositivos conectados en la red; por ejemplo, entre computadores de usuarios y los servidores.
          .tarjeta.estilo-cajon.p-3(x="30.4%" y="88.5%" numero="2")
            p #[i Uniform Resource Locator (Localizador de Recursos Uniforme)]
            p Es el localizador de recursos únicos. Es más conocida como la dirección de un sitio web y es la forma como buscamos un sitio en algún punto de la red, a través de su nombre.
          .tarjeta.estilo-cajon.p-3(x="50%" y="13.5%" numero="3")
            p #[i Hypertext Markup Language (Lenguaje de marcas de hipertexto)]
            p El lenguaje de marcado de hipertexto es el que permite escribir la estructura de una página web, dando recursos de maquetación como listas, párrafos, viñetas, etc.
          .tarjeta.estilo-cajon.p-3(x="69.4%" y="88.5%" numero="4")
            p Es el programa que se encarga de gestionar las peticiones con los navegadores: tanto de recibirlas, como de responderlas.
          .tarjeta.estilo-cajon.p-3(x="89%" y="13.5%" numero="5")
            p Es el hosting, el cual corresponde a un equipo conectado a la red, que tiene una configuración específica y una serie de programas instalados, entre ellos un servidor web.                                           

    .row.justify-content-center.mt-5
      .col-lg-11
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .b2.bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/t1-3.svg')})`}"
          )
          .b2.bloque-texto-g__texto.p-5
            p.mb-0 Otro de los conceptos importantes que debemos tener en cuenta es el de navegador. Los navegadores son los programas en donde se van a ejecutar las aplicaciones web.
            br 
            br
            | Un navegador es un programa encargado de interpretar el código que se recibe desde el servidor y, luego, exponerlo en un término entendible para que el usuario lo visualice, a través de la página web, con texto, imágenes, etc.

    .row.justify-content-center.mb-3.mt-5
      p Aparte de interpretar y mostrar al usuario la página, algunas de las responsabilidades del navegador son:
      .col-lg-10
        .row.text-center.text-white
          .col-sm-6.col-lg-4.mb-4.mb-lg-0
            .t1.tarjeta-avatar
              img(src='@/assets/curso/temas/tema1/t1-4.svg' alt='AvatarTop')
              .tarjeta.tarjeta--amarilla-1.p-5
                h3 Integridad
                p.mt-3 Para la transmisión de las páginas, solo se usa el protocolo HTTP como lenguaje de comunicación entre servidor y navegador.
          
          .col-sm-6.col-lg-4.mb-4.mb-lg-0
            .t1.tarjeta-avatar
              img(src='@/assets/curso/temas/tema1/t1-5.svg' alt='AvatarTop')
              .tarjeta.tarjeta--amarilla-1.p-5
                h3 Seguridad
                p.mt-3 Como el navegador interpreta diferentes códigos, desde diversas fuentes, utiliza seguridad en la conexión a través del protocolo HTTPS y se ejecuta a través de CORS.
          
          .col-sm-6.col-lg-4.mb-4.mb-lg-0
            .t1.tarjeta-avatar
              img(src='@/assets/curso/temas/tema1/t1-6.svg' alt='AvatarTop')
              .tarjeta.tarjeta--amarilla-1.p-5
                h3 Optimización
                p.mt-3 Para optimizar la carga de las páginas, el navegador utiliza la memoria caché para guardar una copia y, de esta manera, garantizar que la próxima carga sea ligera.

    .row.bkg-t1
      .titulo-segundo.color-acento-botones(data-aos="fade-left")
        h2.mt-5 Peticiones HTTP

      .row.justify-content-center
        p Cuando los navegadores acceden a una página web, lo hacen a través de #[b http], como se había dicho anteriormente; en esa comunicación con el servidor, se descompone la URL en diferentes partes: una parte es el host que es la dirección de la máquina y, la otra, el #[i path] o la ruta del recurso al que se quiere acceder.

        .col-lg-6.mt-4
          .t1.tarjeta-avatar-b.mb-5
            .t1.tarjeta-avatar-b__img
              img(src='@/assets/curso/temas/tema1/t1-7.svg' alt='AvatarTop')
            .tarjeta.tarjeta--amarilla-2
              .p-4
                h2 GET
                p Es cuando se hace una petición o solicitud al servidor y se envía la información solicitada, a través de la URL, como lo hace Google.

        .col-lg-6.mt-4
          .t1.tarjeta-avatar-b.mb-5
            .t1.tarjeta-avatar-b__img
              img(src='@/assets/curso/temas/tema1/t1-8.svg' alt='AvatarTop')
            .tarjeta.tarjeta--amarilla-2
              .p-4
                h2 POST
                p Es una petición donde se envían los datos ocultos, a través de un objeto que será descifrado por el servidor y, de esta manera, se tiene seguridad de la información.   

      .row.justify-content-center.text-center
        .col-lg-10
          .row
            .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
              .crd_hover_txt(data-aos="flip-left")
                .crd_hover_txt--img
                  figure
                    img(src="@/assets/curso/temas/tema1/t1-91.svg", alt="alt")
                .crd_hover_txt--body
                    h4.mb-3 200
                    p La petición solicitada se encuentra con éxito.

            .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
              .crd_hover_txt(data-aos="flip-left")
                .crd_hover_txt--img
                  figure
                    img(src="@/assets/curso/temas/tema1/t1-10.svg", alt="alt")
                .crd_hover_txt--body
                    h4.mb-3 403
                    p No se tiene permiso para acceder al recurso solicitado

            .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
              .crd_hover_txt(data-aos="flip-left")
                .crd_hover_txt--img
                  figure
                    img(src="@/assets/curso/temas/tema1/t1-11.svg", alt="alt")
                .crd_hover_txt--body
                  h4.mb-3 404
                  p El recurso solicitado no está disponible o no se pudo encontrar.

    .row.justify-content-center.mt-5
      .col-lg-12
        .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5
          .b2.bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/t1-12.svg')})`}"
          )
          .bloque-texto-g__texto.p-5
            p.mb-0 Las primeras páginas web fueron estáticas y rígidas, no permitían la fluidez del contenido, la organización dinámica del mismo o la aplicación de estilos. Debido a esa problemática, en 1994, nace el CSS (hoja de estilos en cascada), lenguaje que se compone de una serie de reglas que permiten dar apariencia a la página web e incluir elementos como: color de la letra, márgenes, el tamaño de los elementos y, también, posibilita la adaptación de las páginas a las diferentes pantallas de los dispositivos, lo que se llama #[b #[i responsive design]].

    .row.justify-content-center.mt-5(data-aos="zoom-in")
      p HTML5 mejora la versión de HTML, de acuerdo con el avance en las API y en el conjunto de herramientas que conforman la tecnología web; pero, aparte de esto, presenta nuevas características en el lenguaje HTML, las cuales son:

      TabsC.color-acento-botones.mt-2
        .py-4.py-md-4(titulo="Semántica")
          .row.p-4
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema1/t1-13.svg', alt='').mb-4       
            .col-md-8.mb-4.mb-md-0
              p La semántica se define como el lenguaje o la forma de expresarse y, en este caso, es la forma de escribir el lenguaje.
              p En este apartado se crearon nuevas etiquetas que permiten una funcionalidad más amplia del lenguaje y ventajas en el manejo de páginas.
              p Se crearon las nuevas etiquetas que seccionan la página, como: &#60;section>, &#60;article>, &#60;nav>, &#60;header>, &#60;footer> y &#60;aside>. Estas etiquetas se profundizarán más adelante y, por ahora, sabemos que permiten dar estructura a la página.
              p Las nuevas etiquetas de audio y video (&#60;audio>, &#60;video>) permiten, al desarrollador, manipular audio y video de forma sencilla.
              p La etiqueta &#60;video> permite incrustar en la página, un video de forma fácil; a través de sus atributos #[b #[i src]] y #[b #[i controls]], se agregan el video y los botones de control para su reproducción.
              p El elemento &#60;audio> funciona de forma similar a la etiqueta &#60;video>, con la diferencia que ocupa menos espacio en la página y no soporta los atributos de #[i width] y #[i height].
              p Otra nueva característica en semántica, se refiere a formularios en HTML5; se incluye nueva API de validación; aparte, atributos nuevos, nuevos valores para la etiqueta #[b #[i input]] con el atributo #[b #[i type]] y #[b #[i output]].
              p Además de lo anterior, también se incluyen nuevos elementos semánticos que permiten incluir directamente fórmulas matemáticas (MathML), las etiquetas &#60;mark>, &#60;figure>, &#60;data>, &#60;time>, entre otras, y una mejora en el funcionamiento de la etiqueta &#60;iframe>.

        .py-3.py-md-4(titulo="Conectividad")
          .row.p-4
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema1/t1-14.svg', alt='').mb-4     
            .col-md-8.mb-4.mb-md-0
              p En la parte de conectividad, se tienen unas características nuevas que se muestran a continuación:
              p #[b #[i Web Sockets]]: es una API que permite abrir una sesión de manera bidireccional entre usuario y servidor, permitiendo el envío de peticiones por eventos, sin tener que estar testeando el servidor en cada llamada.
              p #[b #[i Server-send events]]: esta función se agrega cuando se necesita que la aplicación web transmita eventos desde el servidor al #[i front-end] del cliente; se hace una conexión unidireccional, es decir, el cliente no podrá responder al servidor.
              p #[b #[i WebRTC (Web Real-Time Communication)]]: es una tecnología que permite a las aplicaciones y sitios web, capturar y, opcionalmente, transmitir audio y/o video, así como intercambiar datos arbitrarios entre navegadores, sin necesidad de un intermediario. El conjunto de estándares que componen WebRTC hace posible compartir datos y realizar teleconferencias #[i peer-to-peer], sin requerir que el usuario instale complementos o cualquier otro #[i software] de terceros.
 
    .row.justify-content-center.mt-5
      .col-lg-10
        .tarjeta.color-descarga.p-4
          .row.justify-content-around.align-items-center
            .col-4.col-sm-2.col-lg-2
              img(src="@/assets/curso/temas/tema1/t1-15.svg").icono
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0-p-5
                  p Lo invitamos a leer los siguientes documentos para ampliar la información sobre la temática que venimos estudiando:
                  ul.lista-ul.ps-5
                    li 
                      i.fas.fa-circle.tamano-vineta
                      span.ps-3 Estructura del lenguaje HTML5.
                    li 
                      i.fas.fa-circle.tamano-vineta
                      span.ps-3 Etiquetas básicas.
                    li 
                      i.fas.fa-circle.tamano-vineta
                      span.ps-3 Formularios.             
                .col-sm-auto
                  a.boton.color-boton(:href="obtenerLink('/downloads/Anexo1.zip')" target="_blank")
                    span Enlace web
                    i.fas.fa-link
 
    separador
    .row.bkg-t1 
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
        h2.mt-3 1.2 CSS

      .row.justify-content-center
        p CSS - Hoja de estilos en cascada, (#[i Cascading Style Sheets] por sus siglas en inglés), es el encargado de darle apariencia a la página web. Esta hoja de estilos sirve para especificarle al navegador cómo se deben mostrar los elementos de la página (documentos, información, imágenes, etc.) y cómo estarán organizados o diseñados.
        .col-lg-6
          p Cuando se habla de CSS se habla de reglas que se aplican a los elementos de la página o a un grupo de ellos.
          p Una regla es un código que le indica a un elemento, o a un grupo de ellos, cómo debe ser su diseño; es decir, qué color tendrá, si tiene fondo o color de fondo, tipografía, organización, etc.
          p Las reglas de CSS se pueden anidar, es decir, se pueden agregar reglas a etiquetas que estén dentro de otras, de acuerdo con las especificaciones dadas en el selector.
          .bloque-texto-1
            .bloque-texto-1__texto            
              p.mb-0 Para la aplicación de dichas reglas, anteriormente se hacía en la misma línea de donde se declaraba la etiqueta HTML, por ejemplo:

        .col-lg-6.col-12
          figure
            img(src='@/assets/curso/temas/tema1/t1-16.svg', alt='').mb-5      

      .row.justify-content-center.mb-5.mt-0
        .col-lg-10
          .titulo-sexto.color-acento-contenido
            h5 Figura 1.
            span Estilos embebidos
          
          img(src="@/assets/curso/temas/tema1/t1-17.svg")

    .row.justify-content-center
      .col-lg-5.col-12
        figure
          img(src='@/assets/curso/temas/tema1/t1-18.svg', alt='').mb-3       
      .col-lg-7
        p Como se observa en la imagen anterior, cuando se colocan los estilos dentro de la misma etiqueta, se llaman estilos embebidos. Esto se hacía con las páginas hace varios años atrás, pero, a medida que la información fue creciendo, la tecnología fue avanzando y se requirieron páginas dinámicas, lo que necesita una gran cantidad de estilos y tenerlos embebidos se vuelve una mala praxis por la confusión que puede generar al programador y por el peso dado a cada página, con códigos repetitivos.
        p Por lo anterior, la hoja de estilos en cascada es la mejor y más eficiente práctica para la aplicación de estilos en una página web y se hace a través de un archivo externo, el cual se relaciona en la cabecera de la página.
        
        .bloque-texto-2
          .bloque-texto-2__texto            
            p Para relacionar un archivo externo, se hace de la siguiente manera:

    .row.justify-content-center.mb-0.mt-0
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 2.
          span CSS externo
        
        img(src="@/assets/curso/temas/tema1/t1-19.svg")           
        
    .row.justify-content-center.mt-5
      p Al observar la imagen anterior se ve la etiqueta enlace de HTML que es la que permite relacionar el archivo externo de CSS a través de su propiedad #[b href].
      p #[b href] solicita la URL donde se encuentra el archivo externo a relacionar; se debe tener presente que esa dirección debe estar dentro de la carpeta de proyecto, para que no se presente ningún error al momento de subir el proyecto al #[i hosting].
      .col-lg-10.mt-3
        .tarjeta.color-descarga.p-4
          .row.justify-content-around.align-items-center
            .col-4.col-sm-2.col-lg-2
              img(src="@/assets/curso/temas/tema1/t1-15.svg").icono
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0-p-5
                  p Lo invitamos a leer los siguientes documentos para ampliar la información sobre la temática que venimos estudiando:
                  ul.lista-ul.ps-5
                    li 
                      i.fas.fa-circle.tamano-vineta
                      span.ps-3 Hojas de estilo CSS.
                    li 
                      i.fas.fa-circle.tamano-vineta
                      span.ps-3 Diseño web #[i responsive].

                .col-sm-auto
                  a.boton.color-boton(:href="obtenerLink('/downloads/Anexo2.zip')" target="_blank")
                    span Enlace web
                    i.fas.fa-link

    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2.mt-3 1.3 JavaScript

    .row.justify-content-center.mt-4
      .col-lg-12
        .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5
          .b3.bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/t1-20.svg')})`}"
          )
          .b3.bloque-texto-g__texto.p-4
            p.mb-0 Una de las evoluciones más favorables fue la creación de motores de interpretación que aceleran el procesamiento del código. El éxito de dichos motores es que transforman el código JavaScript a código máquina, para tener velocidades similares a las de aplicaciones de escritorio; con lo anterior, JavaScript se confirmó como la mejor opción para aplicación en la web.
            br
            br
            | Para aprovechar todas las ventajas de los nuevos motores, JavaScript se expandió en portabilidad e integración. También se agrega APIs por defecto a los navegadores, para asistir el lenguaje en funciones básicas. Algunas de las APIs son Canvas y también Web Storage, entre otras más.

    .row.justify-content-center.mt-5
      .col-lg-10
        .tarjeta.color-descarga.p-4
          .row.justify-content-around.align-items-center
            .col-4.col-sm-2.col-lg-2
              img(src="@/assets/curso/temas/tema1/t1-15.svg").icono
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0-p-5
                  p.mt-4 Para ampliar la información sobre Canvas, lo invitamos a leer el documento Canvas.

                .col-sm-auto
                  a.boton.color-boton(:href="obtenerLink('/downloads/Canvas.docx')" target="_blank")
                    span Enlace web
                    i.fas.fa-link

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
