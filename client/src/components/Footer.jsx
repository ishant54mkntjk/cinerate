import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="brand">
          Cine<span>Rate</span>
        </span>
        <p>&copy; {new Date().getFullYear()} CineRate. Built for movie lovers.</p>
      </div>
    </footer>
  );
}
