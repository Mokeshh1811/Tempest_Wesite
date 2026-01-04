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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('http://localhost:3003/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          service: 'Workflow Automation (AI + RPA)'
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
      {/* ================= SERVICE OVERVIEW ================= */}
      <Section
        eyebrow="Workflow Automation (AI + RPA)"
        title="Hybrid workflows connecting AI reasoning with RPA bots."
        subtitle="End-to-end automation across legacy and modern systems using AI decision-making and robotic process automation."
      >
        <div className="service-layout">

          {/* LEFT CONTENT */}
          <div className="service-text">
            <h3 className="service-heading">Intelligent Workflow Automation</h3>
            <p>
              Combine the power of AI reasoning with robotic process automation
              for comprehensive business process automation.
            </p>

            <div className="service-block">
              <h4>Workflow Types</h4>
              <ul>
                <li>Document processing and data extraction</li>
                <li>Multi-system data synchronization</li>
                <li>Intelligent decision routing</li>
                <li>Automated approval workflows</li>
                <li>Customer onboarding automation</li>
                <li>Compliance and audit automation</li>
              </ul>
            </div>

            <div className="service-block">
              <h4>Technology Integration</h4>
              <ul>
                <li>AI-powered decision making</li>
                <li>Robotic Process Automation (RPA)</li>
                <li>API orchestration and integration</li>
                <li>Legacy system modernization</li>
                <li>Real-time monitoring and alerts</li>
              </ul>
            </div>

            <div className="service-block">
              <h4>Supported Systems</h4>
              <ul>
                <li>ERP systems (SAP, Oracle, Microsoft Dynamics)</li>
                <li>CRM platforms (Salesforce, HubSpot)</li>
                <li>Document management systems</li>
                <li>Communication tools (Slack, Teams)</li>
                <li>Custom legacy applications</li>
              </ul>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="service-visual">
            <img
              src="https://static.vecteezy.com/system/resources/previews/036/184/700/non_2x/rpa-robotic-process-automation-concept-computer-robotic-process-automatisation-vector.jpg"
              alt="AI and RPA workflow automation"
              className="service-image"
            />
          </div>

        </div>
      </Section>

      {/* ================= SERVICE ENQUIRY ================= */}
      <Section
        eyebrow="Service enquiry"
        title="Let’s design something impactful."
        subtitle="Share your requirements and our team will reach out within 24 hours."
        align="left"
      >
        <div className="split-section">
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
            <label>Organization</label>
            <input
              type="text"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Message *</label>
            <textarea
              rows="5"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
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
          </div>
                    <div className="split-right card-grid animate-stagger">

            <div className="card glow-card">
              <h3 className="card-title">Connect With Us</h3>
              <p className="card-body">
                Follow us for updates, insights, and announcements.
              </p>

              <div className="social-icons">
                <a href="https://www.linkedin.com/company/tempesthub/" target="_blank" rel="noreferrer">in</a>
                <a href="https://x.com/Tempest_hub" target="_blank" rel="noreferrer">x</a>
                <a href="https://www.facebook.com/profile.php?id=61585734515727" target="_blank" rel="noreferrer">fb</a>
                <a href="https://www.instagram.com/tempest.hub?igsh=MXd2dDI5ZDZhNDVlZw==" target="_blank" rel="noreferrer">ig</a>
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

export default WorkflowAutomationRPA;
