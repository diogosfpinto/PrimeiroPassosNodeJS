class LivroDao {

    constructor(db) {
        this._db = db;
    }

    /*Faz a seleção dos dados no banco de dados; 
    O parametro que se recebe é uma função de callback
    */
    lista() {
        return new Promise((resolve, reject) => {
            this._db.all(
                'SELECT * FROM livros', 
                function(erro, resultados) {
                    if (erro) return reject('Não foi possível listar os livros!');

                    return resolve(resultados);
                }
            )
        })
        
    }
}

module.exports = LivroDao;