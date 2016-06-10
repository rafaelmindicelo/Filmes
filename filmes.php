<!DOCTYPE html>
<html>
    <head>
        <title>Contato</title>
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
                    <li><a href="filmes.php">Filmes</a></li>
                    <li><a href="cadastroFilme.php">Cadastro</a></li>
                    <li><a href="contato.html">Contato</a></li>
                </ul>
            </nav>
            
            <?php 
            $servidor = 'localhost';
            $usuario = 'root';
            $senha = '';
            $banco = 'CASA';
            
            #conexão com o mysql
            $mysqli = new mysqli($servidor, $usuario, $senha, $banco)
            or die('Não foi possível conectar: ' .mysqli_erro($mysqli));
            
            #seleciona o bd que será utilizado
            $select = mysqli_select_db($mysqli, $banco);
            
                   
            $sql = "SELECT * FROM filme";
            
                       
            ?>
            
            
            <div id="corpo">
            <table id="tabela" border="1">
            <tr>
            <td>Código</td>
            <td>Título</td>
            <td>Ano</td>
            <td>Gênero</td>
            <td>Tempo</td>
            </tr>
            
            <?php 
            
            $result = mysqli_query($mysqli, $sql);
            while($tbl = mysqli_fetch_array($result)) 
            
            {
            	echo "<tr>";
            	
            	if (isset($_POST['CD_FILME']))
            	{
            	$cdfilme = $tbl["CD_FILME"];
            	echo "<td>$cdfilme</td>";
            	}
            	
            	if (isset($_POST['DC_FILME']))
            	{
            	$dcfilme = $tbl["DC_FILME"];
            	echo "<td>$dcfilme</td>";
            	}
            	
            	if (isset($_POST['ANO_LANC']))
            	{
            	$anolanc = $tbl["ANO_LANC"];
            	echo "<td>$anolanc</td>";
            	}
            	
            	if (isset($_POST['DC_GENERO']))
            	{
            	$dcgenero = $tbl["DC_GENERO"];
            	echo "<td>$dcgenero</td>";
            	}
            	
            	if (isset($_POST['TEMPO_DUR']))
            	{
            	$tempodur = $tbl["TEMPO_DUR"];
            	echo "<td>$tempodur</td>";
            	}
            	          	    	
            	echo "</tr>";
            }
            /*$areia = array();
            $areia[] = array ('cd_filme'=>$tbl['cdfilme'], 'dcfilme'=>$tbl['dcfilme'], 'anolanc'=>$tbl['anolanc'], 'dcgenero'=>$tbl['dcgenero'],  'tempodur'=>$tbl['tempodur']);
            		return $areia;
 			*/
            ?>              
            </table>
            <BR><a href="cadastroFilme.php">Clique aqui para cadastrar um novo filme.</a>
            </div>
            
            <footer id="rodape">

                <br/>Copyright &copy; 2016 - by Rafael Mindicelo <br/>
                <a href="http://facebook.com/rafaelmindicelo" target="_blank">facebook</a> | 
                <a href="http://instagram.com/rafaelmindicelo" target="_blank">instagram</a><br/><br/>
            </footer>
        </div>
    </body>
</html>