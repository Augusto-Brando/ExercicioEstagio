const pessoas = [
    {id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42},
    {id: 2, nome: 'daniel', sobrenome: 'gonçalves', idade: 21},
    {id: 3, nome: 'matheus', sobrenome: 'garcia', idade: 28},
    {id: 4, nome: 'gabriel', sobrenome: 'pinheiro', idade: 21}
];

// Função para formatar o nome com a primeira letra maiúscula
function formatarNome(nome) {
    return nome.charAt(0).toUpperCase() + nome.slice(1);
}

// Iterar sobre o array de pessoas e imprimir a mensagem de saudação
pessoas.forEach(pessoa => {
    const nomeCompleto = `${formatarNome(pessoa.nome)} ${formatarNome(pessoa.sobrenome)}`;
    console.log(`Olá, ${nomeCompleto}!`);
});
