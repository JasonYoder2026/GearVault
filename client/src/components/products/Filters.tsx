import { useState } from "react";

type Props = {
  onFilterChange: (filters: any) => void;
};

function Filters({ onFilterChange }: Props) {
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  function applyFilters() {
    onFilterChange({
      category,
      minPrice,
      maxPrice,
    });
  }

  return (
    <div className="filters-container">
      <h3>Filters</h3>

      <div>
        <label>Category</label>
        <select onChange={(e) => setCategory(e.target.value)}>
          <option value="">All</option>
          <option value="pedals">Pedals</option>
          <option value="electric-guitars">Electric Guitars</option>
          <option value="acoustic-guitars">Acoustic Guitars</option>
          <option value="amps">Amps</option>
          <option value="bass-guitars">Basses</option>
          <option value="accessories">Accessories</option>
        </select>
      </div>

      <div>
        <label>Min Price</label>
        <input type="number" onChange={(e) => setMinPrice(e.target.value)} />
      </div>

      <div>
        <label>Max Price</label>
        <input type="number" onChange={(e) => setMaxPrice(e.target.value)} />
      </div>

      <button onClick={applyFilters}>Apply</button>
    </div>
  );
}

export default Filters;