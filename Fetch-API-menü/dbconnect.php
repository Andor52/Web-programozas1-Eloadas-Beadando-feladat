<?php
$host = "localhost";
$db = "akyy5z";
$user = "akyy5z";
$pass = "MA_Solar01!";
try {
 $pdo = new PDO("mysql:host=$host;dbname=$db;charset=UTF8",$user,$pass,
 [PDO::ATTR_ERRMODE =>
PDO::ERRMODE_EXCEPTION,PDO::ATTR_DEFAULT_FETCH_MODE =>
PDO::FETCH_ASSOC]);
} catch (PDOException $e) {
 die("Database connection failed");
}

?>