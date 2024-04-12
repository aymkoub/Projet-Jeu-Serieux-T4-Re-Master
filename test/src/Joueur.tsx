import Card from "./Card";
import type { Joueur, Attaque, BarredeVie } from "./types";
import { useState, useEffect } from 'react';

import './App.css'
interface JoueurProps {
    pv: number;
    onHpChange: (newHp: number) => void;
    attacks: Attaque[] 
    onAttack: (damage: number, type: string) => void
    // autres propriétés...
}

export default function Joueur({ pv, onHpChange, attacks, onAttack }: JoueurProps) {
    const [selectedCard, setSelectedCard] = useState<string | null>(null);
    const [tours, setTours] = useState<number>(10);
    const [barredevie] = useState<BarredeVie>({ pv : 100 });
    const motivMax = 100;
    const [pourcentagePv, setPourcentage] = useState(barredevie.pv / motivMax * 100);
    const [joueurPv, setJoueurPv] = useState(pv);

    const handleEnemyAttack = (degats: number) => {
        const actuelPv = joueurPv - degats;
        if (actuelPv <= 0) {
            setJoueurPv(0);
        } else {
            setJoueurPv(actuelPv);
        }
        // Appelez onHpChange avec les nouveaux PV
        onHpChange(joueurPv);
    };

    const handleCardClick = (attaque: Attaque) => {
        setSelectedCard(selectedCard === attaque.title ? null : attaque.title);
        onAttack(attaque.degats, attaque.type);
        handleEnemyAttack(attaque.cout)
        barredevie.pv -= attaque.cout;
        setPourcentage(barredevie.pv / motivMax * 100);
        setTours(tours + 1);
    };

    useEffect(() => {
        const handleCardClick = (title: string) => {
          setSelectedCard(prevSelectedCard => prevSelectedCard === title ? null : title);
        };
      
        
        attacks.forEach(attaque => {
            attaque.onClick = () => handleCardClick(attaque.title);
        });
      }, [attacks]);


      useEffect(() => {
        onHpChange(joueurPv);
    }, [joueurPv]);

    //setAttacks();
    return (
        <div>
            <div style={{ display :'flex', maxWidth: '800px', textAlign: 'center'}}>
                {attacks.map((attaque) => (
                    <Card attaque={attaque} isClicked={selectedCard === attaque.title} onClick={() => handleCardClick(attaque)}  tour={tours} />
                ))}
            </div>

            <div>
                <button onClick={() => { onAttack(0,""); setTours(tours + 1); barredevie.pv -= 5; setPourcentage(barredevie.pv / motivMax *100); }}>Passer le tour</button>
                <div style={{ border: '1px solid #000', padding: '2px' }}>
                    <div style={{width: `${pourcentagePv}%`,
                        backgroundColor: 'green',
                        height: '24px',
                        transition: 'width 0.5s'}}
                        >
                            <p>{barredevie.pv} / {motivMax}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}