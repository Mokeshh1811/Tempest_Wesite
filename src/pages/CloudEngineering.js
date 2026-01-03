import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import PrimaryButton from '../components/PrimaryButton';
import '../components/CardGrid.css';
import '../components/Forms.css';

const CloudEngineering = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('http://localhost:3001/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          service: 'Cloud & Platform Engineering',
        }),
      });

      if (response.ok) {
        setSubmitMessage('Thank you! We\'ve sent you a confirmation email.');
        setFormData({
          name: '',
          email: '',
          organization: '',
          message: '',
        });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Email send failed:', error);
      setSubmitMessage('Sorry, there was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Section
        eyebrow="Cloud & Platform Engineering"
        title="Services that move ideas into production."
        subtitle="Tempest offers structured services for institutions and businesses—covering UX/UI design, full‑stack engineering, and AI-first solutions."
      >
        <div className="card-grid">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2070&q=80"
              alt="Product & UX Design"
              className="card-image"
            />
            <span className="card-tag">Experience</span>
            <h3 className="card-title">Product &amp; UX Design</h3>
            <p className="card-body">
              Research-backed UX, interface design systems, design audits and clickable prototypes tailored for web platforms, portals and internal tools.
            </p>
            <Link to="/services/product-ux-design" className="card-read-more" title="Read more">
              →
            </Link>
          </div>

          <div className="card">
            <img
src="https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Application Development"
              className="card-image"
            />
            <span className="card-tag">Engineering</span>
            <h3 className="card-title">Application Development</h3>
            <p className="card-body">
              End‑to‑end development of performant web applications, dashboards and integrations using modern stacks, cloud-native architectures and CI/CD practices.
            </p>
            <Link to="/services/application-development" className="card-read-more" title="Read more">
              →
            </Link>
          </div>

          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=2070&q=80"
              alt="Consulting and Mentoring"
              className="card-image"
            />
            <span className="card-tag">Enablement</span>
            <h3 className="card-title">Consulting &amp; Mentoring</h3>
            <p className="card-body">
              Technology roadmapping, architecture reviews and on‑the‑job mentoring for internal teams building their own products or academic initiatives.
            </p>
            <Link to="/services/consulting-mentoring" className="card-read-more" title="Read more">
              →
            </Link>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Service enquiry"
        title="Get in touch for Cloud & Platform Engineering services."
        subtitle="Tell us about your project and we'll get back to you within 24 hours."
      >
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="organization">Organization</label>
            <input
              type="text"
              id="organization"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <PrimaryButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Enquiry'}
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
      </Section>
    </>
  );
};

export default CloudEngineering;
