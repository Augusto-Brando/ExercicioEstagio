function substituirNumeros(frase, dicionario) {
    const trocar = /\d/g;

    const fraseModificada = frase.replace(trocar, (achar) => {
        if (dicionario[achar] !== undefined) {
            return dicionario[achar];
        } else {
            return achar;
        }
    });
    return fraseModificada;
}

const dicionario = {'1': 'i', '3': 'e', '4': 'a', '5': 's'};

const fraseOriginal = 'T35t3 d3 35t4g1o';

const fraseModificada = substituirNumeros(fraseOriginal, dicionario);

console.log(fraseModificada); 
