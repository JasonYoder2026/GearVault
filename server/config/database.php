<?php
$env = parse_ini_file('../.env');

$host = $env['DB_HOST'];
$port = $env['DB_PORT'];
$db = $env['POSTGRES_DB'];
$user = $env['POSTGRES_USER'];
$pass = $env["POSTGRES_PASSWORD"];



try {
    $pdo = new PDO(
        "pgsql:host=$host;port=$port;dbname=$db",
        $user,
        $pass
    );
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    \Models\Product::init($pdo);
} catch (PDOException $e) {
    die("DB Connection failed: " . $e->getMessage());
}