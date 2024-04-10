# ExercicioEstagio

Resolver os seguintes exercícios
● E.1 Crie uma função que recebe dois argumentos string e retorna o de maior
comprimento.
● E.2 Crie uma função que recebe três argumentos, uma função e duas string,
aplique a função nas duas string e imprima o resultado.
● E.3 Crie uma função que recebe vários argumentos do tipo string e imprime todos
juntos.

● E.4 Dado a seguinte string 'teste 1 de 2 string 3', substitua todas as
ocorrências de números pelo valor '[removido]'.

● E.5 Dado o dicionário {'a': 4, 'e' :3 ,'i' :1 , 's': 5 } substitua os números
na frase 'T35t3 d3 35t4g1o'pelos valores de suas respectivas keys, por exemplo a
frase ol4 ficaria ola.
● E.6 Utilizando a api da viacep (https://viacep.com.br/) e o seu cep como entrada
imprima o seu endereço no formato 'ENDERECO, NUMERO, CIDADE/ESTADO'.
Para os exercícios de E.7 até E.11 considere o array de objetos:
1. [
2. {id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42}, 3. {id:
2, nome: 'daniel', sobrenome: 'gonçalves', idade: 21}, 4. {id:3,
nome: 'matheus', sobrenome: 'garcia', idade: 28}, 5. {id: 4, nome:
'gabriel', sobrenome: 'pinheiro', idade: 21} 6. ]

● E.7 Imprima uma mensagem de saudação com o nome completo para cada um
dos objetos. O nome deve ter a primeira letra maiúscula.
7.
8. Ex.:
9. Olá, Fulano de tal!
10. Olá, Juca da silva!
11. ...

● E.8 Imprima a soma das idades (dica: utilize reduce)
● E.9 Imprima o objeto se existir alguem com menos 25 anos.
● E.10 Imprima todos os elementos em que a idade é menor que 30 anos. ●
E.11 Ordene o array de forma decrescente por idade, em caso de empate o
desempate é pelo id.
● E.12 Considere o objeto:
12. const pessoa = {
13. "nome": "Dev",
14. "sobrenome":"smart",

15. "idade":"26",
16. "cargo":"analista de sistemas",
17. "documento":"123.345.678-90"
}
Crie uma função que rece um objeto com o formato acima descrito e deleta o campo
"documento". a função deve devolver o objeto atualizado.

# Exercício de back-end

Desafio
Deverá ser implementado uma API node.js no padrão RESTful que possibilite a criação e
listagem de posts e comentários. Sendo que cada comentário devem pertencer a um post.

Observações
Sugestão de bibliotecas para montar a api:
● Koa ou express
● Alguma biblioteca para abstrair a camada de dados que preferir.
○ Knex
○ Bookshelf
○ Sequelize
○ Mongoose
○ TypeOrm <= Caso utilize typescript esse é o mais indicado

Prefira o uso de um banco de dados relacional (postgresql, mysql, ...), sendo seu uso não
obrigatório.
Será observado organização de código, legibilidade e melhor uso dos recursos da
linguagem javascript.

A API deve prover endpoints para: Cadastrar posts Obter posts Apagar posts Adicionar

um comentário a um post apagar um comentário de um post