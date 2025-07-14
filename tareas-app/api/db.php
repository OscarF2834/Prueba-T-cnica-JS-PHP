<?php
$pdo = new PDO('mysql:host=127.0.0.1;dbname=tareas', 'root', 'admin');
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
?>
