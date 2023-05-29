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
        let test_val = element.value;
        switch (test_val) {
            case "+":
             operator = "+";
              break;
            case "-":
              operator = "-";
              break;
            case "x":
                operator = "x"
                break;
            case "/":
                operator = "/"
              break;
            default:
              return;
          }
        input.textContent += operator;

        if (num1 !== "" && num2 !== "" && operator!=="") {
            calculate(operator);
        }
    })
})

function calculate(operator) {
    let result;

    switch (operator) {
      case "+":
        result = parseInt(num1) + parseInt(num2);
        break;
      case "-":
        result = parseInt(num1) - parseInt(num2);
        break;
      case "x":
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
