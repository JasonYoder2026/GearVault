import './Footer.css';

export default function Footer() {
  return (
    <nav className="footer">

      <div className="footer-about">
        <p>&copy; 2023 GearVault. All rights reserved.</p>
      </div>

      <a className="footer-contact" href="/contact">
        Contact Us
      </a>
    </nav>
  );
}