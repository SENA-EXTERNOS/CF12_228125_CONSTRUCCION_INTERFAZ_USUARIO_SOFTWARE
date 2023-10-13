<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.text-white
        span 5
      h1 Experiencia de usuario

    .row.justify-content-center
      p.mb-3 La experiencia de usuario es un tema muy importante en el desarrollo de software, porque permite definir cómo se sentirá el usuario mientras navega por el sistema o aplicación web. Se trata de hacerle vivir una experiencia agradable para que quiera seguir usando la aplicación, que la pueda usar de una forma sencilla y, sobre todo, que cumpla con las funciones pactadas o por las cuales se creó. 
      .col-8.col-lg-2        
        figure
          img(src='@/assets/curso/temas/tema5/t5-1.svg', alt='' data-aos="fade-down-left").mb-3     
      .col-lg-10
        p.mt-3 Según la norma ISO 25000, se conoce por usabilidad, la capacidad del producto #[em software] para ser entendido, aprendido, usado y resultar atractivo para el usuario, cuando se usa bajo determinadas condiciones. Esta característica se subdivide, a su vez, en las siguientes subcaracterísticas:

    .row.bkg-t5
      .row.justify-content-center.mt-5     
        .col-8.col-lg-4          
          figure
            img(src='@/assets/curso/temas/tema5/t5-2.svg', alt='' data-aos="fade-down-right")         
        .col-lg-8.mt-3
          AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")
            .row(titulo="Capacidad para reconocer su adecuación")
              .col-12.ps-5
                p.mb-0 Capacidad del producto que permite al usuario entender si el #[em software] es adecuado para sus necesidades.
            .row(titulo="Capacidad de aprendizaje")
              .col-12.ps-5
                p.mb-0 Capacidad del producto que permite al usuario aprender su aplicación.
            .row(titulo="Capacidad para ser usado")
              .col-12.ps-5
                p.mb-0 Capacidad del producto que permite al usuario operarlo y controlarlo con facilidad.
            .row(titulo="Protección contra errores de usuario")
              .col-12.ps-5
                p.mb-0 Capacidad del sistema para proteger a los usuarios de cometer errores.
            .row(titulo="Estética de la interfaz de usuario")
              .col-12.ps-5
                p.mb-0 Capacidad de la interfaz de usuario de agradar y satisfacer la interacción con el usuario.
            .row(titulo="Accesibilidad")
              .col-12.ps-5
                p.mb-0 Capacidad del producto que permite que sea utilizado por usuarios, con determinadas características y discapacidades.                                                                             

    .row.justify-contener-center.mt-5
      p La accesibilidad hace que los sitios web puedan ser utilizados por la mayor cantidad de personas posible. Tradicionalmente, se ideó para las personas con discapacidad, pero la creación de sitios accesibles también beneficia a otros grupos, como los que utilizan los dispositivos móviles o los que tienen conexiones de red lentas.

    .row.justify-content-center.bkg-t5-tarjeta.p-3.mt-5
      .col-lg-4.col-10
        figure
          img(src='@/assets/curso/temas/tema5/t5-3.svg', alt='').img-cajon3
      .col-lg-8
        .row.cajon-texto3.p-5.mt-4
          p También se podría pensar en la accesibilidad como una forma de tratar a todos por igual y darles las mismas oportunidades, sin importar su capacidad o circunstancias. Al igual que es injusto excluir a alguien de habitar en un edificio, porque se movilice por medio de una silla de ruedas (generalmente, los edificios públicos modernos tienen rampas o ascensores), tampoco es correcto excluir a alguien de un sitio web porque tenga una discapacidad visual. Todos somos diferentes, pero todos somos humanos y, por lo tanto, tenemos los mismos derechos.
          p Por eso debemos lograr que los recursos sean accesibles. En algunos países, es obligado por la ley proporcionar sitios web accesibles, lo que puede abrir algunos mercados importantes que, de otra manera, no serían capaces de utilizar los servicios o comprar los productos.

    .row.justify-content-center.mb-0
      .col-lg-10
        .cajon.cajon-color1.p-4
          p Crear sitios web accesibles debe ser lo ideal, para beneficiar, de acuerdo a lo siguiente:       
          ul.lista-ul.ps-5
            li 
              i.fas.fa-circle.tamano-vineta2
              | El HTML semántico, aparte de mejorar la accesibilidad, también mejora la optimización en motores de búsqueda (SEO), y la gente encuentra un sitio web con mayor facilidad.

            li 
              i.fas.fa-circle.tamano-vineta2
              | Preocuparse por la accesibilidad demuestra buenos criterios éticos y morales, lo que mejora la imagen pública.

            li 
              i.fas.fa-circle.tamano-vineta2
              | Mejorar la accesibilidad, también hace que el sitio sea más fácil de usar por otros grupos, como los usuarios de dispositivos móviles o los que tienen internet de baja velocidad. De hecho, todo el mundo puede beneficiarse de estas mejoras.

            li 
              i.fas.fa-circle.tamano-vineta2
              | Además, hemos mencionado también que en algunos países está estipulado por ley.


    .row.mt-5
      p Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.   


</template>

<script>
export default {
  name: 'Tema5',
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
