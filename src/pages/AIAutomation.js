import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import PrimaryButton from '../components/PrimaryButton';
import '../components/CardGrid.css';
import '../components/Forms.css';

const AIAutomation = () => {
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
          service: 'AI & Automation Services'
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
  eyebrow="AI & Automation Services"
  title="AI capabilities designed around your workflows."
  subtitle="Tempest specializes in building practical AI layers on top of your existing tools and data—using agents, RAG and automation."
>
  <div className="card-grid">
    {/* Row 1 */}
    <div className="card">
      <img
        src="https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        alt="AI agents and workflows"
        className="card-image"
      />
      <span className="card-tag">Agents</span>
      <h3 className="card-title">AI Agents Development</h3>
      <p className="card-body">
        Design, build and deploy task‑oriented AI agents that can triage tickets, monitor systems, orchestrate workflows and collaborate with your teams.
      </p>
      <Link to="/services/ai-agents-development" className="card-read-more" title="Read more">
        →
      </Link>
    </div>

    <div className="card">
      <img
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        alt="Custom AI models"
        className="card-image"
      />
      <span className="card-tag">Custom AI</span>
      <h3 className="card-title">Custom AI Solutions</h3>
      <p className="card-body">
        Domain‑specific models, embeddings and pipelines crafted around your data and compliance requirements for accurate, explainable outcomes.
      </p>
      <Link to="/services/custom-ai-solutions" className="card-read-more" title="Read more">
        →
      </Link>
    </div>

    <div className="card">
      <img
        src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        alt="AI chatbot interface"
        className="card-image"
      />
      <span className="card-tag">Chat interfaces</span>
      <h3 className="card-title">AI Chatbot Integration</h3>
      <p className="card-body">
        Branded, multi‑channel chat experiences that integrate with your existing systems such as ticketing tools, ERPs and internal knowledge bases.
      </p>
      <Link to="/services/ai-chatbot-integration" className="card-read-more" title="Read more">
        →
      </Link>
    </div>

    {/* Row 2 */}
    <div className="card">
      <img
        src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        alt="RAG over documents and APIs"
        className="card-image"
      />
      <span className="card-tag">RAG</span>
      <h3 className="card-title">Custom RAG Models</h3>
      <p className="card-body">
        Retrieval‑augmented generation setups that combine vector search, structured retrieval and guardrails to answer questions on your documents and APIs.
      </p>
      <Link to="/services/custom-rag-models" className="card-read-more" title="Read more">
        →
      </Link>
    </div>

    <div className="card">
      <img
        src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        alt="AI-powered automation dashboards"
        className="card-image"
      />
      <span className="card-tag">Automation</span>
      <h3 className="card-title">AI-Powered Automation</h3>
      <p className="card-body">
        Intelligent automation of repetitive decision‑making tasks such as classification, routing, summarization and quality checks.
      </p>
      <Link to="/services/ai-powered-automation" className="card-read-more" title="Read more">
        →
      </Link>
    </div>

    <div className="card">
      <img
        src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        alt="Workflow automation with AI and RPA"
        className="card-image"
      />
      <span className="card-tag">Workflows</span>
      <h3 className="card-title">Workflow Automation (AI + RPA)</h3>
      <p className="card-body">
        Hybrid workflows that connect AI reasoning with RPA bots and APIs, creating reliable end‑to‑end automation across legacy and modern systems.
      </p>
      <Link to="/services/workflow-automation-rpa" className="card-read-more" title="Read more">
        →
      </Link>
    </div>
  </div>
</Section>


      <Section
        eyebrow="Service enquiry"
        title="Get in touch for AI & Automation services."
        subtitle="Tell us about your AI needs and we'll get back to you within 24 hours."
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

export default AIAutomation;
