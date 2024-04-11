import { useState } from 'react';
import './App.css';
import { Joueur } from './Joueur';
import { Adversaire } from './Adversaire'; // Assurez-vous que le chemin d'importation est correct

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
    <div>
      <div>
        <Adversaire pv={adversairePv} />
        <Joueur onAttack={handlePlayerAttack} />
      </div>
    </div>
  );
}