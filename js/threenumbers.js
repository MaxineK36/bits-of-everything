function main(){
    var colorHex = getQueryVariable("color");
    console.log(colorHex);
    var name = document.getElementById("excolor");
    name.style.color="#"+colorHex;

}

main();
