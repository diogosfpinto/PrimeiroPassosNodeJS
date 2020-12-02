class LivroDao {

    constructor(db) {
        this._db = db;
    }

    buscarPorId(id) {
        return new Promise((resolve, reject) => {
            this._db.get(
                'SELECT * FROM livros WHERE id = ?',
                [id],
                function(erro, resultado){
                    if (erro) return reject('Não foi possível buscar o livro desejado!');

                    return resolve(resultado);
                }
            )
        });
    }

    atualiza(livro) {
        return new Promise((resolve, reject) => {
            this._db.run(`
                UPDATE livros SET 
                titulo = ?,
                preco = ?,
                descricao = ?
                WHERE id = ?
            `,
            [
                livro.titulo,
                livro.preco,
                livro.descricao,
                livro.id
            ],
            function(erro) {
                if (erro) return reject('Não foi possível atualizar o livro selecionado.');

                return resolve();
            });
        });
    }

    remove(id) {
        return new Promise((resolve, reject) => {
            this._db.run("DELETE FROM livros WHERE id = ?",
            [id],
            function(erro){
                if (erro) return reject('Não foi possível remover o livro selecionado');

                return resolve();
            })
        })
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