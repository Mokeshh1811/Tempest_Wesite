import React, { useState } from 'react';
import Section from '../components/Section';
import PrimaryButton from '../components/PrimaryButton';
import '../components/CardGrid.css';
import '../components/Forms.css';

const GraphicDesign = () => {
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
      const response = await fetch('http://localhost:3001/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          service: 'Graphic Design'
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
        eyebrow="Graphic Design"
        title="Creative visual solutions for your brand."
        subtitle="Professional graphic design services including branding, marketing materials, and digital assets."
      >
        <div className="service-content">
          <div className="service-overview">
            <h3>Graphic Design Services</h3>
            <p>Transform your ideas into compelling visual communications that engage your audience and strengthen your brand identity.</p>

            <h4>Services Offered:</h4>
            <ul>
              <li>Logo design and brand identity</li>
              <li>Marketing materials (brochures, flyers, posters)</li>
              <li>Social media graphics and digital assets</li>
              <li>Print design and packaging</li>
              <li>Website graphics and UI elements</li>
            </ul>

            <h4>Design Process:</h4>
            <ul>
              <li>Client consultation and brief understanding</li>
              <li>Research and concept development</li>
              <li>Design creation and iteration</li>
              <li>Client feedback and revisions</li>
              <li>Final delivery and file formats</li>
            </ul>

            <h4>Tools & Software:</h4>
            <p>Adobe Creative Suite (Photoshop, Illustrator, InDesign), Figma, Sketch, and other industry-standard design tools.</p>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Service enquiry"
        title="Discuss your graphic design project."
        subtitle="Tell us about your design needs and we'll provide a customized proposal."
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
            <label htmlFor="organization">Company/Organization *</label>
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
            <label htmlFor="message">Project Description *</label>
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
            {isSubmitting ? 'Sending...' : 'Submit Enquiry'}
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

export default GraphicDesign;