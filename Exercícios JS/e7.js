const pessoas = [
    {id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42},
    {id: 2, nome: 'daniel', sobrenome: 'gonçalves', idade: 21},
    {id: 3, nome: 'matheus', sobrenome: 'garcia', idade: 28},
    {id: 4, nome: 'gabriel', sobrenome: 'pinheiro', idade: 21}
];

// Primeira letra maiuscula
function formatarNome(nome) {
    return nome.charAt(0).toUpperCase() + nome.slice(1);
}

// Formatar os dados no array e exibir a mensagem de saudação
pessoas.forEach(pessoa => {
    const nomeCompleto = `${formatarNome(pessoa.nome)} ${formatarNome(pessoa.sobrenome)}`;
    console.log(`Olá, ${nomeCompleto}!`);
});
