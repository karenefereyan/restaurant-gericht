import React from 'react';
import { images } from '../../constants';

import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus section__padding app__bg' id = "aboutus">
        <div className='app__aboutus-overlay'>
          <img src={images.G} alt="G" />
        </div>
        

        <div className='app__aboutus-content'>

            <div className="app__aboutus-content_about">
                <h1 className='headtext__cormorant'>About Us</h1>
                <img src={images.spoon} alt="Spoon" />
                <p className='p__opensans'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis Pharetra Adipiscing Ultrices Vulputate Posuere Tristique. In Sed Odio Nec Aliquet Eu Proin Mauris Et.</p>
                <button className='custom__button'>Know More</button>
            </div>
            
            <div className='app__aboutus-content_knife flex__center'>
              <img src={images.knife} alt="Knife" />
            </div>
            
            <div className='app__aboutus-content_history'>
                <h1 className='headtext__cormorant'>Our History</h1>
                <img src={images.spoon} alt="Spoon" />
                <p className='p__opensans'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis Pharetra Adipiscing Ultrices Vulputate Posuere Tristique. In Sed Odio Nec Aliquet Eu Proin Mauris Et.</p>
                <button className='custom__button'>Know More</button>
            </div>

        </div>
  </div>
);

export default AboutUs;
