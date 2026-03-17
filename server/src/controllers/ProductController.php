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

    public static function products($category, $minPrice, $maxPrice, $sort) {

        // normalize category
        if ($category) {
            $category = str_replace('-', ' ', $category);
        }

        // convert prices safely
        $minPrice = is_numeric($minPrice) ? (float)$minPrice : null;
        $maxPrice = is_numeric($maxPrice) ? (float)$maxPrice : null;

        $products = Product::getByFilters($category, $minPrice, $maxPrice);

        echo json_encode($products);
    }

    public static function search($query) {
        $results = ProductService::search($query);
        echo json_encode($results);
    }
}