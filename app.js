let screen = document.getElementById("screen");

function displayScreen(opt){
screen.value += opt;
}

function clearScreen(){
    screen.value = "";
}

let history = document.getElementById("history");

function calcResult(){
    let textP = document.createTextNode(screen.value);
    let p = document.createElement("p");
    p.appendChild(textP);
    let result = eval(screen.value);
    let h3 = document.createElement("h3");
    let textH3 = document.createTextNode(result);
    h3.appendChild(textH3);
    history.appendChild(p);
    history.appendChild(h3);
    clearScreen();
}