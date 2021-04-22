import React, { useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    dispaly: flex;
    justify-content: center;
`;

const TextBlock = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Poppins:wght@600&display=swap');

    background-color: #fff;
    border: 2px solid #34494c;
    color: #34494c;
    font-family: 'Poppins';
    font-size: 1.25rem;
    font-style: italic;
    margin: 0 auto;
    padding: 1rem 2rem;
    text-align: center;
    width: fit-content;

    @media(max-width: 768px) {
        margin: 0 1rem;
        padding: 1rem;
    }
`;


const Accommodations = () => {
  return (
    <Wrapper>
        <TextBlock>Accommodations information and hotel discount codes coming soon!</TextBlock>
    </Wrapper>
  );
}

export default Accommodations;
