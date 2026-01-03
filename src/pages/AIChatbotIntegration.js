import React, { useState } from 'react';
import Section from '../components/Section';
import PrimaryButton from '../components/PrimaryButton';
import '../components/CardGrid.css';
import '../components/Forms.css';

const AIChatbotIntegration = () => {
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
      const response = await fetch('https://tempest-email-backend-60062823191.development.catalystserverless.in/server/tempest_email_backend_function/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          service: 'AI Chatbot Integration'
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
        eyebrow="AI Chatbot Integration"
        title="Branded, multi-channel chat experiences."
        subtitle="AI chatbots that integrate with your existing systems such as ticketing tools, ERPs, and internal knowledge bases."
      >
        <div className="service-content">
          <div className="service-overview">
            <h3>Intelligent Chatbot Solutions</h3>
            <p>Advanced conversational AI that enhances customer experience and operational efficiency.</p>

            <h4>Chatbot Types:</h4>
            <ul>
              <li>Customer support and FAQ bots</li>
              <li>Lead generation and qualification bots</li>
              <li>Internal helpdesk and knowledge bots</li>
              <li>E-commerce and sales assistant bots</li>
              <li>HR and recruitment chatbots</li>
            </ul>

            <h4>Integration Capabilities:</h4>
            <ul>
              <li>CRM systems (Salesforce, HubSpot)</li>
              <li>Helpdesk platforms (Zendesk, Freshdesk)</li>
              <li>E-commerce platforms (Shopify, WooCommerce)</li>
              <li>ERP systems and internal databases</li>
              <li>Document repositories and knowledge bases</li>
            </ul>

            <h4>Channels Supported:</h4>
            <p>Website, Facebook Messenger, WhatsApp, Slack, Microsoft Teams, custom mobile apps</p>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Service enquiry"
        title="Get in touch for AI Chatbot Integration services."
        subtitle="Tell us about your chatbot requirements and we'll get back to you within 24 hours."
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

export default AIChatbotIntegration;