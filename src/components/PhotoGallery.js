import React, { useState } from 'react'
import Gallery from 'react-photo-gallery'
import Lightbox from 'react-image-lightbox'
import "react-image-lightbox/style.css"
import styled from 'styled-components'
import PGLogoBlack from '../assets/PGLogoBlack.PNG'

const Wrapper = styled.div`
    margin: 0 2rem 3rem 2rem;

    > div > div > img {
        transition: 0.3s ease-out;

        &:hover {
            transform: scale(1.1);
            transition: 0.3s ease-out;
          }
    }
`;

const Logo = styled.img`
    cursor: pointer;
    width: 8rem;
`;

const CreditWrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-top: 3rem;
`;

const Header = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Poppins:wght@600&display=swap');

    color: #34494c;
    font-family: 'Poppins';
    font-size: 1rem;
`;

const PhotoGallery = () => {
    const [photoIndex, setPhotoIndex] = useState(0)
    const [isOpen, setIsOpen] = useState(false)

    const importAll = (r) => {
        return r.keys().map(r);
      }

    const imagePathMods = importAll(require.context('../assets/engagementPhotos', false, /\.(png|jpe?g|svg)$/))
    const images = []
    let width = 0
    let height = 0
    imagePathMods.forEach(mod => {
        if (mod.default.includes('h')) {
            width = 5
            height = 3.25
        } else {
            width = 3.375
            height = 5
        }
        images.push({width: width, height: height, src: mod.default})
    })

    const imagePaths = imagePathMods.map(m => m.default)

    const handleImageClick = (e) => {
        imagePaths.forEach(path => {
            if(e.target.src.includes(path)) {
                setPhotoIndex(imagePaths.indexOf(path))
            }
        })
        setIsOpen(true)
    }

    return (
        <Wrapper>
            <Gallery photos={images} onClick={(e) => handleImageClick(e)} />
            {isOpen &&
                <Lightbox
                    mainSrc={imagePaths[photoIndex]}
                    nextSrc={imagePaths[(photoIndex + 1) % imagePaths.length]}
                    prevSrc={imagePaths[(photoIndex + imagePaths.length - 1) % imagePaths.length]}
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() =>
                        setPhotoIndex((photoIndex + imagePaths.length - 1) % imagePaths.length)
                    }
                    onMoveNextRequest={() =>
                        setPhotoIndex((photoIndex + 1) % imagePaths.length)
                    }
                />
            }
            <CreditWrapper>
                <Header>photos by</Header>
                <Logo onClick={() => window.open('https://poppyandgild.com/', '_blank', 'noopener,noreferrer')} src={PGLogoBlack} />
            </CreditWrapper>
        </Wrapper>
    );
  }

  export default PhotoGallery;