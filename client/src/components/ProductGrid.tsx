import ProductCard from "./ProductCard";
import type { Product } from "../models/Product";
import './ProductGrid.css';
import { useEffect, useState } from "react";
import { apiFetch } from "../api/client";



function ProductGrid() {

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts() {
      const data = await apiFetch("/");
      setProducts(data.products);
    }

    loadProducts();
  }, []);

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductGrid;