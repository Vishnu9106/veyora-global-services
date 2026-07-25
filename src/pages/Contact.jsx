import { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
} from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="page-wrapper">
      {/* Hero */}
      <section className="contact-hero">
        <div className="container">
          <span className="section-tag">Get In Touch</span>
          <h1 className="contact-hero-title">Contact Us</h1>
          <p className="contact-hero-desc">
            Have a question or ready to get started? We'd love to hear from you. 
            Reach out and our team will respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Layout */}
      <section>
        <div className="container contact-layout">
          {/* Left - Info Cards */}
          <div className="contact-info">
            <div className="contact-info-card fade-in-up">
              <div className="contact-info-icon">
                <MapPin size={22} />
              </div>
              <div>
                <div className="contact-info-title">Our Office</div>
                <div className="contact-info-text">
                  123 Business Park, Tower B, 4th Floor<br />
                  Mumbai, Maharashtra 400001, India
                </div>
              </div>
            </div>

            <div className="contact-info-card fade-in-up">
              <div className="contact-info-icon">
                <Phone size={22} />
              </div>
              <div>
                <div className="contact-info-title">Phone</div>
                <div className="contact-info-text">
                  +91 8493013986
                </div>
              </div>
            </div>

            <div className="contact-info-card fade-in-up">
              <div className="contact-info-icon">
                <Mail size={22} />
              </div>
              <div>
                <div className="contact-info-title">Email</div>
                <div className="contact-info-text">
                  info@veyoraglobalservices.in
                </div>
              </div>
            </div>

            <div className="contact-info-card fade-in-up">
              <div className="contact-info-icon">
                <Clock size={22} />
              </div>
              <div>
                <div className="contact-info-title">Business Hours</div>
                <div className="contact-info-text">
                  Monday – Friday: 9:00 AM – 6:00 PM (IST)<br />
                  24/7 Support for Active Clients
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="contact-form-card">
            <h2 className="contact-form-title">Send Us a Message</h2>
            <p className="contact-form-subtitle">
              Fill out the form below and we'll get back to you promptly.
            </p>

            {submitted && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '14px 20px',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--bg-accent-subtle)',
                  color: 'var(--success)',
                  fontWeight: '600',
                  fontSize: '0.92rem',
                  marginBottom: '24px',
                  border: '1px solid var(--success)',
                }}
              >
                <CheckCircle size={18} />
                Message sent successfully! We'll be in touch soon.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label" htmlFor="firstName">First Name</label>
                  <input
                    id="firstName"
                    name="firstName"
                    className="form-input"
                    type="text"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="lastName">Last Name</label>
                  <input
                    id="lastName"
                    name="lastName"
                    className="form-input"
                    type="text"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    className="form-input"
                    type="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    name="phone"
                    className="form-input"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group full-width">
                  <label className="form-label" htmlFor="subject">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    className="form-input"
                    type="text"
                    placeholder="How can we help you?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group full-width">
                  <label className="form-label" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    placeholder="Tell us about your requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group full-width">
                  <button type="submit" className="form-submit-btn">
                    <Send size={18} />
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
