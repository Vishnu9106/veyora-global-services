import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div>
            <div className="footer-brand-name" style={{ marginBottom: '1rem' }}>
              Veyora <span>Global</span>
            </div>
            <p className="footer-brand-desc" style={{ marginBottom: '2rem' }}>
              Providing top-notch customer service outsourcing solutions to help your business thrive.
            </p>
            
            <div className="footer-contact-info" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)' }}>
                <Mail size={18} color="#f87171" />
                <span>info@veyoraglobalservices.in</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)' }}>
                <Phone size={18} color="#f87171" />
                <span>+91 8493013986</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--text-secondary)' }}>
                <MapPin size={18} color="#f87171" style={{ flexShrink: 0, marginTop: '4px' }} />
                <span>Bagh-E-Firdous Col, Hanjiwera, Pattan, Baramulla, J&K - 193121</span>
              </div>
            </div>

            <div className="footer-socials" style={{ display: 'flex', gap: '1rem' }}>
              <a href="#" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}><Facebook size={20} /></a>
              <a href="#" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}><Instagram size={20} /></a>
              <a href="#" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}><Linkedin size={20} /></a>
            </div>
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
