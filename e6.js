async function buscarEndereco(cep) {
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();

        if (data.erro) {
            console.log("CEP não encontrado");
            return;
        }

        const enderecoFormatado = `${data.logradouro}, ${data.numero}, ${data.localidade}/${data.uf}`;
        console.log(enderecoFormatado);
    } catch (error) {
        console.error("Ocorreu um erro ao buscar o endereço:", error);
    }
}

// Substitua 'seu_cep' pelo seu CEP real
const seuCep = '36016360';
buscarEndereco(seuCep);
