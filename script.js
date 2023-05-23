const keys = document.querySelectorAll('.key')
const input = document.querySelector('.input')
const output = document.querySelector('.output')
const operator = document.querySelectorAll('.operator')
let num1 = "";
let num2 = "";

let a=0;

keys.forEach(element => {
    element.addEventListener("click", () => {
        // a+=element.textContent;
        input.textContent += element.textContent;
        // console.log(parseInt(a));
        // num1 = parseInt(a);

        if (element.textContent==="+") {
            num1 = input.textContent.slice(0, -1);
            num1 = parseInt(num1);
            num2="0"
        }
        else if (num2 === "") {
            num1 += element.textContent;
            // num1 = parseInt(num1);
        }
        else {
            num2 += element.textContent;
            num2 = parseInt(num2);
        }
        console.log("1",num1);
        console.log("2",num2);
    });    
});

