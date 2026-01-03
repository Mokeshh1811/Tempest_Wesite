import React, { useState } from 'react';
import Section from '../components/Section';
import PrimaryButton from '../components/PrimaryButton';
import '../components/CardGrid.css';
import '../components/Forms.css';

const AIAgentsDevelopment = () => {
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
          service: 'AI Agents Development'
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
        eyebrow="AI Agents Development"
        title="Design, build and deploy task-oriented AI agents."
        subtitle="AI agents that can triage tickets, monitor systems, orchestrate workflows, and collaborate with your teams."
      >
        <div className="service-content">
          <div className="service-overview">
            <h3>AI Agent Capabilities</h3>
            <p>We develop intelligent AI agents that automate complex tasks and enhance team productivity.</p>

            <h4>Agent Types:</h4>
            <ul>
              <li>Customer support and ticketing agents</li>
              <li>System monitoring and alerting agents</li>
              <li>Workflow orchestration agents</li>
              <li>Data analysis and reporting agents</li>
              <li>Collaborative team assistant agents</li>
            </ul>

            <h4>Technical Implementation:</h4>
            <ul>
              <li>Large Language Models (GPT, Claude, etc.)</li>
              <li>Function calling and tool integration</li>
              <li>Memory and context management</li>
              <li>Multi-modal capabilities</li>
              <li>Real-time decision making</li>
            </ul>

            <h4>Integration Options:</h4>
            <p>Slack, Microsoft Teams, Discord, custom APIs, existing business systems</p>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Service enquiry"
        title="Get in touch for AI Agents Development services."
        subtitle="Tell us about your AI agent requirements and we'll get back to you within 24 hours."
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

export default AIAgentsDevelopment;