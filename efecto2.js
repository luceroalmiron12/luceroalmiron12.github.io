/* ES EL MISMO CODIGO, SOLO QUE MAS MEJORADO*/

/*creamos un arreglo de imagenes */
var imagenes= ["imagen/cas1.jpeg","imagen/cas2.jpeg","imagen/cas3.jpeg","imagen/dep1.jpeg", "imagen/dep2.jpeg",
 " imagen/depe3.jpeg","imagen/depe10.jpeg","imagen/depe11.jpeg"
];

/*mostramos la primera imagen para el slider */
document.Imagen.src=imagenes[0];

/* hacemos referencia a los botones derecho e izquierdo con queryselector*/
var sliderderecha= document.querySelector(".slider-derecho");
var sliderizquierda=document.querySelector(".slider-izquierdo");

/*declaramos un contador para las transiciones */
/*se incremente o disminuya a a derecha o a la izquierda*/
var contador=0;

/*implementamos la funcion mover derecha*/
function moverderecha()
{
    contador++; /*el contador se incrementa */
    if(contador>imagenes.length-1)/*con la condicion reiniciamo el slider */
        {
            contador=0; /*el contador se pone en cero otra vez*/
        }
    document.Imagen.src=imagenes[contador];/*mostrando de acuerdo al indice*/
}
/*transicion automatica del slider*/
var intervalo=setInterval(moverderecha,2000);

/* el evento esta mejorado porque limpiamos o cancelamos la funcion "setInterval"*/
sliderderecha.addEventListener("click",function()
{
    clearInterval(intervalo);/*limpiamo el intervalo*/
    moverderecha();/*llamamos a la funcion moverderecha */
    intervalo=setInterval(moverderecha,1000);
})

/*implementamos la funcion mover izquierda*/
function moverizquierda()/*cada cuando haga click en el boton  se va incrementar*/
{
    contador--; /*el contador desminuye */
    if(contador<0)/*salvamos el indexado no existe posicion -1 */
        {
            contador=imagenes.length-1;/*el contador vuelve a 3 */
        }
        document.Imagen.src=imagenes[contador];/*mostrando de acuerdo al indice*/
}
/* el evento esta mejorado porque limpiamos o cancelamos la funcion "setInterval"*/
sliderizquierda.addEventListener("click",function(){
    clearInterval(intervalo);/*limpiamo el intervalo*/
    moverizquierda();/*llamamos a la funcion moverderecha */
    intervalo=setInterval(moverderecha,2000);
});

