const express = require("express"); //biblioteca para criar servidor
const app = express(); //executando a função do express
const path = require("path");
const routes = require("./routes");

//setando o express para renderizar as páginas com ejs (template engine)
app.set("view engine", "ejs");

//habilitar arquivos estáticos -> o express irá olhar todos os arquivos da pasta public
app.use(express.static("public"));

// permite a utilização do corpo da requisição (req.body)
app.use(express.urlencoded({ extended: true }))

//configurar o caminho da pasta views para o motor renderizar os arquivos ejs
app.set("views", path.join(__dirname, "views"));

app.use(routes);

app.listen(8080, () => console.log("running :D -> port 8080"));
