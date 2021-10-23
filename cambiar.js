let numero = parseFloat(prompt("Ingrese un numero"));

console.log("Su numero " + numero + " contiene:");
console.log(numeroALetras(numero));

function numeroALetras(numero) {
    let texto = numero + ""; //Convertirlo a texto
    let resultado = "";

    for (let i = 0; i < texto.length; i++) {
        switch (texto[i]) {
            case ".":
                resultado += "punto";
                break;
            case "1":
                resultado += "uno";
                break;
            case "2":
                resultado += "dos";
                break;
            case "3":
                resultado += "tres";
                break;
            case "4":
                resultado += "cuatro";
                break;
            case "5":
                resultado += "cinco";
                break;
            case "6":
                resultado += "seis";
                break;
            case "7":
                resultado += "siete";
                break;
            case "8":
                resultado += "ocho";
                break;
            case "9":
                resultado += "nueve";
                break;
            case "0":
                resultado += "cero";
                break;
            default:
                return "Entrada no valida";
        }

        if (i != texto.length - 1) { //No agregar coma en la ultima cifra
            resultado += ", ";
        }
    }

    return resultado;
}