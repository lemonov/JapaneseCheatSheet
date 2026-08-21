import React from 'react';
import Tile from '../components/Tile';
import { situations } from '../data/situations';

const Home = ({ onSelectSituation }) => {
  return (
    <div className="container">
      <div className="situation-header">
        <h2>Choose a Situation</h2>
        <p>Select a scenario to view common phrases and interactions.</p>
      </div>
      <div className="grid">
        {situations.map((situation) => (
          <Tile
            key={situation.id}
            situation={situation}
            onClick={() => onSelectSituation(situation)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
