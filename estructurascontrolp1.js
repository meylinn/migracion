//Operadores Lógicos
//Resultados del operador && - se lee como "Y"
// true && true --> true
// true && false --> false
// false && true --> false
// false && false --> false

//Resultado operador || - se lee como "O"
// true || true --> true
// true || true --> true
// false || true --> true
// false || false --> false

//Resultado del operador ! - se lee como "negación"
// !true --> false
// !false --> true

var oplN1 = 5;
var oplN2 = 50;
var oplN3 = 30;

//Operador && ("AND" o "Y")
//Ejemplo - Crear una condición compuesta de otras 2 condiciones, utilizando el operador && e imprimir el resultado
var resultadoOperadorLY = ( oplN1 < oplN2 ) && ( oplN2 < oplN3 );
console.log( "El resultado del operador Y, es: " + resultadoOperadorLY );

//Operador || ("OR" o "O" )
//Ejemplo - Crear una condición compuesta de otras 2 condiciones, utilizando el operador || e imprimir el resultado
var resultadoOperadorLO = ( oplN1 < oplN2 ) || ( oplN2 < oplN3 );
console.log( "El resultado del operador O, es: " + resultadoOperadorLO );

//Operador de negación !
//Ejemplo - Crear una condición compuesta de otras 2 condiciones, utilizando el operador ! e imprimir el resultado
var resultadoOperadorLN = !resultadoOperadorLO;
console.log( "El resultado del operador de Negación, es: " + resultadoOperadorLN );


//Condicional if, else if y else
var numero1 = 125;
var numero2 = 50;
var numero3 = 30;

//Ejemplo - Crear condiciones utilizando las variables declaradas anteriormente y 
//desplegar un mensaje si se cumple la condición de cada una de ellas

//Condicional if - Dependiendo de la condición ejecutará las instrucciones dentro de las llaves {}.
if( (numero1 < numero2) && (numero2 < numero3) ){
    console.log( "Entraste al IF" );
}
//Condicional else if - Si no se ejecutaron las instrucciones dentro del IF, comprobará una nueva condición.
else if( numero1 < numero3 ){
    console.log( "Entraste al ELSE IF" );
}
//else -  Si no se ha cumplido ninguna condición, se ejecutarán estas instrucciones por defecto.
else{
    console.log( "Entraste al ELSE" );
}