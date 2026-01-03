import React, { useState } from 'react';
import Section from '../components/Section';
import PrimaryButton from '../components/PrimaryButton';
import '../components/CardGrid.css';
import '../components/Forms.css';

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
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          service: 'Graphic Design Internship'
        }),
      });

      if (response.ok) {
        setSubmitMessage('Thank you! We\'ve sent you a confirmation email.');
        setFormData({ name: '', email: '', organization: '', message: '' });
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
        eyebrow="Graphic Design Internship"
        title="Creative graphic design and visual communication skills."
        subtitle="Develop branding, digital art, and marketing materials through hands-on design projects."
      >
        <div className="service-content">
          <div className="service-overview">
            <h3>Internship Program: Graphic Design</h3>
            <p>Hands-on training in visual communication, branding, and digital design tools.</p>

            <h4>Skills Covered:</h4>
            <ul>
              <li>Branding and logo design</li>
              <li>Digital illustration and typography</li>
              <li>Marketing materials design</li>
              <li>Print and digital media</li>
              <li>Color theory and composition</li>
            </ul>

            <h4>Tools and Technologies:</h4>
            <ul>
              <li>Adobe Creative Suite (Photoshop, Illustrator, InDesign)</li>
              <li>Figma and design collaboration tools</li>
              <li>Vector graphics and raster editing</li>
              <li>Print production basics</li>
              <li>Design portfolio development</li>
            </ul>

            <h4>Program Details:</h4>
            <p><strong>Duration:</strong> 3-6 months | <strong>Format:</strong> Remote/On-site | <strong>Eligibility:</strong> Students and graduates</p>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Application form"
        title="Apply for Graphic Design Internship."
        subtitle="Fill in the details below to apply for the graphic design internship program."
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
            <label htmlFor="organization">Institution/College *</label>
            <input
              type="text"
              id="organization"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Why are you interested in this internship? *</label>
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
            {isSubmitting ? 'Sending...' : 'Apply Now'}
          </PrimaryButton>
          {submitMessage && (
            <p className={`submit-message ${submitMessage.includes('Thank you') ? 'success' : 'error'}`}>
              {submitMessage}
            </p>
          )}
        </form>
      </Section>
    </>
  );
};

export default GraphicDesignInternship;