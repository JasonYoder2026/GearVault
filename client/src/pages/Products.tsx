import Navbar from "../components/Navbar";
import ProductsBody from "../components/products/ProductsBody";

import Footer from "../components/Footer";

function Products() {
    return (
      <>
        <Navbar />
        <body>
          <ProductsBody />
        </body>
        <Footer />
      </>
    );
}

export default Products