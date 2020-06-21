//Metodo UP é utilizado para realizar a execução dos comandos para criar uma tabela no banco de dados de acordo com os valores especificados.
exports.up = function(knex) {
    return knex.schema.createTable('ongs', function(table){
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
    });
};

//O metodo DOWN será executado caso o metodo UP de erro, ou seja, caso ocorra algum erro na criação da tabela, ele ira dropa-la.
exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};

//Para executar o codigo, deve-se rodar no terminal o comando: npx knex migrate:latest   