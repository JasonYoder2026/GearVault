<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    $data = [
        ['id' => 1, 'name' => 'Item 1'],
        ['id' => 2, 'name' => 'Item 2'],
        ['id' => 3, 'name' => 'Item 3'],
    ];
    echo json_encode($data);
} else {
    http_response_code(405);
    echo json_encode(['error' => 'Method Not Allowed']);
}