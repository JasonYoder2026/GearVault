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

    public static function getByFilters($category = null, $minPrice = null, $maxPrice = null) {
        return Product::getByFilters($category, $minPrice, $maxPrice);
    }
}