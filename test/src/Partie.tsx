import { useEffect, useState } from "react";
import type { Partie, AdversaireProps, Attaque} from "./types";
import { Joueur } from './Joueur';
import { Adversaire } from "./Adversaire";
import sahide from "./img/saif.jpg";
import chuche from "./img/chuche.jpg"
import Test from "./img/test.png"

export default function Partie(partieparams : Partie){
    const [niveau,setNiveau] = useState(partieparams.niveau);
    const [adversaire , setAdversaire]=useState<AdversaireProps>({pv: 20*niveau, cheminImage: chuche, pvMax: 20*niveau});
    const maxPV = adversaire.pv;
    const [adversairePv, setAdversairePv] = useState(adversaire.pv);
    const [ attaks, setAttaks] = useState<Attaque[]>([]);
    const [CardDebloquer, setCardDebloquer] = useState<Number>(4);
    const [selectedCards, setSelectedCards] = useState<Attaque[]>([]);


    const handleCardClick = (card: Attaque) => {
        if (selectedCards.includes(card)) {
            setSelectedCards(selectedCards.filter(c => c !== card));
        } else if (selectedCards.length < 4) {
            setSelectedCards(prevSelectedCards => [...prevSelectedCards, card]);
        }
    };
    useEffect(() => {
        setAttaks([
            {
            title: "Attaque 1",
            rechargement: 2,
            cout: 1,
            degats: 10,
            type: "locaux", 
            effet: "Inflige de la persuasion !\n",
            description :"Proposez à votre interlocuteur des locaux où les cours pourront être assurés.",
            onClick: () => {} // Add onClick property
        },
        {
            title: "Attaque 2",
            rechargement: 3,
            cout: 2,
            degats: 20,
            type: "attractivité",
            effet: "Inflige 20 de persuasion !\n",
            description :"Persuadez votre interlocuteur que votre formation peut attirer de nouveaux étudiants.",
            onClick: () => {} // Add onClick property
        },
        {
            title: "Attaque 3",
            rechargement: 4,
            cout: 3,
            degats: 30,
            type: "enseignant",
            effet: "Inflige 30 de persuasion !\n",
            description :"Indiquez que vous avez des enseignants pour assurer les cours de votre formation.",
            onClick: () => {} // Add onClick property
        },
        {
            title: "Attaque 4",
            rechargement: 5,
            cout: 4,
            degats: 40,
            type: "maquette",
            effet: "Inflige 40 de persuasion !\n",
            description :"Votre maquette pédagogique est consistente et indique ce que vous voulez enseigner.",
            onClick: () => {} // Add onClick property
        },
            {
                onClick: () => { handlePlayerAttack(25) },
                title: 'Attaque 5',
                rechargement: 5,
                cout: 5,
                degats: 25,
                type: 'physique',
                effet: 'Coup de poing',
                description :"Votre maquette pédagogique est consistente et indique ce que vous voulez enseigner.",
            },
            {
                onClick: () => { handlePlayerAttack(30) },
                title: 'Attaque 6',
                rechargement: 6,
                cout: 6,
                degats: 30,
                type: 'physique',
                effet: 'Coup de poing',
                description :"Votre maquette pédagogique est consistente et indique ce que vous voulez enseigner.",
    
            },
            {
                onClick: () => { handlePlayerAttack(30) },
                title: 'Attaque 7',
                rechargement: 6,
                cout: 6,
                degats: 30,
                type: 'physique',
                effet: 'Coup de poing',
                description: 'Coup de poing dans la face',
    
            },
            {
                onClick: () => { handlePlayerAttack(30) },
                title: 'Attaque 8',
                rechargement: 6,
                cout: 6,
                degats: 30,
                type: 'physique',
                effet: 'Coup de poing',
                description: 'Coup de poing dans la face',
    
            },
            {
                onClick: () => { handlePlayerAttack(30) },
                title: 'Attaque 9',
                rechargement: 6,
                cout: 6,
                degats: 30,
                type: 'physique',
                effet: 'Coup de poing',
                description: 'Coup de poing dans la face',
    
            },
            {
                onClick: () => { handlePlayerAttack(30) },
                title: 'Attaque 10',
                rechargement: 6,
                cout: 6,
                degats: 30,
                type: 'physique',
                effet: 'Coup de poing',
                description: 'Coup de poing dans la face',
    
            },
            {
                onClick: () => { handlePlayerAttack(30) },
                title: 'Attaque 11',
                rechargement: 6,
                cout: 6,
                degats: 30,
                type: 'physique',
                effet: 'Coup de poing',
                description: 'Coup de poing dans la face',
    
            },
            {
                onClick: () => { handlePlayerAttack(30) },
                title: 'Attaque 12',
                rechargement: 6,
                cout: 6,
                degats: 30,
                type: 'physique',
                effet: 'Coup de poing',
                description: 'Coup de poing dans la face',
    
            },
            {
                onClick: () => { handlePlayerAttack(30) },
                title: 'Attaque 13',
                rechargement: 6,
                cout: 6,
                degats: 30,
                type: 'physique',
                effet: 'Coup de poing',
                description: 'Coup de poing dans la face',
    
            },
            {
                onClick: () => { handlePlayerAttack(30) },
                title: 'Attaque 14',
                rechargement: 6,
                cout: 6,
                degats: 30,
                type: 'physique',
                effet: 'Coup de poing',
                description: 'Coup de poing dans la face',
    
            },
            {
                onClick: () => { handlePlayerAttack(30) },
                title: 'Attaque 15',
                rechargement: 6,
                cout: 6,
                degats: 30,
                type: 'physique',
                effet: 'Coup de poing',
                description: 'Coup de poing dans la face',
    
            },
            {
                onClick: () => { handlePlayerAttack(30) },
                title: 'Attaque 16',
                rechargement: 6,
                cout: 6,
                degats: 30,
                type: 'physique',
                effet: 'Coup de poing',
                description: 'Coup de poing dans la face',
    
            },
            {
                onClick: () => { handlePlayerAttack(30) },
                title: 'Attaque 17',
                rechargement: 6,
                cout: 6,
                degats: 30,
                type: 'physique',
                effet: 'Coup de poing',
                description: 'Coup de poing dans la face',
    
            },
            {
                onClick: () => { handlePlayerAttack(30) },
                title: 'Attaque 18',
                rechargement: 6,
                cout: 6,
                degats: 30,
                type: 'physique',
                effet: 'Coup de poing',
                description: 'Coup de poing dans la face',
    
            },
            {
                onClick: () => { handlePlayerAttack(30) },
                title: 'Attaque 19',
                rechargement: 6,
                cout: 6,
                degats: 30,
                type: 'physique',
                effet: 'Coup de poing',
                description: 'Coup de poing dans la face',
    
            },
            {
                onClick: () => { handlePlayerAttack(30) },
                title: 'Attaque 20',
                rechargement: 6,
                cout: 6,
                degats: 30,
                type: 'physique',
                effet: 'Coup de poing',
                description: 'Coup de poing dans la face',
    
            }
    
    
     ]);

     setSelectedCards(attaks.slice(0, 4));
    }
    ,[]);
    

    const [showInventory, setShowInventory] = useState(false);

   const handleInventory = () => {
    setShowInventory(prevShowInventory => !prevShowInventory);
    if (showNewCards) {
        setShowNewCards(false);
    }
    // Réinitialiser les cartes sélectionnées chaque fois que l'inventaire est ouvert
    setSelectedCards([]);
};
    const handleContinue = () => {
        setNiveau(niveau + 1);
        const newAdv : AdversaireProps = {
            pv : 40 * (niveau + 1),
            cheminImage : sahide,
            pvMax: 40 * (niveau + 1)
        };
        setAdversaire(newAdv);
        setAdversairePv(newAdv.pv);
        setShowInventory(false);
        setCardDebloquer(Number(CardDebloquer) + 3);
        if (selectedCards.length < 4) {
            setSelectedCards(attaks.slice(0, 4));
        }
    };

    const [showNewCards, setShowNewCards] = useState(false);

    const handleNewCards = () => {
        setShowNewCards(prevShowNewCards => !prevShowNewCards);
        if (showInventory) {
            setShowInventory(false);
        }
    };
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

    
    if (adversairePv === 0) {

        const NewCard = Number(CardDebloquer) + 3;
        
    

        return (
        <div style={{
            backgroundImage: `url(${Test})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '100vh',
            width: '100vw',
            position: 'fixed',
            top: 0,
            left: 0
        }}>
            <h1>Fin du combat</h1>
            <button style={{ 
                width: '200px', 
                height: '100px', 
                fontSize: '24px' 
            }} onClick={handleContinue}>Continuer</button>
            <button style={{ 
                width: '200px', 
                height: '100px', 
                fontSize: '24px' 
            }} onClick={handleInventory}>Inventaire</button>
       
       {showInventory && 
    <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'space-around',
        alignItems: 'start'
    }}>
        {attaks.slice(0 as number, NewCard as number).map((carte) => (
    <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'space-around',
        alignItems: 'start',
        width: '150px',  // Ajoutez ceci
        height: '200px'  // Et ceci
    }} onClick={() => handleCardClick(carte)}>
        <DebloqueCard attaque={carte} />
    </div>
))}
</div>
}
<button style={{ 
    width: '200px', 
    height: '100px', 
    fontSize: '24px' 
}} onClick={handleNewCards}>Voir nouvelles cartes</button>

{showNewCards && 
    <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'space-around',
        alignItems: 'start'
    }}>
        {attaks.slice(CardDebloquer as number, NewCard as number).map((carte) => (
            <div style={{ margin: '1rem' }}>
                <DebloqueCard attaque={carte} />
            </div>
        ))}
    </div>
}

        </div>
    );
    }
    
   
    const joueurAttaks = selectedCards.length < 4 ? attaks.slice(0, 4) : selectedCards;

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
    <Adversaire pv={adversairePv} pvMax={maxPV} cheminImage={adversaire.cheminImage}/>
</div>
                <p>{adversairePv} / {maxPV}</p>
                    
                    <Joueur onAttack={handlePlayerAttack} attacks={joueurAttaks} />
                </div>
        );
}



import BackCart from './img/cartBack.png'; // Assurez-vous que le chemin d'importation est correct


const DebloqueCard: React.FC<{ attaque: Attaque }> = ({ attaque }) =>   {
    const [descriptionOrDegats, setDescriptionOrDegats] = useState(attaque.description);
    useEffect(() => {
        if (attaque.degats > 0) {
    
          setDescriptionOrDegats("persuasion: "+attaque.degats.toString()); // Convert the number to a string
    
        }
        else {
          setDescriptionOrDegats(attaque.effet as string); // Cast the description as string
          
        }
      });

      return (
        <div style={{
            flex: 1,
            backgroundImage: `url(${BackCart})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            maxWidth: '600px',
            boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
            transition: '0.3s',
            borderRadius: '5px',
            padding: '16px',
            textAlign: 'center',
            margin: '10px',
            position: 'relative',
            color:  'white'
        }}>
            <div style={{ position: 'absolute', top: 0, left: 0 }}>{`${attaque.cout} energie`}</div> 
            <div style={{ position: 'absolute', top: 0, right: 0 }}>{`${attaque.rechargement} cooldown`}</div>
            <div style={{ position: 'absolute', bottom: 0, left: 0 }}>{`${attaque.type}`}</div>
            <div style={{ margin: '16px', border: '1px solid #ccc' }}>
            </div>
            <h4><b>{attaque.title}</b></h4> 
            <p>{descriptionOrDegats}</p>
            <i style={{ fontSize: '12px', whiteSpace: 'pre-line' }}>{attaque.description}</i>
        </div>
    );
        
    
    };





