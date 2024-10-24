function calculate(operator) {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = document.getElementById("result");
    switch (operator) {
        case "sum":
            result.value = parseFloat(num1) + parseFloat(num2);
            break;
        case "resta":
            result.value = parseFloat(num1) - parseFloat(num2);
            break;
        case "multiplicar":
            result.value = parseFloat(num1) * parseFloat(num2);
            break;
        case "div":
            result.value = parseFloat(num1) / parseFloat(num2);
            if (num2 == 0) {
                result.value = "No se puede dividir por 0";
            }
            break;

           
           
    }
}