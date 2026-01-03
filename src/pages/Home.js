import React, { useState, useEffect } from 'react';
import Section from '../components/Section';
import PrimaryButton from '../components/PrimaryButton';
import '../components/CardGrid.css';
import '../components/Forms.css';
import './Home.css';

const Home = () => {
  return (
    <>
      {/* Hero Slideshow */}
      <HeroSlideshow />

      {/* WHY CHOOSE TEMPEST */}
      <Section
        eyebrow="Why Choose Tempest"
        title="Delivering Excellence in Engineering and Education"
        subtitle="We combine enterprise-grade methodologies with innovative approaches to deliver transformative solutions that drive real results for institutions and businesses."
      >
        <div className="card-grid fade-in">
          <div className="card elevated-card">
            <h3 className="card-title">Strategic Design</h3>
            <p className="card-body">
              User-centered design ensuring seamless integration and productivity.
            </p>
          </div>
          <div className="card elevated-card">
            <h3 className="card-title">Advanced Development</h3>
            <p className="card-body">
              Scalable, cloud-native applications with AI integration.
            </p>
          </div>
          <div className="card elevated-card">
            <h3 className="card-title">Comprehensive Education</h3>
            <p className="card-body">
              Curriculum-aligned programs bridging theory and practice.
            </p>
          </div>
        </div>
      </Section>

      {/* OUR EXPERTISE – SPLIT LAYOUT */}
      <Section
        eyebrow="Our Expertise"
        title="Comprehensive Solutions from Infrastructure to Intelligence"
        align="left"
      >
        <div className="split-section">
          {/* LEFT CONTENT */}
          <div className="split-left slide-up">
            <div className="feature-item">
              <h4>Cloud & Platform Engineering</h4>
              <p>Architecture, migrations, and managed services.</p>
            </div>
            <div className="feature-item">
              <h4>AI & Automation Services</h4>
              <p>AI agents, RAG systems, chatbots, workflows.</p>
            </div>
            <div className="feature-item">
              <h4>Professional Training</h4>
              <p>Industry-aligned, hands-on programs.</p>
            </div>
          </div>

          {/* RIGHT CARDS */}
          <div className="split-right card-grid animate-stagger">
            <div className="card float-card">
              <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Experience" className="card-image" />
              <h3 className="card-title">Built for Today</h3>
              <p className="card-body">Modern engineering practices designed for fast-moving teams.</p>
            </div>
            <div className="card float-card">
              <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="AI-First" className="card-image" />

              <h3 className="card-title">AI-First</h3>
              <p className="card-body">Automation and intelligence at the core.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* START YOUR JOURNEY – SPLIT LAYOUT */}
      <Section
        eyebrow="Start Your Journey"
        title="Connect with Our Expert Team"
        subtitle="Our specialists are ready to support your goals."
        align="left"
      >
        <div className="split-section">
          {/* LEFT FORM */}
          <div className="split-left slide-up">
            <HomeContactForm />
          </div>

          {/* RIGHT INFO CARDS */}
          <div className="split-right card-grid animate-stagger">
<div className="card glow-card">
  <h3 className="card-title">Connect With Us</h3>
  <p className="card-body">
    Follow us for updates, insights, and announcements.
  </p>

  <div className="social-icons">
    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/company/tempest"
      target="_blank"
      rel="noreferrer"
      aria-label="LinkedIn"
    >
      <svg viewBox="0 0 24 24">
        <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4v16h-4V8zm7 0h3.8v2.2h.05c.53-1 1.83-2.2 3.77-2.2 4.03 0 4.78 2.65 4.78 6.1V24h-4v-7.8c0-1.86-.03-4.25-2.6-4.25-2.6 0-3 2.03-3 4.12V24h-4V8z"/>
      </svg>
    </a>

    {/* Twitter / X */}
    <a
      href="https://twitter.com/tempest"
      target="_blank"
      rel="noreferrer"
      aria-label="Twitter"
    >
      <svg viewBox="0 0 24 24">
        <path d="M23.95 4.57a10 10 0 01-2.83.78 4.93 4.93 0 002.16-2.72 9.86 9.86 0 01-3.13 1.2 4.92 4.92 0 00-8.38 4.48A13.97 13.97 0 011.64 3.16a4.92 4.92 0 001.52 6.57 4.9 4.9 0 01-2.23-.62v.06a4.93 4.93 0 003.95 4.83 4.9 4.9 0 01-2.22.08 4.93 4.93 0 004.6 3.42A9.88 9.88 0 010 19.54 13.94 13.94 0 007.55 22c9.05 0 14-7.5 14-14v-.64a9.93 9.93 0 002.4-2.54z"/>
      </svg>
    </a>

    {/* Instagram */}
    <a
      href="https://instagram.com/tempest"
      target="_blank"
      rel="noreferrer"
      aria-label="Instagram"
    >
      <svg viewBox="0 0 24 24">
        <path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.22.42.55.21.95.47 1.37.89.42.42.68.82.89 1.37.17.42.37 1.05.42 2.22.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.42 2.22a3.7 3.7 0 01-.89 1.37 3.7 3.7 0 01-1.37.89c-.42.17-1.05.37-2.22.42-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.22-.42a3.7 3.7 0 01-1.37-.89 3.7 3.7 0 01-.89-1.37c-.17-.42-.37-1.05-.42-2.22C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.25-1.8.42-2.22.21-.55.47-.95.89-1.37.42-.42.82-.68 1.37-.89.42-.17 1.05-.37 2.22-.42C8.42 2.21 8.8 2.2 12 2.2zm0 3.6a6.2 6.2 0 100 12.4 6.2 6.2 0 000-12.4zm0 10.2a4 4 0 110-8 4 4 0 010 8zm6.4-10.9a1.45 1.45 0 11-2.9 0 1.45 1.45 0 012.9 0z"/>
      </svg>
    </a>
  </div>
</div>

<div className="card glow-card">
  <h3 className="card-title">Email Us</h3>
  <p className="card-body">
    Reach out directly for partnerships, training, or project discussions.
  </p>

  <a href="mailto:contact@tempest.com" className="email-link">
    contact@tempest.com
  </a>
</div>

          </div>
        </div>
      </Section>
    </>
  );
};

// Hero Slideshow Component (Integrated)
const HeroSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    {
      bg: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      title: 'Cloud-Ready AI Solutions',
      subtitle: 'Transform your institution with scalable cloud infrastructure and intelligent AI platforms',
      highlight: 'Cloud & AI'
    },
    {
      bg: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      title: 'Enterprise AI Training',
      subtitle: 'Comprehensive programs that bridge theory and practice for real-world technology mastery',
      highlight: 'Training Excellence'
    },
    {
      bg: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      title: 'Platform Engineering',
      subtitle: 'Robust, scalable applications with cloud-native architecture and continuous monitoring',
      highlight: 'Engineering Mastery'
    },
    {
      bg: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80',
      title: 'Intelligent Automation',
      subtitle: 'AI agents, RAG systems, and workflow automation tailored to your business needs',
      highlight: 'Automation Future'
    },
    {
      bg: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80',
      title: 'Digital Transformation',
      subtitle: 'From strategy to deployment, empower your team for the AI-driven future',
      highlight: 'Transformation Now'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [isTransitioning]);

  const nextSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsTransitioning(false);
    }, 400);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setIsTransitioning(false);
    }, 400);
  };

  const goToSlide = (index) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 400);
  };

  const slide = slides[currentSlide];

  return (
    <section className={`hero-slideshow ${isTransitioning ? 'transitioning' : ''}`}>
      <div
        className="hero-slide-bg"
        style={{ backgroundImage: `url(${slide.bg})` }}
      />
      <div className="hero-overlay" />
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Empowering Institutions with <span className="highlight">{slide.highlight}</span>
          </h1>
          <p className="hero-subtitle">{slide.subtitle}</p>
          <div className="hero-actions">
            <PrimaryButton onClick={() => window.location.href = '/services'}>
              Discover Solutions
            </PrimaryButton>
          </div>
        </div>

        <div className="slide-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={index === currentSlide ? 'active' : ''}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button className="nav-arrow prev" onClick={prevSlide} aria-label="Previous">
          ‹
        </button>
        <button className="nav-arrow next" onClick={nextSlide} aria-label="Next">
          ›
        </button>
      </div>
    </section>
  );
};

// Your existing HomeContactForm (unchanged)
const HomeContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

try {
  const response = await fetch('/api/send-email', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });

  const result = await response.json(); // 👈 IMPORTANT

  if (response.ok) {
    setSubmitMessage("Thank you! We've sent you a confirmation email.");
    setFormData({ name: '', email: '', service: '', message: '' });
  } else {
    throw new Error(result.error || 'Failed to send email');
  }

} catch (error) {
  console.error('Email send failed:', error);
  setSubmitMessage(error.message || 'Sorry, there was an error sending your message. Please try again.');

} finally {
  setIsSubmitting(false);
}

  };

  return (
    <form className="home-contact-form fade-in" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>
          Name
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Email
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
      </div>
      <div className="form-row">
        <label>
          Type of service
          <select name="service" value={formData.service} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="education">Education / Training</option>
            <option value="service">Project / Services</option>
          </select>
        </label>
      </div>
      <div className="form-row">
        <label>
          Brief about your need
          <textarea rows="3" name="message" value={formData.message} onChange={handleChange} />
        </label>
      </div>
      <PrimaryButton type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Submit enquiry'}
      </PrimaryButton>
      {submitMessage && (
        <p className={`submit-message ${submitMessage.includes('Thank you') ? 'success' : 'error'}`}>
          {submitMessage}
        </p>
      )}
    </form>
  );
};

export default Home;
