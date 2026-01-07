import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import PrimaryButton from '../components/PrimaryButton';
import '../components/CardGrid.css';
import '../components/Forms.css';
import './PageTransition.css'; // 👈 reuse same animation
import {
  FaLinkedinIn,
  FaXTwitter,
  FaFacebookF,
  FaInstagram
} from 'react-icons/fa6';

const AIAutomation = () => {
  const [visible, setVisible] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  useEffect(() => {
    // Trigger animation on mount
    setVisible(true);
  }, []);

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
      const response = await fetch('http://localhost:3003/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          service: 'AI & Automation Services'
        }),
      });

      if (!response.ok) throw new Error();

      setSubmitMessage("Thank you! We've sent you a confirmation email.");
      setFormData({ name: '', email: '', organization: '', message: '' });
    } catch (error) {
      setSubmitMessage(
        'Sorry, there was an error sending your message. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`page-transition ${visible ? 'enter' : ''}`}>
      {/* SERVICES */}
      <Section
        eyebrow="AI & Automation Services"
        title="AI capabilities designed around your workflows."
        subtitle="Tempest specializes in building practical AI layers on top of your existing tools and data—using agents, RAG and automation."
      >
        <div className="card-grid">
          <div className="card">
            <img
              src="https://www.unite.ai/wp-content/uploads/2023/09/Heisenbergforlife_Center_the_scene_in_zoomed_scope_around_a_hum_7f069632-eda5-4edd-858b-cb44fec82929.png"
              alt="AI agents and workflows"
              className="card-image"
            />
            <span className="card-tag">Agents</span>
            <h3 className="card-title">AI Agents Development</h3>
            <p className="card-body">
              Design and deploy task-oriented AI agents that triage tickets,
              orchestrate workflows and collaborate with teams.
            </p>
            <Link to="/services/ai-agents-development" className="card-read-more">
              →
            </Link>
          </div>

          <div className="card">
            <img
              src="/images/unsplash-1498050108023-c5249f4df085.jpg"
              alt="Custom AI models"
              className="card-image"
            />
            <span className="card-tag">Custom AI</span>
            <h3 className="card-title">Custom AI Solutions</h3>
            <p className="card-body">
              Domain-specific AI models and pipelines built around your data
              and compliance needs.
            </p>
            <Link to="/services/custom-ai-solutions" className="card-read-more">
              →
            </Link>
          </div>

          <div className="card">
            <img
              src="/images/best-ai-chatbot.png"
              alt="AI chatbot interface"
              className="card-image"
            />
            <span className="card-tag">Chat</span>
            <h3 className="card-title">AI Chatbot Integration</h3>
            <p className="card-body">
              Branded, multi-channel chatbots integrated with ERPs,
              ticketing tools and knowledge bases.
            </p>
            <Link to="/services/ai-chatbot-integration" className="card-read-more">
              →
            </Link>
          </div>

          <div className="card">
            <img
              src="/images/bot8.jpeg"
              alt="RAG models"
              className="card-image"
            />
            <span className="card-tag">RAG</span>
            <h3 className="card-title">Custom RAG Models</h3>
            <p className="card-body">
              Retrieval-augmented generation combining vector search,
              structured retrieval and guardrails.
            </p>
            <Link to="/services/custom-rag-models" className="card-read-more">
              →
            </Link>
          </div>

          <div className="card">
            <img
              src="/images/HighTech 11.png"
              alt="AI-powered automation"
              className="card-image"
            />
            <span className="card-tag">Automation</span>
            <h3 className="card-title">AI-Powered Automation</h3>
            <p className="card-body">
              Intelligent automation for classification, routing,
              summarization and quality checks.
            </p>
            <Link to="/services/ai-powered-automation" className="card-read-more">
              →
            </Link>
          </div>

          <div className="card">
            <img
              src="https://static.vecteezy.com/system/resources/previews/036/184/700/non_2x/rpa-robotic-process-automation-concept-computer-robotic-process-automatisation-vector.jpg"
              alt="Workflow automation"
              className="card-image"
            />
            <span className="card-tag">Workflows</span>
            <h3 className="card-title">Workflow Automation (AI + RPA)</h3>
            <p className="card-body">
              Hybrid workflows combining AI reasoning with RPA bots
              and APIs for end-to-end automation.
            </p>
            <Link to="/services/workflow-automation-rpa" className="card-read-more">
              →
            </Link>
          </div>
        </div>
      </Section>

      {/* ENQUIRY */}
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
  <a
    href="https://www.linkedin.com/company/tempesthub/"
    target="_blank"
    rel="noreferrer"
    aria-label="LinkedIn"
  >
    <FaLinkedinIn />
  </a>

  <a
    href="https://x.com/Tempest_hub"
    target="_blank"
    rel="noreferrer"
    aria-label="X (Twitter)"
  >
    <FaXTwitter />
  </a>

  <a
    href="https://www.facebook.comD"
    target="_blank"
    rel="noreferrer"
    aria-label="Facebook"
  >
    <FaFacebookF />
  </a>

  <a
    href="https://www.instagram.com/tempest.hub?igsh=MXd2dDI5ZDZhNDVlZw=="
    target="_blank"
    rel="noreferrer"
    aria-label="Instagram"
  >
    <FaInstagram />
  </a>
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
    </div>
  );
};

export default AIAutomation;
