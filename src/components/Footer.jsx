import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div>
            <div className="footer-brand-name">
              Veyora <span>Global</span>
            </div>
            <p className="footer-brand-desc">
              Empowering businesses worldwide with premium outsourcing solutions. 
              Your success is our mission.
            </p>
          </div>

          <div>
            <h4 className="footer-col-title">Services</h4>
            <Link to="/" className="footer-link">Inbound Calls</Link>
            <Link to="/" className="footer-link">Outbound Calls</Link>
            <Link to="/" className="footer-link">Data Processing</Link>
            <Link to="/" className="footer-link">E-Commerce</Link>
          </div>

          <div>
            <h4 className="footer-col-title">Company</h4>
            <Link to="/about" className="footer-link">About Us</Link>
            <Link to="/contact" className="footer-link">Contact Us</Link>
            <Link to="/" className="footer-link">Careers</Link>
            <Link to="/" className="footer-link">Blog</Link>
          </div>

          <div>
            <h4 className="footer-col-title">Support</h4>
            <Link to="/contact" className="footer-link">Help Center</Link>
            <Link to="/" className="footer-link">Privacy Policy</Link>
            <Link to="/" className="footer-link">Terms of Service</Link>
            <Link to="/" className="footer-link">FAQ</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} Veyora Global Services. All rights reserved.</span>
          <span>Built with purpose and precision.</span>
        </div>
      </div>
    </footer>
  );
}
