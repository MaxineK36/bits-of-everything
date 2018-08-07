var across = 32;
var down = 8;

//no return, takes array to modify, a starting spot, and a string
//row: which row you want your text in
//index: where in the row you want your text to start; -1 if you want centered

function showItemBinary(id){
    console.log(id);
    document.getElementById("cover").style.display = "block";
    var blockIndex = Number(id.slice(1,id.length));
    var binInfo = document.getElementById("info");
    binInfo.style.display = "block";
    binInfo.innerHTML = blockIndex;
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

function buildDivs(contents){
    console.log("building divs\n");
    for (var i = 0; i < across*down; i++){
        div = document.createElement("div");
	div.className = "block";
	div.id = "b"+(i+1);
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
    }
}

function resize(){
    console.log("resizing\n");
    var main = document.getElementById("main");
    var w = main.offsetWidth;
    var h = main.offsetHeight;
    divWidth = w / across;
    divHeight = h / down;
    divList = document.getElementsByClassName("block");
    cover = document.getElementById("cover");
    cover.style.paddingLeft = w / 4;
    cover.style.paddingRight = w / 4;
    cover.style.paddingTop = h / 4;
    cover.style.paddingBottom = h / 4;
    for (var i = 0; i < divList.length; i++){
        divList[i].style.width = divWidth;
        divList[i].style.height = divHeight;
	var fsize = Math.min(divWidth*1.4, 0.7*divHeight);
        divList[i].style.fontSize = fsize;
    }
}

function setDivContents(contentArray){
   divList = document.getElementsByClassName("block");
   for (var i = 0; i < contentArray.length; i++){
       divList[i].innerHTML = contentArray[i]["text"];
       divList[i].style.backgroundColor = contentArray[i]["background"];
       divList[i].value = contentArray[i]["background"];
   }
}

function main(){
    var divContents = []; //list of dicts
    for (var i = 0; i < across*down; i++){
        var info = {"background": "white", "text": ""}
	divContents[i] = info;
    }
    buildDivs(divContents);
    resize();
    setDivContents(divContents);
    addText(divContents, 3, -1, "welcome!");
    addText(divContents, 4, -1, "try clicking on things!");
}

main();
