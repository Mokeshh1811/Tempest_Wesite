import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import '../components/CardGrid.css';
import '../components/Forms.css';
import PrimaryButton from '../components/PrimaryButton';


const Solutions = () => {
  return (
    <>
      <Section
        eyebrow="Solutions & services"
        title="End‑to‑end support for your digital journey."
        subtitle="Tempest combines consulting, implementation and managed services with a strong AI and education layer."
      >
        <div className="card-grid">
          <div className="card">
            <span className="card-tag">Cloud & Platforms</span>
            <h3 className="card-title">Cloud Architecture & Migration</h3>
            <p className="card-body">
              Assessment, roadmap and migration of workloads to modern cloud platforms with observability and cost visibility built in.
            </p>
          </div>
          <div className="card">
            <span className="card-tag">Applications</span>
            <h3 className="card-title">Product & Portal Development</h3>
            <p className="card-body">
              Enterprise‑grade web portals, student and faculty dashboards, and integration hubs built on scalable architectures.
            </p>
          </div>
          <div className="card">
            <span className="card-tag">Support</span>
            <h3 className="card-title">Managed Services</h3>
            <p className="card-body">
              Proactive monitoring, incident management and enhancement support for your platforms and integrations.
            </p>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link to="/solutions/digital">
            <PrimaryButton>Explore Digital Platforms</PrimaryButton>
          </Link>
        </div>
      </Section>

      <Section
        eyebrow="AI services"
        title="AI engineered around your data and workflows."
        subtitle="A focused catalogue of AI services so institutions and businesses can adopt automation safely and incrementally."
      >
        <div className="card-grid">
          {/* AI Agents */}
          <div className="card">
            <span className="card-tag">AI Agents</span>
            <h3 className="card-title">AI Agents Development</h3>
            <p className="card-body">
              Multi‑step agents that can classify, route and resolve tickets, generate summaries, and trigger actions in your systems.
            </p>
          </div>

          {/* Custom AI Solutions */}
          <div className="card">
            <span className="card-tag">Custom AI</span>
            <h3 className="card-title">Custom AI Solutions</h3>
            <p className="card-body">
              Tailor‑made models and pipelines for tasks such as prediction, scoring and anomaly detection using your domain data.
            </p>
          </div>

          {/* AI Chatbot Integration */}
          <div className="card">
            <span className="card-tag">Chatbots</span>
            <h3 className="card-title">AI Chatbot Integration</h3>
            <p className="card-body">
              Conversational assistants integrated with websites, student portals or service desks, available across web and messaging channels.
            </p>
          </div>

          {/* Custom RAG */}
          <div className="card">
            <span className="card-tag">RAG</span>
            <h3 className="card-title">Custom RAG Models</h3>
            <p className="card-body">
              Retrieval‑augmented setups that answer questions using your policies, handbooks, syllabus and documentation with audit trails.
            </p>
          </div>

          {/* AI-Powered Automation */}
          <div className="card">
            <span className="card-tag">Automation</span>
            <h3 className="card-title">AI‑Powered Automation</h3>
            <p className="card-body">
              Automation of repetitive, judgement‑based steps like approvals, categorization and reporting using AI workflows.
            </p>
          </div>

          {/* Workflow Automation */}
          <div className="card">
            <span className="card-tag">AI + RPA</span>
            <h3 className="card-title">Workflow Automation (AI + RPA)</h3>
            <p className="card-body">
              Orchestrated flows that connect AI reasoning with bots and APIs to move data reliably across legacy and modern systems.
            </p>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link to="/solutions/ai-solutions">
            <PrimaryButton>Explore AI Solutions</PrimaryButton>
          </Link>
        </div>
      </Section>

      {/* Service enquiry form at bottom */}
      <Section
        eyebrow="Service enquiry"
        title="Tell us about your initiative."
        subtitle="Share basic details so Tempest can recommend the right mix of cloud, AI and training."
      >
        <ServiceForm />
      </Section>
    </>
  );
};

const ServiceForm = () => (
  <form className="generic-form">
    <div className="form-row">
      <label>
        Name *
        <input type="text" required />
      </label>
      <label>
        Company / Institution *
        <input type="text" required />
      </label>
    </div>
    <div className="form-row">
      <label>
        Email *
        <input type="email" required />
      </label>
      <label>
        Phone number *
        <input type="tel" required />
      </label>
    </div>
    <div className="form-row">
      <label>
        Area of interest *
        <select required>
          <option value="">Select</option>
          <option value="cloud">Cloud &amp; platform</option>
          <option value="apps">Applications</option>
          <option value="ai">AI services</option>
          <option value="training">Training &amp; education</option>
        </select>
      </label>
    </div>
    <div className="form-row">
      <label>
        Brief description
        <textarea rows="4" />
      </label>
    </div>
    <PrimaryButton type="submit">Submit request</PrimaryButton>
  </form>
);

export default Solutions;
