class LivroDao {

    constructor(db) {
        this._db = db;
    }

    adiciona(livro) {
        return new Promise((resolve, reject) => {
            this._db.run(`
            INSERT INTO LIVROS (
                    titulo,
                    preco,
                    descricao
                ) values (?, ?, ?)
            `, 
            [
                livro.titulo,
                livro.preco,
                livro.descricao
            ],
            function(erro) {
                if (erro) return reject('Não foi possível listar os livros!');

                resolve();
            }
            )
        })
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