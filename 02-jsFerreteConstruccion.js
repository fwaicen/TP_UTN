/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var perimetro;
    const { largo, ancho, radio } = obtenerValores();
    perimetro = 6*(largo + ancho);
    alert("Se necesitan " + perimetro.toFixed(2) + " metros de alambre");
}
function Circulo () 
{
    var perimetro;
    const { largo, ancho, radio } = obtenerValores();
    perimetro = 6 * Math.PI * radio;
    alert("Se necesitan " + perimetro.toFixed(2) + " metros de alambre");
}
function Materiales () 
{
	const { largo, ancho, radio } = obtenerValores();
}
function obtenerValores()
{
	const largo = document.getElementById('txtIdLargo').value;
    const ancho = document.getElementById('txtIdAncho').value;
    const radio = document.getElementById('txtIdRadio').value;
	return { largo:parseFloat(largo), ancho:parseFloat(ancho), radio:parseFloat(radio) };
}