import { useEffect,useState } from 'react';
import './App.css';
import { Joueur } from './Joueur';
import { Adversaire } from './Adversaire'; // Assurez-vous que le chemin d'importation est correct
import Test from './img/test.png' // Assurez-vous que le chemin d'importation est correct
import { AdversaireProps } from './types';
import sahide from "./img/saif.jpg";

export default function App (){

  const [niveau,setNiveau] = useState(1);
  const [adversaire , setAdversaire]=useState<AdversaireProps>({pv: 20*niveau, cheminImage:sahide});
  const [adversairePv, setAdversairePv] = useState(adversaire.pv);

  useEffect(() => {
    if(adversairePv === 0){
        setNiveau(niveau+1);
        const newAdv : AdversaireProps = {
            pv : adversairePv,
            cheminImage : sahide
        }
        setAdversaire(newAdv);
    }
  },[adversairePv, niveau]);

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
      left: 0}}>

      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '100%'}}>
        <Adversaire pv={adversairePv} cheminImage={adversaire.cheminImage}/>
      </div>
      
      <Joueur onAttack={handlePlayerAttack} />
    </div>
  );
}