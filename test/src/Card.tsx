//import { useState } from 'react';
import { Attaque } from './types'; // Assurez-vous que le chemin d'importation est correct

interface CardProps {
  attaque: Attaque;
  isClicked: boolean;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ attaque, isClicked, onClick }) => {
  return (
    <div onClick={onClick} style={{
      flex: 1,
      maxWidth: '600px',
      boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
      transition: '0.3s',
      borderRadius: '5px',
      padding: '16px',
      textAlign: 'center',
      margin: '10px',
      position: 'relative',
      backgroundColor: isClicked ? 'red' : 'white'
    }}>
      <div style={{ position: 'absolute', top: 0, left: 0 }}>{`${attaque.cout} energie`}</div> 
      <div style={{ position: 'absolute', top: 0, right: 0 }}>{`${attaque.rechargement} cooldown`}</div>
      <div style={{ margin: '16px', border: '1px solid #ccc' }}>
        <img src={attaque.image} alt="Card image" style={{ maxWidth: '100%', height: 'auto' }} />
      </div>
      <h4><b>{attaque.title}</b></h4> 
      <p>{attaque.effet}</p>
      <i>{attaque.description}</i>
    </div>
  );
};

export default Card;