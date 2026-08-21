import React from 'react';

const Header = ({ onBack, currentSituation }) => {
  return (
    <header className="header">
      <h1>🇯🇵 Japan Cheat Sheet</h1>
      {currentSituation && (
        <button className="back-btn glass" onClick={onBack}>
          <span>←</span> Back to Menu
        </button>
      )}
    </header>
  );
};

export default Header;
