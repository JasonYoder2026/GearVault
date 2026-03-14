import ProductCard from "../ProductCard";
import type { Product } from "../../models/Product";
import './ProductsBody.css';
import { useEffect, useState} from "react";
import { apiFetch } from "../../api/client";
import { useSearchParams } from "react-router-dom";

function ProductsBody() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  useEffect(() => {
    async function loadProducts() {
      try {
        if (category) {
          const data = await apiFetch(`/products?category=${category}`);
          setProducts(data);
          return;
        }
        const data = await apiFetch("/products");
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    loadProducts();
  }, []);

  return (
    <div className="products-body">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductsBody;