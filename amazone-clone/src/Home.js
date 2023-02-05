import React from "react";
import Product from "./Product";
import './Home.css'



function Home(){
    return(
        <div className="home">
            <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/img18/home/2022/Q3/Onsite/StoreFronts/2022Q3_HCT_Storefront_Hero_NewTraditional_D_1500x500_EN.jpg" alt="Create a lived-in, modern look Shop now"></img>
        
        <div className="home__row">
        <Product  id ="12321" title="The lean startup" price = {11.67} rating ={3} image="https://m.media-amazon.com/images/G/40/gno/sprites/nav-sprite-global-1x-hm-dsk-reorg._CB405931308_.png" />
            
        
        <Product  id ="12321" title="Meta Quest 2 — Advanced All-In-One Virtual Reality Headset — 128 GB" price = {76.7} rating ={5} image="https://m.media-amazon.com/images/I/618PlE1DM8L._SL1500_.jpg" />
            
        
        <Product  id ="12321" title="Nintendo Switch – OLED Model w/ White Joy-Con" price = {134.86} rating ={2} image="https://m.media-amazon.com/images/I/51yJ+OqktYL._SX385_.jpg" />
            
        </div>
        <div className="home__row">
        <Product  id ="12321" title="The lean startup" price = {11.67} rating ={3} image="https://m.media-amazon.com/images/G/40/gno/sprites/nav-sprite-global-1x-hm-dsk-reorg._CB405931308_.png" />
            
        
        <Product  id ="12321" title="Meta Quest 2 — Advanced All-In-One Virtual Reality Headset — 128 GB" price = {76.7} rating ={5} image="https://m.media-amazon.com/images/I/618PlE1DM8L._SL1500_.jpg" />
            
        
        <Product  id ="12321" title="Nintendo Switch – OLED Model w/ White Joy-Con" price = {134.86} rating ={2} image="https://m.media-amazon.com/images/I/51yJ+OqktYL._SX385_.jpg" />
        <Product  id ="12321" title="Nintendo Switch – OLED Model w/ White Joy-Con" price = {134.86} rating ={2} image="https://m.media-amazon.com/images/I/51yJ+OqktYL._SX385_.jpg" /> 
        </div>
        <div className="home__row">

        <Product  id ="12321" title="Nintendo Switch – OLED Model w/ White Joy-Con" price = {134.86} rating ={2} image="https://m.media-amazon.com/images/I/51yJ+OqktYL._SX385_.jpg" />
        <Product  id ="12321" title="Nintendo Switch – OLED Model w/ White Joy-Con" price = {134.86} rating ={2} image="https://m.media-amazon.com/images/I/51yJ+OqktYL._SX385_.jpg" />
        </div>
        </div>


        
    )
}
export default Home