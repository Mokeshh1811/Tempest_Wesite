import React from 'react';
import './PrimaryButton.css';

const PrimaryButton = ({ children, ...rest }) => (
  <button className="btn-primary" {...rest}>
    {children}
  </button>
);

export default PrimaryButton;
