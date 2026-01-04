import React, { useState } from 'react';
import Section from '../components/Section';
import PrimaryButton from '../components/PrimaryButton';
import '../components/CardGrid.css';
import '../components/Forms.css';

const ContentWriting = () => {
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
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          service: 'Content Writing'
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
      {/* ================= CONTENT WRITING OVERVIEW ================= */}
      <Section
        eyebrow="Content Writing"
        title="Engaging content that connects with your audience."
        subtitle="Professional content writing for websites, blogs, marketing materials, and brand storytelling."
      >
        <div className="service-layout">

          {/* LEFT CONTENT */}
          <div className="service-text">
            <h3 className="service-heading">
              Content Writing Services
            </h3>

            <p>
              We craft compelling, SEO-friendly content that informs, engages,
              and converts—aligned with your brand voice and business goals.
            </p>

            <div className="service-block">
              <h4>Services Offered</h4>
              <ul>
                <li>Website content & copywriting</li>
                <li>Blog posts & long-form articles</li>
                <li>SEO-optimized content</li>
                <li>Social media content</li>
                <li>Marketing emails & newsletters</li>
              </ul>
            </div>

            <div className="service-block">
              <h4>Content Types</h4>
              <ul>
                <li>Landing pages & product descriptions</li>
                <li>Educational & technical articles</li>
                <li>Brand storytelling</li>
                <li>Documentation & guides</li>
                <li>Creative promotional copy</li>
              </ul>
            </div>

            <div className="service-block">
              <h4>Our Workflow</h4>
              <p>
                Research → Strategy → Writing → Editing → SEO Optimization → Delivery
              </p>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="service-visual">
            <img
              src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=2070&q=80"
              alt="Content writing workspace"
              className="service-image"
            />
          </div>

        </div>
      </Section>

      {/* ================= SERVICE ENQUIRY ================= */}
      <Section
        eyebrow="Service enquiry"
        title="Discuss your content needs."
        subtitle="Tell us about your requirements and we’ll design a tailored content strategy."
        align="left"
      >
        <div className="split-section">

          {/* FORM */}
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
                <label>Company / Organization *</label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Content Requirements *</label>
                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <PrimaryButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Submit Enquiry'}
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
          </div>

          {/* RIGHT INFO CARDS */}
          <div className="split-right card-grid animate-stagger">

            <div className="card glow-card">
              <h3 className="card-title">Connect With Us</h3>
              <p className="card-body">
                Follow us for insights, updates, and content best practices.
              </p>

              <div className="social-icons">
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">in</a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer">x</a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer">ig</a>
              </div>
            </div>

            <div className="card glow-card">
              <h3 className="card-title">Email Us</h3>
              <p className="card-body">
                Reach out directly for content partnerships or long-term retainers.
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

export default ContentWriting;
