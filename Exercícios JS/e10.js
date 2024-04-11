const pessoas = [
    {id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42},
    {id: 2, nome: 'daniel', sobrenome: 'gonçalves', idade: 21},
    {id: 3, nome: 'matheus', sobrenome: 'garcia', idade: 28},
    {id: 4, nome: 'gabriel', sobrenome: 'pinheiro', idade: 21}
];

// Filtrar pessoas com menos de 30 anos
const pessoasMenor30 = pessoas.filter(pessoa => pessoa.idade < 30);

// Mostrar os filtrados
console.log("Pessoas com menos de 30 anos:", pessoasMenor30);
