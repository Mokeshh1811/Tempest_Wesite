import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import PrimaryButton from '../components/PrimaryButton';
import '../components/CardGrid.css';
import '../components/Forms.css';
import './PageTransition.css';

const FDPs = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);
  return (
  <div className={`page-transition ${visible ? 'enter' : ''}`}>
      <Section
        eyebrow="Faculty Development Programs (FDPs)"
        title="Faculty development programs."
        subtitle="Hands‑on FDPs focused on teaching strategies, modern tooling, and integrating real‑world projects into curriculum and labs."
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
              Practical internship experience in Python programming, including data science, web development, and automation.
            </p>
            <Link to="/training/internships/python-internship" className="card-read-more" title="Read more">
              →
            </Link>
          </div>

          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Website Development Internship"
              className="card-image"
            />
            <span className="card-tag">Internship</span>
            <h3 className="card-title">Website Development Internship</h3>
            <p className="card-body">
              Internship program covering front-end and back-end web development technologies and best practices.
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
        </div>
      </Section>

      <Section
        eyebrow="Application form"
        title="Apply for Tempest FDPs."
        subtitle="Fill in the details below to nominate yourself or your institution for upcoming FDP batches."
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
            <label htmlFor="phone">Phone Number *</label>
            <input type="tel" id="phone" name="phone" required />
          </div>
          <div className="form-group">
            <label htmlFor="institution">Institution *</label>
            <input type="text" id="institution" name="institution" required />
          </div>
          <div className="form-group">
            <label htmlFor="department">Department</label>
            <input type="text" id="department" name="department" />
          </div>
          <div className="form-group">
            <label htmlFor="fdp">Preferred FDP Topic or Internship</label>
            <select id="fdp" name="fdp">
              <option value="">Select</option>
              <option value="teaching">Modern Teaching Methods</option>
              <option value="tools">Development Tools</option>
              <option value="integration">Project Integration</option>
              <option value="sql-internship">SQL Internship</option>
              <option value="python-internship">Python Internship</option>
              <option value="web-dev-internship">Website Development Internship</option>
              <option value="ui-ux-internship">UI & UX Internship</option>
              <option value="graphic-design-internship">Graphic Design Internship</option>
            </select>
          </div>
          <PrimaryButton type="submit">Apply Now</PrimaryButton>
        </form>
      </Section>
    </div>
  );
};

export default FDPs;