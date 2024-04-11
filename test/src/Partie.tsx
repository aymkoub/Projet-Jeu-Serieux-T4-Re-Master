import { useEffect, useState } from "react";
import type { Partie, AdversaireProps} from "./types";
import { Joueur } from './Joueur';
import { Adversaire } from "./Adversaire";
import sahide from "./img/saif.jpg";
import chuche from "./img/chuche.jpg"

export default function Partie(partieparams : Partie){
    const [niveau,setNiveau] = useState(partieparams.niveau);
    const [adversaire , setAdversaire]=useState<AdversaireProps | undefined>();
    const [adversairePv, setAdversairePv] = useState(20*niveau);

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
            setAdversairePv(prevPv => prevPv - degats);            
        }
    };

    return (
    <div>
        <div>
        <Adversaire pv={adversaire !== undefined ? adversaire.pv : 100} cheminImage={adversaire !== undefined ? adversaire.cheminImage : chuche}/>
        <Joueur onAttack={handlePlayerAttack} />
        </div>
    </div>
    );
}