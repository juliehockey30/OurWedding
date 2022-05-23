import React from 'react'
import styled from 'styled-components'
import chairliftScene from '../assets/chairliftExtendedTrees.png'

const Flex = styled.div`
    display: flex;
    justify-content: left;
`;

const Image = styled.img`
    display: block;
    margin-left: 4rem;
    width: 90%;

    @media(max-width: 768px) {
        display: none;
    }
`;

const TextWrapper = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Poppins:wght@600&display=swap');

    background-color: white;
    border: 2px solid #34494c;
    font-family: 'Poppins';
    margin: 0 5rem 0 25rem;
    padding: 2rem;
    position: absolute;
    text-align: center;

    @media(max-width: 768px) {
        margin: 0 2rem 2rem 2rem;
    }
`;

const Header = styled.div`
    font-size: 2rem;
    font-weight: 600;
    margin: 0;

    @media(max-width: 768px) {
        font-size: 1.5rem;
    }
`;

const SubHeader = styled.p`
    color: #34494c;
    font-size: 1.5rem;
    font-weight: 600;
    margin: 2rem 0 0.5rem 0;

    @media(max-width: 768px) {
        font-size: 1rem;
    }
`;

const SpanText = styled.span`
    font-size: 1rem;
    margin: 0.5rem 0 0 0;

    @media(max-width: 768px) {
        font-size: 0.75rem;
    }
`;

const Text = styled.p`
    font-size: 0.75rem;
    margin: 0;

    @media(max-width: 768px) {
        font-size: 0.5rem;
    }
`;

const GreenText = styled.span`
    color: #34494c;
    font-size: 1rem;
    font-weight: 600;

    @media(max-width: 768px) {
        font-size: 0.75rem;
    }
`;

const RedText = styled.p`
    color: #740100;
    font-size: 1rem;
    font-weight: 600;
    margin: 1rem 0 0 0;

    @media(max-width: 768px) {
        font-size: 0.75rem;
    }
`;

const AddressHeader = styled(SubHeader)`
    max-width: 25rem;
`;

const AddressAndAttireText = styled.p`
    font-size: 1rem;
    margin: 0;

    @media(max-width: 768px) {
        font-size: 0.75rem;
    }
`;

const FlexWrapper = styled.div`
    display: flex;
    justify-content: space-around;

    @media(max-width: 768px) {
        flex-direction: column;
    }
`;

const Event = () => {
  return (
      <Flex>
        <Image src={chairliftScene} />
        <TextWrapper>
            <Header>Event Details</Header>
            <SubHeader>Ceremony - Mountain Top Meadow, Sugarbush Resort</SubHeader>
            <SpanText>Please arrive at</SpanText><GreenText> 4pm </GreenText><SpanText>to enjoy a scenic chairlift ride to our ceremony site.</SpanText>
            <Text>The lift is called the "Gate House Quad" and can be found directly behind the Clay Brook Hotel</Text>
            <RedText>PLEASE NOTE! The only way to access our ceremony site is via chair lift. No exceptions can be made. To attend our ceremony, you must be comfortable riding the ski chairlift both up and back down.</RedText>
            <Text>Assistance is provided to get on and off the chairlift if needed.</Text>
            <SubHeader>Reception - Gate House Lodge, Sugarbush Resort</SubHeader>
            <Text>The Gate House Lodge is located directly behind the Clay Brook Hotel at the base of the mountain.</Text>
            <FlexWrapper>
                <div>
                    <AddressHeader>Sugarbush Resort Address</AddressHeader>
                    <AddressAndAttireText>102 Forrest Drive</AddressAndAttireText>
                    <AddressAndAttireText>Warren, VT 05674</AddressAndAttireText>
                </div>
                <div>
                    <SubHeader>Requested Attire</SubHeader>
                    <AddressAndAttireText>Cocktail Attire</AddressAndAttireText>
                </div>
            </FlexWrapper>
        </TextWrapper>
      </Flex>
  );
}

export default Event;
