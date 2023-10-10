/**
 * Ejercicio 5: El siguiente bucle no se ejecuta nunca.
 * Comrpruébalo con "node ex5.js"
 * ¿Sabrías decir porque?
 *
 * >> El valor de i es mayor a la comparación, por tanto nunca entra en el bucle y no llega a la acción de incrementar
 * 
 * ---------------------------------------------------
 * Una vez lo averigues, arreglalo para que el bucle se ejecute exactamente 10 veces.
 * ATENCIÓN: SOLO puedes cambiar el valor de la variable 'veces' para conseguirlo
 */

let veces = 15;// de 5 a 15

// PROHIBIDO modificar el código a partir de aquí

for (let i = 5; i < veces; i++) {
  console.log("No me voy a ejecutar...");
}
