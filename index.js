var numchar = 0;
var main = document.getElementById("colors");

var text = prompt("input some text!");
//text = "wehgioewhvkzxnvois"
var numStripes = parseInt(text.length / 3);
console.log("There are " + numStripes + "stripes");

function opposite(r, g, b){
    var or = 255 - r
    var og = 255 - g
    var ob = 255 - b
    return "rgb(" + or + "," + og + "," + ob + ")";
}


for (var i = 0; i < numStripes; i++){
    console.log("i is: " + i);

    var stripe = document.createElement("div");
    stripe.className = "stripe";
//    stripe.style.width = (100/numStripes) + "%"
//    var id = "stripe" + i

    var stripeText = text.slice(0,3); 
    text = text.slice(3);

    var r = stripeText.charCodeAt(0);
    var g = stripeText.charCodeAt(1);
    var b = stripeText.charCodeAt(2);
    var rgb = "rgb(" + r + "," + g + "," + b + ")";
    console.log(rgb);

    stripe.style.width = (100/numStripes) + "%";
    stripe.style.backgroundColor = rgb;
    stripe.innerHTML = stripeText;
//    stripe.style.color = opposite(r,g,b);
    stripe.style.color = ((r+g+b) < 200) ? "white" : "black";
    stripe.style.textAlign = "center";
        
    main.appendChild(stripe);
}

/*
while (numchar != 3){
    word = prompt("type a three-letter word")
    numchar = word.length;
}


console.log(r);
console.log(g);
console.log(b);


document.getElementById("colors").style.backgroundColor = rgb;
*/
