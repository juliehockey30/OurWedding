import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Poppins:wght@600&display=swap');

    align-items: center;
    background-color: #fff;
    border: 2px solid #34494c;
    display: flex;
    flex-direction: column;
    font-family: 'Poppins';
    margin: 0 3rem 2rem 3rem;
    padding: 3rem;
    text-align: center;

    @media(max-width: 768px) {
        margin: 0 1rem 1rem 1rem;
        padding: 1rem;
    }
`;

const Header = styled.p`
    font-size: 2rem;
    font-weight: 600;
    margin: 0 0 0.5rem 0;

    @media(max-width: 768px) {
        font-size: 1.5rem;
    }
`;

const Subheader = styled.p`
    font-size: 1rem;
    margin-top: 0;

    @media(max-width: 768px) {
        font-size: 0.75rem;
    }
`;

const Question = styled.p`
    margin-bottom: 0;
    font-size: 1rem;

    @media(max-width: 768px) {
        font-size: 0.75rem;
    }
`;

const Answer = styled.p`
    color: #34494c;
    font-size: 1rem;
    font-weight: 600;
    margin-top: 0;

    @media(max-width: 768px) {
        font-size: 0.75rem;
    }
`;

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;


    @media(max-width: 768px) {
        flex-direction: column;
    }
`;

const Button = styled.a`
    @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Poppins:wght@600&display=swap');

    background-color: #34494c;
    color: #fff;
    cursor: pointer;
    font-family: 'Poppins';
    font-size: 1rem;
    margin: 1rem;
    padding: 1rem;
    text-decoration: none;

    &:hover {
        background-color: #adb59b;
    }

    @media(max-width: 768px) {
        margin: 0.5rem;
    }
`;


const Registry = () => {
  return (
    <Wrapper>
        <Header>Gift Registry</Header>
        <Subheader>For our registry, we have a variety of options you can choose from.</Subheader>
        <Question>Interested in something you can wrap up in a box?</Question>
        <Answer>We're regsitered on Amazon.com!</Answer>
        <Question>Looking for something a little less traditional you can seal in an envelope?</Question>
        <Answer>We've set up 2 different "cash funds" on The Knot so you can choose exactly where your gift goes - either our house fund or our honeymoon fund!</Answer>
        <ButtonWrapper>
            <Button href="https://www.amazon.com/wedding/registry/2NIKLJY2JIQBJ?ref=wr_search_page_result_1" target="_blank">VIEW AMAZON REGISTRY</Button>
            <Button href="https://www.theknot.com/us/julie-neuburger-and-bryan-howard-sep-2022/registry" target="_blank">VIEW REGISTRY ON THE KNOT</Button>
        </ButtonWrapper>
    </Wrapper>
  );
}

export default Registry;
