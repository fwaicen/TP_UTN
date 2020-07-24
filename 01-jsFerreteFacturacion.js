/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar() 
{
    const { num1, num2, num3 } = obtenerNumeros();
    alert("La Suma es "+ (num1 + num2 + num3));
}
function Promedio() 
{
    var promedio;
    var { num1, num2, num3 } = obtenerNumeros();
    promedio = (num1 + num2 + num3) / 3;
    alert("El Promedio es "+ promedio.toFixed(2));
}
function PrecioFinal() 
{
    var preciofinal;
    var iva;
    const { num1, num2, num3 } = obtenerNumeros();
    iva = (num1 + num2 + num3) * 0.21;
    preciofinal = num1 + num2 + num3 + iva;
    alert("El Precio Final es "+ preciofinal.toFixed(2));
}

function obtenerNumeros()
{
	const num1 = document.getElementById('txtIdPrecioUno').value;
    const num2 = document.getElementById('txtIdPrecioDos').value;
    const num3 = document.getElementById('txtIdPrecioTres').value;
	return { num1:parseFloat(num1), num2:parseFloat(num2), num3:parseFloat(num3) };
}