const knex = require('knex'); //Importando a ferramenta knex, responsavel pelo nosso banco de dados.
const configuration = require('../../knexfile'); //Importando as configurações feitas no arquivo de conexão com BD.

//Criando uma variavel que armazena qual o banco de dados vamos utilizar.
//Lembrando que dentro do arquivo knexfile, poderiamos usar os bancos "development, staging ou production"
const connection = knex(configuration.development);

module.exports = connection; //Exportando o modulo de conexao com o banco para ser utilizado nos arquivos de "Controllers".