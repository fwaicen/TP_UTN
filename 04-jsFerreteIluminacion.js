/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    const { cant, marca } = obtenerDatos();
    var precioFinal = 0;
    var iibb = 0;
    if (cant >= 6) {
        //50% descuento
        precioFinal = obtenerPrecioFinal(cant, 0.5);
    }
    if (cant === 5 && marca === 'ArgentinaLuz') {
        //40% descuento
        precioFinal = obtenerPrecioFinal(cant, 0.4);
    }
    else if (cant === 5) {
        //30% descuento
        precioFinal = obtenerPrecioFinal(cant, 0.3);
    }
    if (cant === 4 && (marca === 'ArgentinaLuz' || marca === 'FelipeLamparas')) {
        //25% descuento
        precioFinal = obtenerPrecioFinal(cant, 0.25);
    }
    else if (cant === 4) {
        //20% descuento
        precioFinal = obtenerPrecioFinal(cant, 0.2);
    }
    if (cant === 3 && marca === 'ArgentinaLuz') {
        if (marca === 'ArgentinaLuz') {
            //15% descuento
            precioFinal = obtenerPrecioFinal(cant, 0.15);
        }
        else if (marca === 'FelipeLamparas') {
            //10% descuento
            precioFinal = obtenerPrecioFinal(cant, 0.1);
        }
        else {
            //5% descuento
            precioFinal = obtenerPrecioFinal(cant, 0.05);
        }
    }
    if (cant < 3) {
        precioFinal = obtenerPrecioFinal(cant);
    }
    if (precioFinal > 120) {
        iibb = precioFinal * 0.1;
        precioFinal = precioFinal + iibb
    }
    if (iibb != 0) {
        alert("IIBB Usted pago " + iibb.toFixed(2));
    }
    document.getElementById('txtIdprecioDescuento').value = precioFinal.toFixed(2);
}
function obtenerDatos()
{
	const cant = document.getElementById('txtIdCantidad').value;
    const marca = document.getElementById('Marca').value;
	return { cant: parseInt(cant), marca: marca };
}
function obtenerPrecioFinal(cant, porcentaje = 0) {
    var precioFinal;
    const valor = 35;
    precioFinal = valor * cant;
    descuento = precioFinal * porcentaje;
    precioFinal = precioFinal - descuento;
    return precioFinal;
}
