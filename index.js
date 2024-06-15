//Entrada y salida de datos

//Prompt()

var nombre = prompt("Introduce nombre " , "nombre por defecto");
var edad = prompt("Que edad tienes?:" , 18);

//Alert()

alert("Esto es una alerta");
var confirmacion = confirm("Estas seguro de continuar?");

//console.log()

console.log("Esto es un mensaje escrito por consola");

//Ejemplos de entrada y salida de datos

//Salida por ventana emergente

alert("Esto es una ventana emergente.");

//Entrada de datos

var edad = prompt("Introduzca edad:");

//Salida de datos leyendo desde una variable
alert("La edad introducida es: " + edad);

//Salida de datos por consola
console.log("Ha terminado el programa");

//Salida de datos al BODY de mi pagina
document.write("<h1>Esto es un H1 puesto desde JavaScript</h1>");

/* Estructuras basicas*/

//sentencias

alert("Esto es una sentencia ");
document.write("Esta es otra");

//Funciones predefinidas

alert();
document.write();

//Modo estricto

//use strict
num = 5;

var num = 5;

//Declaracion de variables (Global y Local)

var num = 5;
document.write(num); //num vale 5

if (true) {
    var num = 10;
    document.write(num); //num vale 10
}

document.write(num); //num vale 10

//con let
let num = 5;
document.write(num); //num vale 5

if (true) {
    let num = 10;
    document.write(num); //num vale 10
}

document.write(num); //num vale 5

var puntuacion;
puntuacion=500;
var puntuacion=500, record=1000, jugador="Angel";

var num1=5 //Aqui num1 es un numero(int).
var num2="5" //Aqui num2 es un string.

var num=5; //Declaracion y asignacion
num=10; //Reasignacion

/*Casting de variables*/

//Usar la funcion 

var num1=45;
Resultado= num1=Number(num2);

//Usar parseInt

alert(parseInt(num2)+23);

/* CONSTANTES */

const nombre="Antonio"

//Ejemplos de operaciones con variables

//Podemos trabajar con numeros, strings y booleans
//Declaracion de variables:
//No puede empezar por un numero
//Esto de error: var 2_cliente;
//Evitar tildes y enie

//Variable correctamente declarada
let _numero;

//Inicializacion de la variable
_numero = 63; 

//Variable declarada e inicializada
var numeor4 = 647; 

//Se pueden declarar e inicializar varias variables a la vez. 
var a=3, b=4, c=5;

//Seria lo mismo que poner:
/*
var a=3;
let b=4;
var c=5;
*/

//JavaScript es Case sensitive. Distingue entre mayusculas/ minusculas
var numero = 10;
var Numero = 20;

console.log("La variable 'numero' vale:" + numero);
console.log("La variable 'numero' vale:" + Numero);

//Con variable numericas podemos operar automaticamente

var sumando1 = 35;
var sumando2 = 45;

var resultado = sumando1 + sumando2;
console.log("El resultado de sumar " + sumando1 + " + " + sumando2 + " es " + resultado);

//operador modulo o resto de la division
var resto = 46 % 5;
connsole.log("El resto de 46/5 es " + resto);

//Operador incremento
var numeroInicial = 10;
let numeroIncrementado = ++numeroInicial;

//Seria como poner que numeroIncrementado = numeroInicial +1;
console.log("El operador incremento sobre numeroInicial daria " + numeroIncrementado);

//IMPORTANTE: No es lo mismo ++variable que variable++
var numero5 = 5;

document.write("El numero antes incrementado vale " + numero5++);
document.write("<br>");
document.write("El numero despues del incremento vale " + numero5);

document.write("<br>");
document.write("<br>");

//Ahora al reves
let numero6 = 5;

document.write("El numero antes del incremento vale " + ++numero6);
document.write("<br>");
document.write("El numero despues del incremento vale " + numero6);

//Constantes como las variables pero no se puede cambiar su valor 

//Se declaran en mayusculas
const MICONSTANTE = 4765;
//MICONSTANTE = 345; Esto daria error

//Hay que declararlas e inicializarlas obligatoriamente.
//const MICONSTANTE2; Esto daria error

/*String*/

//Declaracion de strings
//------------------------------
//------------------------------
let nombre = "Mi nombre es Angel";
let nombre2 = 'Mi nombre es Angel';

/*Aunque declaremos numeros, si lo hacemos entre comillas,
nos lo tratara como strings */
let edad2 = "43";
console.log(edad2+20);

//Las comillas anidadas siempre alternas,
let nombre3 = 'Mi nombre es "Angel" ';
let nombre4 = "Mi nombre es 'Angel' ";

/*Cuando declaremos numeros con los que no vamos a operar
matematicamente lo haremos como strings */

let telefono = "66666666666";

//Los strings no se suman, se concatenan:
let nombre5 = "Angel";
let espacio = " ";
let apellido = "Garcia";
let nombreCompleto = nombre5+espacio+apellido;

console.log(nombreCompleto);

//Otra forma de hacerlo
console.log(nombre5 + " " + apellido);
console.log(nombre5 + " " + edad2);

//FUNCIONES DE LOS STRINGS 

//toString

var num = 3;
var num2 = num.toString();

//toUppercase: Convierte un string en mayusculas.
//toLowercase: Convierte un string en minusculas.
//Length: Calcula la longitud de un text.

//Concat. para concatenar el texto como el +

var texto=texto1.concat(" "+texto2);

//indexOF() para buscar un texto dentro de otro.

var texto="Esto es el texto";
var busqueda= texto.indexOF("texto");
document.write(busqueda);

//metodo search funciona igual

var busqueda = texto.search("texto");

//Match() funciona como indexOF o search pero no devuelve un array con los resultados.

var busqueda = texto.match(/texto/gi);

//Substr() Sacame desde el caractaer 14, 5 caracteres en adelante

var busqueda = texto.substr(14,5);

//CharAt() para seleccionar una letra determinada de un string

var busqueda = texto.CharAt(44);

//StartWith() para buscar un texto al inicio del string

var texto="Hola mundo";
var busqueda = texto.StarWith("Hola");
//true
var busqueda = texto.StarWith("mundo");
//false

//endsWith() como el anterior pero mirando si el texto termina con los caracteres que le digamos.
//includes() busca una palabra en un texto.

//replace(): Nos permite reemplazar un texto por otro.
var busqueda = texto.replace("Hola", "Adios");

//slice(): me separa un string a partir del caracter que le digamos.

var texto = "Hola mundo";
var busqueda = texto.slice(5);
//me corta el string a partir del caracter 6, es decir, me deja solo "mundo"

//tambien puedo decirle la posicion de comienzo y fin:
var busqueda = texto.slice(5,7);

//split(): me mete el string en un array
var busqueda = texto.split();

//podemos indicarle un separado y nos mete las palabras que hay entre espacios, por ejemplo:
var busqueda = texto.split(" ");

//trim(): me quita los espacios por delante y por detras del string.

//plantillas en strings
/* Podemos sustituir valores dentro un string sin necesidad de estar concatenandolos, usando una 
plantilla. Para ello uso las comillas invertidas y la interpolación de variables con $0 */

//modo normal

var nombre=prompt("Introduce tu nombre: ");
var apellidos=prompt("Introduce tus apellidos: ");
var texto="Tu nombre es "+nombre+" y tus apellidos"+apellidos;

//con plantillas
var texto= '<h3> Tu nombre es $(nombre),</h3> <h3> y tus apellidos $(apellidos)</h3)';

//OPERADORES

//operadores de asignacion

var numero1 = 3;
var numero2 = 4;

/*Erro, la asignacion siempre se realiza a una variable,
por lo que en la izquierda no se puede indicar un numero */

5 = numero1;

//Ahora la variable numero1 vale 5
numero1 = 5;

//ahora la variable vale 4
numero1 = numero2;

//Operadores Incremento y decremento

var numero = 5;
++numero;
alert(numero); //numero = 6

//ejemplo anterior es equivalente a:

var numero = 5;
numero = numero + 1;
alert(numero); //numero = 6

var numero = 5
--numero;
alert(numero); //numero = 4

// el anterior ejemplo es equivalente a:

var numero = 5;
numero = numero - 1;
alert(numero); //numero = 4 

//Los operadores de incremento o decremento pueden ser prefijo o sufijo

var numero = 5; 
numero++;
alert(numero); //numero = 6 

//sin embargo hay excepciones como en el siguiente caso:

var numero1 = 5;
var numero2 = 2;
numero3 = numero1++ + numero2;
//numero3 =7, numero1 = 6

var numero1 = 5;
var numero2 = 2;
numero3 = ++numero1 + numero2;
// numero3 = 8, numero1 = 6

//OPERADORES LOGICOS

//negacion

var visible = true;
alert(!visible); //muestra false y no true

/* si la variable contiene un numero,
se transforma en false si vale 0 y en true para caulquier otro */

var cantidad = 0;
vacio = !cantidad; //vacio = true

cantidad = 2;
vacio = !cantidad; //vacio = false

/* Si la variable contiene una cadena de texto, 
se transforma en false si la cadena es ("") y en true en cualquier otro caso */

var mensaje = "";
mensajeVacio = !mensaje //mensajeVacio = true

mensaje = "Bienvenido";
mensajeVacio = !mensaje; //mensajeVacio = false

//AND

/* La operacion logica AND obtiene su resultado combinando dos valores booleanos.
El operado se indica mediante el simbolo && y su resultado solamente
es true si los dos operados son true: */

var valor1 = true;
var valor2 = false;
resultado = valor1 && valor2; //resultado = false

valor1 = true;
valor2 = true;
resultado = valor1 && valor2; // resultado = true

//OR

/* La operacion logica OR tambien combina dos valores booleanos.
El operado se indica mediante el simbolo || y su resultado es true si alguno de los operandos es true: */

var valor1 = true;
var valor2 = false;

resultado = valor1 || valor2; //resultado = true

valor1 = false;
valor2 = false;
resultado = valor1 || valor2; //resultado = false

//OPERADORES MATEMATICOS








































