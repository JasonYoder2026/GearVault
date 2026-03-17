import Navbar from "../components/Navbar";
import ProductsBody from "../components/products/ProductsBody";
import Filters from "../components/products/Filters";
import Footer from "../components/Footer";
import { useState } from "react";

function Products() {
    type FiltersType = {
      category: string;
      minPrice: number | "";
      maxPrice: number | "";
    };

    const [filters, setFilters] = useState<FiltersType>({
      category: "",
      minPrice: "",
      maxPrice: "",
    });
    
    return (
      <>
        <Navbar />
        <div className="products-page">
          <aside className='filters'>
            <Filters onFilterChange={setFilters} />
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