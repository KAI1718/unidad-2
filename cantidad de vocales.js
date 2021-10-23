var frase = prompt ("ingresa");
function contarvocales(str) {
    var todasvocales ="aeiou";
    var contar = 0;
    for (var j = 0; j < str.length; j++){
        if(todasvocales.indexOf(str[j] !== -1)){
            console.log(str [j] );
            contar +=1
        }
    }
    return contar;
}
console.log(contarvocales(frase));