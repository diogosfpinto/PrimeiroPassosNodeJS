const http = require('http');

const servidor = http.createServer(function (req, resp){

    let html = '';
    if (req.url == '/'){
        html = `<!DOCTYPE html>
            <html lang="pt-br">
                <head>
                    <title>Casa do Código</title>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width"> 
                </head>
            
                <body>    
                    <h1>Olá mundo!</h1>
                </body>
            </html>`;
        resp.end(html);
    } else if (req.url == '/livros') {
        html = `<!DOCTYPE html>
        <html lang="pt-br">
            <head>
                <title>Casa do Código</title>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width"> 
            </head>
        
            <body>    
                <h1>Listagem de livros</h1>
            </body>
        </html>`;
        resp.end(html);
    }
    
});
servidor.listen(3000);