import ProductCard from "../ProductCard";
import type { Product } from "../../models/Product";
import './ProductsBody.css';
import { useEffect, useState} from "react";
import { apiFetch } from "../../api/client";
import { useSearchParams } from "react-router-dom";

type Props = {
  filters: any;
}

function ProductsBody({filters}: Props) {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const [sort, setSort] = useState("");

  useEffect(() => {
    async function loadProducts() {
      try {
        let query = "/products?";

        if (filters.category) {
          query += `category=${filters.category}&`;
        }

        if (filters.minPrice) {
          query += `minPrice=${filters.minPrice}&`;
        }

        if (filters.maxPrice) {
          query += `maxPrice=${filters.maxPrice}&`;
        }

        if (sort) {
          query += `sort=${sort}`;
        }

        const data = await apiFetch(query);
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    }
    loadProducts();
  }, [filters, sort]);

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