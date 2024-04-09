
function maiorComprimento(string1, string2) {
    if (string1.length > string2.length) {
        return string1;
    } else if (string2.length > string1.length) {
        return string2;
    } else {
        return "As strings têm o mesmo comprimento.";
    }
}

// Exemplo de uso:
const string1 = "Olá, tudo bem?";
const string2 = "Olá";

console.log(maiorComprimento(string1, string2));