/**
 * Un buen caso para usar switch
 *
 * Queremos escribir un script que, dado un mes del año, nos diga en que trimestre nos encomtramos.
 *
 * Por ejemplo, si mes = 4, deberíamos mostrar por el terminal "Nos encontramos en el segundo trimestre"
 *
 * Explora esta información para averiguar como usar el condicional 'switch'; y cómo se pueden agrupar varios casos: https://javascript.info/switch#grouping-of-case
 *
 */

let mes = 4;

//Escribir tu código a partir de aquí

//let Enero = 1;

// let
// enero = 1,
// febrero = 1,
// marzo = 1;

// let
// abril = 2,
// mayo = 2,
// junio = 2;

// let
// julio = 3,
// agosto = 3,
// septiembre = 3;

// let
// octubre = 4,
// noviembre = 4,
// diciembre = 4;

// let mesUser = "Enero";

// switch(enero){
//   case 1:
//     console.log(`El mes de ${mesUser} es del primer trimestre`);
//     break;
//   case 2:
//     console.log(`El mes de ${mesUser} es del primer trimestre`);
//     break;
//   case 3:
//     console.log(`El mes de ${mesUser} es del primer trimestre`);
//     break;
//   case 4:
//     console.log(`El mes de ${mesUser} es del primer trimestre`);
//     break;
//   default:
//   break;
// };

switch(mes){
  case 1:
  case 2:
  case 3:
    console.log("Primer trimestre");
    break;
  case 4:
  case 5:
  case 6:
    console.log("Segundo trimestre");
    break;
  case 7:
  case 8:
  case 9:
    console.log("Tercer trimestre");
  case 10:
  case 11:
  case 12:
    console.log("Cuarto trimestre");
    break;
  default:
    console.log("El mes no corresponde con ningún trimestre");
    break;
}