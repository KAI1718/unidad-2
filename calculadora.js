var y = prompt("operacion a realizar");
function suma(){
    let n1  =10;
    let n2 =5;
    let total= n1 + n2;
    console.log(total);
}
function resta(){
    let n1  =10;
    let n2 =5;
    let total= n1 - n2;
    console.log(total);
}
function multiplicacion(){
    let n1  =10;
    let n2 =5;
    let total= n1 * n2;
    console.log(total);
}
function division(){
    let n1  =10;
    let n2 =5;
    let total= n1 / n2;
    console.log(total);
}
switch(y){
    case suma:
        suma();
    break; 
    case resta:
        resta();
    break;
    case multiplicacion:
        multiplicacion();
    break;
    case division:
       division();
    break;
}
console.log();