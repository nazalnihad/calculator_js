const keys = document.querySelectorAll('.key')
const input = document.querySelector('.input')
const output = document.querySelector('.output')
const operator = document.querySelectorAll('.operator')
let num1 = "";
let num2 = "";
let total;

let a=0;

keys.forEach(element => {
    element.addEventListener("click", () => {
        input.textContent += element.textContent;

        if (element.textContent === "+") {
            if (num2 != "") {
                total = num1 + parseInt(num2);
                total = parseInt(total);
                console.log("total " + total)
                output.textContent = total;
                input.textContent = total;
                input.textContent+=" + "
            num1 = total;
            }
            num2 = "0";
        }

        if (element.textContent === "-") {
            if (num2 != "") {
                total = num1 - parseInt(num2);
                total = parseInt(total);
                console.log("total " + total)
                output.textContent = total;
                input.textContent = total;
                input.textContent+=" - "
            num1 = total;
            }
            num2 = "0";
        }

        // if (element.textContent === "x") {
        //     if (num2 != "") {
        //         total = parseInt(num1) * parseInt(num2);
        //         total = parseInt(total);
        //         console.log("total " + total)
        //         output.textContent = total;
        //         input.textContent = total;
        //         input.textContent+=" + "
        //     num1 = total;
        //     }
        //     num2 = "1";
        // }

        if (element.textContent === "/") {
            if (num2 != "") {
                total = num1 / parseInt(num2);
                total = parseInt(total);
                console.log("total " + total)
                output.textContent = total;
                input.textContent = total;
                input.textContent+=" + "
            num1 = total;
            }
            num2 = "0";
        }


        else if (num2 === "") {
            num1 += element.textContent;
            num1 = parseInt(num1);
        }
        else {
            if (num2 === "1") {
                num2 -= "1";
            }
            num2 += element.textContent;
            num2 = parseInt(num2);
        }
        console.log("1",num1);
        console.log("2",num2);
    });    
});

