console.log("javascript conectado exitosamente!")
const txtOperador1 = document.getElementById("op1")
const txtoperacion = document.getElementById("operacion")
const txtOperador2 = document.getElementById("op2")
const btnCalcular = document.getElementById("calcular")
const txtResultado = document.getElementById("resultado")

btnCalcular.addEventListener('click',calcular)

function calcular(){
 console.log("Apretaste el boton calcular")
 console.log(txtoperacion.value)
 const operacion = txtoperacion.value
 const operador1 = parseFloat(txtOperador1.value)
 const operador2 = parseFloat(txtOperador2.value)
 
 if((operacion == "+" || operacion == "-" || operacion == "*"  || operacion == "/") && !isNaN(operador1) && !isNaN(operador2)){
  let resultado
  switch(operacion){
   case "+":
    resultado = operador1 + operador2
    break;
   case "-":
    resultado = operador1 - operador2
    break;
   case "*":
    resultado = operador1 * operador2
    break;
   case "/":
    resultado = operador1 / operador2
    break;
  }
  txtResultado.style.background = "#0b6c9dfe"
  txtResultado.innerText = "Resultado es: " + resultado
 }else{
  txtResultado.style.backgroundColor="red"
  txtResultado.innerText = "Calculo imposible. Debe colocar números y operadores válidos"
 }
}