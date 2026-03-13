<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

require_once __DIR__ . '/vendor/autoload.php';
//require_once __DIR__ . '/config/app.php';
require_once __DIR__ . '/config/database.php';

use Controllers\ProductController;

// Get the request info
$method = $_SERVER['REQUEST_METHOD'];
$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

require_once __DIR__ . '/src/routes/web.php';