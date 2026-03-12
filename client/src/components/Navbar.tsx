import './Narbar.css';
import { ShoppingCart } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="navbar">
      <a className="navbar-brand" href="#">GearVault</a>

      <div className="navbar-search">
        <input type="text" placeholder="Search for gear..." />
        <button>Search</button>
      </div>

      <a className="navbar-cart" href="#">
        <span className="cart-icon">
          <ShoppingCart size={32} />
        </span> Cart
      </a>
    </nav>
  );
}