import React from 'react';
import './Section.css';

const Section = ({ eyebrow, title, subtitle, children, align = 'left', id, backgroundImage }) => {
  const sectionStyle = backgroundImage ? {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    color: 'white'
  } : {};

  return (
    <section className={`section section--${align}`} id={id} style={sectionStyle}>
      <div className="section-header">
        {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
        {title && <h2 className="section-title">{title}</h2>}
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
      </div>
      <div className="section-body">
        {children}
      </div>
    </section>
  );
};

export default Section;
