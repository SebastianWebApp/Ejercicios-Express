import http from "node:http";
const Servidor = http.createServer((req, res) => {

    res.end("Como estas");

})

Servidor.listen(8080);