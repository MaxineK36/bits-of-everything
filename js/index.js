var across = 32;
var down = 8;
var contentArray;

//no return, takes array to modify, a starting spot, and a string
//row: which row you want your text in
//index: where in the row you want your text to start; -1 if you want centered

function anyBaseToInt(digitList, base, numberString){
    var mult = 1;
    var number = 0;    
    for (var i = numberString.length - 1; i >= 0; i--){
        var digit = digitList.indexOf(numberString[i]);
        number += digit*mult;  
        mult *= base;
    }
    console.log(number);
    return number;
}

function hexColorToBin(hexColor){
    var hexDigits = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
    var base = 16;
    var r = hexColor.slice(1,3);
    var g = hexColor.slice(3,5);
    var b = hexColor.slice(5,7);
    var text = "";
    text += intToBinary(anyBaseToInt(hexDigits, base, r),8) + " ";
    text += intToBinary(anyBaseToInt(hexDigits, base, g),8) + " ";
    text += intToBinary(anyBaseToInt(hexDigits, base, b),8);
    return text;
}

function intToBinary(number, minLength){
    var binText = ""; 
    if (number == 0){ 
        if (minLength){
            return "0".repeat(minLength);
        } else {
            return "0";
        }
    }   
    while(number != 0){ 
        toAdd = number % 2 ? 1 : 0; //checks if odd
        number -= toAdd;
        number /= 2;
        binText = String(toAdd).concat(binText);
    }   
    return binText;
}

function showItemBinary(id){
    console.log(id);
    document.getElementById("cover").style.display = "block";
    var blockIndex = Number(id.slice(1,id.length));
    var binInfo = document.getElementById("info");
    var contentColor = contentArray[blockIndex]["background"];
    var contentChar = contentArray[blockIndex]["text"];
    binInfo.style.backgroundColor = contentColor
    binInfo.style.display = "block";
    console.log(typeof blockIndex);
    var innerText = "";
    innerText += "<p> The hex code for this color is " + contentColor + "</p>"
    innerText += "<p> In binary, this is " + hexColorToBin(contentColor) + "</p>" 
    innerText += "<p><a href='threenumbers.html'> Why three numbers? </a></p>"
    innerText += "<p><a href='colors.html'> Learn how colors are coded</a></p>"
    if (contentChar != ""){
        innerText += "<br></br>"
        var code = contentChar.charCodeAt(0)
        innerText += "<p> The character, '" + contentChar
        innerText += "', is represented by the number " + code + "</p>"
        innerText += "<p> In binary, this would be " + intToBinary(code, 8) + "</p>"
        innerText += "<p><a href='characters.html'> Learn how characters are coded</a></p>"
        

    } 
    innerText += "<br></br><p> <a href='whybinary.html'> Why all the binary?</a></p>"
    document.getElementById("blockText").innerHTML = innerText;
    console.log("shown");
}

function hideItemBinary(){
    document.getElementById("cover").style.display = "none";
    var binInfo = document.getElementById("info");
    binInfo.style.display = "none";
}

function addText(contentArray, row, index, str){
    if (index == -1){
       index = str.length > across ? 0 : (across-str.length)/2 >> 0;
    }
    var start = ((row-1)*across) + index;
    for (var i = start; i < start+str.length; i++){
        contentArray[i]["text"] = str[i-start];
    }
    setDivContents(contentArray);
}

function addColors(colorByRow){
    for (var i = 0; i < contentArray.length; i++){
        contentArray[i]["background"] = "#" + colorByRow[Math.floor(i/across)];
    }
    setDivContents(contentArray);
}

function buildDivs(contents){
    console.log("building divs\n");
<<<<<<< HEAD
    for (var i = 0; i < down; i++){
        var row = document.createElement("div");
	row.id= "r"+i;
	row.className = "row";
	row.style.position = "relative";
	row.style.clear = "both";
        for (var j = 0; j < across; j++){
            div = document.createElement("div");
    	    div.className = "block";
    	    div.id = "b"+(across*i+j+1);
    	    console.log(div.id);
	    div.style.backgroundColor = (i % 2 ? "darkBlue" : "blue");
	    div.style.float = "left";
  	    div.onclick = function(){showItemBinary(this.id)};
	    div.onmouseover = function(){
                this.style.backgroundColor = "grey";
	    }
	    div.onmouseout = function(){
                this.style.backgroundColor = this.value;
    	    }
	    div.innerHTML = i;
	    row.appendChild(div);
        }
	document.getElementById("main").appendChild(row);
=======
    for (var i = 0; i < across*down; i++){
        div = document.createElement("div");
	div.className = "block";
	div.id = "b"+(i);
	console.log(div.id);
	div.style.backgroundColor = (i % 2 ? "darkBlue" : "blue");
	div.style.float = "left";
  	div.onclick = function(){showItemBinary(this.id)};
	div.onmouseover = function(){
            this.style.backgroundColor = "grey";
	}
	div.onmouseout = function(){
            this.style.backgroundColor = this.value;
	}
	div.innerHTML = i;
	document.getElementById("main").appendChild(div);
>>>>>>> b61bad86328a169bc6f3372eba8f97d234e83be8
    }
}

function onResize(){
    var w = main.offsetWidth;
    if (w < 1000){
        location.reload();
    } else {
        resize();
    }    

}
function resize(){
    console.log("resizing\n");
//    buildDivs(contents)
    var main = document.getElementById("main");
    var w = main.offsetWidth;
    var h = main.offsetHeight;
    console.log(w);
    divWidth = Math.floor(w / across);
    divHeight = Math.floor(h / down);
    rowMargin = Math.floor((w - across*divWidth)/2);
    rowList = document.getElementsByClassName("row");
    for (var i = 0; i < rowList.length; i ++){
        rowList[i].style.marginLeft = rowMargin+"px";
    }
    divList = document.getElementsByClassName("block");
<<<<<<< HEAD
=======
    cover = document.getElementById("cover");
    cover.style.paddingLeft = w / 4;
    cover.style.paddingRight = w / 4;
    cover.style.paddingTop = h / 4;
    cover.style.paddingBottom = h / 4;
    var span = document.querySelector("span");
>>>>>>> b61bad86328a169bc6f3372eba8f97d234e83be8
    for (var i = 0; i < divList.length; i++){
        divList[i].style.width = divWidth;
        divList[i].style.height = divHeight;
	var fsize = Math.min(divWidth*1.4, 0.7*divHeight);
<<<<<<< HEAD
        divList[i].style.fontSize = "12px";//fsize;
=======
        divList[i].style.fontSize = fsize;
//        divList[i].style.paddingTop = (divHeight - fsize)/2
>>>>>>> b61bad86328a169bc6f3372eba8f97d234e83be8
    }
    cover = document.getElementById("cover");
    cover.style.paddingLeft = w / 4;
    cover.style.paddingRight = w / 4;
    cover.style.paddingTop = h / 4;
    cover.style.paddingBottom = h / 4;
}

function setDivContents(contentArray){
    var colors = ["red","orange","yellow","green","blue","purple","pink","grey"]
   divList = document.getElementsByClassName("block");
   for (var i = 0; i < contentArray.length; i++){
<<<<<<< HEAD
       //divList[i].innerHTML = contentArray[i]["text"];
       divList[i].innerHTML = i;
       divList[i].style.verticalAlign= "center";
       divList[i].style.backgroundColor = colors[Math.floor(i/32)];//contentArray[i]["background"];
=======
       divList[i].innerHTML = "<span>"+contentArray[i]["text"]+"</span>";
       divList[i].style.backgroundColor = contentArray[i]["background"];
>>>>>>> b61bad86328a169bc6f3372eba8f97d234e83be8
       divList[i].value = contentArray[i]["background"];
   }
}

function main(){
    var divContents = []; //list of dicts
    for (var i = 0; i < across*down; i++){
        var info = {"background": "#a100fc", "text": ""}
	divContents[i] = info;
    }
    contentArray = divContents;
    buildDivs(divContents);
    resize(divContents);
    setDivContents(divContents);
    addText(divContents, 3, -1, "welcome!");
    addText(divContents, 4, -1, "try clicking on things!");
    addColors(["ff0000","ff6600","ffff00","00ff00","0000ff","3333cc","9933ff","000000"]);
}

main();
