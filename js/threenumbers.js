
function makeColorGraph(stripe, colors){
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
	bar.style.backgroundColor = "white"//"rgb("+base[0]+","+base[1]+","+base[2]+")";
	bar.innerHTML = colors[i]
	bar.style.textAlign = "center"
	bar.style.verticalAlign = "center";
	cdiv.style.verticalAlign = "bottom";
        cdiv.appendChild(bar);
	stripe.appendChild(cdiv);
    }
}
function main(){
    var colorHex = getQueryVariable("color");
    console.log(colorHex);
    var name = document.getElementById("excolor");
    name.style.color="#"+colorHex;
    var graph = document.getElementById("excolorgraph");
    makeColorGraph(graph, [hexToInt(colorHex.slice(0,2)),hexToInt(colorHex.slice(2,4)),hexToInt(colorHex.slice(4,6))]);

}

main();
