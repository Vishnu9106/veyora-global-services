import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div>
            <div className="footer-brand-name" style={{ marginBottom: '1.5rem' }}>
              <img src="/logo.png" alt="Veyora Global Services" style={{ height: '50px', objectFit: 'contain' }} />
            </div>
            <p className="footer-brand-desc" style={{ marginBottom: '2rem' }}>
              Providing top-notch customer service outsourcing solutions to help your business thrive.
            </p>
            
            <div className="footer-contact-info" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)' }}>
                <Mail size={18} color="#6366f1" />
                <span>info@veyoraglobalservices.in</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)' }}>
                <Phone size={18} color="#6366f1" />
                <span>+91 8493013986</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--text-secondary)' }}>
                <MapPin size={18} color="#6366f1" style={{ flexShrink: 0, marginTop: '4px' }} />
                <span>Sunder Bani, Jammu, J&K - 185153</span>
              </div>
            </div>

            <div className="footer-socials" style={{ display: 'flex', gap: '1rem' }}>
              <a href="#" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}><FacebookIcon /></a>
              <a href="#" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}><InstagramIcon /></a>
              <a href="https://www.linkedin.com/company/veyora-global-services-pvt-ltd/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}><LinkedinIcon /></a>
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


        </div>

        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} Veyora Global Services. All rights reserved.</span>
          <span>Built with purpose and precision.</span>
        </div>
      </div>
    </footer>
  );
}
