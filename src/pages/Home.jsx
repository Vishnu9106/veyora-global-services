import React from 'react';
import { Link } from 'react-router-dom';
import {
  PhoneIncoming,
  PhoneOutgoing,
  Database,
  Ticket,
  ShoppingCart,
  ArrowRight,
  Shield,
  Clock,
  TrendingUp,
  Users,
  Headphones,
  Zap,
  BarChart3,
  Sparkles,
  ChevronRight,
} from 'lucide-react';

const marqueeItems = [
  'Call Center Operations',
  'Data Processing',
  'Customer Support',
  'E-Commerce Management',
  'Ticketing Systems',
  'Lead Generation',
  'Back Office Support',
  'Quality Assurance',
];

const whyFeatures = [
  {
    id: 'security',
    title: 'Enterprise Security',
    desc: 'Strict access controls and full compliance with international data protection. Your data is safeguarded with industry-standard encryption.',
    icon: Shield,
    color: 'emerald',
    number: '01'
  },
  {
    id: 'availability',
    title: '24/7 Operations',
    desc: 'Round-the-clock availability across all time zones. Our teams operate globally for continuous service delivery so your business never sleeps.',
    icon: Clock,
    color: 'sapphire',
    number: '02'
  },
  {
    id: 'scalability',
    title: 'Scalable Solutions',
    desc: 'Whether you need 5 agents or 500, we scale up or down on demand. Pay for what you use, grow when you\'re ready.',
    icon: TrendingUp,
    color: 'violet',
    number: '03'
  },
  {
    id: 'training',
    title: 'Trained Pros',
    desc: 'Our agents undergo rigorous training in communication, tools, and your specific domain, so they represent your brand with excellence.',
    icon: Users,
    color: 'cyan',
    number: '04'
  },
  {
    id: 'onboarding',
    title: 'Fast Onboarding',
    desc: 'Go live in days, not months. Our streamlined onboarding process gets your operations running quickly with minimal disruption.',
    icon: Zap,
    color: 'magenta',
    number: '05'
  },
  {
    id: 'reporting',
    title: 'Transparent Reporting',
    desc: 'Real-time dashboards and detailed reports give you complete visibility into performance metrics, SLAs, and business outcomes.',
    icon: BarChart3,
    color: 'emerald',
    number: '06'
  }
];

const processSteps = [
  {
    id: 'discovery',
    num: '01',
    title: 'Discovery',
    desc: 'We understand your business goals, challenges, workflows, and KPIs through in-depth consultation sessions.',
    icon: Sparkles,
    color: 'emerald'
  },
  {
    id: 'strategy',
    num: '02',
    title: 'Strategy',
    desc: 'We design a custom solution blueprint including team structure, technology stack, and performance benchmarks.',
    icon: TrendingUp,
    color: 'sapphire'
  },
  {
    id: 'execution',
    num: '03',
    title: 'Execution',
    desc: 'Our trained team goes live with full quality assurance, real-time monitoring, and continuous feedback loops.',
    icon: Users,
    color: 'violet'
  },
  {
    id: 'optimize',
    num: '04',
    title: 'Optimize',
    desc: 'We continuously analyze performance data and refine processes to drive efficiency and exceed targets.',
    icon: BarChart3,
    color: 'cyan'
  }
];

export default function Home() {

  return (
    <div className="page-wrapper">
      {/* Hero */}
      {/* SaaS Hero */}
      <section className="saas-hero">
        <div className="container saas-hero-container">
          
          {/* Centered Typography */}
          <div className="saas-hero-text fade-in-up">
            <div className="saas-hero-pill">
              <Sparkles size={14} className="saas-hero-pill-icon" />
              <span>The new standard in global operations</span>
            </div>
            
            <h1 className="saas-hero-title">
              Outsource Smarter.<br />
              <span className="text-gradient">Scale Faster.</span>
            </h1>
            
            <p className="saas-hero-description">
              Veyora Global Services delivers world-class BPO solutions. 
              We handle the complexity of operations, customer support, and data 
              so you can focus entirely on growth.
            </p>
            
            <div className="saas-hero-buttons">
              <a href="mailto:info@veyoraglobalservices.in" className="btn btn-primary btn-lg">
                Email Us
              </a>
              <a href="tel:8493013986" className="btn btn-ghost btn-lg">
                Call Us <ArrowRight size={18} />
              </a>
            </div>
          </div>

          
        </div>
      </section>

      {/* Marquee Ticker */}
      <div className="marquee-section">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <div className="marquee-item" key={i}>
              <span className="marquee-dot"></span>
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Services — Bento Layout with Learn More */}
      <section className="section" style={{ background: 'var(--bg-tertiary)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Services</span>
            <h2 className="section-title">What We Deliver</h2>
            <p className="section-subtitle">
              Comprehensive business process outsourcing solutions tailored to 
              your unique needs and scale.
            </p>
          </div>

          <div className="services-bento">
            <div className="service-card fade-in-up" data-accent="emerald">
              <div className="service-icon">
                <PhoneIncoming size={26} />
              </div>
              <h3 className="service-title">Inbound Calls</h3>
              <p className="service-description">
                Professional inbound call handling including customer support, 
                order processing, technical helpdesk, and appointment scheduling.
              </p>
              <Link to="/services/inbound-calls" className="service-learn-more">
                Learn More <ChevronRight size={16} />
              </Link>
            </div>

            <div className="service-card fade-in-up" data-accent="sapphire">
              <div className="service-icon">
                <PhoneOutgoing size={26} />
              </div>
              <h3 className="service-title">Outbound Calls</h3>
              <p className="service-description">
                Strategic outbound campaigns for lead generation, customer surveys, 
                follow-ups, and telemarketing. Driven by data, powered by people.
              </p>
              <Link to="/services/outbound-calls" className="service-learn-more">
                Learn More <ChevronRight size={16} />
              </Link>
            </div>

            <div className="service-card fade-in-up" data-accent="violet">
              <div className="service-icon">
                <Database size={26} />
              </div>
              <h3 className="service-title">Data Processing</h3>
              <p className="service-description">
                Accurate data entry, validation, cleansing, and transformation. 
                We deliver structured, actionable datasets at scale.
              </p>
              <Link to="/services/data-processing" className="service-learn-more">
                Learn More <ChevronRight size={16} />
              </Link>
            </div>

            <div className="service-card fade-in-up" data-accent="cyan">
              <div className="service-icon">
                <Ticket size={26} />
              </div>
              <h3 className="service-title">Ticketing System</h3>
              <p className="service-description">
                End-to-end ticket management — from creation and categorization to 
                escalation and resolution.
              </p>
              <Link to="/services/ticketing" className="service-learn-more">
                Learn More <ChevronRight size={16} />
              </Link>
            </div>

            <div className="service-card fade-in-up" data-accent="magenta">
              <div className="service-icon">
                <ShoppingCart size={26} />
              </div>
              <h3 className="service-title">E-Commerce Management</h3>
              <p className="service-description">
                Complete e-commerce operations including product listing, inventory management, 
                order fulfillment, and marketplace optimization across all major platforms.
              </p>
              <Link to="/services/ecommerce" className="service-learn-more">
                Learn More <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Hire Us - Horizontal Feature Rows */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Why Choose Us</span>
            <h2 className="section-title">Why Hire Veyora Global Services</h2>
            <p className="section-subtitle">
              We don't just process tasks, we become an extension of your team, 
              delivering results that move your business forward.
            </p>
          </div>

          <div className="why-hud-container fade-in-up">
            {whyFeatures.map((feature) => (
              <div 
                key={feature.id}
                className="why-hud-card"
                data-color={feature.color}
              >
                <div className="why-hud-icon-wrap">
                  <feature.icon size={36} />
                </div>
                <h3 className="why-hud-title">{feature.title}</h3>
                <p className="why-hud-desc">{feature.desc}</p>
                <span className="why-hud-watermark">{feature.number}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process — Color-Coded Timeline */}
      <section className="section" style={{ background: 'var(--bg-tertiary)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">How It Works</span>
            <h2 className="section-title">Our Process</h2>
            <p className="section-subtitle">
              A proven four-step methodology that ensures smooth transitions, 
              clear communication, and measurable results.
            </p>
          </div>

          <div className="process-cascade-container fade-in-up">
            {processSteps.map((step, idx) => (
              <div 
                key={step.id} 
                className="cascade-card"
                data-color={step.color}
                style={{ marginTop: `${idx * 60}px` }}
              >
                <div className="cascade-header">
                  <span className="cascade-num">{step.num}</span>
                  <div className="cascade-icon-wrap">
                    <step.icon size={28} />
                  </div>
                </div>
                <h3 className="cascade-title">{step.title}</h3>
                <p className="cascade-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-box">
            <h2 className="cta-title">Ready to Transform Your Operations?</h2>
            <p className="cta-description">
              Let's discuss how Veyora Global Services can help you scale faster, 
              reduce costs, and deliver exceptional customer experiences.
            </p>
            <Link to="/contact" className="cta-btn">
              <Sparkles size={18} />
              Contact Us Today
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
