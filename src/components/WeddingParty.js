import React, { useState } from 'react'
import styled from 'styled-components'
import Haley from '../assets/Haley.JPG'
import Heather from '../assets/Heather2.JPG'
import KP from '../assets/KP.JPG'
import Wulfie from '../assets/Wulfie.JPG'
import Erik from '../assets/Erik.jpg'
import Sam from '../assets/Sam.JPG'
import Sean from '../assets/Sean.jpg'
import Tim from '../assets/Tim.jpg'

const ToggleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 2rem;
`;

const ToggleItem = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Poppins:wght@600&display=swap');

    background-color: ${props => props.selected ? '#fff' : '#34494c'};
    border: 2px solid #34494c;
    color: ${props => props.selected ? '#34494c' : '#fff'};
    cursor: pointer;
    font-family: 'Poppins';
    font-size: 1.25rem;
    font-weight: bold;
    margin: 0;
    opacity: ${props => props.selected ? '1' : '0.6'};
    padding: 1rem 2rem;

    @media(max-width: 768px) {
        padding: 0.5rem 1rem;
    }
`;

const CardsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`;

const Card = styled.div`
    align-items: center;
    background-color: #fff;
    border-radius: 2px;
    display: flex;
    flex-direction: column;
    margin: 1rem;
    padding: 1rem;
`;

const Title = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Poppins:wght@600&display=swap');

    color: #34494c;
    font-family: 'Poppins';
    font-size: 1.5rem;
    letter-spacing: 4px;
    margin: 0;
`;

const Name = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Poppins:wght@600&display=swap');

    color: #7e887f;
    font-family: 'Poppins';
    font-size: 1.25rem;
    font-weight: normal;
    letter-spacing: 4px;
    margin: 0;
`;

const Image = styled.img`
    margin-top: 1rem;
    width: 15rem;
`;

const WeddingParty = () => {

    const [currentTeam, setCurrentTeam] = useState('bride')
    const teamBride = [
      {name: 'HALEY', title: 'MAID OF HONOR', image: Haley},
      {name: 'HEATHER', title: 'BRIDESMAID', image: Heather},
      {name: 'KATIE', title: 'BRIDESMAID', image: KP},
      {name: 'WULFIE', title: 'BRIDESMAID', image: Wulfie}
    ]
    const teamGroom = [
        {name: 'ERIK', title: 'BEST MAN', image: Erik},
        {name: 'SAM', title: 'GROOMSMAN', image: Sam},
        {name: 'SEAN', title: 'GROOMSMAN', image: Sean},
        {name: 'TIM', title: 'GROOMSMAN', image: Tim}
      ]

  return (
    <>
        <ToggleWrapper>
            <ToggleItem
                selected={currentTeam === 'bride'}
                onClick={() => setCurrentTeam('bride')}
            >TEAM BRIDE</ToggleItem>
            <ToggleItem
                selected={currentTeam === 'groom'}
                onClick={() => setCurrentTeam('groom')}
            >TEAM GROOM</ToggleItem>
        </ToggleWrapper>
        {currentTeam === 'bride' ? 
            <CardsWrapper>
                {teamBride.map(gal =>
                    <Card>
                        <Title>{gal.title}</Title>
                        <Name>{gal.name}</Name>
                        <Image src={gal.image}/>
                    </Card>
                )}
            </CardsWrapper>
        : 
        <CardsWrapper>
            {teamGroom.map(gal =>
                <Card>
                    <Title>{gal.title}</Title>
                    <Name>{gal.name}</Name>
                    <Image src={gal.image}/>
                </Card>
            )}
        </CardsWrapper>
        }
    </>
  );
}

export default WeddingParty;
