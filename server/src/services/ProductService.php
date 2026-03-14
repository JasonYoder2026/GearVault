<?php
namespace Services;

use Models\Product;

class ProductService {
    public static function getAll() {
        return Product::all();
    }

    public static function getById($id) {
        return Product::find($id);
    }

    public static function search($q) {
        return Product::searchByNameOrDescription($q);
    }

    public static function getFeatured() {
        return Product::getFeatured();
    }

    public static function getByCategory($category) {
        return Product::getByCategory($category);
    }
}