const pessoas2 = [
    {id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42},
    {id: 2, nome: 'daniel', sobrenome: 'gonçalves', idade: 21},
    {id: 3, nome: 'matheus', sobrenome: 'garcia', idade: 28},
    {id: 4, nome: 'gabriel', sobrenome: 'pinheiro', idade: 21}
];

// Filtrar pessoas com menos de 25 anos
const pessoasMenor25 = pessoas2.filter(pessoa => pessoa.idade < 25);

// Alguém com menos de 25 anos, imprimir a pessoas
if (pessoasMenor25.length > 0) {
    console.log("Objeto das pessoas com menos de 25 anos:", pessoasMenor25);
} else {
    console.log("Não há pessoas com menos de 25 anos.");
}
