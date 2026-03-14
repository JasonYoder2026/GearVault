import Navbar from "../components/Navbar";
import HeroCarousel from "../components/home/HeroCarousel";
import CategoryGrid from "../components/home/CategoryGrid";
import FeaturedProducts from "../components/home/FeaturedProducts";
import Footer from "../components/Footer";

function Home() {
    return (
        <>
      <Navbar />

      <HeroCarousel />
      <CategoryGrid />
      <FeaturedProducts />

      <Footer />
    </>
    );
}

export default Home