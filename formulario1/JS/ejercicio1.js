function capital() {
    let capitalFinal, capitalInicial;

    capitalInicial = parseFloat(document.formulario1.capitalInicial.value);

    // Validar si el valor ingresado es un número y es positivo mayor o igual a 0
    if (!isNaN(capitalInicial) && capitalInicial >= 0) {
        // Realizar el cálculo si la validación es correcta

        capitalFinal = capitalInicial * 1.02;
        document.formulario1.capitalFinal.value = capitalFinal;
    } else {
        alert("Ingrese un número positivo mayor o igual a 0 en el campo Capital Inicial.");
        document.formulario1.capitalFinal.value = "";
        document.formulario1.capitalInicial.value = "";
    }
}