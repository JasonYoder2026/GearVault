<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$env = parse_ini_file('../.env');

$host = $env['DB_HOST'];
$port = $env['DB_PORT'];
$db = $env['POSTGRES_DB'];
$user = $env['POSTGRES_USER'];
$pass = $env["POSTGRES_PASSWORD"];


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