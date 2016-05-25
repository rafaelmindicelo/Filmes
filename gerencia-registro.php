<!DOCTYPE html>
<html>
    <head>
        <title>Cadastro de Filme</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="_css/estilo.css"/>
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
                    <li><a href="filmes.html">Filmes</a></li>
                    <li><a href="cadastroFilme.php">Cadastro</a></li>
                    <li><a href="contato.html">Contato</a></li>
                </ul>
            </nav>
            
            <div id="corpo">
            
     <?php
     $servidor = 'localhost';
	 $usuario = 'root';
	 $senha = '';
	 $banco = 'CASA';

$link = mysql_connect($servidor, $usuario, $senha) or die('N�o foi poss�vel conectar: '.mysql_error());

$select = mysql_select_db($banco);

if($_REQUEST["acao"] == "adicionar")
{
	$sql = "INSERT INTO FILME (CD_FILME, DC_FILME, ANO_LANC, DC_GENERO, TEMPO_DUR) VALUES (";
	$sql .="'".$_REQUEST["tCod"]."', ";
	$sql .="'".$_REQUEST["tTitulo"]."', ";
	$sql .="'".$_REQUEST["tAno"]."', ";
	$sql .="'".$_REQUEST["tGenero"]."', ";
	$sql .="'".$_REQUEST["tTempo"]."'";
	$sql .=")";

$result = mysql_query($sql);

if(!$result)
{ die('Erro: '.mysql_error()); }

else
{ echo 'A operação foi realizada com sucesso.'; }
}
?>

<BR><A href="cadastroFilme.php">Clique aqui para inserir um novo registro.</A>
<BR><A href="filmes.php">Clique aqui para visualizar os filmes cadastrados.</A>
            </div>
            
            
            <footer id="rodape">

                <br/>Copyright &copy; 2016 - by Rafael Mindicelo <br/>
                <a href="http://facebook.com/rafaelmindicelo" target="_blank">facebook</a> | 
                <a href="http://instagram.com/rafaelmindicelo" target="_blank">instagram</a><br/><br/>
            </footer>
        </div>
    </body>
</html>


