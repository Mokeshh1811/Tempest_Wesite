import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import PrimaryButton from '../components/PrimaryButton';
import '../components/CardGrid.css';
import '../components/Forms.css';
import {
  FaLinkedinIn,
  FaXTwitter,
  FaFacebookF,
  FaInstagram
} from 'react-icons/fa6';

const Services = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      organization: '',
      message: '',
    });
  
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');
    const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('https://mokesh.pythonanywhere.com/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          service: 'Cloud & Platform Engineering',
        }),
      });

      if (!response.ok) throw new Error();

      setSubmitMessage("Thank you! We've sent you a confirmation email.");
      setFormData({
        name: '',
        email: '',
        organization: '',
        message: '',
      });
    } catch (error) {
      setSubmitMessage(
        'Sorry, there was an error sending your message. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <>
      <Section
        eyebrow="Cloud & Platform Engineering"
        title="Services that move ideas into production."
        subtitle="Tempest offers structured services for institutions and businesses—covering UX/UI design, full-stack engineering, and AI-first solutions."
      >
        <div className="card-grid">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2070&q=80"
              alt="Product & UX Design"
              className="card-image"
            />
            <span className="card-tag">Experience</span>
            <h3 className="card-title">Product & UX Design</h3>
            <p className="card-body">
              Research-backed UX, interface design systems, design audits and
              clickable prototypes tailored for modern platforms.
            </p>
            {/* <Link to="/services/product-ux-design" className="card-read-more">
              →
            </Link> */}
          </div>

          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=2070&q=80"
              alt="Application Development"
              className="card-image"
            />
            <span className="card-tag">Engineering</span>
            <h3 className="card-title">Application Development</h3>
            <p className="card-body">
              End-to-end development of performant, scalable web applications
              using cloud-native architectures.
            </p>
            {/* <Link to="/services/application-development" className="card-read-more">
              →
            </Link> */}
          </div>
                    <div className="card">
            <img
              src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Graphic Design"
              className="card-image"
            />
            <span className="card-tag">Design</span>
            <h3 className="card-title">Graphic Design</h3>
            <p className="card-body">
              Creative graphic design services including branding, logos, marketing materials, and visual communication tailored to your needs.
            </p>
            {/* <Link to="/services/graphic-design" className="card-read-more" title="Read more">
              →
            </Link> */}
          </div>
                    <div className="card">
            <img
              src="https://images.unsplash.com/photo-1456324504439-367cee3b3c32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Content Writing"
              className="card-image"
            />
            <span className="card-tag">Content</span>
            <h3 className="card-title">Content Writing</h3>
            <p className="card-body">
              Professional content writing services including blog posts, website copy, marketing materials, and SEO-optimized content.
            </p>
            {/* <Link to="/services/content-writing" className="card-read-more" title="Read more">
              →
            </Link> */}
          </div>

          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=2070&q=80"
              alt="Consulting and Mentoring"
              className="card-image"
            />
            <span className="card-tag">Enablement</span>
            <h3 className="card-title">Consulting & Mentoring</h3>
            <p className="card-body">
              Technology roadmapping, architecture reviews and on-the-job
              mentoring for internal teams.
            </p>
            {/* <Link to="/services/consulting-mentoring" className="card-read-more">
              →
            </Link> */}
            
          </div>
          <div className="card">
  <img
    src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=2070&q=80"
    alt="Video Editing & Production"
    className="card-image"
  />
  <span className="card-tag">Media</span>
  <h3 className="card-title">Video Editing & Production</h3>
  <p className="card-body">
    Professional video editing, motion graphics, and visual storytelling
    tailored for brands, institutions, and digital platforms.
  </p>
  {/* <Link to="/services/video-editing-production" className="card-read-more">
    →
  </Link> */}
</div>
<div className="card">
  <img
    src="https://images.unsplash.com/photo-1611505908502-5b67e53e3a76?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    alt="3D Printing & Rapid Prototyping"
    className="card-image"
  />
  <span className="card-tag">3D Printing</span>
  <h3 className="card-title">3D Printing & Rapid Prototyping</h3>
  <p className="card-body">
    On-demand additive manufacturing for rapid prototyping, functional parts and small-batch production, enabling faster design iteration and validation.
  </p>
  {/*
  <Link to="/services/3d-printing" className="card-read-more" title="Read more">
    →
  </Link>
  */}
</div>


        </div>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link to="/services/cloud">
            <PrimaryButton>Explore Cloud & Platform Engineering</PrimaryButton>
          </Link>
        </div>
      </Section>

      <Section
        eyebrow="AI Services"
        title="AI capabilities designed around your workflows."
        subtitle="Tempest specializes in building practical AI layers on top of your existing tools and data—using agents, RAG and automation."
      >
        <div className="card-grid">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="AI Agents Development"
              className="card-image"
            />
            <span className="card-tag">Agents</span>
            <h3 className="card-title">AI Agents Development</h3>
            <p className="card-body">
              Design, build and deploy task‑oriented AI agents that can triage tickets, monitor systems, orchestrate workflows and collaborate with your teams.
            </p>
            {/* <Link to="/services/ai-agents-development" className="card-read-more" title="Read more">
              →
            </Link> */}
          </div>

          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Custom AI Solutions"
              className="card-image"
            />
            <span className="card-tag">Custom AI</span>
            <h3 className="card-title">Custom AI Solutions</h3>
            <p className="card-body">
              Domain‑specific models, embeddings and pipelines crafted around your data and compliance requirements for accurate, explainable outcomes.
            </p>
            {/* <Link to="/services/custom-ai-solutions" className="card-read-more" title="Read more">
              →
            </Link> */}
          </div>

          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="AI Chatbot Integration"
              className="card-image"
            />
            <span className="card-tag">Chat interfaces</span>
            <h3 className="card-title">AI Chatbot Integration</h3>
            <p className="card-body">
              Branded, multi‑channel chat experiences that integrate with your existing systems such as ticketing tools, ERPs and internal knowledge bases.
            </p>
            {/* <Link to="/services/ai-chatbot-integration" className="card-read-more" title="Read more">
              →
            </Link> */}
          </div>

          <div className="card">
            <img
              src="/images/bot8.jpeg"
              alt="Custom RAG Models"
              className="card-image"
            />
            <span className="card-tag">RAG</span>
            <h3 className="card-title">Custom RAG Models</h3>
            <p className="card-body">
              Retrieval‑augmented generation setups that combine vector search, structured retrieval and guardrails to answer questions on your documents and APIs.
            </p>
            {/* <Link to="/services/custom-rag-models" className="card-read-more" title="Read more">
              →
            </Link> */}
          </div>

          <div className="card">
            <img
              src="/images/HighTech%2011.png"
              alt="AI-Powered Automation"
              className="card-image"
            />
            <span className="card-tag">Automation</span>
            <h3 className="card-title">AI-Powered Automation</h3>
            <p className="card-body">
              Intelligent automation of repetitive decision‑making tasks such as classification, routing, summarization and quality checks.
            </p>
            {/* <Link to="/services/ai-powered-automation" className="card-read-more" title="Read more">
              →
            </Link> */}
          </div>

          <div className="card">
            <img
              src="https://static.vecteezy.com/system/resources/previews/036/184/700/non_2x/rpa-robotic-process-automation-concept-computer-robotic-process-automatisation-vector.jpg"
              alt="Workflow Automation"
              className="card-image"
            />
            <span className="card-tag">Workflows</span>
            <h3 className="card-title">Workflow Automation (AI + RPA)</h3>
            <p className="card-body">
              Hybrid workflows that connect AI reasoning with RPA bots and APIs, creating reliable end‑to‑end automation across legacy and modern systems.
            </p>
            {/* <Link to="/services/workflow-automation-rpa" className="card-read-more" title="Read more">
              →
            </Link> */}
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link to="/services/ai">
            <PrimaryButton>Explore AI & Automation Services</PrimaryButton>
          </Link>
        </div>
      </Section>

      {/* Service enquiry form at bottom of Services page */}
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
    </>
  );
};

const ServiceForm = () => {
  return (
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
          Service area *
          <select required>
            <option value="">Select</option>
            <option value="graphic-design">Graphic Design</option>
            <option value="website">Full Stack Development</option>
            <option value="content-writing">Content Writing</option>
            <option value="ai-solution">AI Solution</option>
          </select>
        </label>
      </div>
      <div className="form-row">
        <label>
          Brief about the project
          <textarea rows="4" />
        </label>
      </div>
      <PrimaryButton type="submit">Submit request</PrimaryButton>
    </form>
  );
};

export default Services;
