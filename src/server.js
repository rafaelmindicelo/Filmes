const express = require("express"); //biblioteca para criar servidor
const app = express(); //executando a função do express
const path = require("path");
const routes = require("./routes");

//habilitar arquivos estáticos -> o express irá olhar todos os arquivos da pasta public
app.use(express.static("public"));

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

app.use(routes);

app.listen(8080, () => console.log("running :D -> port 8080"));
