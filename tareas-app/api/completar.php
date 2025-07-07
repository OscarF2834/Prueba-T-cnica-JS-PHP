/* actualizar tareas mediante el id */

<?php
require 'db.php';
$data = json_decode(file_get_contents("php://input"));
$stmt = $pdo->prepare("UPDATE tareas SET completado = NOT completado WHERE id = ?");
$stmt->execute([$data->id]);
?>
