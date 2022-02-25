



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
//           <div className = 'app__navbar-smallscreens_overlay  flex__center slide-bottom'>
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
