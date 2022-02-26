import React from 'react';
// import data from '../../constants';

import './MenuItem.css';

const MenuItem = ({ item : {title, tags, price}}) => (
  <div className='app__specialmenu-section'>
    <div className='app__specialmenu-section_head'>
        <div>
          <h3>{title}</h3>
          </div>
        <div className='app__specialmenu-section_head_dash'></div>
        <div>
          <p>{price}</p>
        </div>
    </div>
    <div className='app__specialmenu-section_tags'>
     <p className='p__opensans'>{tags}</p> 
      </div>
  </div>
);

export default MenuItem;
