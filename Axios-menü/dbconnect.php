<?php
//header("Access-Control-Allow-Origin: http://localhost:5173");
//header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
//header("Access-Control-Allow-Headers: Content-Type, Authorization");
//header("Access-Control-Allow-Origin: *");
$host = "localhost";
$db = "hajok";
$user = "root";
$pass = "";
try {
 $pdo = new PDO("mysql:host=$host;dbname=$db;charset=UTF8",$user,$pass,
 [PDO::ATTR_ERRMODE =>
PDO::ERRMODE_EXCEPTION,PDO::ATTR_DEFAULT_FETCH_MODE =>
PDO::FETCH_ASSOC]);
} catch (PDOException $e) {
 die("Database connection failed");
}

?>