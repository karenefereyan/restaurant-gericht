import React from 'react';
import { images } from "../../constants";

import { SubHeading } from '../../components';


import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id = 'home'>

    <div className='app__header-content app__wrapper_info'>
     <SubHeading title = "Chase the New Flavour"/>
      <h1 className='headtext_heading'>The Key To Fine Dining</h1>
      <p className='p__opensans'>Sit Tellus Lobortis Sed Senectus Vivamus Molestie. Condimentum Volutpat Morbi Facilisis Quam Scelerisque Sapien. Et, Penatibus Aliquam Amet Tellus</p>
      <button type ="button" className='custom__button'>Explore Menu</button>
    </div>

    <div className='app__header-img app__wrapper_img'>
      <img src={images.welcome} alt="Food Welcome" />
    </div>
  </div>
);

export default Header;
