import Card from "./Card";
import type { Joueur, Attaque, BarredeVie } from "./types";
import { useState, useEffect } from 'react';
import waluigiImage from './img/waluigi.png';
import WarioTime from './img/wario.png';

import './App.css'


export function Joueur({ onAttack }: { onAttack: (degats: number) => void }){
    const [selectedCard, setSelectedCard] = useState<string | null>(null);
    const [attacks, setAttacks] = useState<Attaque[]>([

        {
            title: "Attaque 1",
            rechargement: 2,
            cout: 1,
            degats: 10,
            type: "locaux",
            effet: "20 de degat",
            image: waluigiImage,
            onClick: () => {} // Add onClick property
        },
        {
            title: "Attaque 2",
            rechargement: 3,
            cout: 2,
            degats: 20,
            type: "Eleve",
            effet: "3.000.500.000  de degat",
            image: WarioTime,
            onClick: () => {} // Add onClick property
        },
        {
            title: "Attaque 3",
            rechargement: 4,
            cout: 3,
            degats: 30,
            type: "Eleve",
            effet: "3.000.500.000  de degat",
            image: WarioTime,
            onClick: () => {} // Add onClick property
        },
        {
            title: "Attaque 4",
            rechargement: 5,
            cout: 4,
            degats: 40,
            type: "Eleve",
            effet: "3.000.500.000  de degat",
            image: WarioTime,
            onClick: () => {} // Add onClick property
        }

    ]);

    const handleCardClick = (attaque: Attaque) => {
        setSelectedCard(selectedCard === attaque.title ? null : attaque.title);
        onAttack(attaque.degats);
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
    //setListAttaques();
    return (
         <div>


        <div style={{ display :'flex' ,  maxWidth: '800px',  textAlign: 'center'}}>
            {attacks.map((attaque) => (
                <Card attaque={attaque} isClicked={selectedCard === attaque.title} onClick={() => handleCardClick(attaque)} />
            ))}
        </div>

        
        <div>
            <div style={{ border: '1px solid #000', padding: '2px' }}>
            <div style={{width: `${barredevie.pv}%`,
                        backgroundColor: 'green',
                        height: '24px',
                        transition: 'width 0.5s'}}></div>
            </div>
        </div>
        </div>
    )
}