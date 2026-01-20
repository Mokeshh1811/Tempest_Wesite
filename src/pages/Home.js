import React, { useState, useEffect } from 'react';
import Section from '../components/Section';
import PrimaryButton from '../components/PrimaryButton';
import '../components/CardGrid.css';
import '../components/Forms.css';
import './Home.css';
import {
  FaLinkedinIn,
  FaXTwitter,
  FaFacebookF,
  FaInstagram
} from 'react-icons/fa6';

const Home = () => {
  return (
    <>
      {/* Hero Slideshow */}
      <HeroSlideshow />

      {/* WHY CHOOSE TEMPEST */}
      <Section
        eyebrow="Why Choose Tempest"
        title="Engineering Solutions. AI Innovation. Industry-Ready Training."
        subtitle="Tempest helps institutions and businesses build scalable digital products, adopt AI-driven automation, and upskill teams through hands-on, industry-aligned training."
      >
        <div className="card-grid fade-in">
          <div className="card elevated-card">
            <h3 className="card-title">Modern Engineering</h3>
            <p className="card-body">
              Web, cloud, and system solutions built for scalability and performance.
            </p>
          </div>
          <div className="card elevated-card">
            <h3 className="card-title">AI & Automation</h3>
            <p className="card-body">
              Intelligent agents, RAG chatbots, and workflow automation.
            </p>
          </div>
          <div className="card elevated-card">
            <h3 className="card-title">Industry Training</h3>
            <p className="card-body">
              Bootcamps, internships, and faculty programs focused on real-world skills.
            </p>
          </div>
        </div>
      </Section>

      {/* OUR EXPERTISE */}
      <Section
        eyebrow="Our Expertise"
        title="Solutions Designed for the Modern Digital World"
        align="left"
      >
<div className="split-section">
  <div className="split-left slide-up">
    <div className="feature-item">
      <h4>Web & Cloud Solutions</h4>
      <p>Application development, cloud deployment, and scalable system design.</p>
    </div>

    <div className="feature-item">
      <h4>AI & Automation Services</h4>
      <p>AI agents, RAG systems, chatbots, and intelligent workflows.</p>
    </div>

    <div className="feature-item">
      <h4>Training & Internships</h4>
      <p>Bootcamps and internships aligned with industry needs.</p>
    </div>

    <div className="feature-item">
      <h4>Video Editing & Media Production</h4>
      <p>Professional video editing, reels, motion graphics, and promotional media.</p>
    </div>

    <div className="feature-item">
      <h4>Content Writing & Digital Copy</h4>
      <p>SEO-optimized content, blogs, website copy, and marketing communication.</p>
    </div>
  </div>

  <div className="split-right card-grid animate-stagger">
    <div className="card float-card">
      <img
        src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
        alt="Modern Engineering"
        className="card-image"
      />
      <h3 className="card-title">Built for Scale</h3>
      <p className="card-body">
        Production-ready solutions using modern engineering practices.
      </p>
    </div>

    <div className="card float-card">
      <img
        src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
        alt="AI Innovation"
        className="card-image"
      />
      <h3 className="card-title">AI-First Approach</h3>
      <p className="card-body">
        Automation and intelligence at the core of every solution.
      </p>
    </div>
  </div>
</div>

      </Section>

      {/* START YOUR JOURNEY */}
      <Section
        eyebrow="Start Your Journey"
        title="Connect with Our Expert Team"
        subtitle="Our specialists are ready to support your goals."
        align="left"
      >
        <div className="split-section">
          <div className="split-left slide-up">
            <HomeContactForm />
          </div>

          <div className="split-right card-grid animate-stagger">
            <div className="card glow-card">
              <h3 className="card-title">Connect With Us</h3>
              <p className="card-body">
                Follow us for updates, insights, and announcements.
              </p>
<div className="social-icons">
  <a
    href="https://www.linkedin.com/company/tempesthub/"
    target="_blank"
    rel="noreferrer"
    aria-label="LinkedIn"
  >
    <FaLinkedinIn />
  </a>

  <a
    href="https://x.com/Tempest_hub"
    target="_blank"
    rel="noreferrer"
    aria-label="X (Twitter)"
  >
    <FaXTwitter />
  </a>

  <a
    href="https://www.facebook.com/profile.php?id=61586259132683"
    target="_blank"
    rel="noreferrer"
    aria-label="Facebook"
  >
    <FaFacebookF />
  </a>

  <a
    href="https://www.instagram.com/tempest.hub?igsh=MXd2dDI5ZDZhNDVlZw=="
    target="_blank"
    rel="noreferrer"
    aria-label="Instagram"
  >
    <FaInstagram />
  </a>
</div>
            </div>

            <div className="card glow-card">
              <h3 className="card-title">Email Us</h3>
              <p className="card-body">
                Reach out directly for partnerships, training, or project discussions.
              </p>
              <a href="mailto:tempesthub01@gmail.com" className="email-link">
                tempesthub01@gmail.com
              </a>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

/* ================= HERO SLIDESHOW ================= */

const HeroSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    {
      bg: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31',
      subtitle:
        'Design, build, and scale modern web applications with cloud-native architecture.',
      highlight: 'Web & Cloud Solutions'
    },
    {
      bg: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
      subtitle:
        'AI agents, RAG chatbots, and intelligent automation that drive real business outcomes.',
      highlight: 'AI & Automation'
    },
    {
      bg: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935',
      subtitle:
        'Hands-on bootcamps and internships built for students, professionals, and teams.',
      highlight: 'Training & Internships'
    },
    {
      bg: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7',
      subtitle:
        'Professional video editing and content creation that strengthens your brand voice.',
      highlight: 'Media & Content'
    },
    {
      bg: 'https://images.unsplash.com/photo-1551434678-e076c223a692',
      subtitle:
        'From idea to deployment — enabling digital growth and transformation.',
      highlight: 'Digital Transformation'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) nextSlide();
    }, 3200);
    return () => clearInterval(interval);
  }, [isTransitioning]);

  const nextSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsTransitioning(false);
    }, 400);
  };

  const slide = slides[currentSlide];

  return (
    <section className="hero-slideshow">
      <div
        className="hero-slide-bg"
        style={{ backgroundImage: `url(${slide.bg})` }}
      />
      <div className="hero-overlay" />

      <div className="hero-content">
        <h1 className="hero-title">
          Tempest Hub - Empowering <span className="highlight">{slide.highlight}</span>
        </h1>

        <p className="hero-subtitle">{slide.subtitle}</p>

        <PrimaryButton onClick={() => (window.location.href = '/services')}>
          Explore Our Services
        </PrimaryButton>
      </div>
    </section>
  );
};

/* ================= HOME CONTACT FORM ================= */

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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('https://mokesh.pythonanywhere.com/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error();

      setSubmitMessage("Thank you! We've sent you a confirmation email.");
      setFormData({ name: '', email: '', service: '', message: '' });
    } catch {
      setSubmitMessage('Sorry, there was an error sending your message.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="home-contact-form improved-form" onSubmit={handleSubmit}>

      <div className="form-grid">
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="form-group">
        <label>Service type</label>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
        >
          <option value="">Select a service</option>
          <option value="web-cloud">Web & Cloud Solutions</option>
          <option value="ai-automation">AI & Automation Services</option>
          <option value="training">Training / Internship</option>
        </select>
      </div>

      <div className="form-group">
        <label>Your requirement</label>
        <textarea
          rows="4"
          name="message"
          placeholder="Briefly describe what you’re looking for…"
          value={formData.message}
          onChange={handleChange}
        />
      </div>

      <PrimaryButton type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Sending…' : 'Submit enquiry'}
      </PrimaryButton>

      {submitMessage && (
        <p
          className={`submit-message ${
            submitMessage.includes('Thank you') ? 'success' : 'error'
          }`}
        >
          {submitMessage}
        </p>
      )}
    </form>
  );
};


export default Home;
