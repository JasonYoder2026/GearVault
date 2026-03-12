import type { Product } from '../models/Product';

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
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;