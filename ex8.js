/**
 * Bucles while
 *
 * Modifica el bucle while para que escriba por el terminal 
 * escriba 5 veces exactamente "Ejecuto!". Actualmente lo escribe 6 veces. Porque?
 * 
 * >>Porque la comparación estaba en < o igual, hay que pasarla a menor a veces, porque de 0 a 5 son 6 posiciones.
 * 
 * Reestricción: NO puedes cambiar el valor de las variables 'veces' ni 'i' !!
 */

let veces = 5
let i = 0

while (i<veces) {
    console.log("Ejecuto!")
    i++
}