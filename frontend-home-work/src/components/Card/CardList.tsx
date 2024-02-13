import React from 'react';
import Card from './Card';
import './CardStyle.css'

const CardList: React.FC = () => {
    const cardsData = [
        { imageSrc: '../src/assets/images/card-1.jpg', title: 'Lorem ipsum', description: 'One-stop Platform community for Agents and Operator in Thailand.', buttonText:'Buy package'},
        { imageSrc: '../src/assets/images/card-2.jpg', title: 'Lorem ipsum', description: 'One-stop Platform community for Agents and Operator in Thailand.', buttonText:'Buy package'},
        { imageSrc: '../src/assets/images/card-3.jpg', title: 'Lorem ipsum', description: 'One-stop Platform community for Agents and Operator in Thailand.', buttonText:'Buy package'},
        { imageSrc: '../src/assets/images/card-4.jpg', title: 'Lorem ipsum', description: 'One-stop Platform community for Agents and Operator in Thailand.', buttonText:'Buy package'},
      ];
  return (
    <section id='card'>
        <div className='-text-topic'>
            <h1>Lorem ipsum</h1>
        </div>
        <div className=''>
            <div className="-app" id='app'>
                {cardsData.map((card, index) => (
                <Card key={index} imageSrc={card.imageSrc} title={card.title} description={card.description} buttonText={card.buttonText}/>
            ))}
            </div>
        </div>
      
    </section>
    
            
   
  );
};

export default CardList;        
