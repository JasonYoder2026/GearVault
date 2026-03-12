<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$pdo = new PDO(
    "pgsql:host=postgres;port=5432;dbname=gearvault",
    "gearvault_dev",
    "gearvault_dev"
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