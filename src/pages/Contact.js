import React, { useState } from 'react';
import Section from '../components/Section';
import PrimaryButton from '../components/PrimaryButton';
import '../components/Forms.css';
import './Contact.css';
import { 
  FaEnvelope, 
  FaLinkedin, 
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaPaperPlane,
  FaCheckCircle
} from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';

const Contact = () => {
  return (
    <>
      <Section
        eyebrow="Contact us"
        title="Let's connect with Tempest."
        subtitle="Reach out for collaborations, campus programs or project discussions."
      >
        <div className="contact-bg-decoration">
          <div className="glow-orb glow-orb-1"></div>
          <div className="glow-orb glow-orb-2"></div>
        </div>

        <div className="contact-grid">
          <ContactForm />
          <ContactInfo />
        </div>
      </Section>
    </>
  );
};

/* ================= CONTACT FORM ================= */

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    enquiry: ''
  });

  const [focused, setFocused] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://mokesh.pythonanywhere.com/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.enquiry,
          service: 'Contact Page Enquiry',
          organization: 'Website Visitor',
          phone: formData.phone
        }),
      });

      if (!response.ok) throw new Error('Email failed');

      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', enquiry: '' });

    } catch (error) {
      console.error(error);
      alert('Sorry, something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  /* ---------- SUCCESS STATE ---------- */
  if (isSubmitted) {
    return (
      <div className="form-card-wrapper">
        <div className="form-image-wrapper">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2070&q=80"
            alt="Team collaboration"
            className="form-image"
          />
          <div className="image-overlay">
            <span>Let's Collaborate</span>
          </div>
        </div>

        <div className="generic-form success-state">
          <div className="success-content">
            <FaCheckCircle className="success-icon" />
            <h3>Message Sent!</h3>
            <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
            <button
              className="reset-btn"
              onClick={() => setIsSubmitted(false)}
            >
              Send Another Message
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* ---------- FORM STATE ---------- */
  return (
    <div className="form-card-wrapper">
      <div className="form-image-wrapper">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2070&q=80"
          alt="Team collaboration"
          className="form-image"
        />
        <div className="image-overlay">
          <span>Let's Collaborate</span>
        </div>
      </div>

      <form className="generic-form" onSubmit={handleSubmit}>
        <div className="form-header">
          <HiSparkles className="form-header-icon" />
          <span>Send us a message</span>
        </div>

        <div className="form-row">
          <label className={focused === 'name' || formData.name ? 'active' : ''}>
            <span className="label-text">Name *</span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onFocus={() => setFocused('name')}
              onBlur={() => setFocused('')}
              required
            />
          </label>

          <label className={focused === 'email' || formData.email ? 'active' : ''}>
            <span className="label-text">Email *</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => setFocused('email')}
              onBlur={() => setFocused('')}
              required
            />
          </label>
        </div>

        <div className="form-row single">
          <label className={focused === 'phone' || formData.phone ? 'active' : ''}>
            <span className="label-text">Phone *</span>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              onFocus={() => setFocused('phone')}
              onBlur={() => setFocused('')}
              required
            />
          </label>
        </div>

        <div className="form-row single">
          <label className={focused === 'enquiry' || formData.enquiry ? 'active' : ''}>
            <span className="label-text">Enquiry</span>
            <textarea
              rows="4"
              name="enquiry"
              value={formData.enquiry}
              onChange={handleChange}
              onFocus={() => setFocused('enquiry')}
              onBlur={() => setFocused('')}
              placeholder="Share your question or requirement..."
            />
          </label>
        </div>

        <PrimaryButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <span className="btn-loading">
              <span className="spinner"></span>
              Sending...
            </span>
          ) : (
            <span className="btn-content">
              Get in touch <FaPaperPlane />
            </span>
          )}
        </PrimaryButton>
      </form>
    </div>
  );
};

/* ================= CONTACT INFO ================= */

const ContactInfo = () => {
  const contactItems = [
    {
      icon: FaEnvelope,
      content: 'tempesthub01@gmail.com',
      href: 'mailto:tempesthub01@gmail.com',
      label: 'Email Us'
    },
    {
      icon: FaLinkedin,
      content: 'linkedin.com/company/tempesthub',
      href: 'https://www.linkedin.com/company/tempesthub/',
      label: 'LinkedIn'
    },
    {
      icon: FaTwitter,
      content: 'x.com/Tempest_hub',
      href: 'https://x.com/Tempest_hub',
      label: 'Twitter'
    },
    {
      icon: FaFacebookF,
      content: 'facebook.com/tempest.hub',
      href: 'https://www.facebook.com/profile.php?id=61585734515727',
      label: 'Facebook'
    },
    {
      icon: FaInstagram,
      content: '@tempest.hub',
      href: 'https://www.instagram.com/tempest.hub',
      label: 'Instagram'
    }
  ];

  return (
    <div className="contact-info">
      <div className="contact-image-wrapper">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
          alt="Office workspace"
          className="contact-image"
        />
        <div className="image-overlay">
          <span>Visit Our Studio</span>
        </div>
      </div>
      
      <div className="contact-info-content">
        <h3>
          <span className="accent-bar"></span>
          Office Contact
        </h3>

        <div className="contact-items-list">
          {contactItems.map((item, index) => (
            <a 
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="contact-icon-wrapper">
                <item.icon className="contact-icon" />
              </div>
              <div className="contact-text">
                <p>{item.content}</p>
                <span className="contact-label">{item.label}</span>
              </div>
              <span className="arrow-indicator">→</span>
            </a>
          ))}
        </div>
      </div>
      
      {/* Quick response badge */}
      <div className="response-badge">
        <span className="pulse-dot"></span>
        Usually responds within 24 hours
      </div>
    </div>
  );
};

export default Contact;
