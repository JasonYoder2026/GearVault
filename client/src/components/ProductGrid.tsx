import ProductCard from "./ProductCard";

const mockProducts = [
  { id: 1, name: "Tube Screamer", price: 99 },
  { id: 2, name: "Fender Stratocaster", price: 899 },
  { id: 3, name: "Boss DS-1", price: 59 },
];

function ProductGrid() {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {mockProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductGrid;