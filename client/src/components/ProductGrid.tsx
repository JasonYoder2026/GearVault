import ProductCard from "./ProductCard";
import type { Product } from "../models/Product";
import './ProductGrid.css';

const mockProducts: Product[] = [
  { id: 1, name: "Tube Screamer", price: 99, image: "https://placehold.co/300x200?text=Tube+Screamer" },
  { id: 2, name: "Fender Stratocaster", price: 899, image: "https://placehold.co/300x200?text=Stratocaster" },
  { id: 3, name: "Boss DS-1", price: 59, image: "https://placehold.co/300x200?text=Boss+DS-1" },
];

function ProductGrid() {
  return (
    <div className="product-grid">
      {mockProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductGrid;