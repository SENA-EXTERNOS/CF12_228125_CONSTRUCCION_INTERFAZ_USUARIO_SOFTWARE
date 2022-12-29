<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.text-white
        span 4
      h1 Estilo de codificación

    .row.justify-content-center.mt-4
      .col-lg-12
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/t4-1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Los comentarios son parte del desarrollo que están en el código fuente, pero que el sistema no los ejecuta, los pasa por alto; sirven para documentar el código e identificar ciertas partes importantes en su mantenimiento a futuro.
            br
            br
            | Los comentarios pueden ser de una línea o pueden ser comentarios de varias líneas, como se presenta a continuación.

    .row.justify-content-center.mt-5
      .col-lg-5
        .titulo-sexto.color-acento-contenido
          h5 Figura 7.
          span Comentario de una sola línea
        
        img(src="@/assets/curso/temas/tema4/t4-2.svg").mb-3
      .col-lg-2
      .col-lg-5
        .titulo-sexto.color-acento-contenido
          h5 Figura 8.
          span Comentario de varias líneas
        
        img(src="@/assets/curso/temas/tema4/t4-3.svg").mb-3      

    .row.mt-5
      p En JavaScript, existen tres formas de declarar variables; estas declaraciones son sensibles a mayúsculas y minúsculas.
    
    .row.justify-content-center.mt-5(data-aos="fade-down-left").text-white
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-acento-botones.p-4.tarjeta-hoover
          .row.justify-content-center.mb-3
            .col-5
              figure
                img(src='@/assets/curso/temas/tema4/t4-4.svg', alt='Texto que describa la imagen')

          h3.text-center var
          p.text-center Declara una variable, opcionalmente, la inicia a un valor.

      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-acento-botones.p-4.tarjeta-hoover
          .row.justify-content-center.mb-3
            .col-5
              figure
                img(src='@/assets/curso/temas/tema4/t4-4.svg', alt='Texto que describa la imagen')

          h3.text-center let
          p.text-center Declara una variable local con ámbito de bloque, opcionalmente, la inicia a un valor.


      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-acento-botones.p-4.tarjeta-hoover
          .row.justify-content-center.mb-3
            .col-5
              figure
                img(src='@/assets/curso/temas/tema4/t4-4.svg', alt='Texto que describa la imagen')

          h3.text-center const
          p.text-center Declara un nombre de constante de solo lectura y ámbito de bloque.
        
    .tarjeta.tarjeta--verde.p-4.mt-5
      SlyderA(tipo="b" data-aos="fade-down-left")
        .row.justify-content-center.align-items-center.my-lg-4.p-5
          .col-md-6.mb-4.mb-md-0
            p Para dar inicio a las estructuras de control, se va a iniciar con los condicionales, estructura que permite controlar el flujo del programa o de la función que se esté realizando.
            p.text-bold.mb-0 If (condición) &#123;
            p.text-bold.mt-0.mb-0 &#125; else &#123;
            p.text-bold.mt-0 &#125;
            p La sintaxis es la anterior, donde se puede ver que se aplica igual que en los lenguajes como #[b php] o Java. A continuación, un ejemplo de su uso.
          .col-md-6
            .titulo-sexto.color-acento-contenido
              h5 Figura 9.
              span Estructura de control if         
            img(src='@/assets/curso/temas/tema4/t4-5.svg', alt='Texto que describa la imagen').mt-3
        
        .row.justify-content-center.align-items-center.my-lg-4.p-5
          .col-md-6.mb-4.mb-md-0
            p La imagen muestra cómo se aplica un #[b if] de acuerdo con el valor de la variable mensaje; si su valor es #[b true] se muestra el mensaje “Hola Mundo” y de lo contrario se muestra el mensaje “Error”.
            p Para continuar, en JavaScript existen diferentes tipos de bucles que se pueden programar, pero, en esta ocasión, se abordarán solo dos, el ciclo mientras y el ciclo para.
            p La estructura #[b #[i while]] o mientras, es un ciclo que permite repetir las acciones varias veces, hasta que una condición se cumpla; si la condición se deja de cumplir, el ciclo termina.
            p Se debe tener muy claro que los dos ciclos el #[b #[i for]] y el #[b #[i while]] son repetitivos, pero el #[b #[i for]], por ejemplo, se usa cuando se conoce cuántas veces se va a repetir las acciones que estarán dentro de él, mientras que, en el #[b #[i while]], no se conoce cuántas veces se va a repetir, sino que se repetirá mientras una condición se siga cumpliendo.
            
          .col-md-6.mt-0
            .titulo-sexto.color-acento-contenido
              h5 Figura 10.
              span Estructura while infinita        
            img(src='@/assets/curso/temas/tema4/t4-6.svg', alt='Texto que describa la imagen').mt-3     

        .row.justify-content-center.align-items-center.my-lg-4.p-5
          .col-md-6.mb-4.mb-md-0
            p Cuando se trabaja el ciclo while, se debe tener mucho cuidado que no se haga un ciclo infinito; la imagen anterior muestra cómo el ciclo while nunca termina, porque no tiene nada dentro de él que haga que, en algún momento, se rompa la condición (se deje de cumplir).

            p Ahora, la forma correcta de hacer el ciclo anterior es la siguiente:

          .col-md-6.mt-0
            .titulo-sexto.color-acento-contenido
              h5 Figura 11.
              span Estructura while correcta       
            img(src='@/assets/curso/temas/tema4/t4-7.svg', alt='Texto que describa la imagen').mt-3  

        .row.justify-content-center.align-items-center.my-lg-4.p-5
          .col-md-6.mb-4.mb-md-0
            p Como se puede observar, el código anterior en la línea 5 hace que la variable veces aumente de uno en uno, cada vez que da un giro el ciclo y, así, en algún momento, llegará a no cumplir la condición de veces < 7 y, en ese momento, el ciclo termina.

            p El siguiente ciclo es el for. Este ciclo es repetitivo, pero se conoce cuántas veces se va a repetir las acciones que están dentro de él, 5 veces, 6 veces, 15 veces o N veces si el usuario es el encargado de determinar las veces que se repetirá.

            p.mb-0.text-bold for(inicializacion; condicion; actualizacion) &#123;

            p.mt-0-mb-0.text-bold.ps-3 ...

            p.mt-0.text-bold &#125;

          .col-md-6.mt-0
            .titulo-sexto.color-acento-contenido
              h5 Figura 12.
              span Estructura ciclo for       
            img(src='@/assets/curso/temas/tema4/t4-8.svg', alt='Texto que describa la imagen').mt-3       
          
        .row.justify-content-center.align-items-center.my-lg-4.p-5
          .col-md-6.mb-4.mb-md-0
            p La sintaxis del for es la anterior; en el paréntesis se configura y tiene tres parámetros, la inicialización que indica la variable de control en qué valor inicia; normalmente, la variable de control es #[b i] o #[b j], e inicia en cero. El segundo parámetro es la condición, es decir, hasta donde va ir la variable y el tercer parámetro es la actualización o incremento, cada giro del ciclo cuánto va a incrementar la variable de control.

            p.text-bold.mb-0 for (var i = 0; i < 5; i++) &#123;

            p.text-bold.mt-0.ps-3.mb-0 console.log(mensaje);

            p.mt-0.text-bold &#125;

            p La sintaxis completa es la anterior, donde se ve que se declara una variable i = 0 como variable inicializadora; el segundo parámetro indica la condición, que la i sea menor a 5, apenas se incumpla esa condición.


          .col-md-6.mt-0
            .titulo-sexto.color-acento-contenido
              h5 Figura 12.
              span Estructura ciclo for       
            img(src='@/assets/curso/temas/tema4/t4-8.svg', alt='Texto que describa la imagen').mt-3   

        .row.justify-content-center.align-items-center.my-lg-4.p-5
          .col-md-6.mt-0
            .titulo-sexto.color-acento-contenido
              h5 Figura 12.
              span Estructura ciclo for       
            img(src='@/assets/curso/temas/tema4/t4-8.svg', alt='Texto que describa la imagen').mt-3   

          .col-md-6.mb-4.mb-md-0
            p La imagen anterior muestra primero, cómo se declara y se llena un array unidimensional con los días de la semana y, en seguida, se crea un ciclo for para recorrer ese array e ir mostrando en consola, el día de la semana correspondiente a cada posición del vector.

            p |

            p El for termina cuando se deje de cumplir la condición de i menor a 7 y se puede ver que, en cada giro, el for aumenta la i en 1.


  
          


</template>

<script>
export default {
  name: 'Tema4',
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
