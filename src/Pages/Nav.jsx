import React from "react";
import "../App.css"
const Nav=({setSearch})=>{
    return (
        <><nav>
      <h3>Flip.com</h3>
      <input className="input" onChange={(e)=>{setSearch(e.target.value)}} name="text" placeholder="Search for products and more..."  type="search"/>
      <div className="log">
        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg" alt="" /><p>Login</p>
      </div>
      <div className="log">
        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg" alt="" /><p>Cart</p>
      </div>
      <div className="log">
        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_3verticalDots-ea7819.svg" alt="" />
      </div>
    </nav>
    </>
    )
}

export default Nav;