const keys = document.querySelectorAll('.key')
const input = document.querySelector('.input')
const output = document.querySelector('.output')
const operators = document.querySelectorAll('.operator')
let num1 = "";
let num2 = "";
let operator = "";

keys.forEach(element => {
    element.addEventListener("click", () => {
        input.textContent += element.textContent;

        if (operator === "") {
            num1 += element.textContent;
        }
        else {
            num2 += element.textContent;
        }
    })
})

operators.forEach(element => {
    element.addEventListener("click", () => {
        operator = element.value;
        // input.textContent += operator;

        if (num1 !== "" && num2 !== "") {
            calculate();
        }
    })
})

function calculate() {
    let result;

    switch (operator) {
      case "+":
        result = parseInt(num1) + parseInt(num2);
        break;
      case "-":
        result = parseInt(num1) - parseInt(num2);
        break;
      case "*":
        result = parseInt(num1) * parseInt(num2);
        break;
      case "/":
        result = parseInt(num1) / parseInt(num2);
        break;
      default:
        return;
    }
  
    output.textContent = result;
    input.textContent = result;
  
    num1 = result;
    num2 = "";
    operator = "";
}
