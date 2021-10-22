var frase = prompt ("ingresa");
var a= 0; 
var e= 0;
var i= 0;
var o= 0;
var u= 0;
var consonante = 0;
reverse(frase);

for (var j = 0 ; j < frase.length ; j++) {


	switch(frase.charAt(j)) {

		case "a":
		a++;
		break;

		case "e":
		e++;
		break;

		case "i":
		i++;
		break;

		case "o":
		o++;
		break;

		case "u":
		u++;
		break;

		default:
		consonante++;
		break;

	}

}
function reverse (frase) {
    if (frase === "") {
        return "";
    } else {
        return reverse(frase.substr(1)) + frase.charAt(0);
    }
}

console.log("vocales" + "  A:" + a + "  E:" + e + "  I:" + i + "  O:" + o + "  U:" + 
u + "  no son vocales:" + consonante, (reverse(frase)));