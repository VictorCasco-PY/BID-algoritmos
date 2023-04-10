//Pon myNumber en 42. Deja myName con tu nombre. Ahora intercambia myNumber por myName y viceversa.
let myNumber = 42;
let myName = "Victor";
let aux = myNumber;
myNumber = myName;
myName = aux;

//Imprime números enteros de -52 a 1066 usando un bucle FOR.
for (let i = -52; i <= 1066; i++) {
  console.log(i);
}

//Crea beCheerful(). Dentro de este, la cadena console.log "¡buenos días!" Llámalo 98 veces.
const beCheerful = () => console.log("Buenos dias!");
for (let i = 0; i < 98; i++) {
  beCheerful();
}

//Usando FOR, imprime múltiplos de 3 de -300 a 0. Omite -3 y -6.
for (let i = -300; i <= 0; i++) {
  if (i !== -3 && i !== -6) {
    if (i % 3 == 0) {
      console.log(i);
    }
  }
}

//Imprime números enteros de 2000 a 5280, utilizando un WHILE.
let count = 2000;
while (count <= 5280) {
  console.log(count);
  count++;
}
/* 
Si 2 números dados representan tu mes y día de nacimiento en cualquier orden, 
registra "¿Cómo lo supiste?", de lo contrario registra "Un día cualquiera...".
*/
let mes = 9;
let dia = 30;
mes == 9 && dia == 30
  ? console.log("Como lo supiste?")
  : console.log("Un dia cualquiera");

/*
Escribe una función que determine si un año determinado es bisiesto. 
Si un año es divisible por cuatro, es un año bisiesto, a menos que sea divisible por 100. 
Sin embargo, si es divisible por 400, entonces lo es.
*/
const esBisiesto = (anho) => {
  return anho % 400 === 0 ? true : anho % 100 === 0 ? false : anho % 4 === 0;
};
console.log(esBisiesto(2100));

//Imprime todos los múltiplos enteros de 5, de 512 a 4096. Después, también registra cuántos había.
let contador = 0;
for (let i = 512; i <= 4096; i++) {
  i % 5 == 0 ? console.log(i) : false;
  contador++;
}
console.log(`Cantidad de multiplos de 5: ${contador}`);

//Imprime múltiplos de 6 hasta 60.000, utilizando un WHILE.
let num = 1;
while (num < 60) {
  if (num % 6 == 0) {
    console.log(num);
    num++;
  } else {
    num++;
  }
}

/*
Imprime los números enteros del 1 al 100. Si es divisible por 5,
imprime "Codificando" en su lugar. Si es por 10, también imprime "Dojo".
*/
for (let i = 1; i <= 100; i++) {
  if (i % 10 == 0) {
    console.log("Dojo");
  } else if (i % 5 == 0) {
    console.log("Codificando");
  } else {
    console.log(i);
  }
}

//Tu función recibirá un parámetro de entrada incoming. Por favor, console.log este valor.
const imprimir = (incoming) => console.log(incoming);

//Agrega números enteros impares de -300,000 a 300,000, y console.log la suma final. ¿Existe un atajo?
let suma = 0;
for (let i = -300000; i <= 300000; i += 2) {
  suma += i;
}
console.log(suma);

//Cuenta regresiva cada cuatro
let numero = 2016;

while (numero > 0) {
  console.log(numero);
  numero -= 4;
}

//Cuenta regresiva flexible
let lowNum = 2;
let highNum = 9;
let mult = 3;

for (let i = highNum; i >= lowNum; i--) {
  if (i % mult === 0) {
    console.log(i);
  }
}

//La cuenta regresiva final
let param1 = 3;
let param2 = 5;
let param3 = 17;
let param4 = 9;

let numeroActual = param2;

while (numeroActual <= param3) {
  if (numeroActual % param1 === 0 && numeroActual !== param4) {
    console.log(numeroActual);
  }
  numeroActual += param1;
}
