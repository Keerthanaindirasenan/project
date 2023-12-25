import React, { useState } from 'react'
import './Navbar.css'
import Logo1 from '../Assets/Logo1.png'
import Cart_icon from '../Assets/Cart_icon.png'
import { Link } from 'react-router-dom'


const Navbar = () => {
    const[menu,setMenu]=useState("shop");
  
    return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={Logo1} height="100" width="100" alt="" />
        
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration: 'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}><Link style={{ textDecoration: 'none'}} to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}><Link style={{ textDecoration: 'none'}} to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link style={{ textDecoration: 'none'}} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={Cart_icon} height="40" width="30" alt="" /></Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
    )
}

export default Navbar