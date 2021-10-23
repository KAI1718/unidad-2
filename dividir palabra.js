var palabra = prompt ("ingresa");
var letras = [];
dividir(palabra);

function dividir (palabra) {
    for (var j = 0; j < palabra.length; j++){
        letras.push(palabra[j]);
    }
}
console.log(dividir(palabra),(letras));