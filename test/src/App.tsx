import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import waluigiImage from './waluigi.png'; 
import  WarioTime from './wario.png';
import './App.css'
import { Attaque } from './types';

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



const Card = ({ title, subtitle, image }: { title: string, subtitle: string, image: string }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div onClick={handleClick} style={{
      flex: 1,
      maxWidth: '600px',
      boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
      transition: '0.3s',
      borderRadius: '5px',
      padding: '16px',
      textAlign: 'center',
      margin: '10px',
      position: 'relative',
      backgroundColor: isClicked ? 'red' : 'white' // Change la couleur de fond en rouge si la carte est cliquée
    }}>
      <div style={{ position: 'absolute', top: 0, left: 0 }}>5 energie</div> 
      <div style={{ position: 'absolute', top: 0, right: 0 }}>5 cooldown</div>
      <div style={{ margin: '16px', border: '1px solid #ccc' }}>
        <img src={image} alt="Card image" style={{ maxWidth: '100%', height: 'auto' }} />
      </div>
      <h4><b>{title}</b></h4> 
      <p>{subtitle}</p>
    </div>
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
      <div style={{ }}>
        {/* Barre de PV (Points de Vie ou Progression) */}
        <ProgressBar progress={progress} />
      </div>
      <div>
        {/* Boutons */}
        <div style={{ display :'flex' ,  maxWidth: '500px',  textAlign: 'center'}}>
      <Card title="coucou tout le monde" subtitle="nop"  image={waluigiImage} />
      <Card title=" WARIO TIME" subtitle="nop"  image={WarioTime} />

    </div>
      </div>
      <div>
        <Joueur></Joueur>
      </div>
    </div>
  );
};

export default App;

