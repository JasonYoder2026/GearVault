import ProductCard from "./../ProductCard";
import type { Product } from "../../models/Product";
import './FeaturedProducts.css';
import { useEffect, useState, useRef, useCallback } from "react";
import { apiFetch } from "../../api/client";
import { ArrowLeft, ArrowRight } from 'lucide-react';

function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await apiFetch("/featured");
        setProducts(data);
      } catch (error) {
        console.error("Error fetching featured products:", error);
      }
    }
    loadProducts();
  }, []);

  const startAutoScroll = useCallback(() => {
    intervalRef.current = setInterval(() => {
      const el = scrollRef.current;
      if (!el) return;

      const halfway = el.scrollWidth / 2;

      if (el.scrollLeft >= halfway) {
        el.scrollTo({ left: 0, behavior: 'instant' });
      } else {
        el.scrollBy({ left: 300, behavior: 'smooth' });
      }
    }, 3000);
  }, []);

  const stopAutoScroll = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, [startAutoScroll, stopAutoScroll]);

  const scrollLeft = () => {
    stopAutoScroll();
    const el = scrollRef.current;
    if (!el) return;
    if (el.scrollLeft === 0) {
      el.scrollTo({ left: el.scrollWidth / 2, behavior: 'instant' });
    }
    el.scrollBy({ left: -300, behavior: 'smooth' });
    startAutoScroll();
  };

  const scrollRight = () => {
    stopAutoScroll();
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: 300, behavior: 'smooth' });
    startAutoScroll();
  };



  return (
    <div
      className="featured-wrapper"
      onMouseEnter={stopAutoScroll}
      onMouseLeave={startAutoScroll}
      onTouchStart={stopAutoScroll}
      onTouchEnd={startAutoScroll}
    >
      <button className="scroll-btn left" onClick={scrollLeft}>
        <ArrowLeft size={36} strokeWidth={3} />
      </button>

      <div className="product-row" ref={scrollRef}>
        {[...products, ...products].map((product, index) => (
          <ProductCard key={`${product.id}-${index}`} product={product} />
        ))}
      </div>

      <button className="scroll-btn right" onClick={scrollRight}>
        <ArrowRight size={36} strokeWidth={3} />
      </button>
    </div>
  );
}

export default FeaturedProducts;