function aplicarFuncao(funcao, string3, string4) {
    const resultadoString1 = funcao(string3);
    const resultadoString2 = funcao(string4);
    console.log("Resultado da aplicação da função na primeira string:", resultadoString1);
    console.log("Resultado da aplicação da função na segunda string:", resultadoString2);
}

// Exemplo de uso:
function converterMaiuscula(string) {
    return string.toUpperCase();
}

const string3 = "Olá";
const string4 = "Mundo";
console.log(aplicarFuncao(converterMaiuscula, string3, string4));