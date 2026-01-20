import React, { useState } from 'react';
import Section from '../components/Section';
import PrimaryButton from '../components/PrimaryButton';
import '../components/CardGrid.css';
import '../components/Forms.css';
import {
  FaLinkedinIn,
  FaXTwitter,
  FaFacebookF,
  FaInstagram
} from 'react-icons/fa6';

const GraphicDesignInternship = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
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
        body: JSON.stringify({
          ...formData,
          service: 'Graphic Design Internship'
        }),
      });

      if (!response.ok) throw new Error();

      setSubmitMessage("Thank you! We've sent you a confirmation email.");
      setFormData({ name: '', email: '', organization: '', message: '' });
    } catch {
      setSubmitMessage('Sorry, there was an error sending your message.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* ================= INTERNSHIP OVERVIEW ================= */}
      <Section
        eyebrow="Graphic Design Internship"
        title="Creative graphic design and visual communication skills."
        subtitle="Develop branding, digital art, and marketing materials through hands-on design projects."
      >
        <div className="service-layout">

          {/* LEFT CONTENT */}
          <div className="service-text">
            <h3 className="service-heading">
              Internship Program: Graphic Design
            </h3>

            <p>
              Hands-on training in visual communication, branding, and digital
              design with real-world creative projects.
            </p>

            <div className="service-block">
              <h4>Skills Covered</h4>
              <ul>
                <li>Branding and logo design</li>
                <li>Digital illustration and typography</li>
                <li>Marketing and social media creatives</li>
                <li>Print and digital media design</li>
                <li>Color theory and layout composition</li>
              </ul>
            </div>

            <div className="service-block">
              <h4>Tools & Technologies</h4>
              <ul>
                <li>Adobe Photoshop, Illustrator, InDesign</li>
                <li>Figma and collaboration tools</li>
                <li>Vector and raster graphics</li>
                <li>Print production basics</li>
                <li>Portfolio development</li>
              </ul>
            </div>

            <div className="service-block">
              <h4>Program Details</h4>
              <p>
                <strong>Duration:</strong> 3–6 months <br />
                <strong>Format:</strong> Remote / On-site <br />
                <strong>Eligibility:</strong> Students & Graduates
              </p>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="service-visual">
            <img
              src="https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=2070&q=80"
              alt="Graphic design internship"
              className="service-image"
            />
          </div>

        </div>
      </Section>

      {/* ================= APPLICATION FORM ================= */}
      <Section
        eyebrow="Application form"
        title="Apply for Tempest bootcamps."
        subtitle="Fill in the details below to apply for upcoming bootcamp batches."
      >
        <div className="split-section">

          {/* LEFT FORM */}
          <div className="split-left slide-up">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Institution / College *</label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Why are you interested in this internship? *</label>
                <textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <PrimaryButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending…' : 'Apply Now'}
              </PrimaryButton>

              {submitMessage && (
                <p
                  className={`submit-message ${
                    submitMessage.includes('Thank') ? 'success' : 'error'
                  }`}
                >
                  {submitMessage}
                </p>
              )}
            </form>
          </div>

          {/* RIGHT INFO */}
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

export default GraphicDesignInternship;
