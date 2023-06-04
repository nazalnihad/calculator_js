const keys = document.querySelectorAll('.key')
const input = document.querySelector('.input')
const output = document.querySelector('.output')
const operators = document.querySelectorAll('.operator')
const equals = document.querySelector('.equals')
const clear = document.querySelector('.clear')
const decimal = document.querySelector(".decimal")
let num1 = "";
let num2 = "";
let result="";
let operator = "";
let equals_call = false;

keys.forEach(element => {
  element.addEventListener("click", () => {
    if (equals_call) {
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
    operator = element.value;

    if (num2 !== "") {
      calculate(operator);
      input.textContent = result + operator;
      num1 = result;
      num2 = "";
    }
    else if (result != "") {
      input.textContent = result + operator;
      num1 = result;
      num2 = "";
    equals_call = false;
    }
    else {
      const last_char = input.textContent.slice(-1);
      if (last_char === "+" || last_char === "-" || last_char === "*" || last_char === "/") {
        input.textContent = input.textContent.slice(0, -1) + operator;
      } else {
        input.textContent += operator;
      }
    }
    console.log(operator);
  });
});


equals.addEventListener("click", () => {
  if (num1 !== "" && num2 !== "" && operator !== "") {
    calculate(operator);
    equals_call = true;
  }
})


  
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
      result = Number(num1) / Number(num2);
      break;
    default:
      return;
  }
  test_count = 0;
  result = result.toFixed(2)
  output.textContent = result;
  // input.textContent = result;

  num1 = result;
  num2 = "";
  operator = "";
}

clear.addEventListener("click", () => {
  num1 = "";
  num2 = "";
  operator = "";
  output.textContent = "";
  input.textContent = "";
})

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

