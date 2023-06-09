//main keys and values
const keys = document.querySelectorAll('.key')
const input = document.querySelector('.input')
const output = document.querySelector('.output')
const operators = document.querySelectorAll('.operator')
const equals = document.querySelector('.equals')
const clear = document.querySelector('.clear')
const decimal = document.querySelector(".decimal")
const backspace = document.querySelector(".backspace")
let num1 = "";
let num2 = "";
let result="";
let operator = "";
let equals_call = false;

//key function based on desired input num1 or num2 or operator
keys.forEach(element => {
  element.addEventListener("click", () => {
    if (equals_call) {
      //function to start new once equal called and new key pressed
      input.textContent = "";
      num1 = "";
      operator=""
      result = "";
      equals_call = false;
    }
    input.textContent += element.textContent;
    if (operator === "") {
      num1 += element.textContent;
    }
    else{
      num2 += element.textContent;
    }
    })
})


operators.forEach(element => {
  element.addEventListener("click", () => {
    if (num1 != "") {
      operator = element.value;

      if (num2 !== "") {
        //continuous operations when operator clicked after num2 entered
        calculate(operator);
        input.textContent = result + operator;
        num1 = result;
        num2 = "";
      }
      else if (result != "") {
        //continuous operation when operator clicked after result (bug to fix , don't allow to click at zero error)
        input.textContent = result + operator;
        num1 = result;
        num2 = "";
        equals_call = false;
      }
      else {
        //makes sure only one operator printed and used at once
        const last_char = input.textContent.slice(-1);
        if (last_char === "+" || last_char === "-" || last_char === "*" || last_char === "/") {
          input.textContent = input.textContent.slice(0, -1) + operator;
        } else {
          input.textContent += operator;
        }
      }
      // console.log(operator);
    }
  });
});

//equal button
equals.addEventListener("click", () => {
  if (num1 !== "" && num2 !== "" && operator !== "") {
    calculate(operator);
    equals_call = true;
  }
})

// calculate according to conditions and zero error
function calculate(operator) {
  switch (operator) {
    case "+":
      result = Number(num1) + Number(num2);
      break;
    case "-":
      result = Number(num1) - Number(num2);
      break;
    case "*":
      result = Number(num1) * Number(num2);
      break;
    case "/":
      if (Number(num2) === 0) {
        output.textContent = "Can't do dumbass";
        num1=""
        equals_call = true;
        console.log("sui")
        return;
      }
      else {        
        result = Number(num1) / Number(num2);
      }
      break;
    default:
      return;
  }
  test_count = 0;

  //rounds the number and changes to string so backspace can work on num1 after result (bug to fix -> after result backspace on num1 changes itself to old value)
  result = Math.round(result * 100) / 100;
  result = String(result)
  output.textContent = result;
  // input.textContent = result;

  num1 = result;
  num2 = "";
  operator = "";
}

//clears the values and display
clear.addEventListener("click", () => {
  num1 = "";
  num2 = "";
  operator = "";
  result = ""
  output.textContent = "";
  input.textContent = "";
})

//add decimal accordingly
decimal.addEventListener("click", () => {
  if (operator === "") {
    if (!num1.includes(".")) {
      num1 += ".";
      input.textContent += ".";
    }
  }
  else {
    if (!num2.includes(".")) {
      num2 += ".";
      input.textContent += ".";
    }
  }
});

//backspace and change value (bug on num1 after equals call)
backspace.addEventListener("click", () => {
  if (num1 !== "" && num2 === "" && operator === "") {
    num1 = num1.slice(0,-1);
    input.textContent = input.textContent.slice(0, -1)
    console.log(input.textContent)
  }
  else if (num1 !== "" && operator !== "" && num2 !== "") {
    num2 = num2.slice(0,-1)
    input.textContent = input.textContent.slice(0, -1)
    console.log(input.textContent)
  }
  else if (num1 != "" && operator != "" && num2 === "") {
    operator = "";
    input.textContent = input.textContent.slice(0, -1)
  }
})