import React, { useState } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import SituationView from './pages/SituationView';

function App() {
  const [currentSituation, setCurrentSituation] = useState(null);

  return (
    <>
      <Header 
        currentSituation={currentSituation} 
        onBack={() => setCurrentSituation(null)} 
      />
      
      <main>
        {!currentSituation ? (
          <Home onSelectSituation={setCurrentSituation} />
        ) : (
          <SituationView situation={currentSituation} />
        )}
      </main>
    </>
  );
}

export default App;
