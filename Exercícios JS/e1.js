
function maiorComprimento(string1, string2) {
    return string1.length > string2.length ? string1 :
           string2.length > string1.length ? string2 :
           "As strings têm o mesmo comprimento.";
}

// Exemplo de uso:
const string1 = "Olá, tudo bem?";
const string2 = "Olá, tudo bem";
console.log(maiorComprimento(string1, string2));
