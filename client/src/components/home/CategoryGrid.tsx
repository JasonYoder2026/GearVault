import "./CategoryGrid.css";

const categories = ["Pedals", "Electric Guitars", "Acoustic Guitars", "Amps", "Bass Guitars", "Accessories"];

export default function CategoryGrid() {
  
  return (
    <div className="category-grid">
      {categories.map((category) => (
        <div key={category} className="category-card">
          <h3>{category}</h3>
        </div>
      ))}
    </div>
  );
}