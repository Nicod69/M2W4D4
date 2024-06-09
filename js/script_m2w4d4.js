

const display = document.querySelector(".display");
let currentInput = "";
const buttons = document.querySelectorAll(".btn");
const operator = ["+", "-", "*", "/"];

function appendValue(number) {
  currentInput += number;
  display.innerText = currentInput;
}

function clearValue() {
  currentInput = "";
  display.innerText = "";
}

function negate(){
  if (!currentInput.startsWith("-")){
    currentInput = "-" + currentInput;
    //display.innerText = currentInput;
  }
  else{
    currentInput = currentInput.slice(1);
  }
  display.innerText = currentInput;
}

function deleteLast(){
  currentInput = currentInput.slice(0,-1);
  display.innerText = currentInput;
}


//funzione che ricerca l'indice dell'ultimo numero inserito
function myFunction(symbol){
  
  if (currentInput.lastIndexOf(symbol) > lastIndex){
    lastIndex = currentInput.lastIndexOf(symbol);
    //console.log(lastIndex);
  }
}


let lastIndex = 0;

//funzione che mi cancella al click del tasto CE l'ultimo numero inserito 
function deleteLastNumber(){
  
  operator.forEach(myFunction);
  if (lastIndex>0){
    currentInput = currentInput.slice(0,lastIndex+1);
    display.innerText = currentInput;
  }
  else{
    currentInput ="";
    display.innerText = currentInput;
  }
}


function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        display.innerText = currentInput;
        
    } catch (error){
        //console.log("Errore imprevisto: ");
        currentInput = "";
        display.innerText = "ERROR";
        
    }
}




buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.innerText;
    switch (value) {
      case "C":
        clearValue();
        break;

      case "=":
        calculate();
        break;

        case "±":
        negate();  
        break;
      
      case "«x":
        deleteLast();
        break;

      case "CE":
        deleteLastNumber();
        break;

      default:
        appendValue(value);
        break;
    }
  });
});
