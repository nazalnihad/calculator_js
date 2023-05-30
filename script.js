const keys = document.querySelectorAll('.key')
const input = document.querySelector('.input')
const output = document.querySelector('.output')
const operators = document.querySelectorAll('.operator')
const equals = document.querySelector('.equals')
const clear = document.querySelector('.clear')
let num1 = "";
let num2 = "";
let operator = "";
let test_count = 0;


keys.forEach(element => {
    element.addEventListener("click", () => {
        input.textContent += element.textContent;

        if (operator === "") {
            num1 += element.textContent;
        }
        else if (test_count===1){
            num2 += element.textContent;
        }
    })
})

operators.forEach(element => {
    element.addEventListener("click", () => {
      operator = element.value;
      test_count += 1;

      if (test_count > 1) {
        input.textContent = input.textContent.slice(0, -1)+ element.value;
        test_count -= 1;
      }
      else {
        input.textContent += element.value;
      }
      console.log(operator)
    })
})

equals.addEventListener("click", () => {
  if (num1 !== "" && num2 !== "" && operator !== "") {
    calculate(operator);
  }
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
    case "*":
      result = parseInt(num1) * parseInt(num2);
      break;
    case "/":
      result = parseInt(num1) / parseInt(num2);
      break;
    default:
      return;
  }
  test_count = 0;
  output.textContent = result;
  input.textContent = result;

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
