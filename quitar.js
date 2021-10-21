var palabra = prompt("Ingrese una palabra");
var nueva = filtrar(palabra);
console.log(nueva);
function filtrar(palabra){
    let elementos = ["1","2","3","4","5","6","7","8","9","0","á","é","í","ó","ú","Á","É","Í","Ó","Ú"," "];
    let nuevaPalabra = "";
    for (let i = 0; i < palabra.length; i++){
        let verificacion = 1;
        for (let j = 0; j < elementos.length; j++){
            if (palabra[i] == elementos[j]){
                verificacion = 0;
            }
        }
        if(verificacion == 1){
            nuevaPalabra += palabra[i];
        }else{
            nuevaPalabra += "";
        }
    }
    return nuevaPalabra;
}