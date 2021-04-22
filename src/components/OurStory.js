import React, { useState } from 'react'
import styled from 'styled-components'
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
} from '@material-ui/lab';
import HeartIcon from '../assets/HeartIcon.png';
import Aspen from '../assets/aspen.jpg';
import Scooby from '../assets/scooby.jpg';
import Skiing from '../assets/skiing.jpg';
import OB from '../assets/oskar-blues.jpg';
import Stanley from '../assets/stanley.jpg';
import Telluride from '../assets/telluride.jpg';
import Fourteener from '../assets/fourteener.jpg';
import Engaged from '../assets/engaged.jpg';

const Subheader = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Poppins:wght@600&display=swap');

    font-family: 'Poppins';
    font-size: 1.5rem;
    font-style: italic;
    margin: 2rem 0;
    text-align: center;

    @media(max-width: 768px) {
        font-size: 1rem;
        margin: 0 1rem 2rem 1rem;
    }
`;

const StyledTimeline = styled(Timeline)`
    margin-bottom: 4rem;
`;

const StyledTimelineConnector = styled(TimelineConnector)`
    background-color: black !important;
`;

const DotIcon = styled.img`
    height: 1.5rem;
    width: 1.5rem;
`;

const StyledTimelineContent = styled(TimelineContent)`
    cursor: pointer;
`;

const Overlay = styled.div`
    background-color: white;
    bottom: 0;
    display: block;
    height: 100%;
    left: 0;
    opacity: 0.8;
    position: fixed;
    right: 0;
    top: 0;
    width: 100%;
    z-index: 2;
`;

const Modal = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Poppins:wght@600&display=swap');

    background-color: white;
    border: 2px solid #34494c;
    display: flex;
    flex-direction: row;
    font-family: 'Poppins';
    left: 20%;
    padding: 2rem;
    position: fixed;
    top: 8rem;
    width: 50%;
    z-index: 3;

    @media(max-width: 768px) {
        align-items: center;
        flex-direction: column;
        left: 0;
        margin: 1rem;
        padding: 1rem;
        top: 2rem;
        width: auto;
    }
`;

const Date = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Poppins:wght@600&display=swap');

    font-family: 'Poppins';
    font-size: 1.5rem;
    margin: 0;

    @media(max-width: 768px) {
        font-size: 1rem;
    }

    &:hover {
        color: #34494c;
    }
`;

const Title = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Poppins:wght@600&display=swap');

    font-family: 'Poppins';
    font-size: 1rem;
    margin: 0.5rem 0 2rem;

    @media(max-width: 768px) {
        font-size: 0.75rem;
    }
`;

const DetailImage = styled.img`
    height: 15rem;
    margin-right: 2rem;

    @media(max-width: 768px) {
        margin-right: 0;
    }
`;

const DetailDate = styled.p`
    color: #34494c;
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 0;
    text-align: center;
`;

const DetailTitle = styled.p`
    font-size: 1.25rem;
    font-weight: bold;
    margin-top: 0;
    text-align: center;
`;


const DetailDescription = styled.p`
    text-align: center;
`;

const CloseIcon = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Poppins:wght@600&display=swap');

    color: #34494c;
    cursor: pointer;
    font-family: 'Poppins';
    font-size: 2.5rem;
    position: absolute;
    right: 1rem;
    top: -2.5rem;

    @media(max-width: 768px) {
        right: 0.5rem;
    }

    &:hover {
        color: #adb59b;
    }
`;

const OurStory = () => {
    const dates = [
        {date: 'July, 2018', title: 'We first met! (Just as friends)', description: 'In July of 2018, we met through some mutual friends. Even though all of our interactions were in groups, we always seemed to find each other to talk 1 on 1. ', imagePath: Aspen},
        {date: 'October, 2018', title: 'We began officially dating!', description: 'After a Halloween party and some epic couples costumes, Bryan officially asked Julie to be his girlfriend to which she replied "I thought I already was..."', imagePath: Scooby},
        {date: 'December, 2018', title: 'We went skiing together for the first time!', description: 'Growing up with frequent family vacations to Stowe, VT skiing has always been a passion for Bryan. He decided to share that passion with Julie for the first time at the end of 2018 and it soon became one of their favorite things to do together in the winter.', imagePath: Skiing},
        {date: 'June 2019', title: 'We moved in together!', description: 'Our first apartment together wasn\'t the biggest or newest pad on the block, but it sure was the perfect place for us to start building a home together.', imagePath: OB},
        {date: 'August 2019', title: 'We got our Stanley!', description: 'Labor Day weekend 2019 soon became one of the most memorable as we packed up the car with plenty of chew toys and dog treats and drove to east Kansas to pick up and bring home our golden boy!', imagePath: Stanley},
        {date: 'January 2020', title: 'We went to Telluride for the first time!', description: 'In the first week of 2020, we went to Telluride, CO for a ski trip and it instantly became one of our favorite towns to visit. Whether it\'s camping in the summer or skiing in the winter, Telluride never disappoints with beautiful views, great brews, and the best company.', imagePath: Telluride},
        {date: 'June 2020', title: 'We hiked our first (4!) 14ers together!', description: 'Though we had each hiked 14ers before, on June 20th 2020 we set out to hike our first 14er (peaks in CO that summit abover 14,000ft elevation) together. That day we ended up summiting 4 peaks and later that summer we added 2 more to the completed list. 6 down, a lot to go!', imagePath: Fourteener},
        {date: 'December 2020', title: 'We got engaged!', description: 'It was a Christmas morning that will always be remembered. Bryan hid the empty ring box inside his Christmas present to Julie. When she opened the gift and found the empty box, Bryan immediatly got down on one knee and pulled the actual ring out of his pocket.', imagePath: Engaged}
    ]

    const showDetails = (imageUrl, date, title, description) => {
        setDetails({
            image: imageUrl,
            date: date,
            title: title,
            description: description
        })
        setShowModal(true)
    }

    const [showModal, setShowModal] = useState(false)
    const [details, setDetails] = useState()

    return (
        <>
            <Subheader>Click on each date to learn a little  about why it's so speacial to the couple!</Subheader>
            <StyledTimeline align="alternate">
                {dates.map((event, index) => 
                    <TimelineItem key={event.date}>
                        <TimelineSeparator>
                        <DotIcon src={HeartIcon} />
                        <StyledTimelineConnector />
                        </TimelineSeparator>
                        <StyledTimelineContent>
                            <Date onClick={() => showDetails(event.imagePath, event.date, event.title, event.description)}>{event.date}</Date>
                            <Title onClick={() => showDetails(event.imagePath, event.date, event.title, event.description)}>{event.title}</Title>
                        </StyledTimelineContent>
                    </TimelineItem>
                )}
                {showModal &&
                    <>
                        <Overlay onClick={() => setShowModal(false)}/>
                        <Modal>
                            <CloseIcon onClick={() => setShowModal(false)}>X</CloseIcon>
                            <DetailImage src={details.image} />
                            <div>
                                <DetailDate>{details.date}</DetailDate>
                                <DetailTitle>{details.title}</DetailTitle>
                                <DetailDescription>{details.description}</DetailDescription>
                            </div>
                        </Modal>
                    </>
                }
            </StyledTimeline>
        </>
    );
  }
  
  export default OurStory;
  