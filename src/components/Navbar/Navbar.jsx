import React, { useState } from 'react';
import { images } from "../../constants";
import { GiHamburgerMenu} from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import './Navbar.css';


const Navbar = () => {

  const [toggleMenu, settoggleMenu] = useState(false);

  return (


      <nav className='app__navbar'>

          <div className='app__navbar-logo'>
            <img src={images.gericht} alt="Logo" />
          </div>

          <ul className='app__navbar-links'>
              <li className='p__opensans'>
                  <a href="#home">Home</a>
              </li>
              <li className='p__opensans'>
                  <a href="#aboutus">About</a>
              </li>
              <li className='p__opensans'>
                  <a href="#home">Menu</a>
              </li>
              <li className='p__opensans'>
                  <a href="#home">Awards</a>
              </li>
              <li className='p__opensans'>
                  <a href="#home">Contact</a>
              </li>
          </ul>

          <div className='app__navbar-login'>
            <a className='p__opensans' href="#login">Log In / Register</a>
            <div className='app__navbar-login_dash'></div>
            <a className='p__opensans' href="#login">Book Table</a>
          </div>


          <div className='app__navbar-smallscreens'>

              <GiHamburgerMenu className= 'app__navbar-smallscreens_open' onClick = {() => {settoggleMenu(true)}} /> 

              {/* Only show block when toggle menu exists, ie when the hamburger shows,
              which only happens on mobile and tablet */}

                  {toggleMenu && (
                        <div className='app__navbar-overlay flex__center slide-bottom'>
                            <MdOutlineRestaurantMenu  className='app__navbar-smallscreens_close' onClick = {() => {settoggleMenu(false)}}/>
                            <ul className='app__navbar-smallscreens_links'>
                                <li className='p__opensans'>
                                    <a href="#home">Home</a>
                                </li>
                                <li className='p__opensans'>
                                    <a href="#aboutus">About</a>
                                </li>
                                <li className='p__opensans'>
                                    <a href="#home">Menu</a>
                                </li>
                                <li className='p__opensans'>
                                    <a href="#home">Awards</a>
                                </li>
                                <li className='p__opensans'>
                                    <a href="#home">Contact</a>
                                </li>
                            </ul>
                    </div>
                    )
                  }
          </div>

      </nav>

  )
}



export default Navbar;











// import React from 'react';
// import { images } from '../../constants';
// import { GiHamburgerMenu} from 'react-icons/gi';
// import { MdOutlineRestaurantMenu } from 'react-icons/md';

// import './Navbar.css';

// const Navbar = () => {

//   const [toggleMenu, setToggleMenu] = React.useState(false);


//     return (
//       <nav className = "app__navbar" id = "header">
    
//       <div className = "app__navbar-logo ">
//         <img src={images.gericht} alt="Gericht" />
//       </div>

//       <ul className="app__navbar-links">
//       <li className='p__opensans'>
//             <a href="#home">Home</a>
//           </li>
//           <li className='p__opensans'>
//             <a href="#about">About</a>
//           </li>
//           <li className='p__opensans'>
//             <a href="#menu">Menu</a>
//           </li>
//           <li className='p__opensans'>
//             <a href="#awards">Awards</a>
//           </li>
//           <li className='p__opensans'>
//             <a href="#contact">Contact</a>
//           </li>
//       </ul>

//       <div className='app__navbar-login'>
//           <a className='p__opensans' href='#home'>
//               Log In / Register
//           </a>
//           <div className='app__navbar-login_dash'>
//           </div>
//           <a className='p__opensans' href='#home'>
//             Book Table
//           </a>
//       </div>


//       <div className="app__navbar-smallscreens" >
//         <GiHamburgerMenu className ='overlay__open' onClick={() => setToggleMenu(true)} />
//         { toggleMenu && (
//           <div className = 'app__navbar-smallscreens_overlay  '>
//               <MdOutlineRestaurantMenu className = 'overlay__close' onClick = {() => setToggleMenu(false)}/>
//               <ul className="app__navbar-smallscreens-links">
//                 <li className='p__opensans'>
//                   <a href="#home">Home</a>
//                 </li>
//                 <li className='p__opensans'>
//                   <a href="#about">About</a>
//                 </li>
//                 <li className='p__opensans'>
//                   <a href="#menu">Menu</a>
//                 </li>
//                 <li className='p__opensans'>
//                   <a href="#awards">Awards</a>
//                 </li>
//                 <li className='p__opensans'>
//                   <a href="#contact">Contact</a>
//                 </li>
//           </ul>
//             </div>
//         )}
        

//       </div>
//   </nav>

//     )  
// }
 


// export default Navbar;
