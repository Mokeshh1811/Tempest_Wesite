import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import PrimaryButton from '../components/PrimaryButton';
import '../components/CardGrid.css';
import '../components/Forms.css';

const AISolution = () => {
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
      const response = await fetch('http://localhost:3002/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          service: 'AI Solution'
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
        eyebrow="AI Solutions"
        title="Intelligent solutions powered by artificial intelligence."
        subtitle="Transform your business with AI-driven automation, insights, and intelligent systems."
      >
        <div className="service-content">
          <div className="service-overview">
            <h3>AI Solutions Overview</h3>
            <p>Leverage the power of artificial intelligence to automate processes, gain insights, and create intelligent applications.</p>

            <h4>AI Services Offered:</h4>
            <div className="card-grid">
              <div className="card">
                <span className="card-tag">Agents</span>
                <h3 className="card-title">AI Agents Development</h3>
                <p className="card-body">
                  Design, build and deploy task-oriented AI agents for automation and assistance.
                </p>
                <Link to="/services/ai-agents-development" className="card-read-more" title="Read more">
                  →
                </Link>
              </div>

              <div className="card">
                <span className="card-tag">Custom AI</span>
                <h3 className="card-title">Custom AI Solutions</h3>
                <p className="card-body">
                  Tailor-made models and pipelines for specific business needs and data.
                </p>
                <Link to="/services/custom-ai-solutions" className="card-read-more" title="Read more">
                  →
                </Link>
              </div>

              <div className="card">
                <span className="card-tag">Chatbots</span>
                <h3 className="card-title">AI Chatbot Integration</h3>
                <p className="card-body">
                  Conversational AI assistants for customer service and engagement.
                </p>
                <Link to="/services/ai-chatbot-integration" className="card-read-more" title="Read more">
                  →
                </Link>
              </div>

              <div className="card">
                <span className="card-tag">RAG</span>
                <h3 className="card-title">Custom RAG Models</h3>
                <p className="card-body">
                  Retrieval-augmented generation for accurate, context-aware responses.
                </p>
                <Link to="/services/custom-rag-models" className="card-read-more" title="Read more">
                  →
                </Link>
              </div>

              <div className="card">
                <span className="card-tag">Automation</span>
                <h3 className="card-title">AI-Powered Automation</h3>
                <p className="card-body">
                  Intelligent automation of repetitive and decision-making tasks.
                </p>
                <Link to="/services/ai-powered-automation" className="card-read-more" title="Read more">
                  →
                </Link>
              </div>

              <div className="card">
                <span className="card-tag">Workflows</span>
                <h3 className="card-title">Workflow Automation (AI + RPA)</h3>
                <p className="card-body">
                  Hybrid workflows combining AI reasoning with robotic process automation.
                </p>
                <Link to="/services/workflow-automation-rpa" className="card-read-more" title="Read more">
                  →
                </Link>
              </div>
            </div>

            <h4>AI Implementation Process:</h4>
            <p>Assessment → Strategy → Development → Integration → Training → Support</p>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Service enquiry"
        title="Explore AI possibilities for your business."
        subtitle="Discuss your AI requirements and discover how we can help transform your operations."
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
            <label htmlFor="message">AI Project Description *</label>
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

export default AISolution;