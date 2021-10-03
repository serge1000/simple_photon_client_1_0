import React from 'react';
import Card from '../Card/Card';




const CardsList = ({searchcards, CardClick, cardnumber}) => { 

    const cardsArray = [];
    for (let i = 0; i < cardnumber; i++) {
        const imagedata = "";
        const matchID = searchcards[i].match_id;  
        cardsArray.push(<Card key={i} matchID={matchID} imagedata={imagedata} CardClick={CardClick} />);
    }

    return (
        <div className='tc ma3'>
            {cardsArray}
        </div>
    );
}

export default CardsList;