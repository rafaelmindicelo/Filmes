<!DOCTYPE html>
<html>
    <head>
        <title>Cadastro de Filme</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="_css/estilo-cadastro.css"/>
    </head>
    <body>
        <div id="interface">
            <div id="logo">
                Mindicelo's Films
            </div>
            <figure id="img-logo">
                <img src="_imagens/logo.jpg"/>
            </figure>
            <nav id="menu">
                <ul id="menu">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="filmes.php">Filmes</a></li>
                    <li><a href="cadastroFilme.php">Cadastro</a></li>
                    <li><a href="contato.html">Contato</a></li>
                </ul>
            </nav>
            
            <div id="corpo">
            
            <form method="POST" action="gerencia-registro.php">
            <fieldset>
            <legend id="filme">Informações do Filme</legend>
            <p><input type="number" name="tCod" id="cCod" hidden="cCod" min="1" max="1000" size="4" readonly="readonly" /></p>
            <p><label for="cTitulo">Título: </label><input type="text" name="tTitulo" id="cTitulo" maxlength="30" size="30" autofocus="autofocus" /> </p>
            <p><label for="cAno">Ano lançamento: </label><input type="number" name="tAno" id="cAno" min="1900" max="9999" size="4" /> </p>
            <p><label for="cTempo">Tempo Duração: </label><input type="time" name="tTempo" id="cTempo" /></p>
            <p><label for="cGenero">Gênero: </label><select name="tGenero" id="cGenero">
            	<option value="Selecione">Selecione..</option>
            	<option value="Violencia">Violência</option>
            	<option value="Terror">Terror</option>
            	<option value="Comedia">Comédia</option>
            	<option value="ComediaRomantica">Comédia Romântica</option>
            	<option value="Romance">Romance</option>
            	<option value="Acao">Ação</option>
            	<option value="Desenho">Desenho</option>
            	<option value="Aventura">Aventura</option>
            	<option value="Drama">Drama</option>
            	<option value="Suspense">Suspense</option>
            	
            
            </select> </p>
            
            <p><input type="submit" name="btCadastrar" value="Cadastrar" />
            <input type="reset" value="Limpar" /></p>
            </form>
            </fieldset>
            </div>
            
            
            <footer id="rodape">

                <br/>Copyright &copy; 2016 - by Rafael Mindicelo <br/>
                <a href="http://facebook.com/rafaelmindicelo" target="_blank">facebook</a> | 
                <a href="http://instagram.com/rafaelmindicelo" target="_blank">instagram</a><br/><br/>
            </footer>
        </div>
    </body>
</html>
