import Card from "./Card";
import type { Joueur, Attaque, BarredeVie } from "./types";
import { useState, useEffect } from 'react';

import './App.css'


export function Joueur({ onAttack, attacks }: { onAttack: (damage: number) => void, attacks: Attaque[] }) {
    const [selectedCard, setSelectedCard] = useState<string | null>(null);
    const [tours, setTours] = useState<number>(10);
    const [barredevie] = useState<BarredeVie>({ pv : 100 });
    const motivMax = 100;
    const [pourcentagePv, setPourcentage] = useState(barredevie.pv / motivMax * 100);

    const handleCardClick = (attaque: Attaque) => {
        setSelectedCard(selectedCard === attaque.title ? null : attaque.title);
        onAttack(attaque.degats);
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

    //setAttacks();
    return (
        <div>
            <div style={{ display :'flex', maxWidth: '800px', textAlign: 'center'}}>
                {attacks.map((attaque) => (
                    <Card attaque={attaque} isClicked={selectedCard === attaque.title} onClick={() => handleCardClick(attaque)}  tour={tours} />
                ))}
            </div>

            <div>
                <button onClick={() => { onAttack(0); setTours(tours + 1); barredevie.pv -= 5; setPourcentage(barredevie.pv / motivMax *100); }}>Passer le tour</button>
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