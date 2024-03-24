// Creating variables to manipulate dom
let nums = document.querySelectorAll(".nums");
let operators = document.querySelectorAll(".operators");
let clear = document.querySelector(".clear");
let backspace = document.querySelector(".delete");
let disp1 = document.querySelector(".disp1");
let disp2 = document.querySelector(".disp2");
let symbol = document.querySelector(".symbol");

// Creating variables to perform calculations
let initial = "", final = "", sign = "", result = "";


// adding event listener for clearing the display
clear.addEventListener("click", function clear() {
    disp1.textContent = "";
    disp2.textContent = "";
    symbol.textContent = "";
    sign = ""
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
        if (sign != "=") {
            disp2.textContent += num.textContent;
        }
    })
});


operators.forEach(operator => {
    operator.addEventListener("click", () => { 
        
        // 2.> incase the user enters multiple operators, it'll change the operators.
        if ((disp1.textContent) && (!disp2.textContent) && (symbol.textContent)) {
            sign = operator.textContent; 
            symbol.textContent = sign;
            return
        }

        // 3.> if nothing goes wrong you should reach here. the calculation is done here.
        if (disp1.textContent) {

            // initial is stored in step 1 below. sign is stored in either 1 or 2 depending on the user.
            final = disp2.textContent;
            result = (calculate(initial, final, sign));

            // update variables for next calculation
            initial = result + "";
            final = "";
            sign = operator.textContent;
            disp2.textContent = ""; 
            
            // displaying output based on the operators.
            if (sign === "=") {
                disp1.textContent = result;
                symbol.textContent = sign;
            } else {
                disp1.textContent = result;
                symbol.textContent = sign; 
            }
        }

        sign = operator.textContent;

        // 1> this step happens first if you're using the calc for the first time. if you've already passed this step you reach the second step
        if (disp2.textContent) {
            initial = disp2.textContent;

            // displaying result based on the 
            if (sign === "=") {
                return
            } else {
                disp1.textContent = disp2.textContent;
                symbol.textContent = sign;  
            } 
            
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