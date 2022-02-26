import React from 'react';
import { SubHeading }  from '../../components';
import { data, images }  from '../../constants';

import { MenuItem  } from '../../components';

import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialmenu section__padding'>

      <div className='app__specialmenu-intro'>
          <SubHeading title = "Menu that fits your palat" />
          <h1 className='headtext__cormorant'>Today's Special</h1>
      </div>

      <div className='app__specialmenu-content'>

            <div className='app__specialmenu-content_wines'>
                <h1 className='specialmenu-content_heading'>Wine & Beer</h1>
                {
                  data.wines.map((wine) => (
                    <MenuItem item = {wine} />
                  ))
                }
            </div>

            <div className = "app__specialmenu-content_image">
              <img src={images.menu} alt="" />
            </div>

            <div className='app__specialmenu-content_cocktails'>
                <h1 className='specialmenu-content_heading'>Cocktails</h1>
                {
                  data.cocktails.map((cocktail) => (
                    <MenuItem item = {cocktail} />
                  ))
                }

            </div>
      </div>

      <div className='app__specialmenu-content_button'>
              <button type="button" className='custom__button'>View More</button>
      </div>
  </div>
);

export default SpecialMenu;
