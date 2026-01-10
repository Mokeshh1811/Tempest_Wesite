import React, { useState } from 'react';
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

const SQLInternship = () => {
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
      const response = await fetch('https://mokesh.pythonanywhere.com/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          service: 'SQL Internship'
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
      {/* ================= INTERNSHIP OVERVIEW ================= */}
      <Section
        eyebrow="SQL Internship"
        title="Hands-on database management and SQL querying skills."
        subtitle="Gain practical experience in SQL database design, querying, and data analysis through real-world projects."
      >
        <div className="service-layout">

          {/* LEFT CONTENT */}
          <div className="service-text">
            <h3 className="service-heading">
              Internship Program: SQL Database Management
            </h3>

            <p>
              Develop expertise in relational databases and SQL through structured
              internship training and industry-aligned projects.
            </p>

            <div className="service-block">
              <h4>Skills Covered</h4>
              <ul>
                <li>Database design and normalization</li>
                <li>SQL querying and data manipulation</li>
                <li>Data analysis and reporting</li>
                <li>Database administration basics</li>
                <li>Performance optimization</li>
              </ul>
            </div>

            <div className="service-block">
              <h4>Tools & Technologies</h4>
              <ul>
                <li>MySQL, PostgreSQL, SQL Server</li>
                <li>Database management tools</li>
                <li>Data visualization tools</li>
                <li>ETL processes</li>
                <li>Database security fundamentals</li>
              </ul>
            </div>

            <div className="service-block">
              <h4>Program Details</h4>
              <p>
                <strong>Duration:</strong> 3–6 months <br />
                <strong>Format:</strong> Remote / On-site <br />
                <strong>Eligibility:</strong> Students & Graduates
              </p>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="service-visual">
            <img
              src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=2070&q=80"
              alt="SQL database internship"
              className="service-image"
            />
          </div>

        </div>
      </Section>

      {/* ================= APPLICATION FORM ================= */}
      <Section
        eyebrow="Application form"
        title="Apply for Tempest bootcamps."
        subtitle="Fill in the details below to apply for upcoming bootcamp batches."
      >
                <div className="split-section">
                            <div className="split-left slide-up">
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
            <label htmlFor="phone">Phone Number *</label>
            <input type="tel" id="phone" name="phone" required />
          </div>
          <div className="form-group">
            <label htmlFor="bootcamp">Preferred Bootcamp or Internship</label>
            <select id="bootcamp" name="bootcamp">
              <option value="">Select</option>
              <option value="web">Full Stack Development</option>
              <option value="cloud">Cloud Engineering</option>
              <option value="ai">AI Bootcamp</option>
              <option value="sql-internship">SQL Internship</option>
              <option value="python-internship">Python Internship</option>
              <option value="web-dev-internship">Full Stack Development Internship</option>
              <option value="ui-ux-internship">UI & UX Internship</option>
              <option value="graphic-design-internship">Graphic Design Internship</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="experience">Experience Level</label>
            <select id="experience" name="experience">
              <option value="">Select</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>
          <PrimaryButton type="submit">Apply Now</PrimaryButton>
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

export default SQLInternship;
