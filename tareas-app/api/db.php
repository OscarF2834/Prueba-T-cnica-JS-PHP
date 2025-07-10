<?php
$pdo = new PDO('mysql:host=localhost;dbname=tareas', 'root', 'admin');
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
?>
