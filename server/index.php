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
$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

if ($method === 'GET' && $path === '/') {
    $stmt = $pdo->query("SELECT * FROM products_view");
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode([
        "products" => $result
    ]);

} else {
    http_response_code(405);
    echo json_encode(['error' => 'Method Not Allowed']);
}