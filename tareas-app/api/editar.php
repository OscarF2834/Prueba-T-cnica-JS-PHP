<?php
require 'db.php';
$data = json_decode(file_get_contents("php://input"));
$stmt = $pdo->prepare("UPDATE tareas SET titulo = ? WHERE id = ?");
$stmt->execute([$data->titulo, $data->id]);
?>
