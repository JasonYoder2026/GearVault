import Navbar from "../components/Navbar";
import ProductsBody from "../components/products/ProductsBody";
import Filters from "../components/products/Filters";
import Footer from "../components/Footer";
import { useState } from "react";

function Products() {
    const [filters, setFilters] = useState({});
    
    return (
      <>
        <Navbar />
        <body className="products-page">
          <aside className='filters'>
            <Filters onFilterChange={setFilters} />
          </aside>
          <div className="products-content">
          <ProductsBody filters={filters}/>
          </div>
        </body>
        <Footer />
      </>
    );
}

export default Products