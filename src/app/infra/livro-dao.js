class LivroDao {

    constructor(db) {
        this._db = db;
    }

    /*Faz a seleção dos dados no banco de dados; 
    O parametro que se recebe é uma função de callback
    */
    lista(callback) {
        this._db.all(
            'SELECT * FROM livros', 
            function(erro, resultados) {
                callback(erro, resultados);
            }
        )
    }
}

module.exports = LivroDao;