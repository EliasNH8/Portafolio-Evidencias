function problema1() {

    const cadenaOriginal = document.getElementById('p1-input').value;

    const palabras = cadenaOriginal.split(" ");

    const palabrasInvertidas = palabras.reverse();


    const resultado = palabrasInvertidas.join(" ");

    document.getElementById('p1-output').textContent = resultado;
}





function calcularProductoEscalar() {

    const x1 = parseFloat(document.getElementById('p2-x1').value);
    const x2 = parseFloat(document.getElementById('p2-x2').value);
    const x3 = parseFloat(document.getElementById('p2-x3').value);
    const x4 = parseFloat(document.getElementById('p2-x4').value);
    const xN = parseFloat(document.getElementById('p2-xN').value);

    const y1 = parseFloat(document.getElementById('p2-y1').value);
    const y2 = parseFloat(document.getElementById('p2-y2').value);
    const y3 = parseFloat(document.getElementById('p2-y3').value);
    const y4 = parseFloat(document.getElementById('p2-y4').value);
    const yN = parseFloat(document.getElementById('p2-yN').value);

    if (isNaN(x1) || isNaN(x2) || isNaN(x3) || isNaN(x4) || isNaN(xN) ||
        isNaN(y1) || isNaN(y2) || isNaN(y3) || isNaN(y4) || isNaN(yN)) {
        alert("Por favor, introduce solo números en todos los campos.");
        return;
    }

    const productoEscalar = x1 * y1 + x2 * y2 + x3 * y3 + x4 * y4 + xN * yN;

    document.getElementById('p2-output').textContent = `El producto escalar es: ${productoEscalar}`;
}







function problema3() {
    // Función para validar si la cadena cumple con el formato requerido
    function validarFormato(cadena) {
        // Expresión regular para verificar si la cadena contiene solo palabras en mayúsculas separadas por comas
        const regex = /^([A-Z]+)(,[A-Z]+)*$/;
        return regex.test(cadena);
    }

    // Función para calcular la cantidad de caracteres únicos en una palabra
    function contarCaracteresUnicos(palabra) {
        // Convertir la palabra en un conjunto de caracteres únicos
        const caracteresUnicosSet = new Set(palabra);

        // Devolver la cantidad de caracteres únicos en la palabra
        return caracteresUnicosSet.size;
    }

    // Obtener las palabras ingresadas por el usuario
    const cadena = document.getElementById('p3-input').value;

    // Validar el formato de las palabras
    if (!validarFormato(cadena)) {
        document.getElementById('p3-output').textContent = "Por favor, ingresa palabras en mayúsculas separadas por comas.";
        return;
    }

    const palabras = cadena.split(",");

    // Inicializar variables para almacenar la palabra con más caracteres únicos y su cantidad
    let palabraMasUnica = "";
    let cantidadMasUnica = 0;

    // Iterar sobre cada palabra para encontrar la que tenga más caracteres únicos
    palabras.forEach(palabra => {
        const cantidadCaracteresUnicos = contarCaracteresUnicos(palabra);
        if (cantidadCaracteresUnicos > cantidadMasUnica) {
            palabraMasUnica = palabra;
            cantidadMasUnica = cantidadCaracteresUnicos;
        }
    });

    // Formatear el resultado
    const resultado = `${palabraMasUnica} = ${cantidadMasUnica} (${[...new Set(palabraMasUnica)].join(",")})`;

    // Mostrar el resultado en el elemento de salida
    document.getElementById('p3-output').textContent = resultado;
}

// Asignar la función al botón de cálculo
document.getElementById('p3_pala').addEventListener('click', problema3);