function encriptarTexto() {
    const inputTexto = document.getElementById("miTextarea").value;
    let textoEncriptado = inputTexto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    mostrarResultado(textoEncriptado);
}

function desencriptarTexto() {
    const inputTexto = document.getElementById("miTextarea").value;
    let textoDesencriptado = inputTexto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    mostrarResultado(textoDesencriptado);
}

function mostrarResultado(texto) {
    document.getElementById("resultadoTexto").innerText = texto;
    document.getElementById("imagen2").style.display = "none";
    document.getElementById("parrafo3").style.display = "none";
    document.getElementById("copiarButton").style.display = "block";
}

function copiarTexto() {
    const texto = document.getElementById("resultadoTexto").innerText;
    navigator.clipboard.writeText(texto).then(() => {
        alert("Texto copiado al portapapeles");
    }).catch(err => {
        console.error("Error al copiar el texto: ", err);
    });
}
