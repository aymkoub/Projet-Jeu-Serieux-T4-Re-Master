import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Simule un composant de barre de progression
interface ProgressBarProps {
  progress: number;
}

const ProgressBar = ({ progress }: ProgressBarProps) => {
  const ProgressBarStyle = {
    width: `${progress}%`,
    backgroundColor: 'blue',
    height: '24px',
    transition: 'width 0.5s'
  };

  return (
    <div style={{ border: '1px solid #000', padding: '2px' }}>
      <div style={ProgressBarStyle}></div>
    </div>
  );
};

// Simule un composant de bouton
import { ReactNode } from 'react';
import { Joueur } from './Joueur';

const Button = ({ children }: { children: ReactNode }) => {
  return (
    <button style={{ margin: '5px', padding: '5px 10px' }}>
      {children}
    </button>
  );
};

const App = () => {
  // État pour la barre de progression
  const [progress, setProgress] = useState(50);

  return (
    <div >
      <div style={{ marginBottom: '50px', padding: '50px', border: '1px solid #000' }}>
        {/* Un espace pour une image ou un composant */}
      </div>
      <div style={{ marginBottom: '20px' }}>
        {/* Barre de PV (Points de Vie ou Progression) */}
        <ProgressBar progress={progress} />
      </div>
      <div>
        {/* Boutons */}
        <Button>Bouton</Button>
        <Button>Bouton</Button>
        <Button>Bouton</Button>
        <Button>Bouton</Button>
      </div>
      <div>
        <Joueur></Joueur>
      </div>
    </div>
  );
};

export default App;

