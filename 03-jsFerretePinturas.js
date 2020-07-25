/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var valNum = parseFloat(document.getElementById('txtIdTemperatura').value);
    var centigrados = (valNum - 32) / 1.8;
    alert(valNum + " Fahrenheit son " + centigrados + " Centígrados.");
}

function CentigradosFahrenheit () 
{
    var valNum = parseFloat(document.getElementById('txtIdTemperatura').value);
    var fahrenheit = (valNum * 1.8) + 32;
    alert(valNum + " Centígrados son " + fahrenheit + " Fahrenheit.");
}
