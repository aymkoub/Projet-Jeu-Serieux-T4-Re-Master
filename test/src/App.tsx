import { useState } from 'react';
import './App.css';
import { Joueur } from './Joueur';
import { Adversaire } from './Adversaire'; // Assurez-vous que le chemin d'importation est correct

const App = () => {
  const [adversairePv, setAdversairePv] = useState(100);
  const [joueurPv, setJoueurPv] = useState(100);

  const handlePlayerAttack = (degats: number) => {
    setAdversairePv(prevPv => prevPv - degats);
  };

  const handleAdversaireAttack = (degats: number) => {
    setJoueurPv(prevPv => prevPv - degats);
  };

  return (
    <div>
      <div>
      <Adversaire onAttack={handleAdversaireAttack} />

        <Joueur onAttack={handlePlayerAttack} />
      </div>
      <div>Adversaire PV: {adversairePv}</div>
      <div>Joueur PV: {joueurPv}</div>
    </div>
  );
}; 

export default App;