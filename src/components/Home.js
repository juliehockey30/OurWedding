import React from 'react'
import styled from 'styled-components'
import us1 from '../assets/us1.JPG'
import us2 from '../assets/us2.JPG'

const ImageWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    max-width: 100%;

    @media(max-width: 768px) {
      align-items: center;
      flex-direction: column;
    }
`;

const Image = styled.img`
    margin: 1.5rem;
    max-height: 35%;
    max-width: 35%;

    @media(max-width: 768px) {
      margin: 0.75rem;
      max-width: 75%;
    }
`;

const Home = () => {
  return (
    <ImageWrapper>
      <Image src={us1} />
      <Image src={us2} />
    </ImageWrapper>
  );
}

export default Home;
