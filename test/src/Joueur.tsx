import Card from "./Card";
import type { Joueur, Attaque, BarredeVie } from "./types";
import { useState, useEffect } from 'react';
import waluigiImage from './img/waluigi.png';
import WarioTime from './img/wario.png';

import './App.css'


export function Joueur({ onAttack, attacks }: { onAttack: (damage: number) => void, attacks: Attaque[] }) {
    const [selectedCard, setSelectedCard] = useState<string | null>(null);
    const [tours, setTours] = useState<number>(10);

    const handleCardClick = (attaque: Attaque) => {
        setSelectedCard(selectedCard === attaque.title ? null : attaque.title);
        onAttack(attaque.degats);
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
  
    const barredevie : BarredeVie = {
        pv : 50
    };
    //setAttacks();
    return (
        <div>
            <div style={{ display :'flex', maxWidth: '800px', textAlign: 'center'}}>
                {attacks.map((attaque) => (
                    <Card attaque={attaque} isClicked={selectedCard === attaque.title} onClick={() => handleCardClick(attaque)}  tour={tours} />
                ))}
            </div>

            <div>
                <button onClick={() => { onAttack(0); setTours(tours + 1); }}>Passer le tour</button>
                <div style={{ border: '1px solid #000', padding: '2px' }}>
                    <div style={{width: `${barredevie.pv}%`,
                        backgroundColor: 'green',
                        height: '24px',
                        transition: 'width 0.5s'}}>
                    </div>
                </div>
            </div>
        </div>
    )
}