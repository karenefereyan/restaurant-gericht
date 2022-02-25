import React from 'react';
import { images } from '../../constants';

const SubHeading = ( { title }) => (
  <div>
    <p className = "p__cormorant">{title}</p>
    <img src={images.spoon} alt="Spoon"  style={{marginBottom:'2rem'}}/>
  </div>
);

export default SubHeading;
