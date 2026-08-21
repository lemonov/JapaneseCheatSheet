import React from 'react';

const Tile = ({ situation, onClick }) => {
  return (
    <div className="tile glass" onClick={onClick}>
      <div className="icon">{situation.icon}</div>
      <h2>{situation.title}</h2>
      <p>{situation.description}</p>
    </div>
  );
};

export default Tile;
