<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bf-t2
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.text-white
        span 3
      h1 Codificación en lenguajes de programación

    .row.justify-content-center.mb-0
      p La nomenclatura de JavaScript indica la forma como se escriben sus variables, es decir, su sintaxis, gramática, y cómo sería su aplicación. Este tema, en concreto, será detallado más adelante, cuando se estén estudiando variables, constantes y funciones.

    .row.justify-content-center.align-items-center.mt-3 
      .col-lg-7.bg.p-5        
        p En JavaScript existen los gestores de paquetes, los cuales se encargan de gestionar las dependencias entre código y liberar de esta ardua tarea, al programador. Estas herramientas son gestores como Gradle, Maven Ant y su función es la de encargarse de la instalación, actualización, configuración y eliminación de los diferentes paquetes que necesite el <i>software</i>, para su funcionamiento.

        p Las clases en JavaScript permiten la programación orientada a objetos, con sus atributos, sus propiedades, sus constructores y permitiendo de una forma sencilla, la creación de objetos y la implementación de la herencia.
      .col-lg-5
        .titulo-sexto.color-acento-contenido
            h5 Figura 3
            br
            span.fst-italic Declaración de clase
        
        img(src="@/assets/curso/temas/tema3/1.svg")

    .row.justify-content-center.mt-5     
      .col-8.col-lg-2        
        figure
          img(src='@/assets/curso/temas/tema3/2.svg', alt='' data-aos="fade-down-left").mb-3     
      .col-lg-10
        p Las funciones son útiles en el proceso de desarrollo de aplicaciones web, donde una y otra vez se repiten las mismas instrucciones en varias partes del desarrollo. Por ejemplo, si se está haciendo una tienda virtual, siempre se debe estar calculando el precio de los productos, añadiendo los impuestos necesarios y los gastos de envío; para este proceso es posible utilizar un script.
        p Un ejemplo sencillo para determinar cómo se escribe una función, es la suma de dos números; en JavaScript, si yo quiero sumar dos números, lo hago como se observa en la imagen.

    .row.justify-content-center.mb-0.mt-5
      .col-lg-5
        .titulo-sexto.color-acento-contenido
          h5 Figura 4
          br
          span.fst-italic Ejemplo suma de dos números
        
        img(src="@/assets/curso/temas/tema3/t3-3.svg").mb-3

      .col-lg-7.cajon-texto4.p-4
        p En la imagen anterior, se muestra cómo se agrega el código que declara tres variables: la de número 1 y la de número 2, a las que se les asigna un valor y después se realiza la operación, para guardar el efecto, en la variable resultante.
        p Si se supone que esta acción se debe hacer varias veces en diferentes partes del código, entonces, se estaría siempre agregando 8 líneas de código y no sería muy óptimo dejar tal cantidad de código, cuando se puede optimizar, usando una función. Se deberá crear una función que haga la respectiva suma y muestre el resultado.

    .row.justify-content-center.mb-0.mt-3
      .col-lg-5
        .titulo-sexto.color-acento-contenido
          h5 Figura 5
          br
          span.fst-italic Usando función suma
        
        img(src="@/assets/curso/temas/tema3/t3-4.svg").mb-3

      .col-lg-7.cajon-texto4.p-4
        p La imagen anterior, muestra el funcionamiento de una función, pero se debe explicar su sintaxis.
        p.mb-0.text-bold funtion nombre_funcion ( argumentos ) &#123;
        p.mb-0.mt-0.text-bold &#125;

        p La sintaxis de una función, como se mostró anteriormente, es decir, se declara con la palabra clave <b><i>function</i></b>, se le asigna un nombre y, entre los paréntesis, van los argumentos o los parámetros de entrada que recibe; recuerde que una función puede necesitar parámetros de entrada o puede funcionar sin ellos, de acuerdo con la necesidad y el contexto.

        p Después de explicar la sintaxis, todas las funciones se crean de la misma forma y, por eso, en el ejemplo de la imagen, se creó la función suma, la cual suma los dos números, los guarda en la variable resultado y genera un mensaje emergente, con una ventana de diálogo, para mostrar su resultado a través de la palabra clave #[b alert].

    .titulo-segundo.color-acento-botones(data-aos="fade-left")
      h2.mt-5 Variables

    .row.justify-content-center
      p Las variables, en programación, son espacios en memoria que se identifican a través de un nombre dado y permiten guardar un valor de un tipo de dato dado.

    .row.justify-content-center.align-items-center.my-5
      .col-lg-4
        img.img-a.img-t(src='@/assets/curso/temas/tema3/t3-5.svg', alt='')
      .col-lg-8
        .row.p-3.mt-5.p-4.cajon-texto2
          p En JavaScript es lo mismo y se manejan de igual forma; lo único es que es un lenguaje no tipado y por eso, no se le debe dar el tipo de dato a la variable, solo utilizar la palabra clave #[b var] para definirla. Por ejemplo: 
          p #[b var nombre;] 
          p La línea anterior crea una variable en JavaScript llamada #[b nombre], la cual podrá almacenar cualquier tipo de dato, pero como las buenas prácticas indican que se deben dar nombres coherentes a las variables, lo ideal es que, si se llama de esta manera, guarde un valor de un nombre de una persona.
          p.mb-0 La palabra clave #[b var], antes del 2015, era la única forma de declarar una variable para JavaScript; pero la nueva versión, después del 2015, permite al lenguaje definir constantes, es decir, variables cuyo valor nunca va a cambiar, dentro de la ejecución de todo el programa y para esto se utiliza la palabra clave #[b const]. 

    .row.justify-content-center.mt-5
      p La otra forma que salió es la palabra clave #[b let] que define una variable con alcance restringido.
      .col-lg-10
        .cajon.cajon-color1.p-4
          p Con la forma de definir las variables, se debe expresar que se usan, no solo para mantener valores, sino para realizar expresiones algorítmicas con diferentes operadores.
          p Las variables declaradas en cada lenguaje de programación, al igual que en JavaScript, deben identificarse con nombres únicos denominados identificadores.
          p Los identificadores pueden ser nombres cortos (como x o y) o nombres más descriptivos (edad, suma, volumen total).

    .row.justify-content-center.mt-5
      p Existen reglas generales para construir nombres de variables (identificadores únicos) que son:
      SlyderF(columnas="col-lg-6 col-xl-4").text-center
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/t3-6.svg' alt='AvatarTop')
          .tarjeta.tarjeta-color.p-4
            p Los nombres pueden contener letras, dígitos, guiones bajos y signos de dólar.
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/t3-6.svg' alt='AvatarTop')
          .tarjeta.tarjeta-color.p-4
            p Los nombres deben comenzar con una letra.     
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/t3-6.svg' alt='AvatarTop')
          .tarjeta.tarjeta-color.p-4
            p Los nombres también pueden comenzar con $ y _ (pero no son usados comúnmente y acá tampoco se usarán).
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/t3-6.svg' alt='AvatarTop')
          .tarjeta.tarjeta-color.p-4
            p Los nombres distinguen entre mayúsculas y minúsculas (z y Z son variables distintas).
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/t3-6.svg' alt='AvatarTop')
          .tarjeta.tarjeta-color.p-4
            p Las palabras reservadas del sistema o lenguaje no se pueden usar como nombres.


    .row.justify-content-center.mt-5
      .col-lg-10
        .cajon.cajon-color1.p-4
          p.mb-0 Con lo anterior un ejemplo de declaración de variable es:
          p.mt-0 #[b var x;] 
          
          p.mb-0 y si se le asigna un valor a través del operador de asignación que es el igual, sería de la siguiente manera:
          p.mt-0 #[b var x= 5;]
          
          p.mb-0 Se empezará observando que las variables pueden tener tipos de datos numéricos como x que se le asigna el valor de 5 o valores de texto, que se asignan entre comillas.
          p.mt-0 #[b var nombre = “Jose Aguilar”;]

          p.mb-0 Ahora, también se puede interactuar con etiquetas HTML; por ejemplo, asignarle el valor de una variable a una etiqueta de párrafo HTML.
          p.mt-0.mb-0 #[b <&#112; id="ejemplo"> <&#47;&#112;>]
          p.mt-0.mb-0 #[b &#60;script>]
          p.mt-0.mb-0 #[b var carName = "Audi";]
          p.mt-0.mb-0 #[b document.getElementById("ejemplo").innerHTML = carName;]
          p.mt-0 #[b <&#47;script>]                                        

    .tarjeta.tarjeta--verde.p-4.mt-5
      SlyderA(tipo="b" data-aos="fade-down-left")
        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-6.mb-4.mb-md-0
            p Lo anterior, en tiempo de ejecución, ejecuta el Script y llama al elemento con el id ejemplo y le asigna el valor de la variable carName.
            p Ahora vamos a revisar los operadores; estos, al igual que en cualquier otro lenguaje, son:

          .col-md-6
            .titulo-sexto.color-acento-contenido
              h5 Tabla 1
              br
              span.fst-italic Operadores JavaScript          
            .tabla-a.color-acento-contenido
              table.text-center
                thead
                  tr
                    th Operador
                    th Descripción
                tbody
                  tr
                    td +
                    td Suma
                  tr
                    td -
                    td Resta
                  tr
                    td *
                    td Multiplicación
                  tr
                    td /
                    td División
                  tr
                    td **
                    td Exponente
                  tr
                    td ++
                    td Incremento
                  tr
                    td --
                    td Decremento                                                                              

        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-6
            p Estos operadores también se pueden conjugar con el de asignación y escribirse de la siguiente manera:
          .col-md-6.mb-4.mb-md-0
            .titulo-sexto.color-acento-contenido
              h5 Tabla 2
              br
              span.fst-italic Operadores de asignación          
            .tabla-a.color-acento-contenido 
              table.text-center
                thead
                  tr
                    th Operador
                    th Ejemplo
                    th Igual a
                tbody
                  tr
                    td =
                    td x = y
                    td x = y
                  tr
                    td +=
                    td x += y
                    td x = x + y
                  tr
                    td -=
                    td x -= y
                    td x = x – y
                  tr
                    td *=
                    td x *= y
                    td x = x * y
                  tr
                    td /=
                    td x /= y
                    td x = x / y
                  tr
                    td %=
                    td x %= y 
                    td x = x % y
                  tr
                    td **=
                    td x **= y 
                    td x = x ** y

        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-6.mb-4.mb-md-0
            p Aparte de los operadores aritméticos revisados en los cuadros anteriores, también se cuenta con operadores de comparación:

          .col-md-6
            .titulo-sexto.color-acento-contenido
              h5 Tabla 3
              br
              span.fst-italic Operadores de comparación          
            .tabla-a.color-acento-contenido 
              table.text-center
                thead
                  tr
                    th Operador
                    th Descripción
                tbody
                  tr
                    td ==
                    td Igual a
                  tr
                    td ===
                    td Igual valor e igual tipo de dato
                  tr
                    td !=
                    td Diferente
                  tr
                    td !==
                    td Diferente valor o diferente tipo de dato
                  tr
                    td >
                    td Mayor que 
                  tr
                    td <
                    td Menor que
                  tr
                    td >=
                    td Mayor o igual que  
                  tr
                    td <=
                    td Menor o igual que
                  tr
                    td ?
                    td Operador ternario

    .row.justify-content-center.mt-5     
      .col-8.col-lg-2        
        figure
          img(src='@/assets/curso/temas/tema3/t3-7.svg', alt='' data-aos="fade-down-left").mb-3     
      .col-lg-10
        p Con todos los operadores anteriores, se pueden combinar las variables y hacer expresiones aritméticas o usarse en los condicionales como pruebas lógicas para determinar por cual camino seguir, según se cumpla o no, la condición a través del condicional #[b if] y los operadores de comparación.
        p Ahora, las constantes son nombres que se asignan a espacio en memoria, para guardar un único valor, el cuál no podrá cambiar en ningún momento de la ejecución del #[i software].

    .row.justify-content-center.mb-0.mt-3
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Figura 6
          br
          span.fst-italic Sintaxis de constantes
        
        img(src="@/assets/curso/temas/tema3/t3-8.svg").mb-3

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
