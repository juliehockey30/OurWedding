import React from 'react'
import styled from 'styled-components'
import chairliftScene from '../assets/chairliftScene.png'

const Flex = styled.div`
    display: flex;
    justify-content: center;
`;

const Image = styled.img`
    display: block;
    width: 75%;

    @media(max-width: 768px) {
        display: none;
    }
`;

const TextWrapper = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Poppins:wght@600&display=swap');

    background-color: white;
    border: 2px solid #34494c;
    font-family: 'Poppins';
    margin: 5rem 0 0 15rem;
    padding: 2rem;
    position: absolute;
    text-align: center;

    @media(max-width: 768px) {
        margin: 0 2rem 2rem 2rem;
    }
`;

const ResortHeader = styled.p`
    font-size: 2rem;
    font-weight: 600;
    letter-spacing: 4px;
    margin: 0;
`;

const ResortAddress = styled.p`
    font-size: 1rem;
    margin: 0;
`;
 
const Details = styled.p`
    color: #34494c;
    font-size: 1.25rem;
    font-style: italic;
    margin-top: 3rem;
`;

const Event = () => {
  return (
      <Flex>
        <Image src={chairliftScene} />
        <TextWrapper>
            <ResortHeader>SUGARBUSH RESORT</ResortHeader>
            <ResortAddress>102 Forest Drive</ResortAddress>
            <ResortAddress>Warren, VT 05674</ResortAddress>
            <Details>More details coming soon!</Details>
        </TextWrapper>
      </Flex>
  );
}

export default Event;
