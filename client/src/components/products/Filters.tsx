type Props = {
  filters: {
    category: string;
    minPrice: number | "";
    maxPrice: number | "";
  };
  onFilterChange: (filters: any) => void;
};

function Filters({ filters, onFilterChange }: Props) {

  function updateField(field: string, value: any) {
    onFilterChange({
      ...filters,
      [field]: value,
    });
  }

  return (
    <div className="filters-container">
      <h3>Filters</h3>

      <div>
        <label>Category</label>
        <select
          value={filters.category}
          onChange={(e) => updateField("category", e.target.value)}
        >
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
        <input
          type="number"
          value={filters.minPrice}
          onChange={(e) => {
            const value = e.target.value;
            updateField("minPrice", value === "" ? "" : Number(value));
          }}
        />
      </div>

      <div>
        <label>Max Price</label>
        <input
          type="number"
          value={filters.maxPrice}
          onChange={(e) => {
            const value = e.target.value;
            updateField("maxPrice", value === "" ? "" : Number(value));
          }}
        />
      </div>
    </div>
  );
}

export default Filters;