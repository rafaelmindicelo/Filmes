# Filmes

Projeto simples, criado com o intuito de aplicar os conhecimentos adquiridos nos cursos de Desenvolvimento WEB (Front e Back End)

Obs.: Anteriormente, o projeto foi desenvolvido em PHP e estava sem uso há anos. Tive a ideia de reutilizá-lo, dessa vez mudando as tecnologias e trabalhando com o conceito de MVC.

# Tecnologias Utilizadas

- HTML5
- CSS3
- BootStrap 4.6
- EJS
- JavaScript
- NodeJS

# Dependências

- Express
- EJS
- SQLITE
- SQLITE3
- NODEMON

# Clonando o Projeto

- No terminal, digitar: git clone https://github.com/rafaelmindicelo/Filmes.git
- Em seguida, entre no diretório: cd Filmes

# Como rodar o projeto

- No terminal, navegue até a raiz do projeto clonado e digite: npm install <br>
// esse comando irá instalar todas as dependências necessárias para rodar o projeto

- Em seguida, digitar: npm init-db <br>
// esse comando irá rodar o script que cria o Banco de Dados (tabelas: genres; movies;  e insere alguns registros como exemplo)

- Em seguida, digitar: npm run dev <br>
// esse comando irá iniciar o servidor

- Abra um navegador e digite o endereço: localhost:8080 <br>
// caso a porta 8080 esteja ocupada em sua máquina, altere a linha 20 do arquivo server.js - (app.listen) - mudando a porta 8080 para uma que esteja disponível


