// importar a dependência do SQlite

const sqlite3 = require("sqlite3").verbose() //retorna um objeto para colocar dentro //verbose- ajuda a ver mensagem 

// criar o objeto de banco de dados que irá fazer operações no banco de dados

const db = new sqlite3.Database("./src/database/database.db") //new inicia em uma classe consegue iniciar um objeto

module.exports = db

//utilizar o objeto de banco de dados para as operações

//db.serialize( () => {

    //criar uma tabela

    //db.run(`
        //CREATE TABLE IF NOT EXISTS places (
            //id INTEGER PRIMARY KEY AUTOINCREMENT,
            //image TEXT, 
            //name TEXT,
            //address TEXT,
           //address2 TEXT,
            //state TEXT,
            //city TEXT,
            //items TEXT
        //);

    //`)


    //inserir dados na tabela
    //const query = `
        //INSERT INTO places (
            //image, 
            //name,
            //address,
            //address2,
            //state,
            //city,
            //items
        //) VALUES (
            //?,?,?,?,?,?,?);
    //`
    //const values =  [
        //"https://images.unsplash.com/photo-1518792528501-352f829886dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        //"Colectoria",
        //"Guilherme Gemballa, Jardim América",
        //"N° 260",
        //"Santa Catarina",
        //"Rio Grande do Sul",
        //"Resíduos Eletrônicos, Lâmpadas"
    //]

    //function afterInsertData(err){
        //if(err){
            //return console.log(err)
        //}

        //console.log("Cadastrado com sucesso")
        //console.log(this)
    //}
    //db.run(query, values, afterInsertData)

    
    //consultar dados da tabela
    //db.all(` SELECT * FROM places`, function(err, rows){
        //if(err){
            //return console.log(err)
       // }

        //console.log("Aqui estão os registros: ",[24])
        //console.log(rows)
    ///})


    //deletar um dado da tabela

    //db.run(`DELETE FROM places WHERE id = ?`, [16], function(err){
       //if(err){
             //return console.log(err)
      //}
        //console.log("Registro deletado com sucesso")
      
    //})
//})    //serialize - roda uma sequência de códigos