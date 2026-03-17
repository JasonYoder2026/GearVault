<?php
namespace Models;

use PDO;

class Product {
    private static $db;

    public static function init($pdo) {
        self::$db = $pdo;
    }

    public static function all() {
        $stmt = self::$db->query("SELECT * FROM products_view");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public static function getFeatured() {
        $stmt = self::$db->query("SELECT * FROM products WHERE is_featured = true ORDER BY RANDOM() LIMIT 15");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public static function find($id) {
        $stmt = self::$db->prepare("SELECT * FROM products_view WHERE id = :id");
        $stmt->execute(['id' => $id]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public static function getByFilters($category = null, $minPrice = null, $maxPrice = null) {
        $query = "SELECT * FROM products_view WHERE 1=1";
        $params = [];

        if ($category) {
            $query .= " AND category ILIKE :category";
            $params['category'] = "%$category%";
        }

        if ($minPrice !== null) {
            $query .= " AND price >= :minPrice";
            $params['minPrice'] = $minPrice;
        }

        if ($maxPrice !== null) {
            $query .= " AND price <= :maxPrice";
            $params['maxPrice'] = $maxPrice;
        }

        $stmt = self::$db->prepare($query);
        $stmt->execute($params);

        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public static function searchByNameOrDescription($q) {
        $stmt = self::$db->prepare("SELECT * FROM products_view WHERE name ILIKE :q OR description ILIKE :q");
        $stmt->execute(['q' => "%$q%"]);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}