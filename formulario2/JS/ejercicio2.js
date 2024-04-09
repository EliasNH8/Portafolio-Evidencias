function ventas() {

    let sueldoTotal, comision, venta1, venta2, venta3
    let sueldoBase;


    venta1 = parseFloat(document.formulario2.venta1.value);
    venta2 = parseFloat(document.formulario2.venta2.value);
    venta3 = parseFloat(document.formulario2.venta3.value);
    sueldoBase = parseFloat(document.formulario2.sueldoBase.value);

    // Validar si los campos son números válidos

    if (isNaN(venta1) || venta1 < 0 || isNaN(venta2) || venta2 < 0 || isNaN(venta3) || venta3 < 0 || isNaN(sueldoBase) || sueldoBase < 0) {
        alert("Por favor ingrese solamente números (que sean positivos) en todos los campos");
        return;
    }

    comision = (venta1 + venta2 + venta3) * 0.10;

    sueldoTotal = sueldoBase + comision;

    document.formulario2.comision.value = comision;
    document.formulario2.sueldoTotal.value = sueldoTotal;


}