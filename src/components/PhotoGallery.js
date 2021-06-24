import React, { useState } from 'react'
import Gallery from 'react-photo-gallery'
import Lightbox from 'react-image-lightbox'
import "react-image-lightbox/style.css"

const PhotoGallery = () => {
    const [photoIndex, setPhotoIndex] = useState(0)
    const [isOpen, setIsOpen] = useState(false)

    const importAll = (r) => {
        return r.keys().map(r);
      }

    const imagePathMods = importAll(require.context('../../src/assets/engagementPhotos', false, /\.(png|jpe?g|svg)$/))
    const images = []
    let width = 0
    let height = 0
    imagePathMods.forEach(mod => {
        if (mod.default.includes('h')) {
            width = 5
            height = 3.25
        } else {
            width = 3.5
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
        <div>
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
        </div>
    );
  }

  export default PhotoGallery;