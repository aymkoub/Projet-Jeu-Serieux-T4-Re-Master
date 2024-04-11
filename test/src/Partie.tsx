import { useEffect, useState } from "react";
import type { Partie } from "./types";
import { Joueur } from './Joueur';
import { Adversaire } from './Adversaire'; // Assurez-vous que le chemin d'importation est correct

export function Partie(partieparams : Partie){
    const [nbTour, setNbTour] = useState(partieparams.nbTour);
    const [niveau,setNiveau] = useState(partieparams.niveau);

    const [adversairePv, setAdversairePv] = useState(20*niveau);
    useEffect(() => {
        if(adversairePv === 0){
            setNiveau(niveau+1);
        }
    },[adversairePv]);
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
        <Adversaire pv={adversairePv}/>
        <Joueur onAttack={handlePlayerAttack} />
        </div>
    </div>
    );
}