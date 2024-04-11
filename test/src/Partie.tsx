import { useEffect, useState } from "react";
import type { Partie, AdversaireProps} from "./types";
import { Joueur } from './Joueur';
import { Adversaire } from "./Adversaire";
import sahide from "./img/saif.jpg";
import chuche from "./img/chuche.jpg"
import Test from "./img/test.png"

export default function Partie(partieparams : Partie){
    const [niveau,setNiveau] = useState(partieparams.niveau);
    const [adversaire , setAdversaire]=useState<AdversaireProps>({pv: 20*niveau, cheminImage:chuche});
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
        const actuelPv = adversairePv - degats;
        if ((actuelPv) <= 0) {
            setAdversairePv(0);
        }
        else
        {            
            setAdversairePv(actuelPv);            
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
            <Adversaire pv={adversaire.pv} cheminImage={adversaire.cheminImage}/>
          </div>
          
          <Joueur onAttack={handlePlayerAttack} />
        </div>
    );
}