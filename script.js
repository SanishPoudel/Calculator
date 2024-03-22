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

// adding event listener for clear
clear.addEventListener("click", () => {
    while (disp2.firstChild) {
        disp2.removeChild(disp2.firstChild);
    }
    while (disp1.firstChild) {
        disp1.removeChild(disp1.firstChild);
    }
});

// adding event listener for delete
backspace.addEventListener("click", () => {
    if (disp2.textContent) {
        let str = disp2.textContent;
        str = str.substring(0, str.length - 1);
        disp2.textContent = str;
    }
});




nums.forEach(num => {
    num.addEventListener("click", () => {
        disp2.textContent += num.textContent;
        initial += num.textContent;
        console.log(initial);
    })
});


