//Variables utiles 
//Precio base de la cotización, en quetzales, lo puede cambiar
var precio_base = 2000

//Valores de los recargos
//10%
var edad_18 = 0.1
// 20%
var edad_25 = 0.2
// 30%
var edad_50 = 0.3

//10%
var casado_18 = 0.1
// 20%
var casado_25 = 0.2
// 30%
var casado_50 = 0.3

//20%
var hijos_recargo = 0.2

//Recargo
var recargo = 0
var recargo_total = 0

//Precio final 
var precio_final = 0

//Mensajes de alerta para ingresar datos 
var nombre = prompt("Ingrese su nombre, por favor")
var edad = prompt("¿Cuantos años tiene? Ingrese solamente números ")
if(edad < 18){
  alert(nombre+", lo lamentamos no cuenta con la edad necesaria para el trámite")
}else{
  alert("El Plan base del seguro tiene un costo de Q"+precio_base+".00")
  alert("Habrán Recargos extras según los datos que nos proporcione. Responda las siguientes preguntas para continuar el procedimiento")

  var casado = prompt("¿Está casado actualmente?, si/no")
//Comprobamos la edad del cónyuge, solamente si se está casado/a
  if("SI" == casado.toUpperCase()){
    var edad_conyuge = prompt("¿Que edad tiene su esposo/a?")
    }
//convirtiendo las edades ingresadas a números 
  var edad_numero = parseInt(edad)
  var edad_conyuge_numero = 0
//convirtiendo la edad del cónyuge si se esta casado/a
  if("SI" == casado.toUpperCase()){
  edad_conyuge_numero = parseInt(edad_conyuge)
  }

  var hijos = prompt("¿Tiene hijos o hijas?, si/no")
//Comprobamos la cantidad de hijos solamente si los tienen
  if("SI" == hijos.toUpperCase()){
    var cantidad_hijos = prompt("¿Cuántos hijos tiene en total?")
    }
  
  var total_hijos = 0
/**
 * 1. convierta la cantidad de hijos a numero
 */
  if("SI" == hijos.toUpperCase()){
  total_hijos = parseInt(cantidad_hijos)
  }

//Aquí debe calcular el recargo total basado en las respuestas ingresadas

//Aquí es donde debe de calcular los recargos y el valor final
//Ejemplo (Debe completar los condicionales):

  //Recargo por edad del asegurado 
  if(edad_numero>=18 && edad_numero<25){
  //Calculamos el recargo en base a la edad 
    recargo = precio_base * edad_18
  //Sumamos todos los recargos que hemos obtenido
    recargo_total = recargo_total + recargo
    alert("Recargo del 10% por su rango de edad    Q. "+recargo)
  }
//aqui puede colocar un else if() con el siguiente rango
  else if(edad_numero>=25 && edad_numero<50){ 
    recargo = precio_base * edad_25
    recargo_total = recargo_total + recargo
    alert("Recargo del 20% por su rango de edad     Q. "+recargo)
  }else if (edad_numero>=50){
    recargo = precio_base * edad_50
    recargo_total = recargo_total + recargo
    alert("Recargo del 30% por su rango de edad     Q. "+recargo)
  }
/** 
 * 2. Recargo por la edad del conyuge
 */
  if(edad_conyuge_numero>=18 && edad_conyuge_numero<25){ 
    recargo = precio_base * casado_18
    recargo_total = recargo_total + recargo
    alert("Recargo del 10% por rango de edad de su cónyuge   Q. "+recargo)
  }else if(edad_conyuge_numero>=25 && edad_conyuge_numero<50){ 
    recargo = precio_base * casado_25
    recargo_total = recargo_total + recargo
    alert("Recargo del 20% por rango de edad de su cónyuge    Q. "+recargo)
  }else if (edad_numero>=50){
    recargo = precio_base * casado_50
    recargo_total = recargo_total + recargo
    alert("Recargo del 30% por rango de edad de su cónyuge   Q. "+recargo)
  }
/**
 * 3. Recargo por la cantidad de hijos 
 */ 
  if(total_hijos>0){
  recargo = (precio_base * hijos_recargo) * total_hijos
  recargo_total = recargo_total + recargo
  alert("Recargo del 20% por cada uno de sus hijos    Q. "+recargo)
  }

  precio_final = precio_base + recargo_total
//Resultado
  alert ("Para el asegurado "+nombre)
  alert ("El recargo total sera de: Q. "+recargo_total)
  alert ("El precio final sera de: Q. "+precio_final)
}