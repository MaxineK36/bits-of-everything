var rr = Math.floor(255*Math.random())
var rg = Math.floor(255*Math.random())
var rb = Math.floor(255*Math.random())

function rgb(r,g,b){
    return "rgb("+r+","+g+","+b+")";
}

var random = document.getElementById("random");
var yours = document.getElementById("yours");
var button = document.getElementById("guessButton");

function checkInput(promptText, condition){
    var text = prompt(promptText);
    while (!condition(text)){
        text = prompt(promptText);
    }
    return text;
}

function sixLong(text){
    return text.length == 6
}

function guessColor(){
    var guess = checkInput("Guess a hex value! (no #)",sixLong); 
    console.log(guess);
    yours.style.backgroundColor = "#" + guess;
    if (yours.style.backgroundColor == random.style.backgroundColor){
        alert("you got it!");
    } 
    else{
        alert("Nope! Press Try Again to try again");
        yours.innerHTML = guess;
        button.innerHTML = "Try Again";
    }
}

function guessCMYK(){
    var c = Number(prompt("C percentage"));
    var m = Number(prompt("M percentage"));
    var y = Number(prompt("Y percentage"));
    var k = Number(prompt("K percentage"));
    var nr = 255*(1-(c/100))*(1-(k/100));
    var ng = 255*(1-(m/100))*(1-(k/100));
    var nb = 255*(1-(y/100))*(1-(k/100));
    yours.style.backgroundColor = rgb(nr,ng,nb); 
    if (yours.style.backgroundColor == random.style.backgroundColor){
        alert("you got it!");
    } 
    else{
        alert("Nope! Press Try Again to try again");
        yours.innerHTML = "C: "+c+" M: "+m+" Y: "+y+" K: "+k;
        button.innerHTML = "Try Again";
    }
    
}

random.style.backgroundColor = rgb(rr, rg, rb);
yours.style.backgroundColor = "black";
