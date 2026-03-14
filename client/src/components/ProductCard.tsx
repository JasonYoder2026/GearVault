import type { Product } from '../models/Product';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps ) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>${product.price}</p>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;