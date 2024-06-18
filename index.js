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

var numero1 = 10;
var numero2 = 5;

resultado = numero1 / numero2; // resultado = 2 

resultado = 3 + numero1; //resultado = 13

resultado = numero2 - 4 // resultado = 1 

resultado = numero1 * numero2; // resultado = 50

// operador modulo calcula el resto de la division, se indica mediante el simbolo %

var numero1 = 10;
var numero2 = 5;
resultado = numero1 % numero2; // resultado = 0

numero1 = 9;
numero2 = 5;
resultado = numero1 % numero2; //resultado = 4 

//Los operadores matematicos tambien se pueden combinar con el operador de asignacion para abreviar su notacion:

var numero1 = 5;

numero1 += 3; //numero1 = numero1 + 3 = 8

numero1 -= 1; //numero1 = numero1 - 1 = 4 

numero1 *= 2; //numero1 = numero1 * 2 = 10

numero1 /= 5; //numero1 = numero1 / 5 = 1

numero1 %= 4; //numero1 = numero1 % 4 = 1

//Operadores Relacionales

// Mayor > ; Menor < ; Mayor/igual >= ; Menor/Igual <= ; igual == ; Distinto !=

var numero1 = 3;
var numero2 = 5;
resultado = numero1 > numero2; //resultado = false
resultado = numero1 < numero2; //resultado = true

numero1 = 5;
numero2 = 5;

resultado = numero1 >= numero2; // resultado = true
resultado = numero1 <= numero2; // resultado = true
resultado = numero1 == numero2; // resultado = true
resultado = numero1 != numero2; // resultado = false

/* == se utiliza para comparar el valor de dos variables
    = se utiliza para asignar un valor a una variable */

//el operador "=" asgna valores
var numero1 = 5;
resultado = numero1 = 3; // numero1 = 3 y resultado = 3

//el operador "==" compara variables 
var numero1 = 5;
resultado = numero1 == 3; // numero1 = 5 y resultado = false 

//Los operadores relacionales tambien se pueden utilizar con variables de tipo cadena de texto: 

var texto1 = "hola";
var texto2 = "hola";
var texto3 = "adios";

resultado = texto1 == texto3; // resultado = false
resultado = texto1 != texto2; // resultado = false
resultado = texto3 >= texto2; // resultado = false 

//CONDICIONALES Y BUCLES EN JAVASCRIPT 

/*Las instrucciones que te permite controlar las decisiones y bucles de ejecucion se denominan 
"Estructuras de control."Una parte importante de una estructura de control es la "condicion",
cada condicion es una expresion que se evalua a true o false. */

/* JavaScript ofrece un tota de cuatro instrucciones para procesar codigo de acuerdo a condiciones
determinadas por el programador: if, switch, for y while/ */

//CONDICIONALES

//Se ejecuta un cierto bloque de codigo cuando se cumple alguna condicion

//COMPARADORES 

//operador de comparacion 

// == igual que.. comprueba valor x==y
// === Estrictamente igual. Comprueba valor tipo. x===y
// != Diferente. Es igual que poner <> x!=y x<>y
// < Menor que x<y > Mayor que x>y
// <= Menor o igual que x<=y
// >= Mayor o igual que x>=y

//operador logico

// && Y logico a>b&&b<c
// || O logico a=b||b<c
// ! NO logico x!=y

/* JavaScript trabaja con dos tipos de condicionales, IF ... ELSE y SWTICH ... CASE. 
A continuacion, veremos el uso de ambos. */

// IF ... ELSE 

/* Se utiliza para decidir si una determinada declaracion o bloque de instrucciones se ejecutara o no,
es decir, si una determinada condicion es verdaderam entonces un bloque de instruccion se ejecutara de otro
modo se ejecutaran otras instrucciones de codigo */ 
//La sintaxis puede tener varias formas:

//Opcion 1. Una sola condicion a comprobar. 

/* 
IF(Condicion a cumplir){
Instruciones a ejecutar en caso de que la condicion
se cumpla
}else{
instrucciones a ejecutar en caso de que la condicion no se cumpla
}
*/

var precio=30000;
var dinero=prompt("Introduce cuanto dinero tienes: ");

if(dinero>precio){
    alert("Te puedes comprar el coche");
}else{
    alert("Te vas en autobus");
}

//Opcion 2. Mas de una condicion a comprobar

/*
IF(Condicion a cumplir){
Instrucciones a ejecutar en caso de que la condicion se cumpla
}else IF(Segunda condicion a cumplir){
Instruciones a ejecutar en caso de que la segunda condicion se cumpla
}else{
Instrucciones a ejecutar en caso de que ninguna condicion 
se cumpla
}
*/

//se pueden poner tantos else ... if como queramos
//else final no es obligatorio pero es util para ejecutar instrucciones

var precio = 30000; 
var dinero = prompt("Intruce cuanto dinero tienes: ");
var edad = prompt("Introduce tu edad: ");

if ((precio < dinero ) && (edad >= 18)) {
    alert("Te puedes comprar el coche");
}else if ((precio < dinero) && (edad < 18)) {
    alert("Tienes el dinero pero no la edad");
}else if ((precio > dinero) && (edad >= 18)){
    alert("Tienes la edad pero no el dinero");
}else if ((precio > dinero) && (edad < 18)){
    alert("Ni dinero ni edad");
}

/* Si el usuario introdujese un valor que no es un numero tendriamos un problema.
todo lo que el usuario introduzca por promp se considera un string, y para hacer
la comprobacion de si edad>=18 necesitamos que edad sea un numero */

// Para averiguar si un valor es numerico usamos la funcion isNaN()

var num1=prompt("Introduce numero");
var num2=prompt("Introduce numero2");
if(!isNaN(num1)&&!isNaN(num2)){
    alert(parseInt(num1)+parseInt(num2));
}else{
    alert("No has introducido numeros");
}

//SWITCH .... CASE

//cualquier evaluacion que se pueda hacer con switch case tambien se puede hacer con 
/// if ... else 

/*sintaxis

swich(Variable a comprobar) {
case"opcion1":
    instrucciones;
    break;
case"opcion2":
    instrucciones;
    break;
..............
case"opcionN";
    instrucciones;
    break;
default:
    instrucciones;
}
*/

//swith: entre parentesis el nombre de la varibale cuyo valor queremos comprobar
//segun sea dicho valor se debe de ejecutar una serie de instrucciones

/*Cada valor contra el que vamos a comparar se
incluye tras la palabra clave ‘case‘ separada por
dos puntos ( : ) y el valor encerrado en comillas*/

/*Incluimos un ‘break‘ en cada cláusula ‘case’ para
que el programa no se pare ahí, sino que salga de
ese punto y continúe después del final de la
instrucción switch con las instrucciones
siguientes que contenga el programa. */

/* La última clausula ‘default‘ realiza el mismo
cometido que el último ‘else’ que ponemos tras
una serie de ‘else if’. */

/*Partiendo de una variable edad, crear un programa
que impprima diferentes mensajes segun sea el valor de edad */

var edad = 18;
var imprime = "";

switch (edad) {
    case 18:
        imprime = "Acabas de cumplir la mayoria de edad";
        break
    case 25:
        imprime = "Eres un adulto";
        break;
    case 50:
        imprime = "Eres maduro";
        break;
    default:
        imprime = "Otra edad no contemplada";
        break;
}

document.write(imprime);

//BUCLES

//bucles determinados: se sabe cuantas veces se va a repetir un codigo. ejemplo for

//bucles indeterminados: no se sabe cuantas veces se va a reetir, dependera que se cumpla una condicion
//ejemplo while y do while

//El bucle determinado FOR

/*Es un tipo de bucle cuya ejecución dura un número
determinado de veces o hasta que su condición se
evalué como falsa (false) */

/* su sintaxis es:
for(inicio; condicion; incremento/decremento){
codigo a repetir
}
*/

//inicio: se suele crear una variable de nombre i,j,k, etc.
//condicion: se debe mantener para que siga ejecutando el ciclo
//incremento/decremento: esta expresion cambia el valor de la variable numerica indicada en incio
//codigo a repetir: cuerpo del bucle conjunto de instrucciones que se jecutan durante cada interacion del blucle

for(var i=0;i<10;i++){
    document.write("Hola"="<br>");
}
document.write("Ejecucion terminada.");

for(i=0 ; i<10 ; i++){
    document.write("En esta vuelta de bucle I vale " + i);
}

document.write("Ejecucion terminada."); 

/* El principal uso del bucle for es recorrer arrays,
poniendo como condición que el bucle se repetirá
tantas veces como elementos tengamos en nuestro
array: */

var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
for(var i = 0; i < meses.length; i++)
{
    document.write(meses[i] + "<br/>");
}

//WHILE. DO ... WHILE

/* Es similar al ciclo for explicado anteriormente. Se
ejecuta hasta que la condición sea falsa (false). La
diferencia se basa en que la evaluación se realiza al
final de cada iteración */

//WHILE

//podemos encontrarnos con que la condicion no se cumpla ni en la primera comprobacion, el codigo nunca se ejecutaria

/* While( Condición a cumplir){
Código a ejecutar mientras se cumpla la condición} */

var contador = 0;
var meses = ["Enero", "Febrero" , "Marzo" , "Abril" , "Mayo" , "Junio" , "Junio" , "Julio" , "Agosto" , "Septiembre" , "Octubre" , "Noviembre" , "Diciembre"];
while(contador < meses.length) {
    document.write(meses[contador] + "<br>");
    contador++;
}

let contador = 0;
let ciclos = Number(prompt("Introduce numero de ejecucion"));

while (contador < ciclos){
    console.log("Contador vale ahora" + contador);
    contador++; 
}

/*do {codigo a ejecutar mientras se cumpla la condicion}
while(condicion a cumplir) */

/* crear un número
aleatorio entre 0-100 y pedir al usuario que intente
adivinarlo */

//Creamos un numero aleatorio entre 0 y 1
//Despues lo que multiplicamos por 100 para que este entre 0 - 100
//Lo redondeamos para que sea entero

var numero = parseInt(Math.random()*100)

var numero_introducido;
var contador = 0;

while (numero != numero_introducido)
{
    numero_introducido =
    Number(prompt("Introduce numero: "));
    contador++;

    if (numero_introducido > numero) {
        alert("Demasiado alto");
    }

    if (numero_introducido < numero) {
        alert("Demasiado bajo");
    }
}

alert("Correcto!!!, el numero era el " + numero + ". Has acertado en " + contador + " intentos.");

//BREAK

//nos permite salir de un bucle de ejecucion al cumplirse una condicion

var year = 2000;
while (year < 2010) {
    document.write(year + "<br>");
    if (year == 2005) {
        break;
    }
    year++;
}

//ARRAYS 

/* Los arrays nos permiten trabajar con conjuntos de
valores y almacenarlos en una única dirección de
memoria */

var Articulos = ["Zapatillas" , "camiseta" , "pantalon" , "calcetines"];
var Articulos = new 
array("zapatillas","camiseta","pantalon","calcetines");

//ejemplo de acceso a un array

alert(Articulos[1]); 

/* La posición de los elementos empieza a contar desde
cero, es decir, en nuestro array Artículos, el elemento
en la posición cero es zapatilla, en la posición 1
tenemos camiseta, en la posición 2 tenemos
pantalón y en la posición 3 tenemos calcetines */

/* En el siguiente ejemplo vamos a crear un array de
tres elementos y vamos a pedir al usuario que
introduzca un valor mediante un comando prompt.
Dicho valor se almacenará en la posición 4. */

var 
array1=["objeto1","objeto2","objeto3"];
array1[3]="objeto4";
array1[4]=prompt("Introduce objeto4");
alert(array1[4]);

//FUNCIONES DE LOS ARRAYS

//Length:Devuelve la longitud del array
//push:Agrega elementos al final del array
//unshift:Agrega elementos al principio del array
//pop:Elimina elementos al final del array.
//shift:Elimina elementos al principio del array

//Aquí podemos ver un ejemplo de estas funciones:

//REVISA openjs.html


// Podemos poner un elemento como undefined, con loque su valor será no definido (o desconocido);

articulos [0] = undefined;

//Para averiguar la posición de un elemento

var posicion = articulos.indexOF("pantalones");

//Convertir un array a texto

var mistring = articulos.join();
// Me lo convierte a un string separado por comas

/* Me lo convierte a un string separado por comas.
Para hacer lo contrario, es decir convertir un string
en array lo haremos con el método split(). Dentro de
los parámetros pondremos el carácter que hará de
separador. */

var cadena = "nombre1,nombre2,nombre3";
var miArray = cadena.split(",");

/* Para ordenar un array usaremos el método el método
short(). Para ordenar por orden inverso el método
reverse(); */ 

cadena.short();
cadena.reverse();

//Esto nos ordena un array alfabéticamente 





















