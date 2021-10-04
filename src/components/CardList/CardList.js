import React from 'react';
import Card from '../Card/Card';




const CardsList = ({searchcards, cardnumber}) => { 

    const cardsArray = [];
    for (let i = 0; i < cardnumber; i++) {
        const imagedata = "";
        const matchID = searchcards[i].match_id; 
        const confidence = searchcards[i].confidence; 
        const imageUrl = searchcards[i].image_url;            
        cardsArray.push(<Card key={i} matchID={matchID} imagedata={imagedata} confidence={confidence}  imageUrl={imageUrl}  />);
    }

    return (
        <div className='tc ma3'>
            {cardsArray}
        </div>
    );
}

export default CardsList;