function aplicarFuncao(funcao, string1, string2) {
    const resultadoString1 = funcao(string1);
    const resultadoString2 = funcao(string2);

    console.log("Resultado da aplicação da função na primeira string:", resultadoString1);
    console.log("Resultado da aplicação da função na segunda string:", resultadoString2);
}

// Exemplo de uso:
function converterMaiuscula(string) {
    return string.toUpperCase();
}

const string1 = "Olá";
const string2 = "Mundo";

console.log(aplicarFuncao(converterMaiuscula, string1, string2));