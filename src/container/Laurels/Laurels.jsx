import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';

import './Laurels.css';

const Laurels = () => (
  <div className='app__laurels app__wrapper section__padding'>

   <div className='app__laurels-content app__wrapper_info'>
      <SubHeading title = 'Awards and Recognition' />
      <h1 className='headtext__cormorant'>Our Laurels</h1>

      <div className="app__laurels-content_laurelContainer">
       
        <div className="app__laurel">
          <img src={images.award02} alt="Award 02" />
          <div className='app__laurel-content'>
              <h2>Bib Gourmond</h2>
              <h4 className='p__cormorant'>Lorem Ipsum Dolor Sit Amet, Consectetur.</h4>
          </div>
        </div>


        <div className="app__laurel">
          <img src={images.award01} alt="Award 02" />
          <div className='app__laurel-content'>
              <h2>Rising Star</h2>
              <h4 className='p__cormorant'>Lorem Ipsum Dolor Sit Amet, Consectetur.</h4>
          </div>
        </div>


        <div className="app__laurel">
          <img src={images.award05} alt="Award 02" />
          <div className='app__laurel-content'>
              <h2>AA Hospitality</h2>
              <h4 className='p__cormorant'>Lorem Ipsum Dolor Sit Amet, Consectetur.</h4>
          </div>
        </div>


        <div className="app__laurel">
          <img src={images.award03} alt="Award 02" />
          <div className='app__laurel-content'>
              <h2>Outstanding Chef</h2>
              <h4 className='p__cormorant'>Lorem Ipsum Dolor Sit Amet, Consectetur.</h4>
          </div>
        </div>



        
      </div>
 
  </div>

    <div className="app__laurels-img app__wrapper_img">
      <img src={images.laurels} alt="Our Laurels" />
    </div>
  </div>
);

export default Laurels;
