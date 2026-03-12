import Navbar from "../components/Navbar";
import ProductGrid from "../components/ProductGrid";

function Home() {
    return (
        <>
      <Navbar />

      <main style={{ padding: "2rem" }}>
        <h1>GearVault</h1>
        <p>Your marketplace for music gear.</p>

        <h2>Featured Gear</h2>

        <ProductGrid />
      </main>
    </>
    );
}

export default Home