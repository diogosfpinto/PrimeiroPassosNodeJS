const LivroDao = require('../infra/livro-dao');
const db = require('../../config/database');

//exportando uma função que recebe um parâmetro.
module.exports = (app) => {
    app.get('/', function(req, resp){
        resp.send(
            `<!DOCTYPE html>
                <html lang="pt-br">
                    <head>
                        <title>Casa do Código</title>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width"> 
                    </head>
                
                    <body>    
                        <h1>Olá mundo!</h1>
                    </body>
                </html>`
        );
    });
    
    app.get('/livros', function(req, resp){

        

        const livroDao = new LivroDao(db);
        //consulta de listagem no banco de dados com promises pois é uma função assincrona 
        livroDao.lista()
                .then(livros => resp.marko(
                    require('../views/livros/lista/lista.marko'),
                    {
                        livros: livros
                    }
                ))
                .catch(erro => console.log(erro));
    });

    //Acessando a página de formulário para adicionar um item
    app.get('/livros/form', function(req, resp){
        resp.marko(require('../views/livros/form/form.marko'), { livro: {} })
    });

    //rota utilizando post para enviar ao servidor os dados da adição de um novo item
    app.post('/livros', function(req, resp){
        const livroDao = new LivroDao(db);
        livroDao.adiciona(req.body)
                .then(resp.redirect('/livros'))
                .catch(erro => console.log(erro));
    });

    app.put('/livros', function(req, resp){
        const livroDao = new LivroDao(db);
        livroDao.atualiza(req.body)
                .then(resp.redirect('/livros'))
                .catch(erro => console.log(erro));
    });


    app.delete('/livros/:id', function(req, resp){
        const id = req.params.id;

        const livroDao = new LivroDao(db);
        livroDao.remove(id)
                .then(() => resp.status(200).end())
                .catch(erro => console.log(erro));
    });

    app.get('/livros/form/:id', function(req, resp) {
        const id = req.params.id;
        const livroDao = new LivroDao(db);
    
        livroDao.buscaPorId(id)
            .then(livro => 
                resp.marko(
                    require('../views/livros/form/form.marko'),
                    { livro: livro }
                )
            )
            .catch(erro => console.log(erro));
    
    });
}
