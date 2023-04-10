/*
Push al frente
Dada una matriz y un valor adicional, inserta este valor al principio de la matriz.
Haz esto sin utilizar ningún método de matriz incorporado.
*/
let arr = [2, 3, 4, 5];
let nuevoValor_1 = 1;

// Desplazar los elementos existentes a la derecha
for (let i = arr.length - 1; i >= 0; i--) {
  arr[i + 1] = arr[i];
}

// Asignar el nuevo valor en la primera posición de la matriz
arr[0] = nuevoValor_1;

console.log(arr); // [1, 2, 3, 4, 5]

/*
Pop al frente
Dada una matriz, elimina y devuelve el valor al principio de la matriz.
Haz esto sin utilizar ningún método de matriz incorporado, excepto pop().
*/
let arr = [1, 2, 3, 4, 5];

// Eliminar y devolver el valor al principio de la matriz
let primerValor = arr[0];

for (let i = 0; i < arr.length - 1; i++) {
  arr[i] = arr[i + 1];
}

arr.pop(); // Eliminar el último elemento de la matriz

console.log(primerValor); // 1
console.log(arr); // [2, 3, 4, 5]

/*
Insertar en
Dado una matriz, índice y valor adicional, inserta el valor en la matriz en el índice dado. 
Haz esto sin utilizar métodos de matriz integrados. Puedes pensar en pushFront(arr, val) 
como equivalente a insertAt(arr, 0, val). 
*/
function insertAt(arr, index, valor) {
  // Desplazar los elementos existentes a la derecha
  for (let i = arr.length - 1; i >= index; i--) {
    arr[i + 1] = arr[i];
  }

  // Asignar el nuevo valor en la posición deseada de la matriz
  arr[index] = valor;

  return arr;
}

// Ejemplo de uso
let arr = [1, 2, 4, 5];
let index = 2;
let nuevoValor_2 = 3;

console.log(insertAt(arr, index, nuevoValor_2)); // [1, 2, 3, 4, 5]
