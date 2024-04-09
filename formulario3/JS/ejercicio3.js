function costoTienda() {

    let costoProducto1, descuento, pagoFinal;
    let totalCompra;

    costoProducto1 = parseFloat(document.formulario3.costoProducto1.value);

    if (isNaN(costoProducto1) || costoProducto1 < 0) {
        alert("Ingrese un número positivo en el campo costoProducto1.");
        return;
    }


    totalCompra = costoProducto1;

    if (totalCompra)
        descuento = totalCompra * 0.15;
    else
        descuento = 0;

    pagoFinal = totalCompra - descuento;
    document.formulario3.descuento.value = descuento;
    document.formulario3.pagoFinal.value = pagoFinal;
    document.formulario3.totalCompra.value = totalCompra;
}