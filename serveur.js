const http = require('http');

const app=require('./app');
const numeroPort = 3004;

app.set('port', numeroPort);
const server = http.createServer(app);

server.listen(numeroPort, () => {
    console.log("le sereveur de May Gourmet est à l'écoute sur le port " + numeroPort);
});