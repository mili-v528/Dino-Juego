var time = new Date();
var deltaTime=0;

if(document.readyState=== "complete" || document.readyState === "interactive"){
     setTimeout(Init,1);
}else{
    document.addEventListener("DOMContentLoaded", Int)
}

function Init(){
    time=new Date();
    Start();
    Loop();
}

function Loop(){
    deltaTime=(newdate() - time) /1000;
    time=new Date();
    Update();
    requestAnimationFrame(Loop);
}

var sueloY=22;
var velY=0;
var impulso=900;
var gravedad=2500;
var dinoPosY=sueloY;
var sueloX=0;
var velEscenario=1280/3;
var gameVel=1;
var score=0;
var contenedor;
var saltando=false;
var parado=false;
var contenedor;
var dino;
var textoScore;
var suelo;
var gameOver;


function Start(){
    gameOver=document.querySelector(".game-over");
    suelo=document.querySelector(".suelo");
    contenedor=document.querySelector(".contenedor");
    textoScore=document.querySelector(".score");
    dino=document.querySelector(".dino");
}

function Update(){
    MoverSuelo();
}

function MoverSuelo(){
    sueloX=CalcularDeplazamiento();
    suelo.style.left=-(sueloX % contenedor.clienteWidth)+"px";
}

function CalcularDeplazamiento(){
    return velEscenario*deltaTime*gameVel;

}