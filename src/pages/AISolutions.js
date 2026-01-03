import React from 'react';
import Section from '../components/Section';
import PrimaryButton from '../components/PrimaryButton';
import '../components/CardGrid.css';
import '../components/Forms.css';

const AISolutions = () => {
  return (
    <>
      <Section
        eyebrow="AI Solutions"
        title="AI engineered around your data and workflows."
        subtitle="A focused catalogue of AI services so institutions and businesses can adopt automation safely and incrementally."
      >
        <div className="card-grid">
          <div className="card">
            <span className="card-tag">AI Agents</span>
            <h3 className="card-title">AI Agents Development</h3>
            <p className="card-body">
              Multi‑step agents that can classify, route and resolve tickets, generate summaries, and trigger actions in your systems.
            </p>
          </div>

          <div className="card">
            <span className="card-tag">Custom AI</span>
            <h3 className="card-title">Custom AI Solutions</h3>
            <p className="card-body">
              Tailor‑made models and pipelines for tasks such as prediction, scoring and anomaly detection using your domain data.
            </p>
          </div>

          <div className="card">
            <span className="card-tag">Chatbots</span>
            <h3 className="card-title">AI Chatbot Integration</h3>
            <p className="card-body">
              Conversational assistants integrated with websites, student portals or service desks, available across web and messaging channels.
            </p>
          </div>

          <div className="card">
            <span className="card-tag">RAG</span>
            <h3 className="card-title">Custom RAG Models</h3>
            <p className="card-body">
              Retrieval‑augmented setups that answer questions using your policies, handbooks, syllabus and documentation with audit trails.
            </p>
          </div>

          <div className="card">
            <span className="card-tag">Automation</span>
            <h3 className="card-title">AI‑Powered Automation</h3>
            <p className="card-body">
              Automation of repetitive, judgement‑based steps like approvals, categorization and reporting using AI workflows.
            </p>
          </div>

          <div className="card">
            <span className="card-tag">AI + RPA</span>
            <h3 className="card-title">Workflow Automation (AI + RPA)</h3>
            <p className="card-body">
              Orchestrated flows that connect AI reasoning with bots and APIs to move data reliably across legacy and modern systems.
            </p>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Solution enquiry"
        title="Get in touch for AI Solutions."
        subtitle="Tell us about your AI needs and we'll get back to you within 24 hours."
      >
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="organization">Organization</label>
            <input type="text" id="organization" name="organization" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <PrimaryButton type="submit">Send Enquiry</PrimaryButton>
        </form>
      </Section>
    </>
  );
};

export default AISolutions;