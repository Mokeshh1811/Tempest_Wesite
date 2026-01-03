import React, { useState } from 'react';
import Section from '../components/Section';
import PrimaryButton from '../components/PrimaryButton';
import '../components/CardGrid.css';
import '../components/Forms.css';

const AIPoweredAutomation = () => {
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
          service: 'AI-Powered Automation'
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
        eyebrow="AI-Powered Automation"
        title="Intelligent automation of repetitive tasks."
        subtitle="AI automation for classification, routing, summarization, and quality checks."
      >
        <div className="service-content">
          <div className="service-overview">
            <h3>Intelligent Process Automation</h3>
            <p>Leverage AI to automate complex decision-making tasks and streamline your business processes.</p>

            <h4>Automation Use Cases:</h4>
            <ul>
              <li>Document classification and categorization</li>
              <li>Email and ticket routing</li>
              <li>Content summarization and analysis</li>
              <li>Quality control and validation</li>
              <li>Data extraction and processing</li>
              <li>Customer feedback analysis</li>
            </ul>

            <h4>AI Technologies:</h4>
            <ul>
              <li>Machine Learning classification models</li>
              <li>Natural Language Processing (NLP)</li>
              <li>Computer Vision for document processing</li>
              <li>Predictive analytics and decision trees</li>
              <li>Rule-based systems with AI enhancement</li>
            </ul>

            <h4>Integration Options:</h4>
            <ul>
              <li>Existing workflow systems</li>
              <li>Business process management tools</li>
              <li>ERP and CRM systems</li>
              <li>Document management systems</li>
              <li>Communication platforms</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Service enquiry"
        title="Get in touch for AI-Powered Automation services."
        subtitle="Tell us about your automation needs and we'll get back to you within 24 hours."
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

export default AIPoweredAutomation;