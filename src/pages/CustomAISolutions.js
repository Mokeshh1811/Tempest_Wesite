import React, { useState } from 'react';
import Section from '../components/Section';
import PrimaryButton from '../components/PrimaryButton';
import '../components/CardGrid.css';
import '../components/Forms.css';

const CustomAISolutions = () => {
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
          service: 'Custom AI Solutions'
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
        eyebrow="Custom AI Solutions"
        title="Domain-specific models, embeddings and pipelines."
        subtitle="AI solutions crafted around your data and compliance requirements for accurate, explainable outcomes."
      >
        <div className="service-content">
          <div className="service-overview">
            <h3>Custom AI Development</h3>
            <p>Tailored AI solutions designed specifically for your industry, data, and business requirements.</p>

            <h4>AI Solution Types:</h4>
            <ul>
              <li>Natural Language Processing (NLP) models</li>
              <li>Computer Vision applications</li>
              <li>Predictive analytics and forecasting</li>
              <li>Recommendation systems</li>
              <li>Anomaly detection systems</li>
              <li>Automated decision-making systems</li>
            </ul>

            <h4>Technical Approach:</h4>
            <ul>
              <li>Custom model training and fine-tuning</li>
              <li>Data preprocessing and feature engineering</li>
              <li>Model evaluation and validation</li>
              <li>Explainable AI (XAI) implementation</li>
              <li>Compliance and ethical AI practices</li>
            </ul>

            <h4>Industries Served:</h4>
            <p>Healthcare, Finance, Education, Manufacturing, Retail, Legal, and more</p>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Service enquiry"
        title="Get in touch for Custom AI Solutions services."
        subtitle="Tell us about your AI project requirements and we'll get back to you within 24 hours."
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
            <p className={`submit-message ${submitMessage.includes('Thank you') ? 'success' : 'error'}`}>
              {submitMessage}
            </p>
          )}
        </form>
      </Section>
    </>
  );
};

export default CustomAISolutions;