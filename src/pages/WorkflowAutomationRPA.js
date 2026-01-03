import React, { useState } from 'react';
import Section from '../components/Section';
import PrimaryButton from '../components/PrimaryButton';
import '../components/CardGrid.css';
import '../components/Forms.css';

const WorkflowAutomationRPA = () => {
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
          service: 'Workflow Automation (AI + RPA)'
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
        eyebrow="Workflow Automation (AI + RPA)"
        title="Hybrid workflows connecting AI reasoning with RPA bots."
        subtitle="End-to-end automation across legacy and modern systems using AI decision-making and robotic process automation."
      >
        <div className="service-content">
          <div className="service-overview">
            <h3>Intelligent Workflow Automation</h3>
            <p>Combine the power of AI reasoning with robotic process automation for comprehensive business process automation.</p>

            <h4>Workflow Types:</h4>
            <ul>
              <li>Document processing and data extraction</li>
              <li>Multi-system data synchronization</li>
              <li>Intelligent decision routing</li>
              <li>Automated approval workflows</li>
              <li>Customer onboarding automation</li>
              <li>Compliance and audit automation</li>
            </ul>

            <h4>Technology Integration:</h4>
            <ul>
              <li>AI-powered decision making</li>
              <li>Robotic Process Automation (RPA)</li>
              <li>API orchestration and integration</li>
              <li>Legacy system modernization</li>
              <li>Real-time monitoring and alerts</li>
            </ul>

            <h4>Supported Systems:</h4>
            <ul>
              <li>ERP systems (SAP, Oracle, Microsoft Dynamics)</li>
              <li>CRM platforms (Salesforce, HubSpot)</li>
              <li>Document management systems</li>
              <li>Communication tools (Slack, Teams)</li>
              <li>Custom legacy applications</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Service enquiry"
        title="Get in touch for Workflow Automation services."
        subtitle="Tell us about your workflow automation needs and we'll get back to you within 24 hours."
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

export default WorkflowAutomationRPA;