import { useEffect, useState } from 'react';
import { Attaque } from './types'; // Assurez-vous que le chemin d'importation est correct
import BackCart from './img/cartBack.png'; // Assurez-vous que le chemin d'importation est correct
interface CardProps {
  attaque: Attaque;
  isClicked: boolean;
  onClick: () => void;
  tour: number;

}
const Card: React.FC<CardProps> = ({ attaque, isClicked, onClick , tour }) => {
  const [tourClique, setTourClique] = useState(0);
  const [descriptionOrDegats, setDescriptionOrDegats] = useState(attaque.description);
  const[ rechargementRestant , setRechargementRestant] = useState(attaque.rechargement);

  useEffect(() => {
    if (attaque.degats > 0) {

      setDescriptionOrDegats("persuasion: "+attaque.degats.toString()); // Convert the number to a string

    }
    else {
      setDescriptionOrDegats(attaque.effet as string); // Cast the description as string
      
    }
  });

  const enRechargement = tour < tourClique + 1+attaque.rechargement;

  const handleClick = () => {
    if (enRechargement) return; // Si la carte est en rechargement, ne faites rien

    onClick();
    setTourClique(tour); // Mettre à jour le tour où la carte a été cliquée
  };

  useEffect(() => {
    setRechargementRestant(tourClique + attaque.rechargement - tour+1);
  }, [tour]);


  if (!enRechargement)
  {
    return (
        <div onClick={handleClick} style={{
          flex: 1,
          backgroundImage: `url(${BackCart})`, // Utilisez BackCart comme image de fond
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
          color:  'white' // Changez la couleur de fond en fonction de l'état de rechargement
        }}>
        <div style={{ position: 'absolute', top: 0, left: 0 }}>{`${attaque.cout} energie`}</div> 
        <div style={{ position: 'absolute', top: 0, right: 0 }}>{`${attaque.rechargement} cooldown`}</div>
        <div style={{ position: 'absolute', bottom: 0, left: 0 }}>{`${attaque.type}`}</div>
        <div style={{ margin: '16px', border: '1px solid #ccc' }}>
        </div>
        <h4><b>{attaque.title}</b></h4> 
        <p>{descriptionOrDegats}</p>
        <i style={{ fontSize: '12px' }}>{attaque.description}</i>
        </div>
    );
  }
  else
  {
    return (
      <div onClick={handleClick} style={{
        flex: 1,
        maxWidth: '600px',
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        transition: '0.3s',
        borderRadius: '5px',
        padding: '16px',
        textAlign: 'center',
        margin: '10px',
        position: 'relative',
        backgroundColor:  'black', // Changez la couleur de fond en fonction de l'état de rechargement
        color: 'white' // Changez la couleur de la police en blanc
      }}>
        <div style={{ position: 'absolute', top: 0, right: 0 }}>{`${attaque.rechargement} cooldown`}</div>
        <div style={{ margin: '16px', border: '1px solid #ccc' }}>
        </div>
        <h4><b>Cooldown restant  : {rechargementRestant} </b></h4> 
         </div>
    )
      
  }
};

export default Card;