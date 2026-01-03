import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import PrimaryButton from '../components/PrimaryButton';
import '../components/CardGrid.css';
import '../components/Forms.css';

const Training = () => {
  return (
    <>
      <Section
        eyebrow="Training & education"
        title="Programs that turn learners into builders."
        subtitle="Tempest designs modular training tracks that combine core concepts, live coding and guided projects for students and faculty."
      >
        <div className="card-grid">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
              alt="Industry-ready bootcamps"
              className="card-image"
            />
            <span className="card-tag">Students</span>
            <h3 className="card-title">Industry-ready bootcamps</h3>
            <p className="card-body">
              Short, high‑intensity programs on full‑stack development, APIs, cloud and AI that culminate in deployable projects and portfolios.
            </p>
            <Link to="/training/bootcamps" className="card-read-more" title="Read more">
              →
            </Link>
          </div>

          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Faculty development"
              className="card-image"
            />
            <span className="card-tag">Faculty</span>
            <h3 className="card-title">Faculty development</h3>
            <p className="card-body">
              Hands‑on FDPs focused on teaching strategies, modern tooling, and integrating real‑world projects into curriculum and labs.
            </p>
            <Link to="/training/fdps" className="card-read-more" title="Read more">
              →
            </Link>
          </div>

          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Custom training tracks"
              className="card-image"
            />
            <span className="card-tag">Institutions</span>
            <h3 className="card-title">Custom training tracks</h3>
            <p className="card-body">
              Semester‑aligned pathways with assessments, mentoring, and continuous feedback designed for specific departments or specializations.
            </p>
            <Link to="/contact" className="card-read-more" title="Read more">
              →
            </Link>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Link to="/training/bootcamps">
            <PrimaryButton>Explore Bootcamps</PrimaryButton>
          </Link>
          <Link to="/training/fdps">
            <PrimaryButton>Explore FDPs</PrimaryButton>
          </Link>
        </div>
      </Section>

      {/* Application form as per document */}
      <Section
        eyebrow="Application form"
        title="Apply for Tempest training."
        subtitle="Fill in the details below to nominate yourself or your institution for upcoming batches."
        id="training-form"
      >
        <TrainingApplicationForm />
      </Section>
    </>
  );
};

const TrainingApplicationForm = () => {
  return (
    <form className="generic-form">
      <div className="form-row">
        <label>
          Name *
          <input type="text" required />
        </label>
        <label>
          Phone number *
          <input type="tel" required />
        </label>
      </div>
      <div className="form-row">
        <label>
          Institution name *
          <input type="text" required />
        </label>
        <label>
          Highest qualification *
          <input type="text" required />
        </label>
      </div>
      <div className="form-row">
        <label>
          Department *
          <input type="text" required />
        </label>
        <label>
          Year of graduation *
          <input type="text" required />
        </label>
      </div>
      <div className="form-row">
        <label>
          What service to apply *
          <select required>
            <option value="">Select</option>
            <option value="student-bootcamp">Student bootcamp</option>
            <option value="faculty-fdp">Faculty development program</option>
            <option value="custom-track">Custom institutional track</option>
          </select>
        </label>
      </div>
      <div className="form-row">
        <label>
          Upload your CV / resume
          <input type="file" />
        </label>
      </div>
      <div className="form-row">
        <label>
          Anything you want to share with us?
          <textarea rows="4" />
        </label>
      </div>
      <PrimaryButton type="submit">Submit application</PrimaryButton>
    </form>
  );
};

export default Training;
