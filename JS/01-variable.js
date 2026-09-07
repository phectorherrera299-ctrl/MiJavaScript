//esto es un comentario de una linea

/* comentario multiliea */

/* let → Declara una variable cuyo valor puede cambiar durante la ejecución del programa.

const → Declara una variable cuyo valor no se puede reasignar después de declararla.

var → Es una forma antigua de declarar variables. No se recomienda en JavaScript moderno porque su comportamiento con el alcance (scope) puede generar confusiones y errores. */

// 1. DECLARACIÓN DE VARIABLES
// Podemos declarar una variable sin darle todavía un valor.
// En este caso, su valor inicial será undefined.
let precioCompra;
// También podemos declarar varias variables sin valor.
let descuento;
let nombre;
// Acá declaramos la variable "apellido" y le asignamos un valor.
let apellido = "perez";

/* = operador de asignacion */
// El signo "=" es el operador de asignación.
// Sirve para guardar un valor dentro de una variable.
nombre = "Alejandro";
// Ahora la variable "nombre" contiene "Alejandro".

console.log("Hola Mundo");
// console.log() sirve para mostrar información en la consola
// del navegador o del entorno donde ejecutemos JavaScript.

console.log(nombre);
// Muestra el contenido de la variable nombre.
// Resultado: Alejandro

// Podemos cambiar el valor de una variable declarada con let.
nombre = "Mariano";
// Ahora nombre ya no contiene "Alejandro".
// Ahora contiene "Mariano".

// 4. CONCATENACIÓN DE TEXTOS
// Podemos unir textos y variables utilizando el signo "+".
console.log("Bienvenido "+ nombre + "por que lalala" + apellido);
// JavaScript une todos los textos y valores.
// Resultado aproximado:
// Bienvenido Mariano por que lalala perez

// 5. TEMPLATE STRING
// Otra forma, generalmente más cómoda, de mezclar textos
// y variables es utilizar Template Strings.
// Se utilizan las comillas invertidas: ` `
// y las variables se colocan dentro de ${ }.
console.log(`Bienvenido ${nombre} ${apellido}`);  //template string
// Resultado:
// Bienvenido Mariano perez

// 6. TIPOS DE VARIABLES: let, var y const
// LET
// Una variable declarada con let puede cambiar su valor.
// Además, respeta el scope de bloque.
let number = 3;
number = 5;
// Esto está permitido porque usamos let.

// VAR
// var también permite cambiar el valor de una variable,
// pero es una forma antigua de declarar variables.
// Su comportamiento con el scope es diferente al de let y const,
// y puede generar confusión.
// Por eso NO se recomienda utilizar var en JavaScript moderno.
var name = "Juan";

// CONST
// const se utiliza cuando NO queremos reasignar la variable.
const lastName = "Basso";
console.log(lastName);
// Resultado:
// Basso

// Esto NO está permitido:
//const lastName = "Herrera"
// Porque lastName fue declarada con const.
// Una vez asignado el valor, no podemos reasignarlo.

// 7. OTROS MÉTODOS DE LA CONSOLA
// Muestra información normal.
console.log("Hola Mundo");

// Muestra información.
console.info("Hola Mundo");

// Muestra una advertencia.
console.warn("Hola Mundo");

// Muestra un error.
console.error("Hola Mundo");

// También podemos volver a utilizar console.warn()
console.warn("Hola Mundo");

// alert() muestra una ventana emergente en el navegador.
// alert("Bienvenido")

// prompt() muestra una ventana donde el usuario puede
// introducir información.
// const nombreUsuario = prompt("Ingresa tu nombre");
// El texto que introduzca el usuario se guarda en nombreUsuario.
// Podemos mostrar ese valor en la consola:
//console.log(nombreUsuario);

// document.writeln() escribe contenido directamente
// dentro del documento HTML.
// document.writeln(`Bienvenido ${nombreUsuario}`)

// 11. RECIBIR NÚMEROS CON prompt()
// IMPORTANTE:
// prompt() devuelve el valor introducido como TEXTO (string).
// Por eso, si queremos trabajar con números,
// necesitamos convertir ese texto a número.
// let num1 = Number(prompt("Ingrese un numero"))
// Number() puede convertir un texto en un número.
// console.log(num1);

// También podemos utilizar parseInt()
// para convertir el valor a un número entero.
// En este caso pedimos el primer número.
let numUno = parseInt(prompt("Ingrese un numero "))
// Pedimos el segundo número.
let numDos = parseInt(prompt("Ingrese otro numero")) 

// 12. SUMA
// Primero declaramos la variable suma.
let suma;
// Después guardamos en ella el resultado de sumar
// numUno + numDos.
suma = numUno + numDos;
// Por ejemplo, si el usuario introduce:
// numUno = 10
// numDos = 5
// Entonces:
// suma = 10 + 5
// suma = 15

// Mostramos el resultado en la página.
document.writeln(`El valor de la suma de los numeros ingresados es ${suma}`);

// 13. IGUALDAD DÉBIL ==
// == compara dos valores intentando convertir sus tipos
// si es necesario.
// Por ejemplo:
console.log(2 == "2");
// Resultado:
// true
// ¿Por qué?
// Porque 2 es un número y "2" es un texto,
// pero == convierte los tipos antes de comparar.
// 2 == "2"
// ↓
// true

// 14. IGUALDAD ESTRICTA ===
// === compara tanto el VALOR como el TIPO DE DATO.
// Resultado:
// false
// ¿Por qué?
// 2    → number
// "2"  → string
// Aunque representan el mismo número,
// sus tipos son diferentes.
// Por eso:
// 2 === "2"
// ↓
// false
console.log(2 === "2");