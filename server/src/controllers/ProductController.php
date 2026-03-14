<?php
namespace Controllers;

use Models\Product;
use Services\ProductService;

class ProductController {
    public static function index() {
        $products = ProductService::getAll();
        echo json_encode($products);
    }

    public static function featured() {
        $featured = ProductService::getFeatured();
        echo json_encode($featured);
    }

    public static function view($id) {
        if (!$id) {
            http_response_code(400);
            echo json_encode(['error' => 'Product ID required']);
            return;
        }
        $product = ProductService::getById($id);
        echo json_encode($product);
    }

    public static function products($params) {
        $category = $params['category'] ?? null;
        if ($category) {
            $products = ProductService::getByCategory($category);
        } else {
            $products = ProductService::getAll();
        }
        echo json_encode($products);
    }

    public static function search($query) {
        $results = ProductService::search($query);
        echo json_encode($results);
    }
}