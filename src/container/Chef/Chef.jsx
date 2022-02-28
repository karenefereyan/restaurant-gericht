import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';

import './Chef.css';

const Chef = () => (
  <div className='app__chef section__padding app__bg app__wrapper'>

    <div className='app__wrapper_img'>
      <img src={ images.chef } alt="Chef" />
    </div>

    <div className='app__chef-content app__wrapper_info'>
        <SubHeading title = 'Chefs Word' />
        <h1 className='headtext__cormorant'>What We Believe In</h1>
        <div>
              <div className='app__chef-content_quote'>
                    <img src={images.quote} alt="Quote" />
                    <p className='p__opensans'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Auctor Sit .</p>
              </div>
              <p className='p__opensans'>Auctor Sit Iaculis In Arcu. Vulputate Nulla Lobortis Mauris Eget Sit. Nulla Scelerisque Scelerisque Congue Ac Consequat, Aliquam Molestie Lectus Eu. Congue Iaculis Integer Curabitur Semper Sit Nunc.</p>

              <div className='app__chef-content_details'>
                <h4>Kevin Luo</h4>
                <p className='p__opensans'>Chef & Founder</p>
              </div>

              <img src={images.sign} className ='chef-signature' alt="Signature" />

          </div>

    </div>
  </div>
);

export default Chef;
