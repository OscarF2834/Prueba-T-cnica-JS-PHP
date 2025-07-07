<?php
require 'db.php';
$data = json_decode(file_get_contents("php://input"));
$stmt = $pdo->prepare("INSERT INTO tareas (titulo) VALUES (?)");
$stmt->execute([$data->titulo]);
?>
