<?php
require 'db.php';
$data = json_decode(file_get_contents("php://input"));
$stmt = $pdo->prepare("DELETE FROM tareas WHERE id = ?");
$stmt->execute([$data->id]);
?>
