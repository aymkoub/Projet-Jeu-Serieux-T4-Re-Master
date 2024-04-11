import { useState } from 'react';
import saifImage from './saif.jpg'; // Assurez-vous que le chemin d'importation est correct
import { Attaque } from './types';
import Card from './Card';

interface AdversaireProps {
    onAttack: (degats: number) => void;
}

export function Adversaire({ onAttack }: AdversaireProps) {
    const [selectedCard, setSelectedCard] = useState<string | null>(null);
    const [attacks, setAttacks] = useState<Attaque[]>([
        // ...
    ]);

    const handleCardClick = (attaque: Attaque) => {
        setSelectedCard(selectedCard === attaque.title ? null : attaque.title);
        onAttack(attaque.degats);
    };

    return (
        <div>
            <img src={saifImage} alt="Adversaire" />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                {attacks.map((attaque) => (
                    <Card 
                        key={attaque.title}
                        attaque={attaque} 
                        isClicked={selectedCard === attaque.title} 
                        onClick={() => handleCardClick(attaque)} 
                    />
                ))}
            </div>
        </div>
    );
}