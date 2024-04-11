import { useState } from 'react';
import './App.css';
import { Joueur } from './Joueur';
import { Adversaire } from './Adversaire'; // Assurez-vous que le chemin d'importation est correct
import Test from './img/test.png' // Assurez-vous que le chemin d'importation est correct

export function App (){

  const [adversairePv, setAdversairePv] = useState(100);

  const handlePlayerAttack = (degats: number) => {
    if ((adversairePv - degats) <= 0) {
      setAdversairePv(0);
    }
    else
    {
    setAdversairePv(prevPv => prevPv - degats);
    }
  };

  return (
    <div style={{
      backgroundImage: `url(${Test})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between', // Répartit uniformément les éléments enfants
      alignItems: 'center',
      height: '100vh',
      width: '100vw',
      position: 'fixed',
      top: 0,
      left: 0
  }}>
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%'
    }}>
      <Adversaire pv={adversairePv} />
    </div>
      
    <Joueur onAttack={handlePlayerAttack} />
  </div>
);
  };

export default App;