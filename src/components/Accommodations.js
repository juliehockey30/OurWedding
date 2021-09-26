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
    padding: 3rem 3rem 0 3rem;
    text-align: center;

    @media(max-width: 768px) {
        margin: 0 1rem 1rem 1rem;
        padding: 1rem;
    }
`;

const Header = styled.div`
    font-size: 2rem;
    font-weight: 600;

    @media(max-width: 768px) {
        font-size: 1.5rem;
    }
`;

const DiscountWrapper = styled.div`
    margin: 2rem 0;
`;

const TextBlock = styled.p`
    font-size: 1rem;
    margin: 0;

    @media(max-width: 768px) {
        font-size: 0.75rem;
    }
`;

const GreenText = styled.span`
    color: #34494c;
    font-weight: 600;

    @media(max-width: 768px) {
        font-size: 0.75rem;
    }
`;

const SubText = styled.p`
    font-size: 0.75rem;
    font-style: italic;
    margin: 0;

    @media(max-width: 768px) {
        font-size: 0.75rem;
    }
`;

const GreenSubText = styled.span`
    color: #34494c;
    font-size: 0.75rem;
    font-style: italic;
    font-weight: 600;
    margin: 0;

    @media(max-width: 768px) {
        font-size: 0.75rem;
    }
`;

const BookingText = styled.p`
    color: #34494c;
    font-size: 1rem;
    margin: 0;

    @media(max-width: 768px) {
      font-size: 0.75rem;
  }
`;

const Button = styled.a`
    @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Poppins:wght@600&display=swap');

    background-color: #34494c;
    color: #fff;
    cursor: pointer;
    font-family: 'Poppins';
    font-size: 1rem;
    margin: 1rem 0 3rem 0;
    padding: 1rem;
    text-decoration: none;

    &:hover {
        background-color: #adb59b;
    }

    @media(max-width: 768px) {
        font-size: 0.75rem;
        margin: 0.5rem 0 1.5rem 0;
      }
`;

const Accommodations = () => {
  return (
    <Wrapper>
        <Header>Accommodations</Header>
        <DiscountWrapper>
          <TextBlock>For <GreenText>20% off</GreenText> the regular rate, you can stay right on the mountain (also where the reception is) at Sugarbush's
            <GreenText> Clay Brook Hotel</GreenText>
          </TextBlock>
          <SubText>The Clay Brook offers single rooms with 1 king bed, as well as 1, 2, and 3 bedroom conodos.</SubText>
          <SubText>Note that all rooms and condos at the Clay Brook require a<GreenSubText> 2 night minimum  </GreenSubText>stay.</SubText>
        </DiscountWrapper>
        <BookingText>To book online and have your 20% discount automatically applied, click the button below.</BookingText>
        <BookingText>You may also call
          <GreenText> (802) 583-6300 </GreenText>
          and mention
          <GreenText> Neuburger/Howard wedding </GreenText>
          to receive your discount.
        </BookingText>
        <SubText>** Note that in order to book a 3 bedroom condo you must call and make your reservation. Only single rooms, 1 and 2 bedroom condos are eligible to book online. **</SubText>
        <Button href="https://www.inntopia.travel/ecomm/package/packagebuilder/662777/en-us/?packageid=58715&startDate=2022-09-09&endDate=2022-09-11&adultcount=2&childCount=0&forceChoice=1&childAgeArray=&promocode=Neuburger-Howard" target="_blank">RESERVE CLAY BROOK HOTEL ONLINE</Button>
        <TextBlock>There are also a number of local inns and B&B's in the area.</TextBlock>
        <SubText>Note that many of the local accommodations will likely not be availble to book until 2022.</SubText>
        <Button href="https://www.sugarbush.com/plan/additional-lodging-directory/" target="_blank">LIST OF ADDITIONAL LODGING OPTIONS</Button>
    </Wrapper>
  );
}

export default Accommodations;
