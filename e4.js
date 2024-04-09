function substituirNumeros(string) {
    return string.replace(/\d+/g, '[removido]');
}


const textoOriginal = 'teste 1 de 2 string 3';
const textoModificado = substituirNumeros(textoOriginal);
console.log(textoModificado);
