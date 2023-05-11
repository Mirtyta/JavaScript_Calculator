// valores constantes utilizadas en la funcion para la calculadora, display es el visor donde aparecera el resultado arriba en la calculadora, y buttons son todos los botones de la calculadora, usamos querySelector para el ID de nuestra pagina asi conectamos con nuestro DOM, en button usamos querySelectorAll para que tome todos los botones de nuestro DOM
const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

// accedemos con foreach a todos los botones y sus caracteristicas y valores, hacemos tomamos el item y con funcion de flecha asignamos item cuando hacemos click, tomamos un evento click no queremos hacer un evento interno, no le pasamos ningun argumento eso se lo asignaremos con los id de cada boton, entonces le asignamos una funcion flecha y hacemos if's anidados según el id del boton
buttons.forEach((item)=> {
 item.onclick=()=> {
   // en el caso de Clear, le decimos al display que borre todo el contenido de display
   if(item.id=="clear"){
    display.innerText="";
   }
   // en el caso de backspace
    else if(item.id=="backspace"){
    // creamos una variable string donde lo convertimos a String, para podes hacer un substr, borrado de un caracter, parametros de 
    // substr(inicio, tomamos el largo total del string y le restamos 1, asi es como borra un caracter a la derecha) *** recordemos que el indice de substr comienza en 0
    let string = display.innerText.toString();
    display.innerText=string.substr(0,string.length-1)
  }
      // en el caso del Boton Igual le decimos que si es distinto de vacio y ademas el id del boton es igual a equal que es el id del boton, entonces realice la operacion, que se lo decimos con eval()
      else if(display.innerText !=""&& item.id=="equal"){
      //let cadena = "2 + 2" eval() realiza la operacion que esta en la pantalla display
      display.innerText=eval(display.innerText);
    }
      // caso que el display esté vacio y presionamos igual, nos va a mostrar el mensaje de NULL
      else if(display.innerText=="" && item.id=="equal"){
      display.innerText="Null";
      // este mensaje estara en la pantalla de resultado por 2s
      setTimeout(()=>(display.innerText= ""),2000);
    }
      // este else se refiere a concatenar todos los botones que ingresamos haciendo click
      else{
      display.innerText+=item.id;
    }
 };
});
// este es el toggle de la calculadora dark o light, definimos las constantes 
const temaToggleBtn = document.querySelector(".tema-toggle");
const calculator = document.querySelector(".calculator");
// const toggleIcon = document.querySelector(".toggler-icon");

// creamos la variable dark, y la seteamos en verdadero
let isDark = true
// al hacer click en el boton de menu claro/oscuro cambiamos la clase a dark y activamos y definimos isdark como lo contrario, es lo que va a hacer al presionar nuevamente cambia de dark a ligth
  temaToggleBtn.onclick= () => {
  calculator.classList.toggle("dark")
  temaToggleBtn.classList.toggle("active")
  isDark = !isDark
}

