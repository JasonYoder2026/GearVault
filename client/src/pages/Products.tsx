import Navbar from "../components/Navbar";
import ProductsBody from "../components/products/ProductsBody";
import Filters from "../components/products/Filters";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function Products() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
  
    type FiltersType = {
      category: string;
      minPrice: number | "";
      maxPrice: number | "";
    };

    const handleFilters = (newFilters: FiltersType) => {
      setFilters(newFilters);

      const params = new URLSearchParams();

      if (newFilters.category) params.set("category", newFilters.category);
      if (newFilters.minPrice !== "") params.set("minPrice", String(newFilters.minPrice));
      if (newFilters.maxPrice !== "") params.set("maxPrice", String(newFilters.maxPrice));

      navigate(`/products?${params.toString()}`);
    };

    const [filters, setFilters] = useState<FiltersType>({
      category: "",
      minPrice: "",
      maxPrice: "",
    });

    useEffect(() => {
      const category = searchParams.get("category") || "";
      const minPrice = searchParams.get("minPrice");
      const maxPrice = searchParams.get("maxPrice");

      const formattedCategory = category.replace(/\s+/g, "-");

      setFilters({
        category: formattedCategory,
        minPrice: minPrice ? Number(minPrice) : "",
        maxPrice: maxPrice ? Number(maxPrice) : "",
      });
    }, [searchParams]);
    
    return (
      <>
        <Navbar />
        <div className="products-page">
          <aside className='filters'>
            <Filters filters={filters} onFilterChange={handleFilters} />
          </aside>
          <div className="products-content">
          <ProductsBody filters={filters}/>
          </div>
        </div>
        <Footer />
      </>
    );
}

export default Products