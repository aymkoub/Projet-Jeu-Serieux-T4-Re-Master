import { useEffect, useState } from "react";
import type { Partie, AdversaireProps, Attaque} from "./types";
import Joueur from './Joueur';
import { Adversaire } from "./Adversaire";
import zim from "./img/MathieuZIm.png";
import cfvu from "./img/cfvu.png";
import ca from "./img/ca.png";
import iut from "./img/Logo_IUTRobertSchuman.png";
import fond from "./img/fond4G.png";

export default function Partie(partieparams : Partie){
    const [niveau,setNiveau] = useState(partieparams.niveau);
    const [adversaire , setAdversaire]=useState<AdversaireProps>({pv: 20*niveau, cheminImage: zim, pvMax: 20*niveau, faiblesse: "enseignant"});
    const maxPV = adversaire.pv;
    const [adversairePv, setAdversairePv] = useState(adversaire.pv);
    const [ attaks, setAttaks] = useState<Attaque[]>([]);
    const [CardDebloquer, setCardDebloquer] = useState<number>(4);
    const [selectedCards, setSelectedCards] = useState<Attaque[]>([]);
    const [chemins] = useState([zim,iut,cfvu,ca]);
    const [faiblesses] = useState(["enseignant", "attractivité", "maquette", "locaux"]);    
    const [isPlayerAlive, setIsPlayerAlive] = useState(true);
    const [joueurPv, setJoueurPv] = useState(100); // Assumons que le joueur commence avec 100 PV


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
            title: "Préfabriqué",
            rechargement: 3,
            cout: 5,
            degats: 2,
            type: "locaux", 
            effet: "Inflige 2 de la persuasion !\n",
            description :"Proposez à votre interlocuteur des locaux où les cours pourront être assurés.",
            onClick: () => { handlePlayerAttack(2,"locaux") } // Add onClick property
        },
        {
            title: "Pas très attractive",
            rechargement: 3,
            cout: 5,
            degats: 2,
            type: "attractivité",
            effet: "Inflige 2 de persuasion !\n",
            description :"Persuadez votre interlocuteur que votre formation peut attirer de nouveaux étudiants.",
            onClick: () => { handlePlayerAttack(2,"attractivité") } // Add onClick property
        },
        {
            title: "Remplaçant",
            rechargement: 3,
            cout: 5,
            degats: 2,
            type: "enseignant",
            effet: "Inflige 2 de persuasion !\n",
            description :"Indiquez que vous avez des enseignants pour assurer les cours de votre formation.",
            onClick: () => { handlePlayerAttack(2,"enseignant") } // Add onClick property
        },
        {
            title: "Maquette en mille morceaux",
            rechargement: 3,
            cout: 5,
            degats: 2,
            type: "maquette",
            effet: "Inflige 2 de persuasion !\n",
            description :"Votre maquette pédagogique est consistente et indique ce que vous voulez enseigner.",
            onClick: () => { handlePlayerAttack(2,"maquette") } // Add onClick property
        },
            {
                title: "Débarras réaménagé",
                rechargement: 2,
                cout: 1,
                degats: 1,
                type: "locaux", 
                effet: "Inflige 1 de la persuasion !\n",
                description :"Proposez à votre interlocuteur des locaux où les cours pourront être assurés.",
                onClick: () => { handlePlayerAttack(1,"locaux") } // Add onClick property
            },
            {
                title: "0 voeu sur parcoursup",
                rechargement: 2,
                cout: 1,
                degats: 1,
                type: "attractivité",
                effet: "Inflige 1 de persuasion !\n",
                description :"Persuadez votre interlocuteur que votre formation peut attirer de nouveaux étudiants.",
                onClick: () => { handlePlayerAttack(1,"attractivité") } // Add onClick property
            },
            {
                title: "Enseignant gréviste",
                rechargement: 2,
                cout: 1,
                degats: 1,
                type: "enseignant",
                effet: "Inflige 1 de persuasion !\n",
                description :"Indiquez que vous avez des enseignants pour assurer les cours de votre formation.",
                onClick: () => { handlePlayerAttack(1,"enseignant") } // Add onClick property
            },
            {
                title: "Maquette de bateau",
                rechargement: 2,
                cout: 1,
                degats: 1,
                type: "maquette",
                effet: "Inflige 1 de persuasion !\n",
                description :"Votre maquette pédagogique est consistente et indique ce que vous voulez enseigner.",
                onClick: () => { handlePlayerAttack(1,"maquette") } // Add onClick property
            },
            {
                onClick: () => { handlePlayerAttack(5,"locaux") },
                title: 'Bureau impersonnel',
                rechargement: 2,
                cout: 4,
                degats: 5,
                type: 'locaux',
                effet: 'Inflige 5 de persuasion !\n',
                description :"Proposez à votre interlocuteur des locaux où les cours pourront être assurés.",
            },
            {
                onClick: () => { handlePlayerAttack(5,"enseignant") },
                title: 'Professeur dévoué',
                rechargement: 2,
                cout: 4,
                degats: 5,
                type: 'enseignant',
                effet: 'Inflige 5 de persuasion !\n',
                description :"Indiquez que vous avez des enseignants pour assurer les cours de votre formation.",

            },
            {
                onClick: () => { handlePlayerAttack(5,"maquette") },
                title: 'Quelques UE sont prêtes',
                rechargement: 2,
                cout: 4,
                degats: 5,
                type: 'maquette',
                effet: 'Inflige 5 de persuasion !\n',
                description: 'Votre maquette pédagogique est consistente et indique ce que vous voulez enseigner.',

            },
            {
                onClick: () => { handlePlayerAttack(5,"attractivité") },
                title: 'Un groupe de lycéens motivés',
                rechargement: 2,
                cout: 4,
                degats: 5,
                type: 'attractivité',
                effet: 'Inflige 5 de persuasion !\n',
                description: 'Persuadez votre interlocuteur que votre formation peut attirer de nouveaux étudiants.',

            },
            {
                onClick: () => { handlePlayerAttack(9, "attractivité") },
                title: 'Poudlard',
                rechargement: 7,
                cout: 4,
                degats: 9,
                type: 'attractivité',
                effet: 'Inflige 9 de persuasion !\n',
                description: 'Persuadez votre interlocuteur que votre formation peut attirer de nouveaux étudiants.',

            },
            {
                onClick: () => { handlePlayerAttack(5,"locaux") },
                title: 'Salle des profs',
                rechargement: 4,
                cout: 2,
                degats: 5,
                type: 'locaux',
                effet: 'Inflige 5 de persuasion !\n',
                description: 'Proposez à votre interlocuteur des locaux où les cours pourront être assurés.',

            },
            {
                onClick: () => { handlePlayerAttack(20, "maquette") },
                title: 'Programme de béton',
                rechargement: 7,
                cout: 15,
                degats: 20,
                type: 'maquette',
                effet: 'Inflige 20 de persuasion !\n',
                description: 'Votre maquette pédagogique est consistente et indique ce que vous voulez enseigner.',

            },
            {
                onClick: () => { handlePlayerAttack(9,"locaux") },
                title: 'Salle de classe',
                rechargement: 7,
                cout: 4,
                degats: 9,
                type: 'locaux',
                effet: 'Inflige 1 de persuasion !\n',
                description: 'Proposez à votre interlocuteur des locaux où les cours pourront être assurés.',

            },
            {
                onClick: () => { handlePlayerAttack(9,"maquette") },
                title: 'Maquette bien ficelée',
                rechargement: 7,
                cout: 4,
                degats: 9,
                type: 'maquette',
                effet: 'Inflige 9 de persuasion !\n',
                description: 'Votre maquette pédagogique est consistente et indique ce que vous voulez enseigner.',

            },
            {
                onClick: () => { handlePlayerAttack(5,"attractivité") },
                title: 'Séduisante',
                rechargement: 4,
                cout: 2,
                degats: 5,
                type: 'attractivité',
                effet: 'Inflige 5 de persuasion !\n',
                description: 'Persuadez votre interlocuteur que votre formation peut attirer de nouveaux étudiants.',

            },
            {
                onClick: () => { handlePlayerAttack(20,"locaux") },
                title: 'Amphi opéra',
                rechargement: 7,
                cout: 15,
                degats: 20,
                type: 'locaux',
                effet: 'Inflige 20 de persuasion !\n',
                description: 'Proposez à votre interlocuteur des locaux où les cours pourront être assurés.',

            },
            {
                onClick: () => { handlePlayerAttack(5,"enseignant") },
                title: 'Vacataire en CDI',
                rechargement: 4,
                cout: 2,
                degats: 5,
                type: 'enseignant',
                effet: 'Inflige 5 de persuasion !\n',
                description: 'Indiquez que vous avez des enseignants pour assurer les cours de votre formation.',

            },
            {
                onClick: () => { handlePlayerAttack(5,"maquette") },
                title: 'Maquette écrite sur un bout de nappe',
                rechargement: 4,
                cout: 2,
                degats: 5,
                type: 'maquette',
                effet: 'Inflige 5 de persuasion !\n',
                description: 'Votre maquette pédagogique est consistente et indique ce que vous voulez enseigner.',

            },
            {
                onClick: () => { handlePlayerAttack(9,"enseignant") },
                title: 'Enseignant en colère',
                rechargement: 7,
                cout: 4,
                degats: 9,
                type: 'enseignant',
                effet: 'Inflige 9 de persuasion !\n',
                description: 'Indiquez que vous avez des enseignants pour assurer les cours de votre formation.',

            },
            {
                onClick: () => { handlePlayerAttack(20,"enseignant") },
                title: 'Horde de vacataires',
                rechargement: 7,
                cout: 15,
                degats: 20,
                type: 'enseignant',
                effet: 'Inflige 20 de persuasion !\n',
                description: 'Indiquez que vous avez des enseignants pour assurer les cours de votre formation.',

            },
            {
                onClick: () => { handlePlayerAttack(20,"attractivité") },
                title: 'Ecrase la concurrence',
                rechargement: 7,
                cout: 15,
                degats: 20,
                type: 'attractivité',
                effet: 'Inflige 20 de persuasion !\n',
                description: 'Persuadez votre interlocuteur que votre formation peut attirer de nouveaux étudiants.',

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
            cheminImage : chemins[niveau],
            pvMax: 40 * (niveau + 1),
            faiblesse: faiblesses[niveau]
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
    const handlePlayerAttack = (degats: number, type: string) => {
        if(adversaire.faiblesse === type){
            degats *= 2;
        }
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
            backgroundImage: `url(${fond})`,
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
                width: '150px',
                height: '200px',
                margin: '1rem', 
                backgroundColor: selectedCards.includes(carte) ? 'red' : 'transparent' 
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
    
  
    const handlePlayerHpChange = (newHp: number) => {
        setJoueurPv(newHp);
        if (newHp <= 0) {
            setIsPlayerAlive(false);
        }
    };
    
    

    // Mettez à jour cet état dans votre fonction handleEnemyAttack
if (isPlayerAlive) {return (
<div style={{
    backgroundImage: `url(${fond})`,
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
<p>{joueurPv}</p>
                    
            <Joueur onAttack={handlePlayerAttack} onHpChange={handlePlayerHpChange} attacks={joueurAttaks} pv={100} />
                </div>
        );
}
else
{
    return (
<div style={{
    backgroundImage: `url(${fond})`,
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
    left: 0}}>        <p>perdu</p>
    <Link to="/partie">
                <button>Recommencer</button>
            </Link>
            <div></div>
    
       </div>
    );
}
}



import BackCart from './img/cartBack.png'; // Assurez-vous que le chemin d'importation est correct
import { Link } from "react-router-dom";


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





