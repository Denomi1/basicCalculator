function clear(){
    document.getElementById("display").value = "";
}

function displayText(value){
    document.getElementById("display").value += value;
}

function equation(){
    var num1 = document.getElementById("display").value;
    var result = eval(num1);
    document.getElementById("display").value = result;
}