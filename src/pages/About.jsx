import {
  Target,
  Eye,
  Heart,
  Award,
  Globe,
  Lightbulb,
  CheckCircle,
  Users,
} from 'lucide-react';

export default function About() {
  return (
    <div className="page-wrapper">
      {/* Hero */}
      <section className="about-hero">
        <div className="container">
          <span className="section-tag">About Us</span>
          <h1 className="about-hero-title">
            We Are Veyora Global Services
          </h1>
          <p className="about-hero-desc">
            A forward-thinking business process outsourcing company driven by innovation, 
            integrity, and an unwavering commitment to delivering exceptional results 
            for our global clientele.
          </p>
        </div>
      </section>



      {/* Mission */}
      <section className="section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <span className="section-tag">Our Mission</span>
              <h2>Empowering Businesses to Achieve More</h2>
              <p>
                At Veyora Global Services, our mission is to empower organizations of all sizes 
                by providing intelligent, scalable, and cost-effective business process solutions. 
                We believe that every business deserves access to world-class operational support 
                — regardless of geography or budget.
              </p>
              <p>
                Founded with the vision of bridging the gap between ambition and execution, we 
                have grown into a trusted partner for startups, mid-market companies, and 
                enterprise organizations across more than 15 countries.
              </p>
            </div>
            <div className="about-visual">
              <div className="about-values">
                <div className="about-value fade-in-up">
                  <div className="about-value-icon">
                    <Target size={20} />
                  </div>
                  <div>
                    <div className="about-value-title">Precision</div>
                    <div className="about-value-desc">Every detail matters in delivering excellence</div>
                  </div>
                </div>
                <div className="about-value fade-in-up">
                  <div className="about-value-icon">
                    <Heart size={20} />
                  </div>
                  <div>
                    <div className="about-value-title">Dedication</div>
                    <div className="about-value-desc">Committed to your success 24/7</div>
                  </div>
                </div>
                <div className="about-value fade-in-up">
                  <div className="about-value-icon">
                    <Lightbulb size={20} />
                  </div>
                  <div>
                    <div className="about-value-title">Innovation</div>
                    <div className="about-value-desc">Leveraging technology to drive results</div>
                  </div>
                </div>
                <div className="about-value fade-in-up">
                  <div className="about-value-icon">
                    <Globe size={20} />
                  </div>
                  <div>
                    <div className="about-value-title">Global Reach</div>
                    <div className="about-value-desc">Operating across continents seamlessly</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="section" style={{ background: 'var(--bg-tertiary)' }}>
        <div className="container">
          <div className="about-content reverse">
            <div className="about-text">
              <span className="section-tag">Our Vision</span>
              <h2>Building the Future of Outsourcing</h2>
              <p>
                We envision a world where outsourcing is not just about cost savings — it's about 
                strategic advantage. Our goal is to be the most trusted and innovative BPO partner 
                on the planet, known for transforming how businesses operate and serve their customers.
              </p>
              <p>
                By investing heavily in training, technology, and culture, we are building an 
                organization that attracts the best talent, delivers unmatched service quality, 
                and creates lasting value for every client relationship.
              </p>
            </div>
            <div className="about-visual">
              <div className="about-values">
                <div className="about-value fade-in-up">
                  <div className="about-value-icon">
                    <Eye size={20} />
                  </div>
                  <div>
                    <div className="about-value-title">Transparency</div>
                    <div className="about-value-desc">Open communication at every level</div>
                  </div>
                </div>
                <div className="about-value fade-in-up">
                  <div className="about-value-icon">
                    <Award size={20} />
                  </div>
                  <div>
                    <div className="about-value-title">Excellence</div>
                    <div className="about-value-desc">Setting the industry benchmark</div>
                  </div>
                </div>
                <div className="about-value fade-in-up">
                  <div className="about-value-icon">
                    <CheckCircle size={20} />
                  </div>
                  <div>
                    <div className="about-value-title">Accountability</div>
                    <div className="about-value-desc">Owning outcomes and driving results</div>
                  </div>
                </div>
                <div className="about-value fade-in-up">
                  <div className="about-value-icon">
                    <Users size={20} />
                  </div>
                  <div>
                    <div className="about-value-title">Collaboration</div>
                    <div className="about-value-desc">Working as one with your team</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Leadership</span>
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-subtitle">
              Experienced professionals leading Veyora Global with vision, 
              expertise, and a passion for client success.
            </p>
          </div>

          <div className="team-grid" style={{ gridTemplateColumns: 'minmax(300px, 400px)', justifyContent: 'center' }}>
            <div className="team-card fade-in-up">
              <div className="team-avatar">AS</div>
              <div className="team-name">Arjun Sharma</div>
              <div className="team-role">Chief Executive Officer</div>
              <p className="team-desc">
                With 15+ years in global business operations, Arjun leads 
                Veyora's strategic direction and growth initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
