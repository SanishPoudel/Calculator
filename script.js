// Creating variables to manipulate dom
let nums = document.querySelectorAll(".nums");
let operators = document.querySelectorAll(".operators");
let clear = document.querySelector(".clear");
let backspace = document.querySelector(".delete");
let equal = document.querySelector("#equal");
let disp1 = document.querySelector(".disp1");
let disp2 = document.querySelector(".disp2");

// Creating variables to perform calculations
let initial = "", final = "", sign = "", result = "";


// adding event listener for clearing the display
clear.addEventListener("click", () => {
    while (disp2.firstChild) {
        disp2.removeChild(disp2.firstChild);
    }
    while (disp1.firstChild) {
        disp1.removeChild(disp1.firstChild);
    }
    disp2.textContent = "0";
});


// adding event listener for deleting the last number
backspace.addEventListener("click", () => {
    if (disp2.textContent) {
        let str = disp2.textContent;
        str = str.substring(0, str.length - 1);
        disp2.textContent = str;
    }
});


// adding event listener for entering the numbers
nums.forEach(num => {
    num.addEventListener("click", () => {
        disp2.textContent += num.textContent;
    })
});


operators.forEach(operator => {
    operator.addEventListener("click", () => { 

        // if there hasn't been previous calculations
        if (disp1.textContent) {

            final = disp2.textContent;
            result = (calculate(initial, final, sign));

            // clearing the data in initial and final
            initial = result + "";
            final = "";
            sign = operator.textContent;
            disp2.textContent = ""; 
            disp1.textContent = result + sign; 
        }

        sign = operator.textContent;

        if (disp2.textContent) {
            initial = disp2.textContent;
            disp1.textContent = disp2.textContent + sign; 
            disp2.textContent = "";
        }

            
    });
});

// Calculation
function calculate(initial, final, sign) {
    if (sign === "+") {
        return Number(initial) + Number(final);
    } else if (sign === "-") {
        return Number(initial) - Number(final);
    } else if (sign === "×") {
        return Number(initial) * Number(final);
    } else if (sign === "÷") {
        return Number(initial) / Number(final);
    } 
}