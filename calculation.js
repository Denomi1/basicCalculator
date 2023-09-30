function clear(){
    document.getElementById("display").value = "";
}

function displayText(input){
    document.getElementById("display").value += value;
}

function equation(){
    let num1 = document.getElementById("display").value;
    let result = eval(num1);
    document.getElementById("display").value = result;
}