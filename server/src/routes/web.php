<?php

use Controllers\ProductController;

switch ("$method $uri") {
    case 'GET /':
        ProductController::index();
        break;
    case 'GET /featured':
        ProductController::featured();
        break;
    case 'GET /products/view':
        ProductController::view($_GET['id'] ?? null);
        break;
    case 'GET /products/search':
        ProductController::search($_GET['q'] ?? '');
        break;
    default:
        header("HTTP/1.1 404 Not Found");
        echo json_encode(['error' => 'Route not found']);
        break;
}