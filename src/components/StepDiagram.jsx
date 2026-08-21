import React from 'react';

const StepDiagram = ({ steps }) => {
  const renderCard = (stepData, stepNum) => (
    <div className={`step-card ${stepData.speaker}`}>
      {stepNum && <div className="step-number">{stepNum}</div>}
      <div className="speaker-label">
        {stepData.speaker === 'staff' ? 'Staff' : 'You'}
      </div>
      <div className="japanese">{stepData.japanese}</div>
      <div className="romaji">{stepData.romaji}</div>
      <div className="english">"{stepData.english}"</div>
      {stepData.action && (
        <div className="action-tip">
          <span className="icon">💡</span> {stepData.action}
        </div>
      )}
    </div>
  );

  return (
    <div className="steps-container">
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          {step.branches ? (
            <div className="branches-container">
              <div className="branches-grid">
                {step.branches.map((branch, bIdx) => (
                  <div key={bIdx} className="branch-card">
                    <div className="branch-label">{branch.label}</div>
                    {renderCard(branch, `${index + 1}${String.fromCharCode(97 + bIdx)}`)}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            renderCard(step, index + 1)
          )}
          {index < steps.length - 1 && <div className="step-connector" />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default StepDiagram;
