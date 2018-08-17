function printIf(condition, string){
    if (condition){
        console.log(string)
    }
}

function getQueryVariable(variable){
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               console.log("in query loop");
               var pair = vars[i].split("=");
	       console.log(pair);
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

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

function intToAnyBase(digitList, base, n){
    console.log("converting "+n+" to base "+base);
    var mult = 1;
    var numdigits = 1;
    var str = "";
    while(n - mult > 0){
        mult*=base;
        numdigits+=1;
    }
    mult/=base;
    numdigits -= 1;
    console.log("mult is "+mult);
    console.log("there are "+numdigits+" digits");
    
    
    for (var i = 0; i<numdigits; i++){
        var digitIndex = 0;
        while(n >= mult){
           digitIndex++; 
	   n -= mult;
	   console.log("digit index is "+digitIndex+" n is "+n);
	}
        str = str + digitList[digitIndex];
	console.log("mult is "+mult+" str is "+str+" n is "+n);
	mult/=base;
    }
    return str;

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
