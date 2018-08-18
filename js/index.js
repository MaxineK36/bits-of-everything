var across = 32;
var down = 8;
var contentArray;

//no return, takes array to modify, a starting spot, and a string
//row: which row you want your text in
//index: where in the row you want your text to start; -1 if you want centered

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
    resize();
}

function hideItemBinary(){
    document.getElementById("cover").style.display = "none";
    var binInfo = document.getElementById("info");
    binInfo.style.display = "none";
    resize();
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
    for (var i = 0; i < down; i++){
        var row = document.createElement("div");
	row.id= "r"+i;
	row.className = "row";
	row.style.position = "relative";
	row.style.clear = "both";
        for (var j = 0; j < across; j++){
            div = document.createElement("div");
    	    div.className = "block";
    	    div.id = "b"+(across*i+j);
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
    divWidth = Math.floor(w / across);
    divHeight = Math.floor(h / down);
    rowMargin = Math.floor((w - across*divWidth)/2);
    rowList = document.getElementsByClassName("row");
    for (var i = 0; i < rowList.length; i ++){
        rowList[i].style.marginLeft = rowMargin+"px";
    }
    divList = document.getElementsByClassName("block");
    cover = document.getElementById("cover");
    cover.style.paddingLeft = w / 4;
    cover.style.paddingRight = w / 4;
    cover.style.paddingTop = h / 4;
    cover.style.paddingBottom = h / 4;
    var span = document.querySelector("span");
    for (var i = 0; i < divList.length; i++){
        divList[i].style.width = divWidth;
        divList[i].style.height = divHeight;
	var fsize = Math.min(divWidth*1.4, 0.7*divHeight);
        divList[i].style.fontSize = "12px";//fsize;
        divList[i].style.fontSize = fsize;
//        divList[i].style.paddingTop = (divHeight - fsize)/2
    }
}

function setDivContents(contentArray){
    var colors = ["red","orange","yellow","green","blue","purple","pink","grey"]
   divList = document.getElementsByClassName("block");
   for (var i = 0; i < contentArray.length; i++){
       //divList[i].innerHTML = contentArray[i]["text"];
       divList[i].innerHTML = i;
       divList[i].style.verticalAlign= "center";
       divList[i].style.backgroundColor = colors[Math.floor(i/32)];//contentArray[i]["background"];
       divList[i].innerHTML = "<span>"+contentArray[i]["text"]+"</span>";
       divList[i].style.backgroundColor = contentArray[i]["background"];
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
    console.log(anyBaseToInt(['a','q','2','7','!'],5,(intToAnyBase(['a','q','2','7','!'],5,208))));
    console.log(intToAnyBase(['0','1','2'],3,anyBaseToInt(['0','1','2'],3,"2012")));

    console.log("27 to base 5: "+intToAnyBase(['0','a','!','q','4'],5,27));
}
main();
