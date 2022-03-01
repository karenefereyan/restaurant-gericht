import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';

import './FindUs.css'

const FindUs = () => (
  <div className='app__findUs app__bg section__padding app__wrapper'>
    <div className='app__findUs-content app__wrapper_info'>
        <SubHeading title = 'Contact' />
        <h1 className='headtext__cormorant'>Find Us</h1>
        <p className='p__opensans'>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
        <h3 className='opening-hours'>Opening Hours</h3>
        <div className='opening-hours_details'>
          <p>Mon - Fri: 10:00 Am - 02:00 Am</p>
          <p>Sat - Sun: 10:00 Am - 03:00 Am</p>
        </div>
        <button className='custom__button'>Visit Us</button>
    </div>
    <div className='app__findUs-images app__wrapper_img '>
      <img src={images.findus} alt="" />
    </div>
  </div>
);

export default FindUs;
