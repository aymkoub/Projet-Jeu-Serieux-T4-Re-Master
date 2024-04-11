//import { useState } from 'react';
// Assurez-vous que le chemin d'importation est correct
import type { AdversaireProps} from './types';
//import Card from './Card';

export function Adversaire(adv : AdversaireProps) {
    const pourcentagePv = (adv.pv / adv.pvMax) * 100;

   
    // const [selectedCard, setSelectedCard] = useState<string | null>(null);
    

    // const handleCardClick = (attaque: Attaque) => {
    //     setSelectedCard(selectedCard === attaque.title ? null : attaque.title);
    // };

    return (
        <div>
            <div style={{ 
            display: 'flex', // Utilisez flexbox pour le positionnement
            flexDirection: 'column', // Empilez les éléments verticalement
            justifyContent: 'center', // Centrez les éléments verticalement
            alignItems: 'center', // Centrez les éléments horizontalement
        }}>
            <div style={{ width: '100%' }}> {/* Ajoutez cette div */}
                <div style={{ border: '1px solid #000', padding: '2px' }}>
                    <div style={{width: `${pourcentagePv}%`,
                                backgroundColor: 'red',
                                height: '24px',
                                transition: 'width 0.5s'}}></div>
                </div>
            </div>
        </div>
        
            <div >
            <img src={adv.cheminImage} alt="Adversaire" style={{ maxWidth: '50%', height: 'auto' }} />

            </div>
            
        </div>
    );
}