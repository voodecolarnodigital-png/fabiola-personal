<?php
// Este arquivo foi gerado para garantir compatibilidade com a Hostinger
// caso o seu servidor prÃ©-selecione arquivos .php ao invÃ©s de .html.

// Ele carrega o seu site React normalmente.
if (file_exists('index.html')) {
    echo file_get_contents('index.html');
} else {
    echo "<h1>Erro: index.html nÃ£o encontrado.</h1>";
    echo "<p>Certifique-se de que vocÃª enviou os arquivos compilados (da pasta <strong>dist</strong>) para a Hostinger, e nÃ£o os arquivos inteiros do cÃ³digo-fonte.</p>";
}
?>
