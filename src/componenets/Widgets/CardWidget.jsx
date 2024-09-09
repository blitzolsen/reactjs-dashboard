import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';

export default function CardWidget() {
    const [data, setData] = useState(null);
    const [card, setCard] = useState(null);
    const drawCard = () => {
        fetch(`https://deckofcardsapi.com/api/deck/${data.deck_id}/draw/?count=1`)
          .then((res) => res.json())
          .then((d) => {
            setCard(d.cards[0]);
          });
    }
    useEffect(() => {
        fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
          .then((res) => res.json())
          .then((d) => {
            setData(d);
          });
      }, []);
      useEffect(() => {
        if (data && !card) {
            drawCard();
        }
      }, [data]);
  return (
    <>
    <div>I'm a card widget. I call an API to get a random card and display it. I have a state to hold the data from the API call and a state to hold the card. I display a loading message while waiting for the API call to complete.</div>
    <div className='card-container'>
    {card ? <img className='card-image' src={card.image} alt={card.value} /> : <div>Loading...</div>}
    </div>
    <Button onClick={() => {
        drawCard();
    }}>Draw a new card</Button>
    </>
  )
}
