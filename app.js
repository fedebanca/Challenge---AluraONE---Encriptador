function encriptarTexto(){
    // Obtengo el contenido del textarea
    const textarea = document.querySelector('.presentacion__principal__entrada__textarea');
    const textoAEncriptar = textarea.value;
    let textoEncriptado

    // Encripto el texto
    // Llaves de encriptación
    // La letra "e" es convertida para "enter"
    textoEncriptado = textoAEncriptar.replaceAll('e', "enter");
    // La letra "i" es convertida para "imes"
    textoEncriptado = textoEncriptado.replaceAll('i', "imes");
    // La letra "a" es convertida para "ai"
    textoEncriptado = textoEncriptado.replaceAll('a', "ai");
    // La letra "o" es convertida para "ober"
    textoEncriptado = textoEncriptado.replaceAll('o', "ober");
    // La letra "u" es convertida para "ufat"
    textoEncriptado = textoEncriptado.replaceAll('u', "ufat");

    console.log("texto encriptado: " + textoEncriptado);

    // Escribo el texto encriptado en el <p>
    const output = document.querySelector('.presentacion__salida__output');
    output.textContent = textoEncriptado;
    output.style.display = 'block';

    // oculto elementos
    setElementsDisplay([".presentacion__salida__imagen", ".presentacion__salida__texto"],'none');

    // muestro elementos
    setElementsDisplay([".presentacion__salida__output", ".presentacion__salida__btnCopiar"],'block');
}

function desencriptarTexto(){
    // Obtengo el contenido del textarea
    const textarea = document.querySelector('.presentacion__principal__entrada__textarea');
    const textoAEncriptar = textarea.value;
    let textoDesencriptado

    // Encripto el texto
    // Llaves de encriptación
    // La letra "e" es convertida para "enter"
    textoDesencriptado = textoAEncriptar.replaceAll("enter", 'e');
    // La letra "i" es convertida para "imes"
    textoDesencriptado = textoDesencriptado.replaceAll("imes", 'i');
    // La letra "a" es convertida para "ai"
    textoDesencriptado = textoDesencriptado.replaceAll("ai", 'a');
    // La letra "o" es convertida para "ober"
    textoDesencriptado = textoDesencriptado.replaceAll("ober", 'o');
    // La letra "u" es convertida para "ufat"
    textoDesencriptado = textoDesencriptado.replaceAll("ufat", 'u');

    console.log("texto encriptado: " + textoDesencriptado);

    // Escribo el texto encriptado en el <p>
    const output = document.querySelector('.presentacion__salida__output');
    output.textContent = textoDesencriptado;
    output.style.display = 'block';

    // oculto elementos
    setElementsDisplay([".presentacion__salida__imagen", ".presentacion__salida__texto"],'none');

    // muestro elementos
    setElementsDisplay([".presentacion__salida__output", ".presentacion__salida__btnCopiar"],'block');
}

function setElementsDisplay(elements, displayValue){
    for (var i = 0; i < elements.length; i++){
        document.querySelector(elements[i]).style.display = displayValue;
    }
}

function copiarTexto(){
    const output = document.querySelector('.presentacion__salida__output');
    const texto = output.textContent;

    // Crear un elemento temporal para copiar el texto en el portapapeles
    const elementoTemporal = document.createElement('textarea');
    elementoTemporal.value = texto;
    document.body.appendChild(elementoTemporal);

    // Seleccionar y copiar el texto
    elementoTemporal.select();
    document.execCommand('copy');

    // Eliminar el elemento temporal
    document.body.removeChild(elementoTemporal);

    // Mostrar una alerta o mensaje indicando que el texto fue copiado
    alert('Texto copiado al portapapeles')
}