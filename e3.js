function imprimirStrings(...strings) {
    const resultado = strings.join(""); // .join junta tudo
    console.log(resultado);
}

// Exemplo de uso:
imprimirStrings("Olá", ", ", "como", " ", "você", " ", "está", "?");