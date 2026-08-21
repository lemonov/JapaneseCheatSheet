import React from 'react';
import StepDiagram from '../components/StepDiagram';

const SituationView = ({ situation }) => {
  if (!situation) return null;

  return (
    <div className="container">
      <div className="situation-header">
        <h2>
          <span className="icon">{situation.icon}</span>
          {situation.title}
        </h2>
        <p>{situation.description}</p>
      </div>
      <StepDiagram steps={situation.steps} />
    </div>
  );
};

export default SituationView;
