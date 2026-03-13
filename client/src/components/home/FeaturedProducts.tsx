import ProductCard from "./../ProductCard";
import type { Product } from "../../models/Product";
import './FeaturedProducts.css';
import { useEffect, useState, useRef } from "react";
import { apiFetch } from "../../api/client";
import { ArrowLeft, ArrowRight } from 'lucide-react';


function FeaturedProducts() {

  const [products, setProducts] = useState<Product[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function loadProducts() {
      const data = await apiFetch("/featured");
      setProducts(data);
    }

    loadProducts();
  }, []);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="featured-wrapper">
      <button className="scroll-btn left" onClick={scrollLeft}>
        <ArrowLeft size={24} />
      </button>

      <div className="product-row" ref={scrollRef}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <button className="scroll-btn right" onClick={scrollRight}>
        <ArrowRight size={24} />
      </button>
    </div>
  );
}

export default FeaturedProducts;