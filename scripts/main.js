//cambiar color texto
var parrafos= document.querySelectorAll('p');


function recorrerParafo(parrafo){
    parrafo.style.color = "red";
}

parrafos.forEach(recorrerParafo);

//cambiar color fond aleatoriamente un parrafo

function parrafoAleatorio(parrafo){

   parrafo.style.background= "rgb( "+Math.random(0,255)+","+Math.random(0,255)+","+Math.random(0,255);
}
 
parrafoAleatorio();





//usar set interval para hacer el cambio cada medio segundo
setInterval(parrafoAleatorio,500);


//hacer que el color al que cmabie sea aleatorio

function fondoAleatorio(){
    parrafo.style.background= Math.random(0,255);
}
setInterval(fondoAleatorio,500 );