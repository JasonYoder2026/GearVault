<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$host = getenv("DB_HOST");
$port = getenv("DB_PORT");
$db = getenv("POSTGRES_DB");
$user = getenv("POSTGRES_USER");
$pass = getenv("POSTGRES_PASSWORD");

$pdo = new PDO(
    "pgsql:host=$host;port=$port;dbname=$db",
    $user,
    $pass
);

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    $stmt = $pdo->query("SELECT NOW()");
    $result = $stmt->fetch();

    echo json_encode([
        "message" => "API working",
        "time" => $result[0]
    ]);
} else {
    http_response_code(405);
    echo json_encode(['error' => 'Method Not Allowed']);
}