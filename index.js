var numchar = 0;
var main = document.getElementById("colors");
var width = window.innerWidth;

var text = prompt("input some text!");
//var text ="no!";
var numStripes = parseInt(text.length / 3);

function opposite(r, g, b){
    var or = 255 - r
    var og = 255 - g
    var ob = 255 - b
    return "rgb(" + or + "," + og + "," + ob + ")";
}

function intToBinary(number){
    var binText = "";
    if (number == 0){
        return "0";
    }
    while(number != 0){
        toAdd = number % 2 ? 1 : 0; //checks if odd
	number -= toAdd;
	number /= 2;
	binText = String(toAdd).concat(binText);
    }
    return binText;
}


function makeTextDivs(text, stripe){
    var threeChar = document.createElement("div");
    threeChar.style.height = "50%";
    threeChar.style.width = "100%";
    var textSize = (innerWidth / numStripes)/3 ;
    for (var i = 0; i<text.length; i++){
        var tdiv = document.createElement("div");
        tdiv.className = "textDiv";
        tdiv.innerHTML = text[i];
        tdiv.style.height = textSize;
        tdiv.style.fontSize = textSize;
        var theight = tdiv.style.height;
        threeChar.appendChild(tdiv);
    } 
    stripe.appendChild(threeChar);
}

function makeColorDivs(stripe, colors){
    //var bases = ["(255,0,0)","(0,255,0)","(0,0,255)"];
    for (var i = 0; i < 3; i++){
        var base = [0,0,0];
        var cdiv = document.createElement("div");
	cdiv.className = "colorDiv";
	base[i] = colors[i]
	cdiv.style.backgroundColor = "rgb("+base[0]+","+base[1]+","+base[2]+")";
	var bar = document.createElement("div");
	bar.style.width = "100%";
	bar.style.height = (100-(100*(colors[i]/255))) + "%";
	bar.className = "bar";
	base[i] = 255;
	bar.style.backgroundColor = "rgb("+base[0]+","+base[1]+","+base[2]+")";
        bar.innerHTML = colors[i] + " or, in binary, " + intToBinary(colors[i]);
	cdiv.style.verticalAlign = "bottom";
        cdiv.appendChild(bar);
	stripe.appendChild(cdiv);
    }
}


function makeStripe(stripeText){
    var stripe = document.createElement("div");
    stripe.className = "stripe";


    var r = stripeText.charCodeAt(0);
    var g = stripeText.charCodeAt(1);
    var b = stripeText.charCodeAt(2);
    var rgb = "rgb(" + r + "," + g + "," + b + ")";

    stripe.style.width = (100/numStripes) + "%";
    stripe.style.backgroundColor = rgb;
    stripe.style.color = ((r+g+b) < 200) ? "white" : "black";
    stripe.style.textAlign = "center";
    main.appendChild(stripe);
    makeTextDivs(stripeText, stripe);
    makeColorDivs(stripe,[r,g,b]);
}

for (var i = 0; i < numStripes; i++){
    var stripeText = text.slice(0,3); 
    text = text.slice(3);
    makeStripe(stripeText);
}

for (var i=0; i<21; i++){
    console.log(intToBinary(i));
}
