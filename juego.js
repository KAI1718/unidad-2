var fila =[];
var columna= [];
var tablero1 = [];
var tablero2 = [];

crearTablero1(tablero1);
crearTablero2(tablero2);
tiros();
tiros2();
ganador();

function crearTablero1(tablero1){
  for(let i=0; i<10; i++)
    tablero1[i]=[10];
  
  for(let i=0; i<10; i++)
  for(let j=0; j<10; j++)
    tablero1[i][j]=0;
    jugador1 = prompt("Jugador 1, ingrese su nombre");
  console.log(tablero1, "tablero" + jugador1,);
    posicionarbarcos1();
    
}

function crearTablero2(tablero2){
    for(let i=0; i<10; i++)
      tablero2[i]=[10];
    
    for(let i=0; i<10; i++)
    for(let j=0; j<10; j++)
      tablero2[i][j]=0;
      jugador2 = prompt("Jugador 2, ingrese su nombre");
    console.log(tablero2, "tablero" + jugador2);
    posicionarbarcos2();

  }

function posicionarbarcos1() {
    fila=parseInt(prompt("Ingrese la fila 0-10"));
 if(fila >=1 && fila <10){
  columna=parseInt(prompt("Ingrese la columna 0-10"));
  if(columna >=1 && columna <10)
  {
    tablero1[fila][columna]=1;
  }
  else
    console.log("Columna incorrecta");
   }
}

function posicionarbarcos2() {
    fila=parseInt(prompt("Ingrese la fila 0-10"));
 if(fila >=1 && fila <10){
  columna=parseInt(prompt("Ingrese la columna 0-10"));
  if(columna >=1 && columna <10)
  {
    tablero2[fila][columna]=1;
  }
  else
    console.log("Columna incorrecta");
   }
}

function tiros() {
    fila=parseInt(prompt("Ingrese la fila 0-10 para tablero1"));
    if(fila >=1 && fila <10){
        columna=parseInt(prompt("Ingrese la columna 0-10para tablero1"));
        if(columna >=1 && columna <10)
        {
        if(tablero1[fila][columna]==tablero2[fila][columna])
        {
            console.log("Hundiste un barco a " + jugador2);
            tablero1[fila][columna]=2;
        }
        else
        {
            console.log("Fallaste " + jugador1);
            tablero1[fila][columna]=1;
        }
        }
        else
        console.log("Columna incorrecta");
     }
     else
        console.log("Fila incorrecta");

        while(tablero1[fila][columna] != 2 || tablero2[fila][columna] != 2){
            tiros2();
        }
        }


function tiros2() {
    fila=parseInt(prompt("Ingrese la fila 0-10 para tablero2"));
    if(fila >=1 && fila <10){
        columna=parseInt(prompt("Ingrese la columna 0-10 para tablero2"));
        if(columna >=1 && columna <10)
        {
        if(tablero2[fila][columna]==tablero1[fila][columna])
        {
            console.log("Hundiste un barco a " + jugador1);
            tablero2[fila][columna]=2;
        }
        else
        {
            console.log("Fallaste" + jugador2);
            tablero2[fila][columna]=1;
        }
        }
        else
        console.log("Columna incorrecta");
     }
     else
        console.log("Fila incorrecta");

        while(tablero2[fila][columna] != 2 || tablero1[fila][columna] != 2){
            tiros();
        }
}

function ganador() {
    if(tablero1[fila][columna] != 1 )
    {
        console.log("El ganador es " + jugador1);
    }
    else
    {
        console.log("El ganador es " + jugador2);
    }
    
}

/*fila=parseInt(prompt("Ingrese la fila 1-10"));
if(fila >=1 && fila <10)
{
  columna=parseInt(prompt("Ingrese la columna 1-10"));
  if(columna >=1 && columna <10)
  {
    tablero[fila][columna]=1;
    console.log(tablero);
  }
  else
    console.log("Columna incorrecta");
}*/