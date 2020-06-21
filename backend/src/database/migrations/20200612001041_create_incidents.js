//Metodo UP é utilizado para realizar a execução dos comandos para criar uma tabela no banco de dados de acordo com os valores especificados.
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table){
        table.increments();

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.string('value').notNullable();

        table.string('ong_id').notNullable();
        table.foreign('ong_id').references('id').inTable('ongs');
    });
};

//O metodo DOWN será executado caso o metodo UP de erro, ou seja, caso ocorra algum erro na criação da tabela, ele ira dropa-la.
exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};

//Para executar o codigo, deve-se rodar no terminal o comando: npx migrate:latest
//Para realizar um Rollback o comando é npx knex migrate:rollback