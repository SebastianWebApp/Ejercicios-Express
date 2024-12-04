import http from "node:http";
const Servidor = http.createServer((req, res) => {

    res.end("hola");

})

Servidor.listen(8080);