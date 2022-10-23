import React, { useState } from 'react'
import './navbar.scss';
import { FaSearch } from "react-icons/fa"

const Navbar = () => {

const [isLogin,setIsLogin]=useState(false);


  return (
    <div className='navbar'>
        <div className='left'>

            <div className='logo'>
            <h2>𝔅𝔯𝔞𝔦𝔫𝔢𝔯𝔶</h2>
            </div>
            <div className='searchbar'>

              <input type="text" placeholder='Search'/>
              <button><FaSearch/></button>
            </div>



        </div>
        <div className='right'>

          {!isLogin?(
             <div className='login_signup'>
            <button>LOGIN</button>
            <button className='signup_btn'>SIGNUP</button>
          </div>) : 
          (<div>user is not login</div>
          )}

         

 

        </div>

    </div>
  )
}
export default Navbar;
