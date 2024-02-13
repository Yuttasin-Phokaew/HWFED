import React from 'react';
import './CardStyle.css';

interface CardProps {
    imageSrc: string;
    title: string;
    description: string;
    buttonText: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, description, buttonText }) => {
  return (
    
    <div className="-card" id='card'>
        <img src={imageSrc} alt={title} />
        <h1>{title}</h1>
        <p>{description}</p>
        <button>{buttonText}</button>
    </div>
  )
};



export default Card;





