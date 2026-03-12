function ProductCard({ product }: any) {
  return (
    <div style={{ border: "1px solid #ddd", padding: "1rem", width: "200px" }}>
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button>View</button>
    </div>
  );
}

export default ProductCard;