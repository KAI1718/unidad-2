var factorial  = function(n){
    if((n==0)|| (n==1))
    return 1;
    else 
    return(n* factorial(n-1));
}
console.log(factorial(aleatorio));

function aleatorio() {
    var numero = Math.floor(Math.random()*10);
    return numero;
}