import React, { useRef} from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort} from 'react-icons/bs';

import './Gallery.css';

const galleryImages = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04
];

const Gallery = () => {

  const imageRef = useRef(null);



  const handleScroll = (direction)=> {

    const { current } = imageRef;
      if(direction === 'left'){
        current.scrollLeft -= 300;
      }
      else {
        current.scrollLeft += 300;
      }
  }



  return  (
    <div className='app__gallery section__padding app__wrapper'>
      
      {/* Content */}
      <div className="app__gallery-content app__wrapper_info">
        <SubHeading title = 'Instagram' />
        <div className="app__gallery-content_info">
           <h1 className='headtext__cormorant'>Photo Gallery</h1>
           <p className='p__opensans'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Volutpat Mattis Ipsum Turpis Elit Elit Scelerisque Egestas Mu.</p>
        </div>
        
        <button type="button" className='custom__button'>View More</button>
      </div>

  
    {/* Image Container */}

    <div className='app__gallery-images'>
      
      <div className='app__gallery-content_image-container' ref = {imageRef}>
        {
          galleryImages.map((image, index) => 
          (
            <div className='app__gallery-card flex__center' key={index}>
                <img src={image} alt="Gallery" />
                <div className='app__icon-overlay flex__center'>
                    <BsInstagram fontSize={27} color='#fff' className='app__icon'/>
                </div>
              
            </div>
          )
          )
        }
      </div>

      <div className='app__gallery-content_buttons'>
        <BsArrowLeftShort className='app__gallery-button' onClick = { () => handleScroll('left')} />
        <BsArrowRightShort className='app__gallery-button' onClick = { () => handleScroll('right')} />
      </div>

    </div>

    </div>
  )
};


 
export default Gallery;
