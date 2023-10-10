/**
 * El bucle infinito
 *
 * El siguiente bucle 'while', no acaba nunca. ¿Por qué?
 * 
 * >> Falta incrementar el valor de i dentro de while para que cuando compare la siguiente vez el valor sea mayor al establecido en la variable. Cuando se cumple la condición, acaba el bucle.
 * 
 * Arreglalo para que la palabra "Ejecutar!" se muestre 10 veces por el terminal
 */

let n=10;
let i=0;

while(i<n) {
    console.log("Ejecutar!")
    i++;
}

