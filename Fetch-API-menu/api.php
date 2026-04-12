<?php
require "dbconnect.php";

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {

    case "GET":
        try {
        $stmt = $pdo->query("SELECT * FROM tulajdonos");
        $readData=$stmt->fetchAll();
        echo json_encode(['status' => 'Beolvasás sikeres!', "readData"=>$readData]);
        }
        catch(PDOException $e) {
        echo json_encode(['status' => 'Beolvasási hiba!']);
        }
        break;

    case "POST":
        try {
        $data = json_decode(file_get_contents("php://input"), true);
        $stmt = $pdo->prepare("INSERT INTO tulajdonos (nev, varos) VALUES (?, ?)");
        $stmt->execute([$data['nev'], $data['varos']]);
        echo json_encode(['status' => 'Létrehozás sikeres!']);
        }
        catch(PDOException $e) {
        echo json_encode(['status' => 'Létrehozási hiba!']);
        }
        break;

    case "PUT":
        try {
        $data = json_decode(file_get_contents("php://input"), true);
        $stmt = $pdo->prepare("UPDATE tulajdonos SET nev=?, varos=? WHERE az=?");
        $stmt->execute([$data['nev'], $data['varos'], $data['az']]);
        echo json_encode(['status' => 'Módosítás sikeres!']);
        }
        catch(PDOException $e) {
        echo json_encode(['status' => 'Módosítási hiba!']);
        }
        break;

    case "DELETE":
        try {
        $data = json_decode(file_get_contents("php://input"), true);
        $stmt = $pdo->prepare("DELETE FROM tulajdonos WHERE az=?");
        $stmt->execute([$data['az']]);
        echo json_encode(['status' => 'Törlés sikeres!']);
        }
        catch(PDOException $e) {
        echo json_encode(['status' => 'Törlési hiba!']);
        }       
        break;
}