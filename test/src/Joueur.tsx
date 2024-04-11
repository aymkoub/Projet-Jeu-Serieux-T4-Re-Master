import Card from "./Card";
import type { Joueur, Attaque, BarredeVie } from "./types";
import { useState, useEffect } from 'react';
import waluigiImage from './img/waluigi.png';
import WarioTime from './img/wario.png';

import './App.css'


export function Joueur({ onAttack }: { onAttack: (degats: number) => void }){
    const [selectedCard, setSelectedCard] = useState<string | null>(null);
    const [tours, setTours] = useState<number>(100);
    const [dernierTourAttaque, setDernierTourAttaque] = useState<{ [key: string]: number }>({});

    const [attacks, setAttacks] = useState<Attaque[]>([

        {
            title: "Attaque 1",
            rechargement: 2,
            cout: 1,
            degats: 10,
            type: "locaux", 
            effet: "Inflige de la persuasion !\n",
            description :"Proposez à votre interlocuteur des locaux où les cours pourront être assurés.",
            image: waluigiImage,
            onClick: () => {} // Add onClick property
        },
        {
            title: "Attaque 2",
            rechargement: 3,
            cout: 2,
            degats: 0,
            type: "attractivité",
            effet: "nike ta mère !\n",
            description :"Persuadez votre interlocuteur que votre formation peut attirer de nouveaux étudiants.",
            image: WarioTime,
            onClick: () => {} // Add onClick property
        },
        {
            title: "Attaque 3",
            rechargement: 4,
            cout: 3,
            degats: 30,
            type: "enseignant",
            effet: "Inflige de la persuasion !\n",
            description :"Indiquez que vous avez des enseignants pour assurer les cours de votre formation.",
            image: WarioTime,
            onClick: () => {} // Add onClick property
        },
        {
            title: "Attaque 4",
            rechargement: 5,
            cout: 4,
            degats: 40,
            type: "maquette",
            effet: "Inflige de la persuasion !\n",
            description :"Votre maquette pédagogique est consistente et indique ce que vous voulez enseigner.",
            image: WarioTime,
            onClick: () => {} // Add onClick property
        }

    ]);

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


        <div style={{ display :'flex' ,  maxWidth: '800px',  textAlign: 'center'}}>
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
                        transition: 'width 0.5s'}}></div>
            </div>
        </div>
        </div>
    )
}