import React from 'react';
import Section from '../components/Section';
import PrimaryButton from '../components/PrimaryButton';
import '../components/CardGrid.css';
import '../components/Forms.css';

const DigitalPlatforms = () => {
  return (
    <>
      <Section
        eyebrow="Digital Platforms"
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
      </Section>

      <Section
        eyebrow="Solution enquiry"
        title="Get in touch for Digital Platforms solutions."
        subtitle="Tell us about your digital needs and we'll get back to you within 24 hours."
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

export default DigitalPlatforms;