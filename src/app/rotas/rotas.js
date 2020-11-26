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
        resp.marko(
            require('../views/livros/lista/lista.marko')
        );
    });
}
