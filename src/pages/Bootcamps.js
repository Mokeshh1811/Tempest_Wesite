import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import PrimaryButton from '../components/PrimaryButton';
import '../components/CardGrid.css';
import '../components/Forms.css';
import './PageTransition.css';
import {
  FaLinkedinIn,
  FaXTwitter,
  FaFacebookF,
  FaInstagram
} from 'react-icons/fa6';

const Bootcamps = () => {
  const [visible, setVisible] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    bootcamp: '',
    experience: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  useEffect(() => {
    setVisible(true);
  }, []);

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
          name: formData.name,
          email: formData.email,
          service: 'Bootcamp / Internship Application',
          organization: formData.bootcamp,
          message: `
Phone: ${formData.phone}
Experience Level: ${formData.experience}
          `
        }),
      });

      if (!response.ok) throw new Error();

      setSubmitMessage("Thank you! We've sent you a confirmation email.");
      setFormData({
        name: '',
        email: '',
        phone: '',
        bootcamp: '',
        experience: ''
      });
    } catch {
      setSubmitMessage('Sorry, there was an error sending your message.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`page-transition ${visible ? 'enter' : ''}`}>
      {/* ================= BOOTCAMPS LIST ================= */}
      <Section
        eyebrow="Training"
        title="Training."
        subtitle="Hands‑on training focused on teaching strategies, modern tooling, and integrating real‑world projects into curriculum and labs."
      >
        <div className="card-grid">

          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="SQL Internship"
              className="card-image"
            />
            <span className="card-tag">Internship</span>
            <h3 className="card-title">SQL Internship</h3>
            <p className="card-body">
              Hands-on internship program focused on SQL database management, querying, and data analysis skills.
            </p>
            <Link to="/training/internships/sql-internship" className="card-read-more" title="Read more">
              →
            </Link>
          </div>

          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Python Internship"
              className="card-image"
            />
            <span className="card-tag">Internship</span>
            <h3 className="card-title">Python Internship</h3>
            <p className="card-body">
              Practical internship experience in Python programming, including data science, Full Stack Development, and automation.
            </p>
            <Link to="/training/internships/python-internship" className="card-read-more" title="Read more">
              →
            </Link>
          </div>

          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Full Stack Development Internship"
              className="card-image"
            />
            <span className="card-tag">Internship</span>
            <h3 className="card-title">Full Stack Development Internship</h3>
            <p className="card-body">
              Internship program covering front-end and back-end Full Stack Development technologies and best practices.
            </p>
            <Link to="/training/internships/website-development-internship" className="card-read-more" title="Read more">
              →
            </Link>
          </div>

          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="UI & UX Internship"
              className="card-image"
            />
            <span className="card-tag">Internship</span>
            <h3 className="card-title">UI &amp; UX Internship</h3>
            <p className="card-body">
              Internship focused on user interface and user experience design principles, tools, and prototyping.
            </p>
            <Link to="/training/internships/ui-ux-internship" className="card-read-more" title="Read more">
              →
            </Link>
          </div>

          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1581548133861-ad7a282a1d62?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Graphic Design Internship"
              className="card-image"
            />
            <span className="card-tag">Internship</span>
            <h3 className="card-title">Graphic Design Internship</h3>
            <p className="card-body">
              Creative internship program in graphic design, including branding, digital art, and visual communication.
            </p>
            <Link to="/training/internships/graphic-design-internship" className="card-read-more" title="Read more">
              →
            </Link>
          </div>
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=2070&q=80"
              alt="Quality Assurance Internship"
              className="card-image"
            />
            <span className="card-tag">Internship</span>
            <h3 className="card-title">Quality Assurance Internship</h3>
            <p className="card-body">
              Hands-on internship focused on software testing, manual & automation testing,
              test case design, and real-world QA workflows.
            </p>
            <Link
              to="/training/internships/quality-assurance-internship"
              className="card-read-more"
              title="Read more"
            >
              →
            </Link>
          
          </div>
<div className="card">
  <img
    src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=2070&q=80"
    alt="AI & Machine Learning Internship"
    className="card-image"
  />
  <span className="card-tag">Internship</span>
  <h3 className="card-title">AI & Machine Learning Internship</h3>
  <p className="card-body">
    Practical internship focused on artificial intelligence and machine learning,
    including data preprocessing, model building, training, evaluation, and real-world
    AI applications.
  </p>
  <Link
    to="/training/internships/ai-ml-internship"
    className="card-read-more"
    title="Read more"
  >
    →
  </Link>
</div>

          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=2070&q=80"
              alt="Data Science Internship"
              className="card-image"
            />
            <span className="card-tag">Internship</span>
            <h3 className="card-title">Data Science Internship</h3>
            <p className="card-body">
              Internship covering Python, data analysis, machine learning fundamentals,
              real datasets, and industry use cases.
            </p>
            <Link
              to="/training/internships/data-science-internship"
              className="card-read-more"
              title="Read more"
            >
              →
            </Link>
          </div>

        </div>
      </Section>

      {/* ================= APPLICATION FORM ================= */}
      <Section
        eyebrow="Application form"
        title="Apply for Tempest Training."
        subtitle="Fill in the details below to apply for upcoming training batches."
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
                <label>Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Preferred training or Internship</label>
                <select
                  name="bootcamp"
                  value={formData.bootcamp}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="SQL Internship">SQL Internship</option>
                  <option value="Python Internship">Python Internship</option>
                  <option value="Full Stack Development Internship">
                    Full Stack Development Internship
                  </option>
                  <option value="UI & UX Internship">UI & UX Internship</option>
                  <option value="Quality Assurance Internship">
                    Quality Assurance Internship
                  </option>
                  <option value="Data Science Internship">
                    Data Science Internship
                  </option>
                  <option value="Graphic Design Internship">
                    Graphic Design Internship
                  </option>
                </select>
              </div>

              <div className="form-group">
                <label>Experience Level</label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>

              <PrimaryButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting…' : 'Apply Now'}
              </PrimaryButton>

              {submitMessage && (
                <p
                  className={`submit-message ${submitMessage.includes('Thank')
                    ? 'success'
                    : 'error'
                    }`}
                >
                  {submitMessage}
                </p>
              )}
            </form>
          </div>

          {/* RIGHT INFO — unchanged */}
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
                  href="https://www.facebook.com/profile.php?id=61586259132683"
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

export default Bootcamps;
