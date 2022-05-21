var canvas;
var ctx;
var fps= 30;

var canvasX=700;
var canvasY=700;

var tileX, tileY;

//variables del tablero

var tablero;
var filas=100;
var columnas=100;

const blanco='#FFFFFF';
const negro='#000000';


function creaArray2D(f, c){

    var array=new Array(f);

    for(var i=0; i<f; i++){
        array[i]=new Array(c);
    }
    return array;
}

var Agente=function(x, y, estado){
    this.x=x;
    this.y=y;
    this.estado=estado; //vivo=1, muerto=2
    this.estadoProx=this.estado; //estado siguiente ciclo
    this.vecinos=[]; //vecinos del agente

    //Metodo que añade los vecinos del agente actual
    this.addVecino=function(){
        var xVecino;
        var yVecino;

        for(var i=-1; i<2; i++){
            for(var j=-1; j<2; j++){
                xVecino=(this.x+i+columnas)%columnas;
                yVecino=(this.y+j+filas)%filas;

                //descartamos el agente actual como vecino
                if(i!=0 || j!=0){
                    this.vecinos.push(tablero[xVecino][yVecino]);
                }
               
            }
        }
    }

    this.dibuja=function(){
        var color;
        if(this.estado==1){
            color=blanco;
        }
        else{
            color=negro;
        }
        ctx.fillStyle=color;
        ctx.fillRect(this.x*tileX, this.y*tileY, tileX, tileY);
    
    }

    //Programamos las leyes de Conway
    this.nuevoCiclo= function(){
        var suma=0;
        for(i=0;i<this.vecinos.length;i++){
        suma+=this.vecinos[i].estado;
        }
       
        if(suma==3){
            this.estadoProx=1;
        }
        else if(suma>3 || suma<2){
            this.estadoProx=0;
        }
        
    }

    this.mutacion=function(){
        this.estado=this.estadoProx;
    }

}


function InicializaTablero(obj){


for(var i=0; i<columnas; i++){
    for(var j=0; j<filas; j++){
        estado=Math.floor(Math.random()*2);
        obj[i][j]=new Agente(i, j, estado);
    }
}
for(var i=0; i<columnas; i++){
    for(var j=0; j<filas; j++){
        obj[i][j].addVecino();
    }
}


}



function inicializa(){
    //Asociamos el canvas
    canvas=document.getElementById('canvas');
    ctx=canvas.getContext('2d');
    //Ajustamos el tamaño del canvas
    canvas.width=canvasX;
    canvas.height=canvasY;

    //calculamos el tamaño de cada celda

    tileX=Math.floor(canvasX/filas);
    tileY=Math.floor(canvasY/columnas);

     //Creamos el tablero
     tablero=creaArray2D(filas, columnas); 

        //Inicializamos el tablero
        InicializaTablero(tablero);


    //Ejecutamos el bucle principal
    setInterval(function(){principal();},1000/fps);


}
function dibujaTablero(obj){
    for(var i=0;i<filas;i++){
        for(j=0;j<columnas; j++){
            obj[i][j].dibuja();

        }
    }
    //Calcula el siguiente ciclo
    for(var i=0; i<filas; i++){
        for(var j=0; j<columnas; j++){
            obj[i][j].nuevoCiclo();
        }
    }

    //Aplica la mutacion
    for(var i=0; i<filas; i++){
        for(var j=0; j<columnas; j++){
            obj[i][j].mutacion();
        }
    }
}

function Borracanvas(){

    canvas.width= canvas.width;
    canvas.height= canvas.height;

}


function principal(){
    //Borramos el canvas
    Borracanvas();
    dibujaTablero(tablero);
   
    }
 