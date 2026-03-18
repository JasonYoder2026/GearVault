import ProductCard from "../ProductCard";
import type { Product } from "../../models/Product";
import './ProductsBody.css';
import { useEffect, useState} from "react";
import { apiFetch } from "../../api/client";

type Props = {
  filters: {
    category: string;
    minPrice: number | "";
    maxPrice: number | "";
  };
};

function ProductsBody({filters}: Props) {
  const [products, setProducts] = useState<Product[]>([]);
  const [sort, setSort] = useState("");

  useEffect(() => {
    async function loadProducts() {
      try {
        let query = "/products?";
        const params = [];

        if (filters.category) {
          const formattedCategory = filters.category.replace(/-/g, " ");
          params.push(`category=${formattedCategory}`);
        }

        if (filters.minPrice !== "" && filters.minPrice !== null) {
          params.push(`minPrice=${filters.minPrice}`);
        }

        if (filters.maxPrice !== "" && filters.maxPrice !== null) {
          params.push(`maxPrice=${filters.maxPrice}`);
        }

        if (sort) params.push(`sort=${sort}`);

        query += params.join("&");

        const data = await apiFetch(query);
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    }

    loadProducts();
  }, [filters.category, filters.minPrice, filters.maxPrice, sort]);

  return (
    <>
      <div className="sort-bar">
        <label>Sort by:</label>
        <select onChange={(e) => setSort(e.target.value)}>
          <option value="">None</option>
          <option value="price_asc">Price: Low → High</option>
          <option value="price_desc">Price: High → Low</option>
        </select>
      </div>

      <div className="products-body">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default ProductsBody