calculate = document.getElementById("calculate");
symbol = document.querySelectorAll(".btn-symbol");
number = document.querySelectorAll(".btn-number");
input = document.getElementById("input");
clear = document.getElementById("clear");
let calculated = "no";

clear.addEventListener("click", () => {
    input.value = "";    
    calculated = "no";
})

number.forEach(function (button) {
  button.addEventListener("click", () => {
      if (calculated === "no") {
          input.value = input.value + button.dataset.value;
      } else {
          input.value = "";
          calculated = "no";
          input.value = input.value + button.dataset.value;
      }    
    }) 
})

symbol.forEach(function(button) {
    button.addEventListener("click", () => {
        calculated = "no";
        if (
            input.value != "" &&
            input.value.slice(-1) != " "
           ) {
            input.value = input.value + " " + button.dataset.value + " ";
        } 
    })
})

calculate.addEventListener("click", () => {
    let sum = input.value.toString();
    if (sum.indexOf("x") != -1) {
        sum = sum.replace("x", "*");
        input.value = eval(sum);
        calculated = true;
    } else if (sum.indexOf(":") != -1) {
        sum = sum.replace(":", "/");
        input.value = eval(sum);
    } else {
        input.value = eval(sum);
        calculated = "yes";
    }
});




