function removerDocumento(objeto) {
    delete objeto.documento;
    return objeto;
}

const pessoa = {
    "nome": "Dev",
    "sobrenome": "smart",
    "idade": "26",
    "cargo": "analista de sistemas",
    "documento": "123.345.678-90"
};

// Remover o documento
const pessoaAtualizada = removerDocumento(pessoa);

console.log(pessoaAtualizada);

